import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';

import UserInterface from '@/components/UserInterface';
import { useAppSelector } from '@/hooks/useStore';
import dailyWeatherSelector from '@/store/selectors/dailyWeather';
import hourlyWeatherSelector from '@/store/selectors/hourlyWeatherSelector';
import mainSelector from '@/store/selectors/mainSelector';
import constants from '@/types/constants';
import getImageAccordingToWeather from '@/utils/getImageAccordingToWeather';

import { Wrapper } from './styles';

const Main = () => {
    const { SPINNER_COLOR } = constants;
    const { typeOfTheWeather } = useAppSelector(mainSelector);
    const { dailyWeatherList } = useAppSelector(dailyWeatherSelector);
    const { hourlyWeatherList } = useAppSelector(hourlyWeatherSelector);

    const [weatherCode, setWeatherCode] = useState(0);
    const [isImageReady, setIsImageReady] = useState(false);

    useLayoutEffect(() => {
        if (dailyWeatherList.length) {
            setWeatherCode(
                getImageAccordingToWeather(
                    dailyWeatherList,
                    hourlyWeatherList,
                    typeOfTheWeather,
                ),
            );
            setIsImageReady(true);
        }
        if (hourlyWeatherList.length) {
            setWeatherCode(
                getImageAccordingToWeather(
                    dailyWeatherList,
                    hourlyWeatherList,
                    typeOfTheWeather,
                ),
            );
            setIsImageReady(true);
        }
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
