import React, { useEffect } from 'react';
import { ClockLoader } from 'react-spinners';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import constants from '@/types/constants';
import getCurrentDate from '@/utils/getCurrentDate';

import { WeatherData, WeatherDataWrapper } from '../DailyWeather/styles';
import * as imports from './imports';
import { HourlyWeatherCard, HourlyWeatherWrapper, Time } from './styles';

const { checkWeatherCache, citySelector, hourlyWeatherSelector } = imports;

const HourlyWeather = () => {
    const { NO_WEATHER_DATA, SPINNER_COLOR } = constants;
    const { hourlyWeatherList, isHourlyWeatherLoading } = useAppSelector(
        hourlyWeatherSelector,
    );
    const {
        targetCity: { id, name, country },
    } = useAppSelector(citySelector);
    const dispatch = useAppDispatch();
    const currentTime = getCurrentDate().hours;
    useEffect(() => {
        if (id) {
            dispatch(checkWeatherCache(`${name}-${country}`));
        }
    }, []);

    return (
        <HourlyWeatherWrapper>
            {isHourlyWeatherLoading ? (
                <ClockLoader color={SPINNER_COLOR} />
            ) : hourlyWeatherList.length > 0 ? (
                <>
                    {hourlyWeatherList.map(
                        ({ id, date, code, temperature }) => {
                            return (
                                <HourlyWeatherCard
                                    params={`${currentTime}:00` === date}
                                    data-test="hourlyWeatherCard"
                                    key={id}
                                >
                                    <img
                                        src={`./icons/${code}.png`}
                                        alt={`weatherCode-${code}`}
                                    />
                                    <WeatherDataWrapper>
                                        <Time>{date}</Time>
                                        <WeatherData>
                                            {temperature}°
                                        </WeatherData>
                                    </WeatherDataWrapper>
                                </HourlyWeatherCard>
                            );
                        },
                    )}
                </>
            ) : (
                NO_WEATHER_DATA
            )}
        </HourlyWeatherWrapper>
    );
};

export default HourlyWeather;
