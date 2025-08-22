import { configureStore } from '@reduxjs/toolkit';
import { crudFormReducer } from '../reducers/crudFormReducer';
import { initialState, initialStateCrudForm } from '../initialState';
import type { CrudFormState } from '../types';
import type { CrudFormActionTypes } from '../actions/crudFormActions';

export function createCrudStore<T>() {
  // тут ми створюємо редʼюсер, який вже знає про конкретний T
  const reducer = (state: CrudFormState<T> | undefined, action: CrudFormActionTypes) =>
    crudFormReducer<T>(state, action);

  return configureStore({
    reducer,
  });
}

export type CrudStore<T> = ReturnType<typeof createCrudStore<T>>;
