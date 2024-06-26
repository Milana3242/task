import { configureStore, combineReducers } from '@reduxjs/toolkit';
import taskGroop from './slices/taskGroopSlices';
import task from './slices/taskSlices';
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';

const rootReducer = combineReducers({
  task,
  taskGroop,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
export default store;
