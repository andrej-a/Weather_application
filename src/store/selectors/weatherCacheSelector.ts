import constants from '@/types/constants';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const { DAILY_TYPE_OF_THE_WEATHER } = constants;

const filteredWeatherCache = (state: RootState, city: string) => {
    const filteredCache = state.weatherCach.weatherCache.filter(
        item => item.city === city,
    );
    const typeOfTheWeather = state.mainSlice.typeOfTheWeather;

    if (filteredCache.length) {
        if (typeOfTheWeather === DAILY_TYPE_OF_THE_WEATHER) {
            const { timeOfTheLastUpdateOfDailyWeather, dailyWeatherList } =
                filteredCache[0];
            return timeOfTheLastUpdateOfDailyWeather / 1000 <=
                new Date().getTime() / 1000 - 3600
                ? []
                : dailyWeatherList;
        }
        const { timeOfTheLastUpdateOfHourlyWeather, hourlyWeatherList } =
            filteredCache[0];
        return timeOfTheLastUpdateOfHourlyWeather / 1000 <=
            new Date().getTime() / 1000 - 3600
            ? []
            : hourlyWeatherList;
    }
    return [];
};

export const weatherCacheSelector = createSelector(
    (state: RootState) => state.weatherCach.weatherCache,
    weatherCach => weatherCach,
);

export default filteredWeatherCache;
