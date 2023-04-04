import React, { useEffect } from 'react';
import { ClockLoader } from 'react-spinners';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import constants from '@/types/constants';

import HourlyWeatherItems from './HourlyWeatherItems';
import * as imports from './imports';
import { HourlyWeatherWrapper } from './styles';

const { checkWeatherCache, citySelector, hourlyWeatherSelector } = imports;
const HourlyWeather = () => {
    const { SPINNER_COLOR } = constants;
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
                <ClockLoader color={SPINNER_COLOR} />
            ) : (
                <HourlyWeatherItems hourlyWeatherList={hourlyWeatherList} />
            )}
        </HourlyWeatherWrapper>
    );
};

export default HourlyWeather;
