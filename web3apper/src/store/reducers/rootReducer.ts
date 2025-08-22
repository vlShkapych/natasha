// .store/reducers/rootReducer.ts
import { combineReducers } from 'redux';
import { windowReducer } from './windowReducer';

export const rootReducer = combineReducers({
  windows: windowReducer,
});
