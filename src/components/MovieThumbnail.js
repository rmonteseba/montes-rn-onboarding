import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { buildMovieDBImageURL } from '@/lib/utils/image-utils/imageUtils';

const baseStyles = StyleSheet.create({
  image: {
    width: 95,
    height: 160,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#AAB1B2',
  },
});

export const MovieThumbnail = ({ path }) => {
  return (
    <Image
      style={baseStyles.image}
      source={{ uri: buildMovieDBImageURL(path) }}
      accessibilityIgnoresInvertColors={true}
    />
  );
};
