import { IPayload, sliceNames } from '@/types/constants';
import ICity from '@/types/ICitiesList';
import { IInitialCitiesState } from '@/types/storeInitialization';
import { createSlice } from '@reduxjs/toolkit';

const { CITIES_SLICE_NAME } = sliceNames;
export const initialState: IInitialCitiesState = {
    isLoadingCityList: false,
    cities: [],
    targetCity: {} as ICity,
};

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
