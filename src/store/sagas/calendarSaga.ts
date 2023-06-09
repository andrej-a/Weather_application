import { call, debounce, put, select } from 'redux-saga/effects';

import getCalendarInformation from '@/api/getCalendarInformation';
import apiCalendar from '@/service/calendar';
import { numberConstants } from '@/types/constants';
import { ICalendareResponce } from '@/types/responce';
import showAlert from '@/utils/showAlert';

import { calendarSelector } from '../selectors';
import {
    calendarSagaHandle,
    setAccessToken,
    setCalendarEvents,
} from '../slices/calendar';

const { REQUEST_DEBOUNCE } = numberConstants;

export function* calendarWorker() {
    const { accessToken }: { accessToken: string } = yield select(
        calendarSelector,
    );

    if (accessToken) {
        yield call(() => apiCalendar.handleSignoutClick());
        yield put(setCalendarEvents([]));
        yield put(setAccessToken(''));
    } else {
        try {
            const { access_token, calendarList }: ICalendareResponce =
                yield call(() => getCalendarInformation());
            yield put(setCalendarEvents(calendarList));
            yield put(setAccessToken(access_token));
        } catch (error) {
            showAlert(error.message);
        }
    }
}

export function* calendarWatcher() {
    yield debounce(REQUEST_DEBOUNCE, calendarSagaHandle, calendarWorker);
}
