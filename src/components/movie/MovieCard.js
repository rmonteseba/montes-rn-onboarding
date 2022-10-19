import { View } from 'react-native';
import React from 'react';
import MovieThumbnail from '@/components/movie/MovieThumbnail';

const MovieCard = ({ movie, imageStyles }) => {
  const { poster_path: posterPath } = movie;

  return (
    <View>
      <MovieThumbnail path={posterPath} imageStyles={imageStyles} />
    </View>
  );
};

export default MovieCard;
