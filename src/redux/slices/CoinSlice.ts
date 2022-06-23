import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CoinSliceState = {
  value: number;
};

const initialState: CoinSliceState = {
  value: 0,
};

export const coinSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    fun: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fun } = coinSlice.actions;

export default coinSlice.reducer;
