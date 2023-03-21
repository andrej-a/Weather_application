import React from 'react';

import { useAppSelector } from '@/hooks/useStore';
import mainSelector from '@/store/selectors/mainSelector';
import constants from '@/types/constants';

import DailyWeather from '../DailyWeather';
import HourlyWeather from '../HourlyWeather';
import { Wrapper } from './styles';

const WeatherContainer = () => {
    const { DAILY_TYPE_OF_THE_WEATHER } = constants;
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
