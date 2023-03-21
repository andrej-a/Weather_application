import { RootState } from '..';

const filteredWeatherCache = (state: RootState, city: string) => {
    const filteredCache = state.weatherCach.weatherCache.filter(
        item => item.city === city,
    );
    if (filteredCache.length) {
        const { timeOfTheLastUpdateOfDailyWeather, dailyWeatherList } =
            filteredCache[0];
        console.log(
            timeOfTheLastUpdateOfDailyWeather / 1000 <=
                new Date().getTime() / 1000 - 10,
        );
        console.log(timeOfTheLastUpdateOfDailyWeather / 1000, 'LAST');
        console.log(new Date().getTime() / 1000 - 10);

        return timeOfTheLastUpdateOfDailyWeather / 1000 <=
            new Date().getTime() / 1000 - 3600
            ? []
            : dailyWeatherList;
    }
    return [];
};

export default filteredWeatherCache;
