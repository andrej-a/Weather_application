import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const dailyWeatherSelector = createSelector(
    (state: RootState) => state.dailyWeatherState,
    dailyWeatherList => dailyWeatherList,
);

export default dailyWeatherSelector;
