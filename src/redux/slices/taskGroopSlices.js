import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    createList(state, action) {
      // state.name = action.payload.name;
      // state.count = action.payload.count;
      state.push(action.payload);
    },
  },
});

export const { createList } = listSlice.actions;
export default listSlice.reducer;
