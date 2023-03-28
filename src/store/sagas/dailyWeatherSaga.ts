import { call, put, select, takeLatest } from 'redux-saga/effects';

import getDailyWeatherInfo from '@/api/getDailyWeatherInfo';
import { setWeatherToCache } from '@/store/slices/weatherCache';
import ICity from '@/types/ICitiesList';
import IDailyWeather from '@/types/IDailyWeather';
import IPayload from '@/types/IPayload';
import IWeatherCache from '@/types/IWeatherCache';
import showAlert from '@/utils/showAlert';

import { weatherCacheSelector } from '../selectors/weatherCacheSelector';
import {
    failureDailyWeatherFetch,
    fetchDailyWeather,
    setDailyWeatherList,
    startDailyWeatherFetch,
} from '../slices/dailyWeatherList';

function* dailyWeatherWorker({ payload }: IPayload<ICity>) {
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
            yield put(
                setWeatherToCache({
                    ...weatherCache[index],
                    city: `${payload.name}-${payload.country}`,
                    timeOfTheLastUpdateOfDailyWeather: new Date().getTime(),
                    dailyWeatherList: weatherList,
                }),
            );
        } else {
            yield put(
                setWeatherToCache({
                    city: `${payload.name}-${payload.country}`,
                    timeOfTheLastUpdateOfDailyWeather: new Date().getTime(),
                    timeOfTheLastUpdateOfHourlyWeather: 0,
                    dailyWeatherList: weatherList,
                    hourlyWeatherList: [],
                }),
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
