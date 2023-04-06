import constants from '@/types/constants';
import IDailyWeather from '@/types/IDailyWeather';

import { generateDate } from './dateWorkers';
import imageCodeAdapter from './imageCodeAdapter';

const { DAILY_TYPE_OF_THE_WEATHER, HOURLY_TYPE_OF_THE_WEATHER } = constants;

const getImageAccordingToWeather = (
    dailyWeatherArray: IDailyWeather[],
    hourlyWeatherArray: IDailyWeather[],
    typeOfTheWeather: string,
    id: string,
    isImageReady: boolean,
) => {
    if (!id && isImageReady) {
        return 2;
    }
    let weatherCode = 0;
    const time = generateDate(typeOfTheWeather);

    if (typeOfTheWeather === DAILY_TYPE_OF_THE_WEATHER) {
        weatherCode = dailyWeatherArray[0]?.code;
    } else if (typeOfTheWeather === HOURLY_TYPE_OF_THE_WEATHER) {
        weatherCode = hourlyWeatherArray.filter(
            weatherItem => weatherItem.date === time,
        )[0]?.code;
    }

    return imageCodeAdapter(weatherCode);
};
export default getImageAccordingToWeather;
