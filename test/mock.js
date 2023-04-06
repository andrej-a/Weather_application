export const action = {
    payload: 'Minsk',
};
export const mockCitiesList = [
    {
        id: 'city-id',
        name: 'Minsk',
        latitude: 53.258,
        longitude: -27.69,
        country: 'BY',
        state: 'Minsk',
    },
];

export const mockCalendarList = [
    {
        start: { dateTime: '23.10.2023T14:00:58', timeZone: 'Minsk' },
        summary: 'Some impotant action',
        id: 'action id',
    },
];
export const mockAccessToken = 'qwerty1234';

export const mockCityCache = [
    {
        id: 'city-id',
        name: 'Minsk',
        latitude: 53.258,
        longitude: -27.69,
        country: 'BY',
        state: 'Minsk',
    },
];

export const mockCacheAction = {
    payload: {
        id: 'city-id',
        name: 'Minsk',
        latitude: 53.258,
        longitude: -27.69,
        country: 'BY',
        state: 'Minsk',
    },
};

export const mockWeatherList = [
    { id: 'weather-id', temperature: 10, date: '30.03.2023', code: 2 },
];
export const mockWeatherCache = [
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

const mockAccessToken = { accessToken: 'qwert12345' };
