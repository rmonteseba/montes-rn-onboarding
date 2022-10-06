import { View, StyleSheet } from 'react-native';
import React from 'react';
import { MovieThumbnail } from '@/components/MovieThumbnail';

const baseStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export const MovieCard = (movie) => {
  const { poster_path: posterPath } = movie;

  return (
    <View style={baseStyles.container}>
      <MovieThumbnail path={posterPath} />
    </View>
  );
};
