import React from 'react';
import { ReactSVG } from 'react-svg';

import CloudRainSun from '@/assets/svg/cloud_rain_sun.svg';
import SunSVG from '@/assets/svg/cloud_strong.svg';
import CloudSvg from '@/assets/svg/cloud_sun.svg';

import {
    DailyWeatherCard,
    DailyWeatherWrapper,
    Date,
    WeatherData,
    WeatherDataWrapper,
} from './styles';

const DailyWeather = () => {
    return (
        <DailyWeatherWrapper>
            <DailyWeatherCard>
                <ReactSVG src={SunSVG} />
                <WeatherDataWrapper>
                    <Date>17.03.2023</Date>
                    <WeatherData>5</WeatherData>
                </WeatherDataWrapper>
            </DailyWeatherCard>
            <DailyWeatherCard>
                <ReactSVG src={CloudSvg} />
                <WeatherDataWrapper>
                    <Date>17.03.2023</Date>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </DailyWeatherCard>
            <DailyWeatherCard>
                <ReactSVG src={SunSVG} />
                <WeatherDataWrapper>
                    <Date>17.03.2023</Date>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </DailyWeatherCard>
            <DailyWeatherCard>
                <ReactSVG src={CloudRainSun} />
                <WeatherDataWrapper>
                    <Date>17.03.2023</Date>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </DailyWeatherCard>
            <DailyWeatherCard>
                <ReactSVG src={SunSVG} />
                <WeatherDataWrapper>
                    <Date>17.03.2023</Date>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </DailyWeatherCard>
            <DailyWeatherCard>
                <ReactSVG src={SunSVG} />
                <WeatherDataWrapper>
                    <Date>17.03.2023</Date>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </DailyWeatherCard>
            <DailyWeatherCard>
                <ReactSVG src={SunSVG} />
                <WeatherDataWrapper>
                    <Date>17.03.2023</Date>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </DailyWeatherCard>
        </DailyWeatherWrapper>
    );
};

export default DailyWeather;
