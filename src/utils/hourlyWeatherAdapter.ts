import { v4 as uuidv4 } from 'uuid';

import IDailyWeather from '@/types/IDailyWeather';

import getCorrectWeatherCode from './getCorrectWeatherCode';
import setCorrectTimeFormat from './setCorrectTimeFormat';

const hourlyWeatherAdapter = (responce: {
    hourly: {
        weathercode: number[];
        time: string[];
        temperature_2m: number[];
    };
}): IDailyWeather[] => {
    const result: IDailyWeather[] = [];

    responce.hourly.time.map((item, index: number) => {
        const weatherItem: IDailyWeather = {} as IDailyWeather;
        weatherItem.date = setCorrectTimeFormat(item);
        weatherItem.temperature = Math.round(
            responce.hourly.temperature_2m[index],
        );
        weatherItem.code = getCorrectWeatherCode(
            responce.hourly.weathercode[index],
        );
        weatherItem.id = uuidv4();
        result.push(weatherItem);
    });
    return result;
};

export default hourlyWeatherAdapter;
