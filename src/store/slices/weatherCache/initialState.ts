import { IWeatherCache } from '@/types/IDailyWeather';

export interface IWeatherCacheInitialState {
    weatherCache: IWeatherCache[];
}

const initialState: IWeatherCacheInitialState = {
    weatherCache: [],
};

export default initialState;
