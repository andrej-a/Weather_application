import constants from '@/types/constants';
import IPayload from '@/types/IPayload';
import { createSlice } from '@reduxjs/toolkit';

import initialState, { weatherTypes } from './initialState';

const { MAIN_SLICE_NAME } = constants;

const mainSlice = createSlice({
    name: MAIN_SLICE_NAME,
    initialState,
    reducers: {
        setTypeOfTheWeather: (state, { payload }: IPayload<weatherTypes>) => {
            state.typeOfTheWeather = payload;
        },
        setImageReading: (state, { payload }: IPayload<boolean>) => {
            state.isImageReady = payload;
        },
        setWeatherCodeForImage: (state, { payload }: IPayload<number>) => {
            state.weatherCode = payload;
        },
    },
});

const { actions, reducer } = mainSlice;
export const { setTypeOfTheWeather, setImageReading, setWeatherCodeForImage } =
    actions;
export default reducer;
