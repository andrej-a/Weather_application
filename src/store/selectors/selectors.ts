import constants, { numberConstants } from '@/types/constants';

import { RootState } from '..';

export const calendarSelector = (state: RootState) => state.calendarState;
export const citySelector = (state: RootState) => state.citiesState;
export const dailyWeatherSelector = (state: RootState) =>
    state.dailyWeatherState;
export const hourlyWeatherSelector = (state: RootState) =>
    state.hourlyWeatherState;
export const mainSelector = (state: RootState) => state.mainSlice;

const { DAILY_TYPE_OF_THE_WEATHER } = constants;
const { NUMBER_MS_IN_THE_SECOND, NUMBER_SECONDS_IN_THE_HOUR } = numberConstants;

export const filteredWeatherCache = (state: RootState, city: string) => {
    const filteredCache = state.weatherCach.weatherCache.filter(
        item => item.city === city,
    );
    const typeOfTheWeather = state.mainSlice.typeOfTheWeather;

    if (filteredCache.length) {
        if (typeOfTheWeather === DAILY_TYPE_OF_THE_WEATHER) {
            const { timeOfTheLastUpdateOfDailyWeather, dailyWeatherList } =
                filteredCache[0];
            return timeOfTheLastUpdateOfDailyWeather /
                NUMBER_MS_IN_THE_SECOND <=
                new Date().getTime() / NUMBER_MS_IN_THE_SECOND -
                    NUMBER_SECONDS_IN_THE_HOUR
                ? []
                : dailyWeatherList;
        }
        const { timeOfTheLastUpdateOfHourlyWeather, hourlyWeatherList } =
            filteredCache[0];
        return timeOfTheLastUpdateOfHourlyWeather / NUMBER_MS_IN_THE_SECOND <=
            new Date().getTime() / NUMBER_MS_IN_THE_SECOND -
                NUMBER_SECONDS_IN_THE_HOUR
            ? []
            : hourlyWeatherList;
    }
    return [];
};

export const weatherCacheSelector = (state: RootState) =>
    state.weatherCach.weatherCache;
