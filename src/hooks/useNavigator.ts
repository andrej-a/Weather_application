import getCurrentPositionByCoords from '@/api/getCurrentPositionByCoords';
import * as imports from '@/components/App/imports';
import { messagesToUI } from '@/types/constants';
import ICity from '@/types/ICitiesList';
import showAlert from '@/utils/showAlert';

import { useAppDispatch, useAppSelector } from './useStore';

const {
    mainSelector,
    checkCache,
    setImageReading,
    setTargetCity,
    setWeatherCodeForImage,
    checkWeatherCache,
} = imports;
const { NO_LOCATION } = messagesToUI;
const useNavigator = () => {
    const dispatch = useAppDispatch();
    const { weatherCode } = useAppSelector(mainSelector);

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

    return { defaultUserSettings, getPositionCallback };
};

export default useNavigator;
