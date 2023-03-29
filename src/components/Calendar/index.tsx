import React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import calendarSelector from '@/store/selectors/calendarSelector';
import { calendarSagaHandle } from '@/store/slices/calendar';
import constants from '@/types/constants';

import {
    CalendarInfo,
    CalendarInfoWrapper,
    CalendarItem,
    CalendarWrapper,
    ItemContent,
    ItemTime,
    LogInButton,
    LogInButtonWrapper,
} from './styles';

const Calendar = () => {
    const { CALENDAR_DEFAULT_MESSAGE, NO_CALENDAR_EVENTS } = constants;
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
                    {accessToken
                        ? calendarEventsList.length > 0
                            ? calendarEventsList.map(event => {
                                  return (
                                      <CalendarItem key={event.start.dateTime}>
                                          <ItemTime>
                                              {event.start.dateTime}
                                          </ItemTime>
                                          <ItemContent>
                                              {event.summary}
                                          </ItemContent>
                                      </CalendarItem>
                                  );
                              })
                            : NO_CALENDAR_EVENTS
                        : CALENDAR_DEFAULT_MESSAGE}
                </CalendarInfo>
            </CalendarInfoWrapper>
        </CalendarWrapper>
    );
};

export default Calendar;
