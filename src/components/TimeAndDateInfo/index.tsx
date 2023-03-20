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
        }, 1000 * 60);
        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    return (
        <TimeAndDateInfoWrapper>
            <TimeWrapper>
                {hours}:{minutes}
            </TimeWrapper>
            <DateWrapper>
                {day}, {date} {month} {year}
            </DateWrapper>
        </TimeAndDateInfoWrapper>
    );
};

export default TimeAndDateInfo;
