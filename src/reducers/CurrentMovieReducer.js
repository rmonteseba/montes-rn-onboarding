import { createSlice } from '@reduxjs/toolkit';

import { getUpcomingMovies, getPopularMovies, getTopRatedMovies } from '@/actions/MovieActions';
import { getCurrentMovie } from '@/actions/CurrentMovieActions';

const initialState = {
  currentMovie: {
    fulfilled: null,
    loading: false,
    error: null,
  },
};

const currentMovieSlice = createSlice({
  name: 'currentMovie',
  initialState,
  reducers: {
    clearCurrentMovie(state) {
      return {
        ...state,
        currentMovie: initialState.currentMovie,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentMovie.pending, (state) => {
      state.currentMovie.loading = true;
      state.currentMovie.error = null;
      state.currentMovie.fulfilled = null;
    });
    builder.addCase(getCurrentMovie.rejected, (state, { payload }) => {
      state.currentMovie.loading = false;
      state.currentMovie.error = payload;
      state.currentMovie.fulfilled = null;
    });
    builder.addCase(getCurrentMovie.fulfilled, (state, { payload }) => {
      state.currentMovie.loading = false;
      state.currentMovie.error = null;
      state.currentMovie.fulfilled = payload;
    });
  },
});

const {
  reducer,
  actions: { clearCurrentMovie },
} = currentMovieSlice;

export { clearCurrentMovie, initialState };

export default reducer;
