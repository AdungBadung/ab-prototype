import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './configureAppStore';

/**
 * react-redux type 정의 관련 내용
 * https://react-redux.js.org/using-react-redux/usage-with-typescript#define-typed-hooks
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
