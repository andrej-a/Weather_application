import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import getCurrentPositionByCoords from '@/api/getCurrentPositionByCoords';
import GlobalStyle from '@/globalStyles';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import Main from '@/pages/Main';
import mainSelector from '@/store/selectors/mainSelector';
import { checkCache } from '@/store/slices/citiesCache';
import { setTargetCity } from '@/store/slices/citiesList';
import { setImageReading, setWeatherCodeForImage } from '@/store/slices/main';
import { checkWeatherCache } from '@/store/slices/weatherCache';
import ICity from '@/types/ICitiesList';

import { ApplicationWrapper } from './styles';

const App = () => {
    const dispatch = useAppDispatch();
    const { weatherCode } = useAppSelector(mainSelector);

    const getPositionCallback = async (pos: GeolocationPosition) => {
        const currentUserPosition: ICity = (await getCurrentPositionByCoords(
            pos,
        )) as ICity;
        const { id, name, country } = currentUserPosition;
        if (id) {
            dispatch(setTargetCity(currentUserPosition));
            dispatch(checkCache(name));
            dispatch(checkWeatherCache(`${name}-${country}`));
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getPositionCallback, error => {
            if (error.PERMISSION_DENIED) {
                dispatch(setImageReading(true));
                weatherCode
                    ? dispatch(setWeatherCodeForImage(weatherCode))
                    : dispatch(setWeatherCodeForImage(2));
            }
        });
    }, []);

    return (
        <ApplicationWrapper>
            <Main />
            <GlobalStyle />
            <ToastContainer />
        </ApplicationWrapper>
    );
};

export default App;
