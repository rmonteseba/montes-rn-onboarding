export const getMyMoviesState = (state) => state.myMovies;
export const getMyMovies = (state) => getMyMoviesState(state).myMovies || [];
export const getMyMoviesMovie = (state, { id: targetId }) =>
  getMyMovies(state)?.find(({ id }) => id === targetId);
