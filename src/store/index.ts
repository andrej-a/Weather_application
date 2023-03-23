import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import citiesCache from '@/store/slices/citiesCache';
import citiesState from '@/store/slices/citiesList';
import dailyWeatherState from '@/store/slices/dailyWeatherList';
import hourlyWeatherState from '@/store/slices/hourlyWeatherList';
import mainSlice from '@/store/slices/main';
import weatherCach from '@/store/slices/weatherCache';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import rootSaga from './sagas';

const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    citiesState,
    citiesCache,
    dailyWeatherState,
    weatherCach,
    mainSlice,
    hourlyWeatherState,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
