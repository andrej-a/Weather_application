import envData from '@/constants/envData';
import ICity from '@/types/ICitiesList';
import dailyWeatherAdapter from '@/utils/dailyWeatherAdapter';

const { WEATHER_API_KEY, DAILY_WEATHER_INFO_URL } = envData;

const getDailyWeatherInfo = async ({ latitude, longitude }: ICity) => {
    if (latitude && longitude) {
        const request = await fetch(
            `${DAILY_WEATHER_INFO_URL}/point?lat=${latitude}&lon=${longitude}&sections=daily&timezone=auto&language=en&units=metric&key=${WEATHER_API_KEY}`,
        );
        const responce = await request.json();

        return dailyWeatherAdapter(responce);
    }
    return [];
};

export default getDailyWeatherInfo;
