interface IDailyWeather {
    id: string;
    temperature: number;
    date: string;
    code: number;
}

export interface IWeatherCache {
    city: string;
    timeOfTheLastUpdateOfDailyWeather: number;
    timeOfTheLastUpdateOfHourlyWeather: number;
    dailyWeatherList: IDailyWeather[];
    hourlyWeatherList: IDailyWeather[];
}

export default IDailyWeather;
