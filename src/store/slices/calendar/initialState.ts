export interface ICalendarEvent {
    start: { dateTime: string; timeZone: string };
    summary: string;
    id: string;
}
export interface ICalendarInitialState {
    accessToken: string;
    isLoading: boolean;
    calendarEventsList: ICalendarEvent[];
}

const initialState: ICalendarInitialState = {
    accessToken: '',
    isLoading: false,
    calendarEventsList: [],
};

export default initialState;
