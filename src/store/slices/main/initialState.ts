import constants from '@/types/constants';

const { DAILY_TYPE_OF_THE_WEATHER } = constants;

export type weatherTypes =
    | constants.DAILY_TYPE_OF_THE_WEATHER
    | constants.HOURLY_TYPE_OF_THE_WEATHER;

export interface IMainInitialState {
    typeOfTheWeather: weatherTypes;
}

const initialState: IMainInitialState = {
    typeOfTheWeather: DAILY_TYPE_OF_THE_WEATHER,
};

export default initialState;
