import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useConvertTime = (time: number) => {
  if (time < 60) {
    return `${time}m`;
  } else {
    const hours = Math.floor(time / 60);
    const minutes = time - (hours * 60);
    return `${hours}h ${minutes}m`;
  }
};
