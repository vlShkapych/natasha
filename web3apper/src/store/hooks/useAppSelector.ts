import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '../initialState';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
