export const routes = {
  authentication: {
    login: '/users',
    logout: '/users/logout',
  },
  movies: {
    get: {
      movie: '/movie',
      upcoming: '/movie/upcoming',
      topRated: '/movie/top_rated',
      popular: '/movie/popular',
    },
  },
};
