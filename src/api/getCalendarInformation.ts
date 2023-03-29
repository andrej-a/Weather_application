import apiCalendar from '@/service/calendar';
import { ICalendarEvent } from '@/store/slices/calendar/initialState';
import setCorrectCalendarDate from '@/utils/setCorrectCalendarDate';

const getCalendarInformation = async () => {
    const { access_token } =
        (await apiCalendar.handleAuthClick()) as unknown as {
            access_token: string;
        };

    if (access_token) {
        const {
            result: { items },
        }: { result: { items: ICalendarEvent[] } } =
            await apiCalendar.listEvents({
                timeMin: new Date().toISOString(),
                showDeleted: true,
                maxResults: 10,
                orderBy: 'updated',
            });

        return {
            access_token,
            calendarList: setCorrectCalendarDate(items),
        };
    }
};

export default getCalendarInformation;
