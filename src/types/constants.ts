enum constants {
    CITIES_API_ADRESS = 'https://api.api-ninjas.com/v1/geocoding?city=',
    CITIES_API_HEADER = 'X-Api-Key',
    CITIES_SLICE_NAME = 'citiesState',
    CITIES_CACHE_SLICE_NAME = 'citiesCache',
    DAILY_WEATHER_SLICE_NAME = 'dailyWeatherState',
    NO_WEATHER_DATA = 'No weather data here',
    SPINNER_COLOR = '#000',
    WEATHER_CACHE_SLICE_NAME = 'weatherCache',
    MAIN_SLICE_NAME = 'mainSlice',
    DAILY_TYPE_OF_THE_WEATHER = 'Daily',
    HOURLY_TYPE_OF_THE_WEATHER = 'Hourly',
    HOURLY_WEATHER_SLICE_NAME = 'hourlyWeatherState',
    GET_CURRENT_POSITION_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address',
    ERROR_MESSAGE = 'Error was happened',
    CALENDAR_DEFAULT_MESSAGE = 'Sing in to your account to see google calendar events',
    CALENDAR_LIST_SLICE_NAME = 'calendarState',
    NO_CALENDAR_EVENTS = 'No calendar events',
    NO_LOCATION = 'The location has not been determined. Default settings applied',
}

export enum numberConstants {
    REQUEST_DEBOUNCE = 1500,
    MAX_UPCOMING_EVENTS = 25,
    startOfTheEvening = 18,
    startOfTheNight = 23,
}

export default constants;
