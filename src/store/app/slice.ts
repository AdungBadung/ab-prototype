import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAppState {
  dummy: boolean;
}

const appSlice = createSlice({
  name: 'app',
  initialState: {
    dummy: true
  } as IAppState,
  reducers: {
    changeDummy(state, action: PayloadAction<boolean>) {
      state.dummy = action.payload;
    }
  }
});

export const { actions, reducer } = appSlice;
