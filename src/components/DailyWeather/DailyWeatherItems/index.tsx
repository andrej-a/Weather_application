import React, { memo } from 'react';

import { messagesToUI } from '@/types/constants';
import { getCurrentDate } from '@/utils/dateWorkers';

import {
    DailyWeatherCard,
    DailyWeatherIcon,
    Date,
    WeatherData,
    WeatherDataWrapper,
} from './styles';
import DailyWeatherItemsProps from './types';

const { NO_WEATHER_DATA } = messagesToUI;

const DailyWeatherItems = memo(
    ({ dailyWeatherList }: DailyWeatherItemsProps) => {
        return (
            <>
                {dailyWeatherList.length > 0
                    ? dailyWeatherList.map(
                          ({ id, date, temperature, code }) => {
                              return (
                                  <DailyWeatherCard
                                      params={
                                          `${getCurrentDate().date}` ===
                                          date.split('.')[0]
                                      }
                                      data-test="dailyWeatherCard"
                                      key={id}
                                  >
                                      <DailyWeatherIcon
                                          src={`./icons/${code}.png`}
                                          alt={`weatherCode-${code}`}
                                      />
                                      <WeatherDataWrapper>
                                          <Date>{date}</Date>
                                          <WeatherData>
                                              {temperature}°
                                          </WeatherData>
                                      </WeatherDataWrapper>
                                  </DailyWeatherCard>
                              );
                          },
                      )
                    : NO_WEATHER_DATA}
            </>
        );
    },
);

export default DailyWeatherItems;
