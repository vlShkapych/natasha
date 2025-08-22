// .store/actionCreators/windowActionCreators.ts

import {
  OPEN_WINDOW,
  CLOSE_WINDOW,
  FOCUS_WINDOW,
  MAXIMIZE_WINDOW,
  type OpenWindowAction,
  type CloseWindowAction,
  type FocusWindowAction,
  type MaximizeWindowAction,
} from './windowActions';
import { type WindowData } from '../types';

/** Open a new window */
export const openWindow = (window: WindowData): OpenWindowAction => ({
  type: OPEN_WINDOW,
  payload: window,
});

/** Close a window by ID */
export const closeWindow = (id: string): CloseWindowAction => ({
  type: CLOSE_WINDOW,
  payload: { id },
});

/** Focus a window by ID */
export const focusWindow = (id: string): FocusWindowAction => ({
  type: FOCUS_WINDOW,
  payload: { id },
});

/** Maximize a window by ID */
export const maximizeWindow = (id: string): MaximizeWindowAction => ({
  type: MAXIMIZE_WINDOW,
  payload: { id },
});
