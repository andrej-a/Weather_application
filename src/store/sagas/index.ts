import { spawn } from 'redux-saga/effects';

import { calendarWatcher } from './calendarSaga';
import { citiesCacheWatcher } from './citiesCacheSaga';
import { citiesWatcher } from './citiesSaga';
import { dailyWeatherWatcher } from './dailyWeatherSaga';
import { hourlyWeatherWatcher } from './hourlyWeatherSaga';
import { weatherCacheWatcher } from './weatherCacheSaga';

export default function* rootSaga() {
    yield spawn(citiesWatcher);
    yield spawn(citiesCacheWatcher);
    yield spawn(dailyWeatherWatcher);
    yield spawn(weatherCacheWatcher);
    yield spawn(hourlyWeatherWatcher);
    yield spawn(calendarWatcher);
}
