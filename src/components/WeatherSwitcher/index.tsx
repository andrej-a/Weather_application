import React from 'react';

import {
    DailyWeatherButton,
    HourlyWeatherButton,
    SwitchWrapper,
} from './styles';

const WeatherSwitcher = () => {
    return (
        <SwitchWrapper>
            <DailyWeatherButton>Daily</DailyWeatherButton>
            <HourlyWeatherButton>Hourly</HourlyWeatherButton>
        </SwitchWrapper>
    );
};

export default WeatherSwitcher;
