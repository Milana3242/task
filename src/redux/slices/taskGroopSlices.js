import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    createList(state, action) {
      state.push(action.payload);
    },

    deleteAllGroop(state) {
      return (state = []);
    },
    deleteGroop(state, action) {
      if (state.length === 0) return [];
      state = state.filter((list) => list.id !== action.payload.id);
      return state;
    },
  },
});

export const { createList, deleteAllGroop, deleteGroop } = listSlice.actions;
export default listSlice.reducer;
