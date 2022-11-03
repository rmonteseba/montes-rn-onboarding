import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { buildMovieDBImageURL } from '@/lib/utils/image-utils/imageUtils';

const MovieThumbnail = ({ path, imageStyles }) => {
  return (
    <Image
      style={imageStyles}
      source={{ uri: buildMovieDBImageURL(path) }}
      accessibilityIgnoresInvertColors={true}
    />
  );
};

export default MovieThumbnail;
