import React, { useLayoutEffect } from 'react';
import { ClockLoader } from 'react-spinners';

import UserInterface from '@/components/UserInterface';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import constants from '@/types/constants';
import getImageAccordingToWeather from '@/utils/getImageAccordingToWeather';

import * as imports from './imports';
import { Wrapper } from './styles';

const {
    citySelector,
    dailyWeatherSelector,
    hourlyWeatherSelector,
    mainSelector,
    setImageReading,
    setWeatherCodeForImage,
} = imports;

const Main = () => {
    const { SPINNER_COLOR } = constants;
    const { typeOfTheWeather } = useAppSelector(mainSelector);
    const { dailyWeatherList } = useAppSelector(dailyWeatherSelector);
    const { hourlyWeatherList } = useAppSelector(hourlyWeatherSelector);
    const { isImageReady, weatherCode } = useAppSelector(mainSelector);
    const {
        targetCity: { id },
    } = useAppSelector(citySelector);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(
            setWeatherCodeForImage(
                getImageAccordingToWeather(
                    dailyWeatherList,
                    hourlyWeatherList,
                    typeOfTheWeather,
                    id,
                    isImageReady,
                ),
            ),
        );
        dispatch(setImageReading(true));
    }, [typeOfTheWeather, dailyWeatherList, hourlyWeatherList]);

    return (
        <>
            {isImageReady && weatherCode ? (
                <Wrapper params={`/images/${weatherCode}.jpg`}>
                    <UserInterface />
                </Wrapper>
            ) : (
                <ClockLoader color={SPINNER_COLOR} />
            )}
        </>
    );
};

export default Main;
