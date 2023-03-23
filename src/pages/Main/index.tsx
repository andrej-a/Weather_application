import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';

import UserInterface from '@/components/UserInterface';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import citySelector from '@/store/selectors/citySelector';
import dailyWeatherSelector from '@/store/selectors/dailyWeather';
import hourlyWeatherSelector from '@/store/selectors/hourlyWeatherSelector';
import mainSelector from '@/store/selectors/mainSelector';
import { setImageReading, setWeatherCodeForImage } from '@/store/slices/main';
import constants from '@/types/constants';
import getImageAccordingToWeather from '@/utils/getImageAccordingToWeather';

import { Wrapper } from './styles';

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
        console.log(id, 'ID');

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
        <React.Fragment>
            {isImageReady && weatherCode ? (
                <Wrapper params={`/images/${weatherCode}.jpg`}>
                    <UserInterface />
                </Wrapper>
            ) : (
                <ClockLoader color={SPINNER_COLOR} />
            )}
        </React.Fragment>
    );
};

export default Main;
