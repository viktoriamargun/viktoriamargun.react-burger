import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTab: 'one',
};

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setCurrentTab } = tabsSlice.actions;
export default tabsSlice.reducer;