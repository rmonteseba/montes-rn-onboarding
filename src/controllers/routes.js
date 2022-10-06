export const routes = {
  authentication: {
    login: '/users',
    logout: '/users/logout',
  },
  movies: {
    get: {
      topRated: '/movie/top_rated',
      popular: '/movie/popular',
    },
  },
};
