import { call, put, select, takeLatest } from 'redux-saga/effects';

import getDailyWeatherInfo from '@/api/getDailyWeatherInfo';
import { setWeatherToCache } from '@/store/slices/weatherCache';
import { IPayload } from '@/types/constants';
import ICity from '@/types/ICitiesList';
import IDailyWeather, { IWeatherCache } from '@/types/IDailyWeather';
import showAlert from '@/utils/showAlert';

import { weatherCacheSelector } from '../selectors/weatherCacheSelector';
import {
    failureDailyWeatherFetch,
    fetchDailyWeather,
    setDailyWeatherList,
    startDailyWeatherFetch,
} from '../slices/dailyWeatherList';

export function* dailyWeatherWorker({ payload }: IPayload<ICity>) {
    try {
        yield put(fetchDailyWeather());
        const weatherList: IDailyWeather[] = yield call(
            getDailyWeatherInfo,
            payload,
        );
        yield put(setDailyWeatherList(weatherList));

        const weatherCache: IWeatherCache[] = yield select(
            weatherCacheSelector,
        );
        const index: number = yield weatherCache.findIndex(
            ({ city }) => city === `${payload.name}-${payload.country}`,
        );

        if (index !== -1) {
            const weatherCacheCopy = JSON.parse(JSON.stringify(weatherCache));
            weatherCacheCopy[index] = {
                ...weatherCacheCopy[index],
                city: `${payload.name}-${payload.country}`,
                timeOfTheLastUpdateOfDailyWeather: new Date().getTime(),
                dailyWeatherList: weatherList,
            };
            yield put(setWeatherToCache(weatherCacheCopy));
        } else {
            yield put(
                setWeatherToCache([
                    ...weatherCache,
                    {
                        city: `${payload.name}-${payload.country}`,
                        timeOfTheLastUpdateOfDailyWeather: new Date().getTime(),
                        timeOfTheLastUpdateOfHourlyWeather: 0,
                        dailyWeatherList: weatherList,
                        hourlyWeatherList: [],
                    },
                ]),
            );
        }
    } catch (error) {
        yield put(failureDailyWeatherFetch());
        showAlert(error.message);
    }
}

export function* dailyWeatherWatcher() {
    yield takeLatest(startDailyWeatherFetch, dailyWeatherWorker);
}
