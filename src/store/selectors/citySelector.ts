import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const citySelector = createSelector(
    (state: RootState) => state.citiesState,
    citiesState => citiesState,
);

export default citySelector;
