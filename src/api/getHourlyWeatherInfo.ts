import envData from '@/constants/envData';
import ICity from '@/types/ICitiesList';
import hourlyWeatherAdapter from '@/utils/hourlyWeatherAdapter';

const { HOURLY_WEATHER_INFO_URL } = envData;

const getHourlyWeatherInfo = async ({ latitude, longitude }: ICity) => {
    const request = await fetch(
        `${HOURLY_WEATHER_INFO_URL}?&forecast_days=1&timezone=auto&latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode`,
    );
    const responce = await request.json();
    return hourlyWeatherAdapter(responce);
};

export default getHourlyWeatherInfo;
