import getCurrentPositionByCoords from '@/api/getCurrentPositionByCoords';

const cb = (pos: GeolocationPosition) => {
    return getCurrentPositionByCoords(pos);
};
const getPosition = () => {
    navigator.geolocation.getCurrentPosition(cb);
};

export default getPosition;
