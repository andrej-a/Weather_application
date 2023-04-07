import { call, put } from 'redux-saga/effects';

import getDailyWeatherInfo from '@/api/getDailyWeatherInfo';
import { calendarWorker } from '@/store/sagas/calendarSaga';
import { citiesCachWorker } from '@/store/sagas/citiesCacheSaga';
import { citiesWorker } from '@/store/sagas/citiesSaga';
import { dailyWeatherWorker } from '@/store/sagas/dailyWeatherSaga';
import { setAccessToken, setCalendarEvents } from '@/store/slices/calendar';
import { setCitiesToCache } from '@/store/slices/citiesCache';
import {
    fetchCityList,
    setCitiesList,
    startFetch,
} from '@/store/slices/citiesList';
import {
    fetchDailyWeather,
    setDailyWeatherList,
} from '@/store/slices/dailyWeatherList';
import {
    action,
    mockCitiesList,
    mockAccessToken,
    mockCalendarList,
    mockCityCache,
    mockCacheAction,
    mockWeatherList,
    mockWeatherCache,
} from './mock';

describe('cities list fetching', () => {
    it('success cities list fetching', () => {
        const generator = citiesWorker(action);
        expect(generator.next().value).toEqual(put(fetchCityList()));
        expect(generator.next().value.type).toEqual('CALL');
        expect(generator.next(mockCitiesList).value).toEqual(
            put(setCitiesList(mockCitiesList)),
        );
        expect(generator.next(mockCitiesList).value).toEqual(
            put(setCitiesToCache(mockCitiesList)),
        );
        expect(generator.next().done).toEqual(true);
    });
});

describe('calendar worker', () => {
    it('sign out from account', () => {
        const generator = calendarWorker();
        expect(generator.next().value.type).toEqual('SELECT');
        expect(
            generator.next({ accessToken: mockAccessToken }).value.type,
        ).toEqual('CALL');
        expect(generator.next().value).toEqual(put(setCalendarEvents([])));
        expect(generator.next().value).toEqual(put(setAccessToken('')));
    });
    it('sign in to account', () => {
        const generator = calendarWorker();
        expect(generator.next().value.type).toEqual('SELECT');
        expect(
            generator.next({ mockAccessToken, mockCalendarList }).value.type,
        ).toEqual('CALL');
        expect(generator.next(mockCalendarList).value).toEqual(
            put(setCalendarEvents()),
        );
        expect(generator.next(mockAccessToken).value).toEqual(
            put(setAccessToken()),
        );
    });
});

describe('cities cache worker', () => {
    it('set value from cache', () => {
        const generator = citiesCachWorker(action);
        expect(generator.next().value.type).toEqual('SELECT');
        expect(generator.next(mockCityCache).value).toEqual(
            put(setCitiesList(mockCityCache)),
        );
    });
    it('start cities fetch', () => {
        const generator = citiesCachWorker(action);
        expect(generator.next().value.type).toEqual('SELECT');
        const cache = [];
        expect(generator.next(cache).value).toEqual(
            put(startFetch(action.payload)),
        );
    });
});

describe('dailyWeatherWorker', () => {
    it('fetch and update value in cache', () => {
        const generator = dailyWeatherWorker(mockCacheAction);
        expect(generator.next().value).toEqual(put(fetchDailyWeather()));
        expect(generator.next(mockWeatherList).value).toEqual(
            call(getDailyWeatherInfo, mockCacheAction.payload),
        );
        expect(generator.next(mockWeatherList).value).toEqual(
            put(setDailyWeatherList(mockWeatherList)),
        );
        expect(generator.next(mockWeatherCache).value.type).toEqual('SELECT');
        expect(generator.next().value.type).toEqual('PUT');
    });
});
