import { call, debounce, put } from 'redux-saga/effects';

import getDailyWeatherInfo from '@/api/getDailyWeatherInfo';
import { numberConstants } from '@/types/constants';
import ICity from '@/types/ICitiesList';
import IDailyWeather from '@/types/IDailyWeather';
import IPayload from '@/types/IPayload';

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
    } catch (error) {
        console.log(error, 'ERROR');
        yield put(failureDailyWeatherFetch());
    }
}

export function* dailyWeatherWatcher() {
    yield debounce(
        REQUEST_DEBOUNCE,
        startDailyWeatherFetch,
        dailyWeatherWorker,
    );
}
