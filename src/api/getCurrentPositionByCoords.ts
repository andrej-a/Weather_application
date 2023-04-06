import axios from 'axios';
import CyrillicToTranslit from 'cyrillic-to-translit-js/CyrillicToTranslit';
import { v4 as uuidv4 } from 'uuid';

import envData from '@/constants/envData';
import ICity from '@/types/ICitiesList';
import showAlert from '@/utils/showAlert';

const { CURRENT_POSITION_URL, CURRENT_POSITION_KEY } = envData;

const cyrillicToTranslit = CyrillicToTranslit();

const getCurrentPositionByCoords = async ({
    coords: { latitude, longitude },
}: GeolocationPosition) => {
    const query = {
        lat: latitude,
        lon: longitude,
    };
    try {
        const { data } = await axios.post(CURRENT_POSITION_URL!, query, {
            headers: {
                Authorization: `Token ${CURRENT_POSITION_KEY!}`,
            },
        });

        if (data.suggestions[0]) {
            const {
                data: { city, country_iso_code, region_with_type },
            } = data.suggestions[0];

            const result: ICity = {
                id: uuidv4(),
                name: cyrillicToTranslit.transform(city),
                latitude,
                longitude,
                country: country_iso_code,
                state: region_with_type,
            };
            return result;
        }
        return undefined;
    } catch (error) {
        showAlert(error.message);
    }
};

export default getCurrentPositionByCoords;
