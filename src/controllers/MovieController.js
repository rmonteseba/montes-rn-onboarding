import { routes } from '@/controllers/routes';
import movieDBClient from '@/networking/clients/movieDBClient';

export const getCurrentMovieApiCall = async (movieId) =>
  movieDBClient.get(`${routes.movies.get.movie}/${movieId}`);

export const getUpcomingMoviesApiCall = async () => movieDBClient.get(routes.movies.get.upcoming);

export const getTopRatedMoviesApiCall = async () => movieDBClient.get(routes.movies.get.topRated);

export const getPopularMoviesApiCall = async () => movieDBClient.get(routes.movies.get.popular);
