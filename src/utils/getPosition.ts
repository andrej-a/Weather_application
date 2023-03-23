import getCurrentPositionByCoords from '@/api/getCurrentPositionByCoords';
import IPosition from '@/types/IPosition';

const cb = (pos: GeolocationPosition) => {
    return getCurrentPositionByCoords(pos);
};
const getPosition = () => {
    navigator.geolocation.getCurrentPosition(cb);
};

export default getPosition;
