import apiCalendar from '@/service/calendar';
import { ICalendarEvent } from '@/store/slices/calendar/initialState';
import { numberConstants } from '@/types/constants';
import setCorrectCalendarDate from '@/utils/setCorrectCalendarDate';

const { MAX_UPCOMING_EVENTS } = numberConstants;
const getCalendarInformation = async () => {
    const { access_token }: { access_token: string } =
        await apiCalendar.handleAuthClick();

    if (access_token) {
        const today = new Date();
        const maxDateToRequest = new Date(
            today.getTime() + 24 * 60 * 60 * 1000,
        ).toISOString();
        const {
            result: { items },
        }: { result: { items: ICalendarEvent[] } } =
            await apiCalendar.listEvents({
                timeMin: today.toISOString(),
                timeMax: maxDateToRequest,
                showDeleted: false,
                maxResults: MAX_UPCOMING_EVENTS,
                orderBy: 'updated',
            });

        return {
            access_token,
            calendarList: setCorrectCalendarDate(items),
        };
    }
};

export default getCalendarInformation;
