import constants from '@/types/constants';
import IPayload from '@/types/IPayload';
import IWeatherCache from '@/types/IWeatherCache';
import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

const { WEATHER_CACHE_SLICE_NAME } = constants;

const weatherCache = createSlice({
    name: WEATHER_CACHE_SLICE_NAME,
    initialState,
    reducers: {
        checkWeatherCache: (_, { payload }: IPayload<string>) => {
            payload;
        },
        setWeatherToCache: (state, { payload }: IPayload<IWeatherCache>) => {
            const index = state.weatherCache.findIndex(
                el => el.city === payload.city,
            );
            if (index !== -1) {
                state.weatherCache[index] = payload;
            } else {
                state.weatherCache = [...state.weatherCache, payload];
            }
        },
    },
});

const { actions, reducer } = weatherCache;
export const { checkWeatherCache, setWeatherToCache } = actions;
export default reducer;
