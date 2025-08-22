import { initialState } from '../initialState';
import { OPEN_WINDOW, CLOSE_WINDOW, FOCUS_WINDOW, MAXIMIZE_WINDOW } from '../actions/windowActions';
import type { WindowActionTypes } from '../actions/windowActions';
import type { WindowData } from '../types';

export const windowReducer = (
  state: WindowData[] = initialState.windows,
  action: WindowActionTypes,
): WindowData[] => {
  console.log('sem');
  switch (action.type) {
    case OPEN_WINDOW:
      return [...state, action.payload];
    case CLOSE_WINDOW:
      return state.filter((w) => w.id !== action.payload.id);
    case FOCUS_WINDOW:
      return state.map((w) => ({ ...w, isFocused: w.id === action.payload.id }));
    case MAXIMIZE_WINDOW:
      return state.map((w) => (w.id === action.payload.id ? { ...w, isMaximized: true } : w));
    default:
      return state;
  }
};
