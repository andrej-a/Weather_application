import { ICalendarEvent } from '@/store/slices/calendar/initialState';

interface ICurrentPositionResponce {
    suggestions: [
        {
            data: {
                city: string;
                latitude: number;
                longitude: number;
                country_iso_code: string;
                region_with_type: string;
            };
        },
    ];
}

export interface ICalendareResponce {
    access_token: string;
    calendarList: ICalendarEvent[];
}
export default ICurrentPositionResponce;
