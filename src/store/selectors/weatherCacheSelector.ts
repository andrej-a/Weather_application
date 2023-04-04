import constants, { numberConstants } from '@/types/constants';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const { DAILY_TYPE_OF_THE_WEATHER } = constants;
const { NUMBER_MS_IN_THE_SECOND, NUMBER_SECONDS_IN_THE_HOUR } = numberConstants;
const filteredWeatherCache = (state: RootState, city: string) => {
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

export const weatherCacheSelector = createSelector(
    (state: RootState) => state.weatherCach.weatherCache,
    weatherCach => weatherCach,
);

export default filteredWeatherCache;
