import { View } from 'react-native';
import React from 'react';
import MovieMainThumbnail from '@/components/main-movie/MovieMainThumbnail';

export const MovieMainCard = ({ movie, resizeMode, imageStyles }) => {
  const { poster_path: posterPath } = movie;

  return (
    <View>
      <MovieMainThumbnail path={posterPath} resizeMode={resizeMode} imageStyles={imageStyles} />
    </View>
  );
};

export default MovieMainCard;
