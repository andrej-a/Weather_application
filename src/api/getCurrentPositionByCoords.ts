import { v4 as uuidv4 } from 'uuid';

import constants from '@/types/constants';
import ICity from '@/types/ICitiesList';
import showAlert from '@/utils/showAlert';

const swithcher = require('ai-switcher-translit');

interface responceAnswer {
    suggestions: [
        {
            data: {
                city: string;
                latitude: number;
                longitude: number;
                country_iso_code: string;
                region_with_type: string;
            };
        },
    ];
}

const getCurrentPositionByCoords = async ({
    coords: { latitude, longitude },
}: GeolocationPosition) => {
    const { GET_CURRENT_POSITION_URL } = constants;
    const query = {
        lat: latitude,
        lon: longitude,
    };

    try {
        const request = await fetch(GET_CURRENT_POSITION_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Token ${process.env.CURRENT_POSITION_KEY!}`,
            },
            body: JSON.stringify(query),
        });

        const responce: responceAnswer = await request.json();

        if (responce.suggestions[0]) {
            const {
                data: { city, country_iso_code, region_with_type },
            } = responce.suggestions[0];

            const result: ICity = {
                id: uuidv4(),
                name: swithcher.getSwitch(city, {
                    type: 'translit',
                }),
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
