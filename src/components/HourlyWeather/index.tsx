import React, { useEffect } from 'react';
import { ClockLoader } from 'react-spinners';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import citySelector from '@/store/selectors/citySelector';
import hourlyWeatherSelector from '@/store/selectors/hourlyWeatherSelector';
import { checkWeatherCache } from '@/store/slices/weatherCache';
import constants from '@/types/constants';

import { WeatherData, WeatherDataWrapper } from '../DailyWeather/styles';
import { HourlyWeatherCard, HourlyWeatherWrapper, Time } from './styles';

const HourlyWeather = () => {
    const { NO_WEATHER_DATA, SPINNER_COLOR } = constants;
    const { hourlyWeatherList, isHourlyWeatherLoading } = useAppSelector(
        hourlyWeatherSelector,
    );
    const { targetCity } = useAppSelector(citySelector);
    const { id, name, country } = targetCity;
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
            ) : hourlyWeatherList.length > 0 ? (
                <React.Fragment>
                    {hourlyWeatherList.map(
                        ({ id, date, code, temperature }) => {
                            return (
                                <HourlyWeatherCard
                                    data-test="hourlyWeatherCard"
                                    key={id}
                                >
                                    <img
                                        src={`./icons/${code}.png`}
                                        alt={`weatherCode-${code}`}
                                    />
                                    <WeatherDataWrapper>
                                        <Time>{date}</Time>
                                        <WeatherData>{temperature}</WeatherData>
                                    </WeatherDataWrapper>
                                </HourlyWeatherCard>
                            );
                        },
                    )}
                </React.Fragment>
            ) : (
                NO_WEATHER_DATA
            )}
        </HourlyWeatherWrapper>
    );
};

export default HourlyWeather;
