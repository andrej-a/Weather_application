import IDailyWeather from './IDailyWeather';

interface IWeatherCache {
    city: string;
    timeOfTheLastUpdateOfDailyWeather: number;
    timeOfTheLastUpdateOfHourlyWeather: number;
    dailyWeatherList: IDailyWeather[];
    hourlyWeatherList: IDailyWeather[];
}

export default IWeatherCache;
