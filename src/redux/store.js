import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";

import taskGroop from "./slices/taskGroopSlices";
import tasks from "./slices/taskSlices";

const rootReducer = combineReducers({
  tasks,
  taskGroop,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
export default store;
