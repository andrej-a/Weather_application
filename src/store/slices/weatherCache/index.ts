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
        setWeatherToCache: (
            { weatherCache },
            { payload }: IPayload<IWeatherCache>,
        ) => {
            const index = weatherCache.findIndex(
                el => el.city === payload.city,
            );
            if (index !== -1) {
                weatherCache[index] = {
                    ...weatherCache[index],
                    ...payload,
                };
            } else {
                weatherCache.push(payload);
            }
        },
    },
});

const { actions, reducer } = weatherCache;
export const { checkWeatherCache, setWeatherToCache } = actions;
export default reducer;
