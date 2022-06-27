import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from './api/cryptoApi';
import { newsApi } from './api/newsApi';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
