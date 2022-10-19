export const routes = {
  authentication: {
    login: '/users',
    logout: '/users/logout',
  },
  movies: {
    get: {
      upcoming: '/movie/upcoming',
      topRated: '/movie/top_rated',
      popular: '/movie/popular',
    },
  },
};
