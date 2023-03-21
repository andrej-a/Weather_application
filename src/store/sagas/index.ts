import { spawn } from 'redux-saga/effects';

import { citiesCachWatcher } from './citiesCacheSaga';
import { citiesWatcher } from './citiesSaga';
import { dailyWeatherWatcher } from './dailyWeatherSaga';
import { weatherCachWatcher } from './weatherCacheSaga';

export default function* rootSaga() {
    yield spawn(citiesWatcher);
    yield spawn(citiesCachWatcher);
    yield spawn(dailyWeatherWatcher);
    yield spawn(weatherCachWatcher);
}
