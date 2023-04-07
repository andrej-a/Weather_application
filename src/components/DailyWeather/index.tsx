import React, { useEffect } from 'react';
import { ClockLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import { DefaultTheme } from '@/globalStyles';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';

import '@/utils/dailyWeatherAdapter';
import DailyWeatherItems from './DailyWeatherItems';
import * as imports from './imports';
import { DailyWeatherWrapper } from './styles';

const { citySelector, checkWeatherCache, dailyWeatherSelector } = imports;

const DailyWeather = () => {
    const {
        colors: { black },
    } = useTheme() as DefaultTheme;
    const { dailyWeatherList, isDailyWeatherLoading } =
        useAppSelector(dailyWeatherSelector);
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
        <DailyWeatherWrapper>
            {isDailyWeatherLoading ? (
                <ClockLoader color={black} />
            ) : (
                <DailyWeatherItems dailyWeatherList={dailyWeatherList} />
            )}
        </DailyWeatherWrapper>
    );
};

export default DailyWeather;
