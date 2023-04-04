import { call, debounce, put, select } from 'redux-saga/effects';

import constants, { IPayload, numberConstants } from '@/types/constants';
import IDailyWeather from '@/types/IDailyWeather';
import filteredHourlyWeatherAccordingToCurrentTime from '@/utils/filterHourlyWeatherAccordingToCurrentTime';

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
import { IMainInitialState } from '../slices/main/types';
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
        const { targetCity }: IInitialCitiesState = yield select(citySelector);
        yield put(startDailyWeatherFetch(targetCity));
    }
}

function* hourlyWeatherCache({ payload }: IPayload<string>) {
    const cache: IDailyWeather[] = yield select(state => {
        return filteredWeatherCache(state, payload);
    });
    if (cache.length) {
        const filteredHourlyWeather: IDailyWeather[] =
            yield filteredHourlyWeatherAccordingToCurrentTime(cache);
        yield put(setHourlyWeatherList(filteredHourlyWeather));
    } else {
        const { targetCity }: IInitialCitiesState = yield select(citySelector);
        yield put(startHourlyWeatherFetch(targetCity));
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

export function* weatherCacheWatcher() {
    yield debounce(REQUEST_DEBOUNCE, checkWeatherCache, weatherCachWorker);
}
