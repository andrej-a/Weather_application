import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const filteredCitiesCache = createSelector(
    (state: RootState) => state.citiesCache.citiesCache,
    (_: RootState, cityName: string) => cityName,
    (citiesCache, cityName) =>
        citiesCache.filter(city => city.name.match(cityName)),
);
export default filteredCitiesCache;
