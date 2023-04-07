import React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import constants from '@/types/constants';
import { weatherTypes } from '@/types/storeInitialization';

import * as imports from './imports';
import {
    DailyWeatherButton,
    HourlyWeatherButton,
    SwitchWrapper,
} from './styles';

const { setTypeOfTheWeather, mainSelector } = imports;
const { DAILY_TYPE_OF_THE_WEATHER, HOURLY_TYPE_OF_THE_WEATHER } = constants;

const WeatherSwitcher = () => {
    const dispatch = useAppDispatch();
    const { typeOfTheWeather } = useAppSelector(mainSelector);
    const onHandleTypeOfWeather = (type: weatherTypes) => () => {
        dispatch(setTypeOfTheWeather(type));
    };

    return (
        <SwitchWrapper>
            <DailyWeatherButton
                isTypeDaily={typeOfTheWeather === DAILY_TYPE_OF_THE_WEATHER}
                data-test="dailyButton"
                onClick={onHandleTypeOfWeather(DAILY_TYPE_OF_THE_WEATHER)}
            >
                {DAILY_TYPE_OF_THE_WEATHER}
            </DailyWeatherButton>
            <HourlyWeatherButton
                isTypeDaily={typeOfTheWeather === DAILY_TYPE_OF_THE_WEATHER}
                data-test="hourlyButton"
                onClick={onHandleTypeOfWeather(HOURLY_TYPE_OF_THE_WEATHER)}
            >
                {HOURLY_TYPE_OF_THE_WEATHER}
            </HourlyWeatherButton>
        </SwitchWrapper>
    );
};

export default WeatherSwitcher;
