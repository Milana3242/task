import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      state.push(action.payload);
    },
    changeNameTask(state, action) {
      const task = state.filter(item => item.listId === action.payload.id)?.[action.payload.i]
      task.name = action.payload.value
      //console.log('state',state)
      // state[action.payload.i].name = action.payload.value;
    },
    changeCheckbox(state, action) {
    const task = state.filter(
      (item) => item.listId === action.payload.id
    )?.[action.payload.i]
     task.items[action.payload.g].checked =! task.items[action.payload.g].checked ;
    },
  },
});

export const { changeNameTask, addTask, changeCheckbox } = taskSlice.actions;
export default taskSlice.reducer;
