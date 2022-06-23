import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CoinSliceState = {
  searchValue: string;
};

const initialState: CoinSliceState = {
  searchValue: '',
};

export const coinSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue } = coinSlice.actions;

export default coinSlice.reducer;
