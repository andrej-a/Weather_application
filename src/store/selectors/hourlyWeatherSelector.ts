import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const hourlyWeatherSelector = createSelector(
    (state: RootState) => state.hourlyWeatherState,
    hourlyWeatherState => hourlyWeatherState,
);

export default hourlyWeatherSelector;
