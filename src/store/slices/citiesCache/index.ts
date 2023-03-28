import constants from '@/types/constants';
import ICity from '@/types/ICitiesList';
import IPayload from '@/types/IPayload';
import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

const { CITIES_CACHE_SLICE_NAME } = constants;

const citiesSlice = createSlice({
    name: CITIES_CACHE_SLICE_NAME,
    initialState,
    reducers: {
        checkCache: (_, { payload }: IPayload<string>) => {
            payload;
        },
        setCitiesToCache: (state, { payload }: IPayload<ICity[]>) => {
            state.citiesCache = [...state.citiesCache, ...payload];
        },
    },
});

const { actions, reducer } = citiesSlice;
export const { checkCache, setCitiesToCache } = actions;
export default reducer;
