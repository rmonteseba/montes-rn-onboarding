import { createAsyncThunk } from '@reduxjs/toolkit';
import { strings } from '@/localization';
import { MovieController } from '@/controllers/MovieController';
import { clearTopRatedMovies } from '@/reducers/MovieReducer';

export const getTopRatedMovies = createAsyncThunk(
  'MovieActions/getTopRatedMovies',
  async ({ page }, thunkAPI) => {
    try {
      const movieController = new MovieController();
      const {
        data: { results },
      } = await movieController.getTopRatedMovies(page);
      return results;
    } catch (e) {
      return thunkAPI.rejectWithValue(strings.home.getMoviesError);
    }
  }
);

export const getPopularMovies = createAsyncThunk(
  'MovieActions/getPopularMovies',
  async ({ page }, thunkAPI) => {
    try {
      const movieController = new MovieController();
      const {
        data: { results },
      } = await movieController.getPopularMovies(page);
      return results;
    } catch (e) {
      return thunkAPI.rejectWithValue(strings.home.getMoviesError);
    }
  }
);

export { clearTopRatedMovies };
