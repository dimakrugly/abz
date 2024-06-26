import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/usersSlice';

const rootReducer = combineReducers({
  usersReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
