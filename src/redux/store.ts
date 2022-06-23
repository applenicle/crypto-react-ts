import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './slices/CoinSlice';
import { cryptoApi } from './cryptoApi';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    coinReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
