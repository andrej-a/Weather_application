import generateDate from '@/utils/generateDate';
import getCorrectWeatherCode from '@/utils/getCorrectWeatherCode';
import setCorrectCalendarDate from '@/utils/setCorrectCalendarDate';

describe('utils functional', () => {
    it('get correct weather code', () => {
        expect(getCorrectWeatherCode(51)).toEqual(10);
        expect(getCorrectWeatherCode(0)).toEqual(2);
        expect(getCorrectWeatherCode(61)).toEqual(10);
        expect(getCorrectWeatherCode(75)).toEqual(17);
        expect(getCorrectWeatherCode(96)).toEqual(14);
        expect(getCorrectWeatherCode()).toEqual(1);
    });
    it('generate correct date', () => {
        const typeOfTheWeather = 'Daily';
        const dateToCompare = new Date();
        const day =            dateToCompare.getDate() <= 9
                ? `0${dateToCompare.getDate()}`
                : dateToCompare.getDate();
        const month =            dateToCompare.getMonth() <= 9
                ? `0${dateToCompare.getMonth() + 1}`
                : dateToCompare.getMonth() + 1;
        const year = dateToCompare.getFullYear();
        const currentDate = `${day}.${month}.${year}`;
        expect(generateDate(typeOfTheWeather)).toEqual(currentDate);
    });
    it('generate correct time', () => {
        const typeOfTheWeather = 'Hourly';
        const dateToCompare = new Date();
        const hour =            dateToCompare.getHours() <= 9
                ? `0${dateToCompare.getHours()}`
                : dateToCompare.getHours();
        const currentTime = `${hour}:00`;
        expect(generateDate(typeOfTheWeather)).toEqual(currentTime);
    });
    it('correct calendare date', () => {
        const events = [
            {
                start: {
                    dateTime: '2023-03-30T15:00:00+03:00',
                    timeZone: 'Minsk',
                },
                summary: 'Some event',
                id: 'event-id',
            },
        ];
        const adaptedEvents = setCorrectCalendarDate(events);
        expect(adaptedEvents[0].start.dateTime).toEqual('15:00');
    });
});
