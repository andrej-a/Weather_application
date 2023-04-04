import React from 'react';

import { useAppDispatch } from '@/hooks/useStore';
import { weatherTypes } from '@/store/slices/main/initialState';
import constants from '@/types/constants';

import * as imports from './imports';
import {
    DailyWeatherButton,
    HourlyWeatherButton,
    SwitchWrapper,
} from './styles';

const { setTypeOfTheWeather } = imports;

const WeatherSwitcher = () => {
    const { DAILY_TYPE_OF_THE_WEATHER, HOURLY_TYPE_OF_THE_WEATHER } = constants;
    const dispatch = useAppDispatch();

    const onHandleTypeOfWeather = (type: weatherTypes) => () => {
        dispatch(setTypeOfTheWeather(type));
    };

    return (
        <SwitchWrapper>
            <DailyWeatherButton
                data-test="dailyButton"
                onClick={onHandleTypeOfWeather(DAILY_TYPE_OF_THE_WEATHER)}
            >
                {DAILY_TYPE_OF_THE_WEATHER}
            </DailyWeatherButton>
            <HourlyWeatherButton
                data-test="hourlyButton"
                onClick={onHandleTypeOfWeather(HOURLY_TYPE_OF_THE_WEATHER)}
            >
                {HOURLY_TYPE_OF_THE_WEATHER}
            </HourlyWeatherButton>
        </SwitchWrapper>
    );
};

export default WeatherSwitcher;
