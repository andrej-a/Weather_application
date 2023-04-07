import store from '@/store';
import { setAccessToken, setCalendarEvents } from '@/store/slices/calendar';
import { calendarManager } from '@/utils/calendarManager';

describe('calendar test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3030/');
        const myMockFunc = () => {
            const mockResponse = {
                accessToken: '1234',
                calendarList: [
                    {
                        start: {
                            dateTime: '09:00',
                            date: '17/08/2023',
                            timeZone: 'Minsk/auto',
                        },
                        summary: 'TEST CYPRESS VALUE',
                        id: 'qwerty123',
                    },
                ],
            };
            store.dispatch(setAccessToken(mockResponse.accessToken));
            store.dispatch(setCalendarEvents(mockResponse.calendarList));
        };
        cy.stub(calendarManager, 'startCalendareSaga').callsFake(() => {
            myMockFunc();
        });
    }),
        it('should set access token and calendar events on login button click', () => {
            cy.wait(4000);
            cy.get('[data-test="calendar_login_button"]').click();
            cy.get('[data-test="calendar_login_button"]').should(
                'have.text',
                'Sign Out',
            );
        });
});
