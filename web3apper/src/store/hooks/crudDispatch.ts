import { useDispatch } from 'react-redux';
import type { CrudDispatch } from '../store';

export const useAppDispatch = () => useDispatch<CrudDispatch>();
