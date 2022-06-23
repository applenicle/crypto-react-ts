import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './slices/CoinSlice';
import { cryptoApi } from './cryptoApi';

const store = configureStore({
  reducer: {
    coinReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
