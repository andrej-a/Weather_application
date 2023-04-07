import { IPayload, sliceNames } from '@/types/constants';
import {
    ICalendarEvent,
    ICalendarInitialState,
} from '@/types/storeInitialization';
import { createSlice } from '@reduxjs/toolkit';

const { CALENDAR_LIST_SLICE_NAME } = sliceNames;
export const initialState: ICalendarInitialState = {
    accessToken: '',
    isLoading: false,
    calendarEventsList: [],
};

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
