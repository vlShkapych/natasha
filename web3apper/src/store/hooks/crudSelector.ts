import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import type { CrudState } from '../store';

export const useCrudSelector: TypedUseSelectorHook<CrudState> = useSelector;
