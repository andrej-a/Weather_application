import { call, debounce, put, select, takeLatest } from 'redux-saga/effects';

import getDailyWeatherInfo from '@/api/getDailyWeatherInfo';
import { setWeatherToCache } from '@/store/slices/weatherCache';
import { numberConstants } from '@/types/constants';
import ICity from '@/types/ICitiesList';
import IDailyWeather from '@/types/IDailyWeather';
import IPayload from '@/types/IPayload';
import IWeatherCache from '@/types/IWeatherCache';

import { weatherCacheSelector } from '../selectors/weatherCacheSelector';
import {
    failureDailyWeatherFetch,
    fetchDailyWeather,
    setDailyWeatherList,
    startDailyWeatherFetch,
} from '../slices/dailyWeatherList';

const { REQUEST_DEBOUNCE } = numberConstants;

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
            el => el.city === `${payload.name}-${payload.country}`,
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
        console.log(error, 'ERROR');
        yield put(failureDailyWeatherFetch());
    }
}

export function* dailyWeatherWatcher() {
    yield takeLatest(startDailyWeatherFetch, dailyWeatherWorker);
}
