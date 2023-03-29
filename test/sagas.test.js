import { call,put } from 'redux-saga/effects';

import getDailyWeatherInfo from '@/api/getDailyWeatherInfo';
import { calendarWorker } from '@/store/sagas/calendarSaga';
import { citiesCachWorker } from '@/store/sagas/citiesCacheSaga';
import { citiesWorker } from '@/store/sagas/citiesSaga';
import { dailyWeatherWorker } from '@/store/sagas/dailyWeatherSaga';
import { setAccessToken,setCalendarEvents } from '@/store/slices/calendar';
import { setCitiesToCache } from '@/store/slices/citiesCache';
import { fetchCityList, setCitiesList , startFetch } from '@/store/slices/citiesList';
import {
    fetchDailyWeather,
    setDailyWeatherList,
} from '@/store/slices/dailyWeatherList';

describe('cities list fetching', () => {
    const action = {
        payload: 'Minsk',
    };
    const citiesList = [
        {
            id: 'city-id',
            name: 'Minsk',
            latitude: 53.258,
            longitude: -27.69,
            country: 'BY',
            state: 'Minsk',
        },
    ];

    it('success cities list fetching', () => {
        const generator = citiesWorker(action);
        expect(generator.next().value).toEqual(put(fetchCityList()));
        expect(generator.next().value.type).toEqual('CALL');
        expect(generator.next(citiesList).value).toEqual(
            put(setCitiesList(citiesList)),
        );
        expect(generator.next(citiesList).value).toEqual(
            put(setCitiesToCache(citiesList)),
        );
        expect(generator.next().done).toEqual(true);
    });
});

describe('calendar worker', () => {
    it('sign out from account', () => {
        const generator = calendarWorker();
        const responce = { accessToken: 'qwert12345' };
        expect(generator.next().value.type).toEqual('SELECT');
        expect(generator.next(responce).value.type).toEqual('CALL');
        expect(generator.next().value).toEqual(put(setCalendarEvents([])));
        expect(generator.next().value).toEqual(put(setAccessToken('')));
    });
    it('sign in to account', () => {
        const generator = calendarWorker();
        const mockCalendarList = [
            {
                start: { dateTime: '23.10.2023T14:00:58', timeZone: 'Minsk' },
                summary: 'Some impotant action',
                id: 'action id',
            },
        ];
        const mockAccessToken = 'qwerty1234';
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
        const action = { payload: 'Minsk' };
        const generator = citiesCachWorker(action);
        expect(generator.next().value.type).toEqual('SELECT');
        const cache = [
            {
                id: 'city-id',
                name: 'Minsk',
                latitude: 53.258,
                longitude: -27.69,
                country: 'BY',
                state: 'Minsk',
            },
        ];
        expect(generator.next(cache).value).toEqual(put(setCitiesList(cache)));
    });
    it('start cities fetch', () => {
        const action = { payload: 'Minsk' };
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
        const action = {
            payload: {
                id: 'city-id',
                name: 'Minsk',
                latitude: 53.258,
                longitude: -27.69,
                country: 'BY',
                state: 'Minsk',
            },
        };
        const generator = dailyWeatherWorker(action);
        expect(generator.next().value).toEqual(put(fetchDailyWeather()));
        const weatherList = [
            { id: 'weather-id', temperature: 10, date: '30.03.2023', code: 2 },
        ];
        expect(generator.next(weatherList).value).toEqual(
            call(getDailyWeatherInfo, action.payload),
        );
        expect(generator.next(weatherList).value).toEqual(
            put(setDailyWeatherList(weatherList)),
        );
        const weatherCache = [
            {
                city: 'Minsk-BY',
                timeOfTheLastUpdateOfDailyWeather: 10,
                timeOfTheLastUpdateOfHourlyWeather: 0,
                dailyWeatherList: [
                    {
                        id: 'weather-id',
                        temperature: 10,
                        date: '30.03.2023',
                        code: 2,
                    },
                ],
                hourlyWeatherList: [],
            },
        ];
        expect(generator.next(weatherCache).value.type).toEqual('SELECT');
        const index = 0;
        expect(generator.next().value.type).toEqual('PUT');
    });
});
