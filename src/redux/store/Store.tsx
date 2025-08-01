import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import appReducer from '../reducer/RootReducer';

export const store = configureStore({
    reducer: appReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
            actionCreatorCheck: false,
        }),
    // }).concat(logger),
});
export const getStoreState = () => store.getState();
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>