import { debounce, put, select } from 'redux-saga/effects';

import { IPayload, numberConstants } from '@/types/constants';
import ICity from '@/types/ICitiesList';

import filteredCitiesCache from '../selectors/cacheSelector';
import { checkCache } from '../slices/citiesCache';
import { setCitiesList, startFetch } from '../slices/citiesList';

const { REQUEST_DEBOUNCE } = numberConstants;

export function* citiesCachWorker({ payload }: IPayload<string>) {
    const cache: ICity[] = yield select(filteredCitiesCache, payload);
    if (cache.length) {
        yield put(setCitiesList(cache));
    } else {
        yield put(startFetch(payload));
    }
}

export function* citiesCacheWatcher() {
    yield debounce(REQUEST_DEBOUNCE, checkCache, citiesCachWorker);
}
