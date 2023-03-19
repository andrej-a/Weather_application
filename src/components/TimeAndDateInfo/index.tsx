import React from 'react';

import { DateWrapper, TimeAndDateInfoWrapper, TimeWrapper } from './styles';

const TimeAndDateInfo = () => {
    return (
        <TimeAndDateInfoWrapper>
            <TimeWrapper>12:20 PM</TimeWrapper>
            <DateWrapper>Monday, 2 February 2023</DateWrapper>
        </TimeAndDateInfoWrapper>
    );
};

export default TimeAndDateInfo;
