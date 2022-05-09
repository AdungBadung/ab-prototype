import { configureStore } from '@reduxjs/toolkit';
import createRootStore from './createRootStore';
import { reducer as appReducer } from './app/slice';

export const reducers = {
  app: appReducer
};

const rootReducer = createRootStore();

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development'
});

// https://redux-toolkit.js.org/usage/usage-guide#manual-store-setup
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./createRootStore', () => {
    store.replaceReducer(rootReducer);
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export { store };
