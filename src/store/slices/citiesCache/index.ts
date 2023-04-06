import { IPayload, sliceNames } from '@/types/constants';
import ICity, { ICityCache } from '@/types/ICitiesList';
import { createSlice } from '@reduxjs/toolkit';

const { CITIES_CACHE_SLICE_NAME } = sliceNames;
export const initialState: ICityCache = {
    citiesCache: [],
};

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
