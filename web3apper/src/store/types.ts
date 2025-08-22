export interface WindowData {
  id: string;
  title: string;
  code: string;
  isFocused: boolean;
  isMaximized: boolean;
  api: {
    baseUrl: string;
    entity: string;
  };
}

export interface CrudFormData<T = any> {
  isEditMode: boolean;
  selectedItem: T | null;
  data: T[] | null;
}
export interface CrudFormState<T = any> {
  isEditMode: boolean;
  selectedItem: T | null;
  data: T[] | null;
}
