import { configureStore } from "@reduxjs/toolkit";
import task from "./slices/taskSlices";

const store = configureStore({
  reducer: {
    task,
  },
});
export default store;
