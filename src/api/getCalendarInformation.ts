import apiCalendar from '@/service/calendar';
import { ICalendarEvent } from '@/store/slices/calendar/initialState';
import { numberConstants } from '@/types/constants';
import setCorrectCalendarDate from '@/utils/setCorrectCalendarDate';

const { MAX_UPCOMING_EVENTS } = numberConstants;
const getCalendarInformation = async () => {
    const { access_token }: { access_token: string } =
        await apiCalendar.handleAuthClick();

    if (access_token) {
        const {
            result: { items },
        }: { result: { items: ICalendarEvent[] } } =
            await apiCalendar.listUpcomingEvents(MAX_UPCOMING_EVENTS);

        return {
            access_token,
            calendarList: setCorrectCalendarDate(items),
        };
    }
};

export default getCalendarInformation;
