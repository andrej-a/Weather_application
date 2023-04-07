import { IPayload, sliceNames } from '@/types/constants';
import ICity from '@/types/ICitiesList';
import IDailyWeather from '@/types/IDailyWeather';
import { IDailyWeatherInitialState } from '@/types/storeInitialization';
import { createSlice } from '@reduxjs/toolkit';

const { DAILY_WEATHER_SLICE_NAME } = sliceNames;
export const initialState: IDailyWeatherInitialState = {
    isDailyWeatherLoading: false,
    dailyWeatherList: [],
};

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
