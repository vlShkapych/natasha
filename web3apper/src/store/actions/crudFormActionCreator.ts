// .store/actionCreators/windowActionCreators.ts

import {
  CREATE,
  COPY,
  EDIT,
  DELETE,
  SELECT_ITEM,
  SAVE,
  RETURN,
  SET_DATA,
  type Create,
  type Copy,
  type Edit,
  type Delete,
  type Save,
  type Return,
  type Select,
  type SetData,
} from './crudFormActions';

export const CreateItem = (): Create => ({
  type: CREATE,
  payload: null,
});

export const CopyItem = (): Copy => ({
  type: COPY,
  payload: null,
});

export const EditItem = (): Edit => ({
  type: EDIT,
  payload: null,
});

export const DeleteItem = (): Delete => ({
  type: DELETE,
  payload: null,
});

export const SelectItem = <T>(selectedItem: T): Select<T> => ({
  type: SELECT_ITEM,
  payload: { selectedItem },
});

export const SaveItem = (): Save => ({
  type: SAVE,
  payload: null,
});

export const ReturnItem = (): Return => ({
  type: RETURN,
  payload: null,
});

export const SetItems = <T>(data: T[]): SetData<T> => ({
  type: SET_DATA,
  payload: { data },
});
