import React from 'react';
import { ReactSVG } from 'react-svg';

import LeftArrow from '@/assets/svg/arrow_left.svg';
import RightArrow from '@/assets/svg/arrow_right.svg';
import CloudSvg from '@/assets/svg/cloud_sun.svg';

import { WeatherData, WeatherDataWrapper } from '../DailyWeather/styles';
import {
    HourlyWeatherCard,
    HourlyWeatherWrapper,
    LeftArrowContainer,
    RightArrowContainer,
    Time,
} from './styles';

const HourlyWeather = () => {
    return (
        <HourlyWeatherWrapper>
            <LeftArrowContainer>
                <ReactSVG src={LeftArrow} />
            </LeftArrowContainer>

            <RightArrowContainer>
                <ReactSVG src={RightArrow} />
            </RightArrowContainer>

            <HourlyWeatherCard>
                <ReactSVG src={CloudSvg} />
                <WeatherDataWrapper>
                    <Time>14:00</Time>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </HourlyWeatherCard>
            <HourlyWeatherCard>
                <ReactSVG src={CloudSvg} />
                <WeatherDataWrapper>
                    <Time>14:00</Time>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </HourlyWeatherCard>
            <HourlyWeatherCard>
                <ReactSVG src={CloudSvg} />
                <WeatherDataWrapper>
                    <Time>14:00</Time>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </HourlyWeatherCard>
            <HourlyWeatherCard>
                <ReactSVG src={CloudSvg} />
                <WeatherDataWrapper>
                    <Time>14:00</Time>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </HourlyWeatherCard>
            <HourlyWeatherCard>
                <ReactSVG src={CloudSvg} />
                <WeatherDataWrapper>
                    <Time>14:00</Time>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </HourlyWeatherCard>
            <HourlyWeatherCard>
                <ReactSVG src={CloudSvg} />
                <WeatherDataWrapper>
                    <Time>14:00</Time>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </HourlyWeatherCard>
            <HourlyWeatherCard>
                <ReactSVG src={CloudSvg} />
                <WeatherDataWrapper>
                    <Time>14:00</Time>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </HourlyWeatherCard>
            <HourlyWeatherCard>
                <ReactSVG src={CloudSvg} />
                <WeatherDataWrapper>
                    <Time>14:00</Time>
                    <WeatherData>4</WeatherData>
                </WeatherDataWrapper>
            </HourlyWeatherCard>
        </HourlyWeatherWrapper>
    );
};

export default HourlyWeather;
