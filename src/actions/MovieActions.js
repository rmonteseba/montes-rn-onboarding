import { createAsyncThunk } from '@reduxjs/toolkit';
import { strings } from '@/localization';
import {
  getUpcomingMoviesApiCall,
  getTopRatedMoviesApiCall,
  getPopularMoviesApiCall,
} from '@/controllers/MovieController';
import { clearTopRatedMovies } from '@/reducers/MovieReducer';

export const getUpcomingMovies = createAsyncThunk(
  'MovieActions/getUpcomingMovies',
  async (_, thunkAPI) => {
    try {
      const {
        data: { results },
      } = await getUpcomingMoviesApiCall();
      return results;
    } catch (e) {
      return thunkAPI.rejectWithValue(strings.home.getMoviesError);
    }
  }
);

export const getTopRatedMovies = createAsyncThunk(
  'MovieActions/getTopRatedMovies',
  async (_, thunkAPI) => {
    try {
      const {
        data: { results },
      } = await getTopRatedMoviesApiCall();
      return results;
    } catch (e) {
      return thunkAPI.rejectWithValue(strings.home.getMoviesError);
    }
  }
);

export const getPopularMovies = createAsyncThunk(
  'MovieActions/getPopularMovies',
  async (_, thunkAPI) => {
    try {
      const {
        data: { results },
      } = await getPopularMoviesApiCall();
      return results;
    } catch (e) {
      return thunkAPI.rejectWithValue(strings.home.getMoviesError);
    }
  }
);

export { clearTopRatedMovies };
