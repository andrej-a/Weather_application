import { ICalendarEvent } from '@/store/slices/calendar/initialState';

const setCorrectCalendarDate = (events: ICalendarEvent[]) => {
    const copy = [...events];
    copy.map(({ start }) => {
        if (start.dateTime) {
            const [hours, minutes] = start.dateTime.slice(11, 19).split(':');
            start.dateTime = `${hours}:${minutes}`;
        }
    });
    return copy;
};

export default setCorrectCalendarDate;
