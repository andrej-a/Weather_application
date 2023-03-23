import { v4 as uuidv4 } from 'uuid';

import constants from '@/types/constants';
import ICity from '@/types/ICitiesList';

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
}: GeolocationPosition): Promise<ICity | undefined> => {
    const { GET_CURRENT_POSITION_URL, CURRENT_POSITION_KEY } = constants;
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
                Authorization: `Token ${CURRENT_POSITION_KEY}`,
            },
            body: JSON.stringify(query),
        });
        const responce: responceAnswer = await request.json();

        const result: ICity = {
            id: uuidv4(),
            name: swithcher.getSwitch(responce.suggestions[0].data.city, {
                type: 'translit',
            }),
            latitude,
            longitude,
            country: responce.suggestions[0].data.country_iso_code,
            state: responce.suggestions[0].data.region_with_type,
        };
        return result;
    } catch (error) {
        console.log(error);
    }
};

export default getCurrentPositionByCoords;
