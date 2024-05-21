import { configureStore } from '@reduxjs/toolkit';
import task from './slices/taskSlices';
import taskGroop from './slices/taskGroopSlices';

const store = configureStore({
  reducer: {
    task,
    taskGroop,
  },
});
export default store;
