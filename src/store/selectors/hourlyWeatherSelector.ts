import { RootState } from '..';

const hourlyWeatherSelector = (state: RootState) => state.hourlyWeatherState;

export default hourlyWeatherSelector;
