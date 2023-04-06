import constants from '@/types/constants';

export type weatherTypes =
    | constants.DAILY_TYPE_OF_THE_WEATHER
    | constants.HOURLY_TYPE_OF_THE_WEATHER;

export interface IMainInitialState {
    typeOfTheWeather: weatherTypes;
    isImageReady: boolean;
    weatherCode: number;
}
