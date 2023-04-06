import { IPayload, sliceNames } from '@/types/constants';
import { createSlice } from '@reduxjs/toolkit';

import initialState, { ICalendarEvent } from './initialState';

const { CALENDAR_LIST_SLICE_NAME } = sliceNames;

const calendarListSlice = createSlice({
    name: CALENDAR_LIST_SLICE_NAME,
    initialState,
    reducers: {
        calendarSagaHandle: () => {},
        setAccessToken: (state, { payload }: IPayload<string>) => {
            state.accessToken = payload;
        },
        startFetch: state => {
            state.isLoading = true;
        },
        setCalendarEvents: (state, { payload }: IPayload<ICalendarEvent[]>) => {
            state.calendarEventsList = payload;
            state.isLoading = false;
        },
        setFailureFetch: state => {
            state.isLoading = false;
        },
    },
});

const { actions, reducer } = calendarListSlice;
export const {
    calendarSagaHandle,
    startFetch,
    setCalendarEvents,
    setFailureFetch,
    setAccessToken,
} = actions;
export default reducer;
