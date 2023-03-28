import { spawn } from 'redux-saga/effects';

import { calendarWatcher } from './calendarSaga';
import { citiesCachWatcher } from './citiesCacheSaga';
import { citiesWatcher } from './citiesSaga';
import { dailyWeatherWatcher } from './dailyWeatherSaga';
import { hourlyWeatherWatcher } from './hourlyWeatherSaga';
import { weatherCachWatcher } from './weatherCacheSaga';

export default function* rootSaga() {
    yield spawn(citiesWatcher);
    yield spawn(citiesCachWatcher);
    yield spawn(dailyWeatherWatcher);
    yield spawn(weatherCachWatcher);
    yield spawn(hourlyWeatherWatcher);
    yield spawn(calendarWatcher);
}
