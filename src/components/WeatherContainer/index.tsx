import React from 'react';

import DailyWeather from '../DailyWeather';
import HourlyWeather from '../HourlyWeather';
import { Wrapper } from './styles';

const WeatherContainer = () => {
    return (
        <Wrapper>
            <DailyWeather />
            {/* <HourlyWeather /> */}
        </Wrapper>
    );
};

export default WeatherContainer;
