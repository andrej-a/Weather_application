import React, { useEffect, useRef, useState } from 'react';

import IDate from '@/types/IDate';
import getCurrentDate from '@/utils/getCurrentDate';

import { DateWrapper, TimeAndDateInfoWrapper, TimeWrapper } from './styles';

const TimeAndDateInfo = () => {
    const [currentDate, setCurrentDate] = useState<IDate>(getCurrentDate());
    const timerRef = useRef(0);
    const { hours, minutes, day, date, month, year } = currentDate;

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            setCurrentDate(getCurrentDate());
        }, 1000 * 20);
        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    return (
        <TimeAndDateInfoWrapper>
            <TimeWrapper data-test="timeItem">
                {hours}:{minutes}
            </TimeWrapper>
            <DateWrapper data-test="dateItem">
                {day}, {date} {month} {year}
            </DateWrapper>
        </TimeAndDateInfoWrapper>
    );
};

export default TimeAndDateInfo;
