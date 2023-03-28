import { call, put, select, takeLatest } from 'redux-saga/effects';

import getHourlyWeatherInfo from '@/api/getHourlyWeatherInfo';
import ICity from '@/types/ICitiesList';
import IDailyWeather from '@/types/IDailyWeather';
import IPayload from '@/types/IPayload';
import IWeatherCache from '@/types/IWeatherCache';
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
        yield put(setHourlyWeatherList(hourlyWeatherList));

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
                    timeOfTheLastUpdateOfHourlyWeather: new Date().getTime(),
                    hourlyWeatherList,
                }),
            );
        } else {
            yield put(
                setWeatherToCache({
                    city: `${payload.name}-${payload.country}`,
                    timeOfTheLastUpdateOfDailyWeather: 0,
                    timeOfTheLastUpdateOfHourlyWeather: new Date().getTime(),
                    dailyWeatherList: [],
                    hourlyWeatherList,
                }),
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
