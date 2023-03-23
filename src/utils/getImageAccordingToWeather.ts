import constants from '@/types/constants';
import IDailyWeather from '@/types/IDailyWeather';

import generateDate from './generateDate';
import imageCodeAdapter from './imageCodeAdapter';

const { DAILY_TYPE_OF_THE_WEATHER, HOURLY_TYPE_OF_THE_WEATHER } = constants;
const getImageAccordingToWeather = (
    dailyWeatherArray: IDailyWeather[],
    hourlyWeatherArray: IDailyWeather[],
    typeOfTheWeather: string,
) => {
    let weatherCode = 0;
    console.log(dailyWeatherArray, 'INGETIMAGEDAILY');
    console.log(hourlyWeatherArray, 'INGETIMAGEHOURLY');

    if (
        dailyWeatherArray.length &&
        typeOfTheWeather === DAILY_TYPE_OF_THE_WEATHER
    ) {
        const date = generateDate(typeOfTheWeather);
        weatherCode = dailyWeatherArray.filter(
            weatherItem => weatherItem.date === date,
        )[0]?.code;
    } else if (
        hourlyWeatherArray &&
        typeOfTheWeather === HOURLY_TYPE_OF_THE_WEATHER
    ) {
        const hour = generateDate(typeOfTheWeather);
        weatherCode = hourlyWeatherArray.filter(
            weatherItem => weatherItem.date === hour,
        )[0]?.code;
    }
    return imageCodeAdapter(weatherCode);
};
export default getImageAccordingToWeather;
