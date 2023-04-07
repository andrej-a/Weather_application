import store from '@/store';
import { setAccessToken, setCalendarEvents } from '@/store/slices/calendar';

export const calculateCards = () => {
    const date = new Date();
    const currentHour = date.getHours();

    if (currentHour >= 18 && currentHour <= 23) {
        return 6;
    }

    const cardsCount = 24 - currentHour;

    return Math.max(cardsCount, 6);
};
export const myMockFunc = () => {
    const mockResponse = {
        accessToken: '1234',
        calendarList: [
            {
                start: {
                    dateTime: '09:00',
                    date: '17/08/2023',
                    timeZone: 'Minsk/auto',
                },
                summary: 'TEST CYPRESS VALUE 1',
                id: 'id1',
            },
            {
                start: {
                    dateTime: '10:00',
                    date: '17/08/2023',
                    timeZone: 'Minsk/auto',
                },
                summary: 'TEST CYPRESS VALUE 2',
                id: 'id2',
            },
            {
                start: {
                    dateTime: '14:00',
                    date: '17/08/2023',
                    timeZone: 'Minsk/auto',
                },
                summary: 'TEST CYPRESS VALUE 3',
                id: 'id2',
            },
        ],
    };
    store.dispatch(setAccessToken(mockResponse.accessToken));
    store.dispatch(setCalendarEvents(mockResponse.calendarList));
};
