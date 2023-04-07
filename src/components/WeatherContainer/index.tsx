import React from 'react';

import { useAppSelector } from '@/hooks/useStore';
import constants from '@/types/constants';

import DailyWeather from '../DailyWeather';
import HourlyWeather from '../HourlyWeather';
import * as imports from './imports';
import { Wrapper } from './styles';

const { mainSelector } = imports;
const { DAILY_TYPE_OF_THE_WEATHER } = constants;

const WeatherContainer = () => {
    const { typeOfTheWeather } = useAppSelector(mainSelector);

    return (
        <Wrapper>
            {typeOfTheWeather === DAILY_TYPE_OF_THE_WEATHER ? (
                <DailyWeather />
            ) : (
                <HourlyWeather />
            )}
        </Wrapper>
    );
};

export default WeatherContainer;
