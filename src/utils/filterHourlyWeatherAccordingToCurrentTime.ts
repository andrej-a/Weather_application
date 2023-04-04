import { numberConstants } from '@/types/constants';
import IDailyWeather from '@/types/IDailyWeather';

import getCurrentDate from './getCurrentDate';

const { START_OF_THE_EVENING, START_OF_THE_NIGHT } = numberConstants;

const filteredHourlyWeatherAccordingToCurrentTime = (
    hourlyWeatherList: IDailyWeather[],
) => {
    const { hours } = getCurrentDate();
    const isEveningNow =
        +hours >= START_OF_THE_EVENING && +hours <= START_OF_THE_NIGHT;

    const index = isEveningNow
        ? hourlyWeatherList.findIndex(
              weatherItem => weatherItem.date === `${START_OF_THE_EVENING}:00`,
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
