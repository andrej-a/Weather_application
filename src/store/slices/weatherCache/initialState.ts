import IWeatherCache from '@/types/IWeatherCache';

export interface IWeatherCacheInitialState {
    weatherCache: IWeatherCache[];
}

const initialState: IWeatherCacheInitialState = {
    weatherCache: [],
};

export default initialState;
