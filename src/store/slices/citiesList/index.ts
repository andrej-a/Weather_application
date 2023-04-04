import getCitiesList from '@/api/getCitiesList';
import { IPayload, sliceNames } from '@/types/constants';
import ICity from '@/types/ICitiesList';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

const { CITIES_SLICE_NAME } = sliceNames;

export const getCityByName = createAsyncThunk(
    `${CITIES_SLICE_NAME}/getCitiesList`,
    async (city: string) => {
        const citiesList = await getCitiesList(city);
        return citiesList;
    },
);

const citiesSlice = createSlice({
    name: CITIES_SLICE_NAME,
    initialState,
    reducers: {
        startFetch: (_, { payload }: IPayload<string>) => {
            payload;
        },
        fetchCityList: state => {
            state.isLoadingCityList = true;
        },
        setCitiesList: (state, { payload }: IPayload<ICity[]>) => {
            state.isLoadingCityList = false;
            state.cities = payload;
        },
        failureFetchCityList: state => {
            state.isLoadingCityList = false;
        },
        setTargetCity: (state, { payload }: IPayload<ICity>) => {
            state.targetCity = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(getCityByName.pending, state => {
            state.isLoadingCityList = true;
        });
        builder.addCase(getCityByName.fulfilled, (state, { payload }) => {
            state.cities = payload;
        });
        builder.addCase(getCityByName.rejected, (state, action) => {
            state.isLoadingCityList = false;
            throw new Error(action.error.message);
        });
    },
});

const { actions, reducer } = citiesSlice;
export const {
    fetchCityList,
    setCitiesList,
    failureFetchCityList,
    startFetch,
    setTargetCity,
} = actions;
export default reducer;
