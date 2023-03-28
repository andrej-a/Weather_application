import { v4 as uuidv4 } from 'uuid';

import IDailyWeather from '@/types/IDailyWeather';

import getCorrectWeatherCode from './getCorrectWeatherCode';
import setCorrectTimeFormat from './setCorrectTimeFormat';

interface IResponce {
    hourly: {
        weathercode: number[];
        time: string[];
        temperature_2m: number[];
    };
}

const hourlyWeatherAdapter = ({ hourly }: IResponce): IDailyWeather[] => {
    const result: IDailyWeather[] = [];

    hourly.time.map((item, index: number) => {
        const weatherItem: IDailyWeather = {} as IDailyWeather;
        weatherItem.date = setCorrectTimeFormat(item);
        weatherItem.temperature = Math.round(hourly.temperature_2m[index]);
        weatherItem.code = getCorrectWeatherCode(hourly.weathercode[index]);
        weatherItem.id = uuidv4();
        result.push(weatherItem);
    });
    return result;
};

export default hourlyWeatherAdapter;
