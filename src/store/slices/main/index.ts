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
    },
});

const { actions, reducer } = mainSlice;
export const { setTypeOfTheWeather } = actions;
export default reducer;
