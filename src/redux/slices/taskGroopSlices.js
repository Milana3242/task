import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nameTask: '',
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    changeNameTask(state, action) {
      state.name = action.payload.name;
    },
  },
});

export const { changeNameTask } = listSlice.actions;
export default listSlice.reducer;
