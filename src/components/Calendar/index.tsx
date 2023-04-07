import React from 'react';

import { useAppSelector } from '@/hooks/useStore';
import { messagesToUI } from '@/types/constants';
import { calendarManager } from '@/utils/calendarManager';

import CalendarItems from './CalendarItems';
import * as imports from './imports';
import {
    CalendarInfo,
    CalendarInfoWrapper,
    CalendarWrapper,
    LogInButton,
    LogInButtonWrapper,
} from './styles';

const { calendarSelector } = imports;
const { CALENDAR_DEFAULT_MESSAGE } = messagesToUI;
const Calendar = () => {
    const { calendarEventsList, accessToken } =
        useAppSelector(calendarSelector);

    return (
        <CalendarWrapper>
            <LogInButtonWrapper>
                <LogInButton
                    data-test="calendar_login_button"
                    onClick={calendarManager.startCalendareSaga}
                >
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
