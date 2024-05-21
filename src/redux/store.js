import { configureStore } from '@reduxjs/toolkit';
import taskGroop from './slices/taskGroopSlices';
import task from './slices/taskSlices';

const store = configureStore({
  reducer: {
    task,
    taskGroop,
  },
});
export default store;
