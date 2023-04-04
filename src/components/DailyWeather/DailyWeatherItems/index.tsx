import React, { memo } from 'react';

import constants from '@/types/constants';
import getCurrentDate from '@/utils/getCurrentDate';

import {
    DailyWeatherCard,
    Date,
    WeatherData,
    WeatherDataWrapper,
} from './styles';
import DailyWeatherItemsProps from './types';

const DailyWeatherItems = memo(
    ({ dailyWeatherList }: DailyWeatherItemsProps) => {
        const { NO_WEATHER_DATA } = constants;
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
                                      <img
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
