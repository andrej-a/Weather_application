import { ICalendarEvent } from '@/store/slices/calendar/initialState';

const setCorrectCalendarDate = (events: ICalendarEvent[]) => {
    events.map(({ start }) => {
        const [hours, minutes] = start.dateTime.slice(11, 19).split(':');
        start.dateTime = `${hours}:${minutes}`;
    });
    return events;
};

export default setCorrectCalendarDate;
