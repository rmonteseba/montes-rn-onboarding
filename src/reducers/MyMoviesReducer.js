import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myMovies: [],
};

const myMoviesSlice = createSlice({
  name: 'myMovies',
  initialState,
  reducers: {
    addMovie(state, { payload }) {
      return {
        ...state,
        myMovies: [...state.myMovies, payload],
      };
    },
    flushMovies(state) {
      return { ...state, myMovies: initialState.myMovies };
    },
  },
});

const {
  reducer,
  actions: { addMovie, flushMovies },
} = myMoviesSlice;

export { addMovie, flushMovies };

export default reducer;
