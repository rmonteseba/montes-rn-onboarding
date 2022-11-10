import { createAsyncThunk } from '@reduxjs/toolkit';
import { strings } from '@/localization';
import { getCurrentMovieApiCall } from '@/controllers/MovieController';
import { clearTopRatedMovies } from '@/reducers/MovieReducer';

export const getCurrentMovie = createAsyncThunk(
  'CurrentMovieActions/getCurrentMovie',
  async ({ movieId }, thunkAPI) => {
    try {
      const { data } = await getCurrentMovieApiCall(movieId);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(strings.home.getMoviesError);
    }
  }
);

export { clearTopRatedMovies };
