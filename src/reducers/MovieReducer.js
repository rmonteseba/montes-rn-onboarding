import { createSlice } from '@reduxjs/toolkit';

import { getTopRatedMovies } from '@/actions/MovieActions';

const initialState = {
  topRatedMovies: {
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
  },
});

const {
  reducer,
  actions: { clearTopRatedMovies },
} = movieSlice;

export { clearTopRatedMovies };

export default reducer;
