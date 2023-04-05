import React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { messagesToUI } from '@/types/constants';

import CalendarItems from './CalendarItems';
import * as imports from './imports';
import {
    CalendarInfo,
    CalendarInfoWrapper,
    CalendarWrapper,
    LogInButton,
    LogInButtonWrapper,
} from './styles';

const { calendarSagaHandle, calendarSelector } = imports;
const { CALENDAR_DEFAULT_MESSAGE } = messagesToUI;

const Calendar = () => {
    const { calendarEventsList, accessToken } =
        useAppSelector(calendarSelector);
    const dispatch = useAppDispatch();

    const calendarManager = () => {
        dispatch(calendarSagaHandle());
    };

    return (
        <CalendarWrapper>
            <LogInButtonWrapper>
                <LogInButton onClick={calendarManager}>
                    Sign {accessToken ? 'Out' : 'In'}
                </LogInButton>
            </LogInButtonWrapper>
            <CalendarInfoWrapper>
                <CalendarInfo>
                    {accessToken ? (
                        <CalendarItems
                            calendarEventsList={calendarEventsList}
                        />
                    ) : (
                        CALENDAR_DEFAULT_MESSAGE
                    )}
                </CalendarInfo>
            </CalendarInfoWrapper>
        </CalendarWrapper>
    );
};

export default Calendar;
