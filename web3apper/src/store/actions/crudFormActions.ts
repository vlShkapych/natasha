export const CREATE = 'CREATE';
export const COPY = 'COPY';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';
export const SELECT_ITEM = 'SELECT_ITEM';
export const SAVE = 'SAVE';
export const RETURN = 'RETURN';
export const SET_DATA = 'SET_DATA';

export interface Create {
  type: typeof CREATE;
  payload: null;
}

export interface Copy {
  type: typeof COPY;
  payload: null;
}

export interface Edit {
  type: typeof EDIT;
  payload: null;
}

export interface Delete {
  type: typeof DELETE;
  payload: null;
}

export interface Save<T = any> {
  type: typeof SAVE;
  payload: null;
}

export interface Return {
  type: typeof RETURN;
  payload: null;
}
export interface Select<T = any> {
  type: typeof SELECT_ITEM;
  payload: { selectedItem: T };
}
export interface SetData<T = any> {
  type: typeof SET_DATA;
  payload: { data: T[] };
}

export type CrudFormActionTypes = Create | Copy | Edit | Delete | Save | Return | Select | SetData;
