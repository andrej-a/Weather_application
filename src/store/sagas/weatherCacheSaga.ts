import { call, debounce, put, select } from 'redux-saga/effects';

import constants, { numberConstants } from '@/types/constants';
import IDailyWeather from '@/types/IDailyWeather';
import IPayload from '@/types/IPayload';

import citySelector from '../selectors/citySelector';
import mainSelector from '../selectors/mainSelector';
import filteredWeatherCache from '../selectors/weatherCacheSelector';
import { IInitialCitiesState } from '../slices/citiesList/initialState';
import {
    setDailyWeatherList,
    startDailyWeatherFetch,
} from '../slices/dailyWeatherList';
import {
    setHourlyWeatherList,
    startHourlyWeatherFetch,
} from '../slices/hourlyWeatherList';
import { IMainInitialState } from '../slices/main/initialState';
import { checkWeatherCache } from '../slices/weatherCache';

const { REQUEST_DEBOUNCE } = numberConstants;
const { DAILY_TYPE_OF_THE_WEATHER } = constants;

function* dailyWeatherCache({ payload }: IPayload<string>) {
    const cache: IDailyWeather[] = yield select(state => {
        return filteredWeatherCache(state, payload);
    });
    if (cache.length) {
        yield put(setDailyWeatherList(cache));
    } else {
        const citiesState: IInitialCitiesState = yield select(citySelector);
        yield put(startDailyWeatherFetch(citiesState.targetCity));
    }
}

function* hourlyWeatherCache({ payload }: IPayload<string>) {
    const cache: IDailyWeather[] = yield select(state => {
        return filteredWeatherCache(state, payload);
    });
    if (cache.length) {
        yield put(setHourlyWeatherList(cache));
    } else {
        const citiesState: IInitialCitiesState = yield select(citySelector);
        yield put(startHourlyWeatherFetch(citiesState.targetCity));
    }
}

function* weatherCachWorker({ payload }: IPayload<string>) {
    const { typeOfTheWeather }: IMainInitialState = yield select(mainSelector);

    if (typeOfTheWeather === DAILY_TYPE_OF_THE_WEATHER) {
        yield call(dailyWeatherCache, { payload });
    } else {
        yield call(hourlyWeatherCache, { payload });
    }
}

export function* weatherCachWatcher() {
    yield debounce(REQUEST_DEBOUNCE, checkWeatherCache, weatherCachWorker);
}
