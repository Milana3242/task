import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
      console.log(state);
    },
    changeNameTask(state, action) {
      state[action.payload.i].name = action.payload.value;
    },
    changeCheckbox(state, action) {
      console.log(action.payload);
      state[action.payload.i].items[action.payload.g].checked =
        !state[action.payload.i].items[action.payload.g].checked;
    },
  },
});

export const { changeNameTask, addTask, changeCheckbox } = listSlice.actions;
export default listSlice.reducer;
