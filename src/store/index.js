import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { networkService } from '@/networking';
import { rootReducer } from '@/reducers';
import { storage } from '@/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['error', 'status'],
};

const middlewares = [thunk.withExtraArgument({ networkService, demoMode: true })];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
