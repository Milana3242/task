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
      if (state.length === 0) return [];
      state = state.filter((task) => task.id !== action.payload.id);
      return state;
    },
    changeNameTask(state, action) {
      const task = state.find((task) => task.id === action.payload.id);
      task.name = action.payload.value;
      console.log(task);
    },
    changeCheckbox(state, action) {
      const task = state.find((task) => task.id === action.payload.id);
      task.checkboxes[action.payload.g].checked =
        !task.checkboxes[action.payload.g].checked;
    },

    deleteAllTask(state) {
      return (state = []);
    },
    deleteTasksWithGroop(state, action) {
      return (state = state.filter(
        (task) => task.listId !== action.payload.id
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
  deleteTasksWithGroop,
} = taskSlice.actions;
export default taskSlice.reducer;
