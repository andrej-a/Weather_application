import React from 'react';

import constants from '@/types/constants';

import { CalendarItem, ItemContent, ItemTime } from './styles';
import CalendarItemsProps from './types';

const CalendarItems = ({ calendarEventsList }: CalendarItemsProps) => {
    const { NO_CALENDAR_EVENTS } = constants;
    return (
        <>
            {calendarEventsList.length > 0
                ? calendarEventsList.map(({ id, start, summary }) => {
                      return (
                          <CalendarItem key={id}>
                              <ItemTime>
                                  {start.dateTime ? start.dateTime : 'all day'}
                              </ItemTime>
                              <ItemContent>{summary}</ItemContent>
                          </CalendarItem>
                      );
                  })
                : NO_CALENDAR_EVENTS}
        </>
    );
};

export default CalendarItems;
