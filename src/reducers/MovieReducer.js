import { createSlice } from '@reduxjs/toolkit';

import { getPopularMovies, getTopRatedMovies } from '@/actions/MovieActions';

const initialState = {
  topRatedMovies: {
    fulfilled: null,
    loading: false,
    error: null,
  },
  popularMovies: {
    fulfilled: null,
    loading: false,
    error: null,
  },
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    clearTopRatedMovies(state) {
      return {
        ...state,
        topRatedMovies: initialState.topRatedMovies,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTopRatedMovies.pending, (state) => {
      state.topRatedMovies.loading = true;
      state.topRatedMovies.error = null;
      state.topRatedMovies.fulfilled = null;
    });
    builder.addCase(getTopRatedMovies.rejected, (state, { payload }) => {
      state.topRatedMovies.loading = false;
      state.topRatedMovies.error = payload;
      state.topRatedMovies.fulfilled = null;
    });
    builder.addCase(getTopRatedMovies.fulfilled, (state, { payload }) => {
      state.topRatedMovies.loading = false;
      state.topRatedMovies.error = null;
      state.topRatedMovies.fulfilled = payload; // TODO pages append
    });
    builder.addCase(getPopularMovies.pending, (state) => {
      state.popularMovies.loading = true;
      state.popularMovies.error = null;
      state.popularMovies.fulfilled = null;
    });
    builder.addCase(getPopularMovies.rejected, (state, { payload }) => {
      state.popularMovies.loading = false;
      state.popularMovies.error = payload;
      state.popularMovies.fulfilled = null;
    });
    builder.addCase(getPopularMovies.fulfilled, (state, { payload }) => {
      state.popularMovies.loading = false;
      state.popularMovies.error = null;
      state.popularMovies.fulfilled = payload; // TODO pages append
    });
  },
});

const {
  reducer,
  actions: { clearTopRatedMovies },
} = movieSlice;

export { clearTopRatedMovies };

export default reducer;
