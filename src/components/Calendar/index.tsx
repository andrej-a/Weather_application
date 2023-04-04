import React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import constants from '@/types/constants';

import * as imports from './imports';
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

const { calendarSagaHandle, calendarSelector } = imports;

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
                            ? calendarEventsList.map(
                                  ({ id, start, summary }) => {
                                      return (
                                          <CalendarItem key={id}>
                                              <ItemTime>
                                                  {start.dateTime
                                                      ? start.dateTime
                                                      : 'all day'}
                                              </ItemTime>
                                              <ItemContent>
                                                  {summary}
                                              </ItemContent>
                                          </CalendarItem>
                                      );
                                  },
                              )
                            : NO_CALENDAR_EVENTS
                        : CALENDAR_DEFAULT_MESSAGE}
                </CalendarInfo>
            </CalendarInfoWrapper>
        </CalendarWrapper>
    );
};

export default Calendar;
