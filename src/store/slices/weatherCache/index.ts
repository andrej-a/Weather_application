import { IPayload, sliceNames } from '@/types/constants';
import { IWeatherCache } from '@/types/IDailyWeather';
import { IWeatherCacheInitialState } from '@/types/storeInitialization';
import { createSlice } from '@reduxjs/toolkit';

const { WEATHER_CACHE_SLICE_NAME } = sliceNames;
export const initialState: IWeatherCacheInitialState = {
    weatherCache: [],
};

const weatherCache = createSlice({
    name: WEATHER_CACHE_SLICE_NAME,
    initialState,
    reducers: {
        checkWeatherCache: (_, { payload }: IPayload<string>) => {
            payload;
        },
        setWeatherToCache: (state, { payload }: IPayload<IWeatherCache[]>) => {
            state.weatherCache = payload;
        },
    },
});

const { actions, reducer } = weatherCache;
export const { checkWeatherCache, setWeatherToCache } = actions;
export default reducer;
