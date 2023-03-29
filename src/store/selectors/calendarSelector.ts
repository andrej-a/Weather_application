import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const calendarSelector = createSelector(
    (state: RootState) => state.calendarState,
    calendarState => calendarState,
);

export default calendarSelector;
