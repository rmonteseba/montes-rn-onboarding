import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { networkService } from '@/networking';
import { rootReducer as reducer } from '@/reducers';

const initializeStore = () =>
  configureStore({
    reducer,
    middleware: [thunk.withExtraArgument({ networkService })],
  });

export const store = initializeStore();
export const persistor = persistStore(store);
