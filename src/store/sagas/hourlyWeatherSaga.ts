import { call, put, select, takeLatest } from 'redux-saga/effects';

import getHourlyWeatherInfo from '@/api/getHourlyWeatherInfo';
import { IPayload } from '@/types/constants';
import ICity from '@/types/ICitiesList';
import IDailyWeather, { IWeatherCache } from '@/types/IDailyWeather';
import filteredHourlyWeatherAccordingToCurrentTime from '@/utils/filterHourlyWeatherAccordingToCurrentTime';
import showAlert from '@/utils/showAlert';

import { weatherCacheSelector } from '../selectors/weatherCacheSelector';
import {
    hourlyWeatherFetch,
    hourlyWeatherFetchFailure,
    setHourlyWeatherList,
    startHourlyWeatherFetch,
} from '../slices/hourlyWeatherList';
import { setWeatherToCache } from '../slices/weatherCache';

export function* hourlyWeatherWorker({ payload }: IPayload<ICity>) {
    try {
        yield put(hourlyWeatherFetch());
        const hourlyWeatherList: IDailyWeather[] = yield call(
            getHourlyWeatherInfo,
            payload,
        );
        const filteredHourlyWeather: IDailyWeather[] =
            yield filteredHourlyWeatherAccordingToCurrentTime(
                hourlyWeatherList,
            );
        yield put(setHourlyWeatherList(filteredHourlyWeather));

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
                timeOfTheLastUpdateOfHourlyWeather: new Date().getTime(),
                hourlyWeatherList,
            };

            yield put(setWeatherToCache(weatherCacheCopy));
        } else {
            yield put(
                setWeatherToCache([
                    ...weatherCache,
                    {
                        city: `${payload.name}-${payload.country}`,
                        timeOfTheLastUpdateOfDailyWeather: 0,
                        timeOfTheLastUpdateOfHourlyWeather:
                            new Date().getTime(),
                        dailyWeatherList: [],
                        hourlyWeatherList,
                    },
                ]),
            );
        }
    } catch (error) {
        showAlert(error.message);
        yield put(hourlyWeatherFetchFailure());
    }
}

export function* hourlyWeatherWatcher() {
    yield takeLatest(startHourlyWeatherFetch, hourlyWeatherWorker);
}
