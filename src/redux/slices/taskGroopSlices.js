import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  count: 5,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    createList(state, action) {
      state.name = action.payload.name;
      state.count = action.payload.count;
    },
  },
});

export const { createList } = listSlice.actions;
export default listSlice.reducer;
