import { MOVIE_DB_IMAGE_ORIGINAL_SIZE } from '@/constants/imageSizes';
import { movieDBImageBaseURL } from '@/lib/utils/image-utils/config';

export const buildMovieDBImageURL = (resource, size = MOVIE_DB_IMAGE_ORIGINAL_SIZE) =>
  !!resource && `${movieDBImageBaseURL}${size}${resource}`;
