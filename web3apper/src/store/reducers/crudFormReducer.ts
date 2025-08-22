import type { CrudFormData, CrudFormState } from '../types';

import type { CrudFormActionTypes } from '../actions/crudFormActions';

import {
  CREATE,
  COPY,
  EDIT,
  DELETE,
  SELECT_ITEM,
  SAVE,
  RETURN,
  SET_DATA,
} from '../actions/crudFormActions';
import { initialStateCrudForm } from '../initialState';

export const crudFormReducer = <T = any>(
  state: CrudFormState<T> = initialStateCrudForm,
  action: CrudFormActionTypes,
): CrudFormState<T> => {
  switch (action.type) {
    case CREATE:
      return { ...state, selectedItem: null, isEditMode: true };
    case COPY:
      return { ...state, isEditMode: state.selectedItem !== null };
    case EDIT:
      return { ...state, isEditMode: state.selectedItem !== null };
    case DELETE:
      return { ...state, isEditMode: state.selectedItem !== null };
    case SELECT_ITEM:
      return { ...state, selectedItem: action.payload.selectedItem };
    case SAVE:
      return {
        ...state,
        selectedItem: action.payload.data,
        data: action.payload.data
          ? state.selectedItem !== null
            ? [...(state.data || []), action.payload.data] // ✅ теперь тут T
            : (state.data as T[]).map((item) =>
                (item as any).id === action.payload.data.id ? action.payload : item,
              )
          : state.data,
      };
    case RETURN:
      return {
        ...state,
        isEditMode: false,
        selectedItem:
          state.data?.find((data) => (data as any)?.id === (state.selectedItem as any)?.id) || null,
      };

    case SET_DATA:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};
