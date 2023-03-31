import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import getCurrentPositionByCoords from '@/api/getCurrentPositionByCoords';
import GlobalStyle from '@/globalStyles';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import Main from '@/pages/Main';
import mainSelector from '@/store/selectors/mainSelector';
import { checkCache } from '@/store/slices/citiesCache';
import { setTargetCity } from '@/store/slices/citiesList';
import { setImageReading, setWeatherCodeForImage } from '@/store/slices/main';
import { checkWeatherCache } from '@/store/slices/weatherCache';
import constants from '@/types/constants';
import ICity from '@/types/ICitiesList';
import showAlert from '@/utils/showAlert';

import { ApplicationWrapper } from './styles';

const App = () => {
    const dispatch = useAppDispatch();
    const { weatherCode } = useAppSelector(mainSelector);
    const { NO_LOCATION } = constants;

    const defaultUserSettings = () => {
        dispatch(setImageReading(true));
        weatherCode
            ? dispatch(setWeatherCodeForImage(weatherCode))
            : dispatch(setWeatherCodeForImage(2));
        showAlert(NO_LOCATION);
    };

    const getPositionCallback = async (pos: GeolocationPosition) => {
        const currentUserPosition: ICity | undefined =
            await getCurrentPositionByCoords(pos);

        if (currentUserPosition) {
            const { name, country } = currentUserPosition;
            dispatch(setTargetCity(currentUserPosition));
            dispatch(checkCache(name));
            dispatch(checkWeatherCache(`${name}-${country}`));
        } else {
            defaultUserSettings();
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getPositionCallback, error => {
            if (error.PERMISSION_DENIED) {
                defaultUserSettings();
            }
        });
    }, []);

    return (
        <ApplicationWrapper>
            <Main />
            <GlobalStyle />
            <Toaster />
        </ApplicationWrapper>
    );
};

export default App;
