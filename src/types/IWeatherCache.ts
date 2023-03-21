import IDailyWeather from './IDailyWeather';

interface IWeatherCache {
    city: string;
    timeOfTheLastUpdateOfDailyWeather: number;
    dailyWeatherList: IDailyWeather[];
}

export default IWeatherCache;
