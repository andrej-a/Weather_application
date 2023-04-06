import { IPayload, sliceNames } from '@/types/constants';
import ICity from '@/types/ICitiesList';
import IDailyWeather from '@/types/IDailyWeather';
import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

const { HOURLY_WEATHER_SLICE_NAME } = sliceNames;

const hourlyWeatherSlice = createSlice({
    name: HOURLY_WEATHER_SLICE_NAME,
    initialState,
    reducers: {
        startHourlyWeatherFetch: (_, { payload }: IPayload<ICity>) => {
            payload;
        },
        hourlyWeatherFetch: state => {
            state.isHourlyWeatherLoading = true;
        },
        setHourlyWeatherList: (
            state,
            { payload }: IPayload<IDailyWeather[]>,
        ) => {
            state.isHourlyWeatherLoading = false;
            state.hourlyWeatherList = payload;
        },
        hourlyWeatherFetchFailure: state => {
            state.isHourlyWeatherLoading = false;
        },
    },
});

const { actions, reducer } = hourlyWeatherSlice;
export const {
    startHourlyWeatherFetch,
    hourlyWeatherFetch,
    setHourlyWeatherList,
    hourlyWeatherFetchFailure,
} = actions;
export default reducer;
