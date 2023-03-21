import React from 'react';
import { ClockLoader } from 'react-spinners';

import { useAppSelector } from '@/hooks/useStore';
import dailyWeatherSelector from '@/store/selectors/dailyWeather';
import constants from '@/types/constants';

import '@/utils/dailyWeatherAdapter';
import {
    DailyWeatherCard,
    DailyWeatherWrapper,
    Date,
    WeatherData,
    WeatherDataWrapper,
} from './styles';

const { NO_WEATHER_DATA, SPINNER_COLOR } = constants;
const DailyWeather = () => {
    const { dailyWeatherList, isDailyWeatherLoading } =
        useAppSelector(dailyWeatherSelector);
    return (
        <DailyWeatherWrapper>
            {isDailyWeatherLoading ? (
                <ClockLoader color={SPINNER_COLOR} />
            ) : dailyWeatherList.length > 0 ? (
                dailyWeatherList.map(({ id, date, temperature, code }) => {
                    return (
                        <DailyWeatherCard key={id}>
                            <img
                                src={`./icons/${code}.png`}
                                alt={`weatherCode-${code}`}
                            />
                            <WeatherDataWrapper>
                                <Date>{date}</Date>
                                <WeatherData>{temperature}</WeatherData>
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
