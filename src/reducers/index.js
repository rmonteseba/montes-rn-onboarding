import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { storage } from '@/storage';
import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import userReducer from '@/reducers/UserReducer';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
};

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: persistReducer(userPersistConfig, userReducer),
});
