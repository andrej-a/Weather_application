import React, { useEffect } from 'react';

import getCurrentPositionByCoords from '@/api/getCurrentPositionByCoords';
import GlobalStyle from '@/globalStyles';
import { useAppDispatch } from '@/hooks/useStore';
import Main from '@/pages/Main';
import { checkCache } from '@/store/slices/citiesCache';
import { setTargetCity } from '@/store/slices/citiesList';
import { checkWeatherCache } from '@/store/slices/weatherCache';
import ICity from '@/types/ICitiesList';

import { ApplicationWrapper } from './styles';

const App = () => {
    const dispatch = useAppDispatch();

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
        navigator.geolocation.getCurrentPosition(getPositionCallback);
    }, []);
    return (
        <ApplicationWrapper>
            <Main />
            <GlobalStyle />
        </ApplicationWrapper>
    );
};

export default App;
