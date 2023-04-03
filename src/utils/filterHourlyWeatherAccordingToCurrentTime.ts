import { numberConstants } from '@/types/constants';
import IDailyWeather from '@/types/IDailyWeather';

import getCurrentDate from './getCurrentDate';

const { startOfTheEvening, startOfTheNight } = numberConstants;

const filteredHourlyWeatherAccordingToCurrentTime = (
    hourlyWeatherList: IDailyWeather[],
) => {
    const { hours } = getCurrentDate();
    const isEveningNow =
        +hours >= startOfTheEvening && +hours <= startOfTheNight;

    const index = isEveningNow
        ? hourlyWeatherList.findIndex(
              weatherItem => weatherItem.date === `${startOfTheEvening}:00`,
          )
        : hourlyWeatherList.findIndex(
              weatherItem => weatherItem.date === `${hours}:00`,
          );

    if (index !== -1) {
        return hourlyWeatherList.slice(index);
    }
    return hourlyWeatherList;
};

export default filteredHourlyWeatherAccordingToCurrentTime;
