import React from 'react';

import DailyWeather from '@/components/DailyWeather';

import { Wrapper } from './styles';

const WeatherContainer = () => {
    return (
        <Wrapper>
            <DailyWeather />
        </Wrapper>
    );
};

export default WeatherContainer;
