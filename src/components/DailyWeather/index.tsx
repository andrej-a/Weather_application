import React, { useEffect } from 'react';
import { ClockLoader } from 'react-spinners';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import constants from '@/types/constants';

import '@/utils/dailyWeatherAdapter';
import DailyWeatherItems from './DailyWeatherItems';
import * as imports from './imports';
import { DailyWeatherWrapper } from './styles';

const { SPINNER_COLOR } = constants;
const { citySelector, checkWeatherCache, dailyWeatherSelector } = imports;

const DailyWeather = () => {
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
                <ClockLoader color={SPINNER_COLOR} />
            ) : (
                <DailyWeatherItems dailyWeatherList={dailyWeatherList} />
            )}
        </DailyWeatherWrapper>
    );
};

export default DailyWeather;
