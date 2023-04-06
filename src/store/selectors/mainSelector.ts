import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const mainSelector = (state: RootState) => state.mainSlice;

export default mainSelector;
