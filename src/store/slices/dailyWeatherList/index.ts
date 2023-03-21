import constants from '@/types/constants';
import ICity from '@/types/ICitiesList';
import IDailyWeather from '@/types/IDailyWeather';
import IPayload from '@/types/IPayload';
import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

const { DAILY_WEATHER_SLICE_NAME } = constants;

const dailyWeatherSlice = createSlice({
    name: DAILY_WEATHER_SLICE_NAME,
    initialState,
    reducers: {
        startDailyWeatherFetch: (_, { payload }: IPayload<ICity>) => {
            payload;
        },
        fetchDailyWeather: state => {
            state.isDailyWeatherLoading = true;
        },
        setDailyWeatherList: (
            state,
            { payload }: IPayload<IDailyWeather[]>,
        ) => {
            state.isDailyWeatherLoading = false;
            state.dailyWeatherList = payload;
        },
        failureDailyWeatherFetch: state => {
            state.isDailyWeatherLoading = false;
        },
    },
});

const { actions, reducer } = dailyWeatherSlice;
export const {
    startDailyWeatherFetch,
    fetchDailyWeather,
    setDailyWeatherList,
    failureDailyWeatherFetch,
} = actions;
export default reducer;
