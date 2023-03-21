import IDailyWeather from '@/types/IDailyWeather';

export interface IDailyWeatherInitialState {
    isDailyWeatherLoading: boolean;
    dailyWeatherList: IDailyWeather[];
}

const initialState: IDailyWeatherInitialState = {
    isDailyWeatherLoading: false,
    dailyWeatherList: [],
};

export default initialState;
