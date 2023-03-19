import { days, months } from '@/components/TimeAndDateInfo/config/dateConfig';
import IDate from '@/types/IDate';

const getCurrentDate = (): IDate => {
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
        date: currentDate.getDate(),
        month: months[currentDate.getMonth()],
        year: currentDate.getFullYear(),
    };
};

export default getCurrentDate;
