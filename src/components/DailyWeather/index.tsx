import React, { useEffect } from 'react';
import { ClockLoader } from 'react-spinners';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import constants from '@/types/constants';
import getCurrentDate from '@/utils/getCurrentDate';

import '@/utils/dailyWeatherAdapter';
import * as imports from './imports';
import {
    DailyWeatherCard,
    DailyWeatherWrapper,
    Date,
    WeatherData,
    WeatherDataWrapper,
} from './styles';

const { NO_WEATHER_DATA, SPINNER_COLOR } = constants;
const { citySelector, checkWeatherCache, dailyWeatherSelector } = imports;

const DailyWeather = () => {
    const { dailyWeatherList, isDailyWeatherLoading } =
        useAppSelector(dailyWeatherSelector);
    const { targetCity } = useAppSelector(citySelector);
    const { id, name, country } = targetCity;
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
            ) : dailyWeatherList.length > 0 ? (
                dailyWeatherList.map(({ id, date, temperature, code }) => {
                    return (
                        <DailyWeatherCard
                            params={
                                `${getCurrentDate().date}` ===
                                date.split('.')[0]
                            }
                            data-test="dailyWeatherCard"
                            key={id}
                        >
                            <img
                                src={`./icons/${code}.png`}
                                alt={`weatherCode-${code}`}
                            />
                            <WeatherDataWrapper>
                                <Date>{date}</Date>
                                <WeatherData>{temperature}°</WeatherData>
                            </WeatherDataWrapper>
                        </DailyWeatherCard>
                    );
                })
            ) : (
                NO_WEATHER_DATA
            )}
        </DailyWeatherWrapper>
    );
};

export default DailyWeather;
