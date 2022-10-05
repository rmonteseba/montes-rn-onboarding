import { routes } from '@/controllers/routes';
import { movieDBNetworkService } from '@/networking';

export class MovieController {
  constructor() {
    this.networkService = movieDBNetworkService;
  }

  async getTopRatedMovies(page = 1) {
    return this.networkService.request({
      method: 'get',
      url: routes.movies.get.topRated,
      data: { page },
    });
  }
}
