import constants from '@/types/constants';

const generateDate = (typeOfTheWeather: string): string => {
    const { DAILY_TYPE_OF_THE_WEATHER } = constants;
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

export default generateDate;
