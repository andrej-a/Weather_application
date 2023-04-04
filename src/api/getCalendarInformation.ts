import apiCalendar from '@/service/calendar';
import { ICalendarEvent } from '@/store/slices/calendar/initialState';
import { numberConstants } from '@/types/constants';
import { setCorrectCalendarDate } from '@/utils/dateWorkers';

const { MAX_UPCOMING_EVENTS, NUMBER_MS_IN_THE_DAY } = numberConstants;
const getCalendarInformation = async () => {
    const { access_token }: { access_token: string } =
        await apiCalendar.handleAuthClick();

    if (access_token) {
        const today = new Date();
        today.setHours(Math.abs(today.getTimezoneOffset() / 60), 0, 0, 0);
        const maxDateToRequest = new Date(
            today.getTime() + NUMBER_MS_IN_THE_DAY,
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
