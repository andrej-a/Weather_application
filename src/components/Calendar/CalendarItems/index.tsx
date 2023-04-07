import React from 'react';

import { messagesToUI } from '@/types/constants';

import { CalendarItem, ItemContent, ItemTime } from './styles';
import CalendarItemsProps from './types';

const { NO_CALENDAR_EVENTS } = messagesToUI;

const CalendarItems = ({ calendarEventsList }: CalendarItemsProps) => {
    return (
        <>
            {calendarEventsList.length > 0
                ? calendarEventsList.map(({ id, start, summary }) => {
                      return (
                          <CalendarItem data-test="calendar_items" key={id}>
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
