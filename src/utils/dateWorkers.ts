import { days, months } from '@/constants/dateConfig';
import { ICalendarEvent } from '@/store/slices/calendar/initialState';
import constants from '@/types/constants';
import IDate from '@/types/IDate';

export const setCorrectDateFormat = (date: string) => {
    const correctDateFormat = /(\d+)-(?<month>\d+)-(?<day>\d+)/;

    if (date) {
        return date.replace(correctDateFormat, '$<day>.$<month>');
    }
    return date;
};

export const setCorrectCalendarDate = (events: ICalendarEvent[]) => {
    const copy = [...events];
    copy.map(({ start }) => {
        if (start.dateTime) {
            const [hours, minutes] = start.dateTime.slice(11, 19).split(':');
            start.dateTime = `${hours}:${minutes}`;
        }
    });
    return copy;
};

export const getCurrentDate = (): IDate => {
    const currentDate: Date = new Date();

    return {
        hours: `${
            currentDate.getHours() <= 9
                ? `0${currentDate.getHours()}`
                : currentDate.getHours()
        }`,
        minutes: `${
            currentDate.getMinutes() <= 9
                ? `0${currentDate.getMinutes()}`
                : currentDate.getMinutes()
        }`,
        day: days[currentDate.getDay()],
        date:
            currentDate.getDate() <= 9
                ? `0${currentDate.getDate()}`
                : currentDate.getDate(),
        month: months[currentDate.getMonth()],
        year: currentDate.getFullYear(),
    };
};

const { DAILY_TYPE_OF_THE_WEATHER } = constants;

export const generateDate = (typeOfTheWeather: string): string => {
    const dateToCompare = new Date();

    if (typeOfTheWeather === DAILY_TYPE_OF_THE_WEATHER) {
        const day =
            dateToCompare.getDate() <= 9
                ? `0${dateToCompare.getDate()}`
                : dateToCompare.getDate();
        const month =
            dateToCompare.getMonth() <= 9
                ? `0${dateToCompare.getMonth() + 1}`
                : dateToCompare.getMonth() + 1;

        return `${day}.${month}`;
    }
    const hour =
        dateToCompare.getHours() <= 9
            ? `0${dateToCompare.getHours()}`
            : dateToCompare.getHours();
    return `${hour}:00`;
};
