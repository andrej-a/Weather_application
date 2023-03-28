import IDailyWeather from '@/types/IDailyWeather';

export interface IHourlyWeatherInitialState {
    isHourlyWeatherLoading: boolean;
    hourlyWeatherList: IDailyWeather[];
}

const initialState: IHourlyWeatherInitialState = {
    isHourlyWeatherLoading: false,
    hourlyWeatherList: [],
};

export default initialState;
