import { v4 as uuidv4 } from 'uuid';

import IDailyWeather from '@/types/IDailyWeather';

import { setCorrectDateFormat } from './dateWorkers';

interface IResponce {
    daily: {
        data: { day: string; all_day: { temperature: number }; icon: number }[];
    };
}

const dailyWeatherAdapter = (responce: IResponce): IDailyWeather[] => {
    const result: IDailyWeather[] = [];
    responce.daily.data.map(({ day, all_day: { temperature }, icon }) => {
        const weatherItem: IDailyWeather = {} as IDailyWeather;
        (weatherItem.date = setCorrectDateFormat(day)),
            (weatherItem.temperature = Math.round(temperature)),
            (weatherItem.code = icon),
            (weatherItem.id = uuidv4());
        result.push(weatherItem);
    });
    return result;
};
export default dailyWeatherAdapter;
