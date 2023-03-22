import { call, debounce, put, select } from 'redux-saga/effects';

import getHourlyWeatherInfo from '@/api/getHourlyWeatherInfo';
import { numberConstants } from '@/types/constants';
import ICity from '@/types/ICitiesList';
import IDailyWeather from '@/types/IDailyWeather';
import IPayload from '@/types/IPayload';
import IWeatherCache from '@/types/IWeatherCache';

import { weatherCacheSelector } from '../selectors/weatherCacheSelector';
import {
    hourlyWeatherFetch,
    hourlyWeatherFetchFailure,
    setHourlyWeatherList,
    startHourlyWeatherFetch,
} from '../slices/hourlyWeatherList';
import { setWeatherToCache } from '../slices/weatherCache';

const { REQUEST_DEBOUNCE } = numberConstants;

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
            el => el.city === `${payload.name}-${payload.country}`,
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
        console.log('ERROR', error);
        yield put(hourlyWeatherFetchFailure());
    }
}

export function* hourlyWeatherWatcher() {
    yield debounce(
        REQUEST_DEBOUNCE,
        startHourlyWeatherFetch,
        hourlyWeatherWorker,
    );
}
