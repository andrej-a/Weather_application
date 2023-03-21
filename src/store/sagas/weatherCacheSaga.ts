import { call, debounce, put, select } from 'redux-saga/effects';

import { numberConstants } from '@/types/constants';
import IDailyWeather from '@/types/IDailyWeather';
import IPayload from '@/types/IPayload';

import citySelector from '../selectors/citySelector';
import filteredWeatherCache from '../selectors/weatherCacheSelector';
import { IInitialCitiesState } from '../slices/citiesList/initialState';
import {
    setDailyWeatherList,
    startDailyWeatherFetch,
} from '../slices/dailyWeatherList';
import { checkWeatherCache } from '../slices/weatherCache';

const { REQUEST_DEBOUNCE } = numberConstants;

function* weatherCachWorker({ payload }: IPayload<string>) {
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

export function* weatherCachWatcher() {
    yield debounce(REQUEST_DEBOUNCE, checkWeatherCache, weatherCachWorker);
}
