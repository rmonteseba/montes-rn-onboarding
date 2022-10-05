export const getMoviesState = (state) => state.movie;
export const getTopRatedMoviesState = (state) => getMoviesState(state).topRatedMovies;
