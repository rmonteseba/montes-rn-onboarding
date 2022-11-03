import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { storage } from '@/storage';
import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import userReducer from '@/reducers/UserReducer';
import movieReducer from '@/reducers/MovieReducer';
import myMoviesReducer from '@/reducers/MyMoviesReducer';
import currentMovieReducer from '@/reducers/CurrentMovieReducer';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
};

const moviePersistConfig = {
  key: 'movie',
  storage,
};

const myMoviesPersistConfig = {
  key: 'myMovies',
  storage,
};

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: persistReducer(userPersistConfig, userReducer),
  movie: persistReducer(moviePersistConfig, movieReducer),
  myMovies: persistReducer(myMoviesPersistConfig, myMoviesReducer),
  currentMovie: currentMovieReducer,
});
