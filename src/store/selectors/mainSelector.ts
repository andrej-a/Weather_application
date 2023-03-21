import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const mainSelector = createSelector(
    (state: RootState) => state.mainSlice,
    mainSlice => mainSlice,
);

export default mainSelector;
