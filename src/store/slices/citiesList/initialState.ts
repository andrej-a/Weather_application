import ICity from '@/types/ICitiesList';

export interface IInitialCitiesState {
    isLoadingCityList: boolean;
    cities: ICity[];
    targetCity: ICity;
}

const initialState: IInitialCitiesState = {
    isLoadingCityList: false,
    cities: [],
    targetCity: {} as ICity,
};

export default initialState;
