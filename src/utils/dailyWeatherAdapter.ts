import { v4 as uuidv4 } from 'uuid';

import IDailyWeather from '@/types/IDailyWeather';

import setCorrectDateFormat from './setCorrectDateFormat';

const dailyWeatherAdapter = (responce: any): IDailyWeather[] => {
    const result: IDailyWeather[] = [];
    responce.daily.data.map(
        ({
            day,
            all_day,
            icon,
        }: {
            day: string;
            all_day: { temperature: number };
            icon: number;
        }) => {
            const weatherItem: IDailyWeather = {} as IDailyWeather;
            (weatherItem.date = setCorrectDateFormat(day)),
                (weatherItem.temperature = Math.round(all_day.temperature)),
                (weatherItem.code = icon),
                (weatherItem.id = uuidv4());
            result.push(weatherItem);
        },
    );
    return result;
};
export default dailyWeatherAdapter;
