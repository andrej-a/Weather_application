import React, { memo } from 'react';

import {
    WeatherData,
    WeatherDataWrapper,
} from '@/components/DailyWeather/DailyWeatherItems/styles';
import { messagesToUI } from '@/types/constants';
import { getCurrentDate } from '@/utils/dateWorkers';

import { HourlyWeatherCard, HourlyWeatherIcon, Time } from './styles';
import HourlyWeatherItemsProps from './types';

const { NO_WEATHER_DATA } = messagesToUI;

const HourlyWeatherItems = memo(
    ({ hourlyWeatherList }: HourlyWeatherItemsProps) => {
        const currentTime = getCurrentDate().hours;
        return (
            <>
                {hourlyWeatherList.length > 0 ? (
                    <>
                        {hourlyWeatherList.map(
                            ({ id, date, code, temperature }) => {
                                return (
                                    <HourlyWeatherCard
                                        params={`${currentTime}:00` === date}
                                        data-test="hourlyWeatherCard"
                                        key={id}
                                    >
                                        <HourlyWeatherIcon
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
            </>
        );
    },
);

export default HourlyWeatherItems;
