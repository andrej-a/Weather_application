import React, { useEffect } from 'react';
import { ClockLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import { DefaultTheme } from '@/globalStyles';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';

import HourlyWeatherItems from './HourlyWeatherItems';
import * as imports from './imports';
import { HourlyWeatherWrapper } from './styles';

const { checkWeatherCache, citySelector, hourlyWeatherSelector } = imports;
const HourlyWeather = () => {
    const {
        colors: { black },
    } = useTheme() as DefaultTheme;
    const { hourlyWeatherList, isHourlyWeatherLoading } = useAppSelector(
        hourlyWeatherSelector,
    );
    const {
        targetCity: { id, name, country },
    } = useAppSelector(citySelector);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) {
            dispatch(checkWeatherCache(`${name}-${country}`));
        }
    }, []);

    return (
        <HourlyWeatherWrapper>
            {isHourlyWeatherLoading ? (
                <ClockLoader color={black} />
            ) : (
                <HourlyWeatherItems hourlyWeatherList={hourlyWeatherList} />
            )}
        </HourlyWeatherWrapper>
    );
};

export default HourlyWeather;
