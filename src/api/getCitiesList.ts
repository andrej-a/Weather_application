import { v4 as uuidv4 } from 'uuid';

import envData from '@/constants/envData';
import constants from '@/types/constants';
import ICity from '@/types/ICitiesList';

const { CITIES_API_HEADER } = constants;
const { CITIES_API_ADRESS, CITIES_API_KEY } = envData;

const getCitiesList = async (city: string): Promise<ICity[]> => {
    const request = await fetch(`${CITIES_API_ADRESS}${city}`, {
        headers: {
            [CITIES_API_HEADER]: CITIES_API_KEY!,
        },
    });
    let responce: ICity[] = await request.json();
    if (responce.length) {
        responce = responce.map(item => {
            return (item = { ...item, id: uuidv4() });
        });
    }
    return responce;
};

export default getCitiesList;
