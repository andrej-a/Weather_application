import { call, put, takeEvery } from 'redux-saga/effects';

import getCitiesList from '@/api/getCitiesList';
import ICity from '@/types/ICitiesList';
import IPayload from '@/types/IPayload';
import showAlert from '@/utils/showAlert';

import { setCitiesToCache } from '../slices/citiesCache';
import {
    failureFetchCityList,
    fetchCityList,
    setCitiesList,
    startFetch,
} from '../slices/citiesList';

function* citiesWorker({ payload }: IPayload<string>) {
    yield put(fetchCityList());
    try {
        const citiesList: ICity[] = yield call(() => getCitiesList(payload));
        yield put(setCitiesList(citiesList));
        yield put(setCitiesToCache(citiesList));
    } catch (error) {
        yield put(failureFetchCityList());
        showAlert(error.message);
    }
}

export function* citiesWatcher() {
    yield takeEvery(startFetch, citiesWorker);
}
