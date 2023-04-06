import envData from '@/constants/envData';
import ICity from '@/types/ICitiesList';
import dailyWeatherAdapter from '@/utils/dailyWeatherAdapter';

const { WEATHER_API_KEY } = envData;

const getDailyWeatherInfo = async ({ latitude, longitude }: ICity) => {
    if (latitude && longitude) {
        const request = await fetch(
            `https://www.meteosource.com/api/v1/free/point?lat=${latitude}&lon=${longitude}&sections=daily&timezone=auto&language=en&units=metric&key=${WEATHER_API_KEY}`,
        );
        const responce = await request.json();

        return dailyWeatherAdapter(responce);
    }
    return [];
};

export default getDailyWeatherInfo;
