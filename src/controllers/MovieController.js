import { routes } from '@/controllers/routes';
import { movieDBNetworkService } from '@/networking';

export class MovieController {
  constructor() {
    this.networkService = movieDBNetworkService;
  }

  async getCurrentMovie(movieId) {
    return this.networkService.request({
      method: 'get',
      url: `${routes.movies.get.movie}/${movieId}`,
    });
  }

  async getUpcomingMovies(page = 1) {
    return this.networkService.request({
      method: 'get',
      url: routes.movies.get.upcoming,
      data: { page },
    });
  }

  async getTopRatedMovies(page = 1) {
    return this.networkService.request({
      method: 'get',
      url: routes.movies.get.topRated,
      data: { page },
    });
  }

  async getPopularMovies(page = 1) {
    return this.networkService.request({
      method: 'get',
      url: routes.movies.get.popular,
      data: { page },
    });
  }
}
