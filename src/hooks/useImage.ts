import { useEffect } from 'react';

import * as imports from '@/pages/Main/imports';
import getImageAccordingToWeather from '@/utils/getImageAccordingToWeather';

import { useAppDispatch, useAppSelector } from './useStore';

const {
    mainSelector,
    dailyWeatherSelector,
    hourlyWeatherSelector,
    citySelector,
    setWeatherCodeForImage,
    setImageReading,
} = imports;

const useImage = () => {
    const { typeOfTheWeather } = useAppSelector(mainSelector);
    const { dailyWeatherList } = useAppSelector(dailyWeatherSelector);
    const { hourlyWeatherList } = useAppSelector(hourlyWeatherSelector);
    const { isImageReady } = useAppSelector(mainSelector);
    const {
        targetCity: { id },
    } = useAppSelector(citySelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
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
};

export default useImage;
