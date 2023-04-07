import constants from './constants';
import ICity from './ICitiesList';
import IDailyWeather, { IWeatherCache } from './IDailyWeather';

export interface ICalendarEvent {
    start: { dateTime?: string; date?: string; timeZone: string };
    summary: string;
    id: string;
}
export interface ICalendarInitialState {
    accessToken: string;
    isLoading: boolean;
    calendarEventsList: ICalendarEvent[];
}

export interface IInitialCitiesState {
    isLoadingCityList: boolean;
    cities: ICity[];
    targetCity: ICity;
}

export interface IDailyWeatherInitialState {
    isDailyWeatherLoading: boolean;
    dailyWeatherList: IDailyWeather[];
}

export interface IHourlyWeatherInitialState {
    isHourlyWeatherLoading: boolean;
    hourlyWeatherList: IDailyWeather[];
}

export type weatherTypes =
    | constants.DAILY_TYPE_OF_THE_WEATHER
    | constants.HOURLY_TYPE_OF_THE_WEATHER;

export interface IMainInitialState {
    typeOfTheWeather: weatherTypes;
    isImageReady: boolean;
    weatherCode: number;
}

export interface IWeatherCacheInitialState {
    weatherCache: IWeatherCache[];
}
