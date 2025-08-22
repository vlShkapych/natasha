import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';
import { crudFormReducer } from './reducers/crudFormReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export const crudStore = configureStore({
  reducer: crudFormReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type CrudState = ReturnType<typeof crudStore.getState>;
export type CrudDispatch = typeof crudStore.dispatch;
