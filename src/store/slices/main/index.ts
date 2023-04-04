import constants, { IPayload, sliceNames } from '@/types/constants';
import { createSlice } from '@reduxjs/toolkit';

import { IMainInitialState, weatherTypes } from './types';

const { DAILY_TYPE_OF_THE_WEATHER } = constants;
const { MAIN_SLICE_NAME } = sliceNames;
export const initialState: IMainInitialState = {
    typeOfTheWeather: DAILY_TYPE_OF_THE_WEATHER,
    isImageReady: false,
    weatherCode: 0,
};

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
