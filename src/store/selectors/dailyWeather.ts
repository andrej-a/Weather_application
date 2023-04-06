import { RootState } from '..';

const dailyWeatherSelector = (state: RootState) => state.dailyWeatherState;

export default dailyWeatherSelector;
