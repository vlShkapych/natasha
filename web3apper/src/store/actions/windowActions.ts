import type { WindowData } from '../types';

export const OPEN_WINDOW = 'OPEN_WINDOW';
export const CLOSE_WINDOW = 'CLOSE_WINDOW';
export const FOCUS_WINDOW = 'FOCUS_WINDOW';
export const MAXIMIZE_WINDOW = 'MAXIMIZE_WINDOW';

export interface OpenWindowAction {
  type: typeof OPEN_WINDOW;
  payload: WindowData;
}

export interface CloseWindowAction {
  type: typeof CLOSE_WINDOW;
  payload: { id: string };
}

export interface FocusWindowAction {
  type: typeof FOCUS_WINDOW;
  payload: { id: string };
}

export interface MaximizeWindowAction {
  type: typeof MAXIMIZE_WINDOW;
  payload: { id: string };
}

export type WindowActionTypes =
  | OpenWindowAction
  | CloseWindowAction
  | FocusWindowAction
  | MaximizeWindowAction;
