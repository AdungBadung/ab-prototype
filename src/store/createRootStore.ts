import { combineReducers } from '@reduxjs/toolkit';
import { reducer as appReducer } from './app/slice';

export const reducers = {
  app: appReducer
};

const createRootReducer = () =>
  combineReducers({
    ...reducers
  });

export default createRootReducer;
