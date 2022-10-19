export const getMoviesState = (state) => state.movie;
export const getUpcomingMoviesState = (state) => getMoviesState(state).upcomingMovies;
export const getTopRatedMoviesState = (state) => getMoviesState(state).topRatedMovies;
export const getPopularMoviesState = (state) => getMoviesState(state).popularMovies;
