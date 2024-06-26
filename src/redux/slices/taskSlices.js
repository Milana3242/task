import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action) {
      state.push({ ...action.payload, id: Math.random().toFixed(2) });
      console.log(state);
    },
    deleteTask(state, action) {
      if (state.length == 0) return [];
      state = state.filter((item) => item.id !== action.payload.id);
      return state;
    },
    changeNameTask(state, action) {
      const task = state.find((item) => item.id === action.payload.id);
      task.name = action.payload.value;
      console.log(task);
    },
    changeCheckbox(state, action) {
      const task = state.find((item) => item.id === action.payload.id);
      task.items[action.payload.g].checked =
        !task.items[action.payload.g].checked;
    },

    deleteAllTask(state) {
      return (state = []);
    },
    deleteTaskWithTaskGroop(state, action) {
      return (state = state.filter(
        (item) => item.listId !== action.payload.id
      ));
    },
  },
});

export const {
  changeNameTask,
  addTask,
  deleteTask,
  changeCheckbox,
  deleteAllTask,
  deleteTaskWithTaskGroop,
} = taskSlice.actions;
export default taskSlice.reducer;
