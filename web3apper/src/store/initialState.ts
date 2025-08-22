// .store/initialState.ts
import type { CrudFormState, WindowData } from './types';

export interface RootState {
  windows: WindowData[];
}

export const initialState: RootState = {
  windows: [
    {
      id: '1',
      code: 'VA1',
      title: 'Users',
      isFocused: false,
      isMaximized: false,

      api: {
        baseUrl: '/user/all',
        entity: 'Users',
      },
    },
    // {
    //   id: '2',
    //   code: 'VA2',
    //   title: 'UserRights',
    //   isFocused: false,
    //   isMaximized: false,
    //   api: {
    //     baseUrl: '',
    //     entity: '',
    //   },
    // },
    // {
    //   id: '3',
    //   code: 'VA3',
    //   title: 'Roles',
    //   isFocused: false,
    //   isMaximized: false,
    //   api: {
    //     baseUrl: '',
    //     entity: '',
    //   },
    // },
  ],
};

export const initialStateCrudForm: CrudFormState = {
  isEditMode: false,
  selectedItem: null,
  data: [],
};
