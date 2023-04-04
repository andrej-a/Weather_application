import React, { useEffect, useRef, useState } from 'react';

import { numberConstants } from '@/types/constants';
import IDate from '@/types/IDate';
import { getCurrentDate } from '@/utils/dateWorkers';

import { DateWrapper, TimeAndDateInfoWrapper, TimeWrapper } from './styles';

const { NUMBER_MS_IN_THE_SECOND, UPLOAD_CLOCK_VALUE_INTERVAL } =
    numberConstants;
const TimeAndDateInfo = () => {
    const [currentDate, setCurrentDate] = useState<IDate>(getCurrentDate());
    const timerRef = useRef(0);
    const { hours, minutes, day, date, month, year } = currentDate;

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            setCurrentDate(getCurrentDate());
        }, NUMBER_MS_IN_THE_SECOND * UPLOAD_CLOCK_VALUE_INTERVAL);
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
