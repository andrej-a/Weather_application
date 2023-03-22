import ICity from '@/types/ICitiesList';
import hourlyWeatherAdapter from '@/utils/hourlyWeatherAdapter';

const getHourlyWeatherInfo = async ({ latitude, longitude }: ICity) => {
    const request = await fetch(
        `https://api.open-meteo.com/v1/forecast?&forecast_days=1&timezone=auto&latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode`,
    );
    const responce = await request.json();
    return hourlyWeatherAdapter(responce);
};

export default getHourlyWeatherInfo;
