import { spawn } from 'redux-saga/effects';

import { citiesCachWatcher } from './citiesCacheSaga';
import { citiesWatcher } from './citiesSaga';

export default function* rootSaga() {
    yield spawn(citiesWatcher);
    yield spawn(citiesCachWatcher);
}
