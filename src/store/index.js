import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer as reducer } from '@/reducers';

const initializeStore = () =>
  configureStore({
    reducer,
    middleware: [thunk],
  });

export const store = initializeStore();
export const persistor = persistStore(store);
