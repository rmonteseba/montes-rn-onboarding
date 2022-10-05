import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { MovieCard } from '@/components/MovieCard';

const WINDOW_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    width: WINDOW_WIDTH,
    height: 50,
  },
});

export const MovieCarousel = ({ movies }) => {
  return (
    <View style={styles.container}>
      <Carousel
        width={styles.carousel.width}
        height={styles.carousel.height}
        data={movies}
        scrollAnimationDuration={3000}
        renderItem={({ item }) => <MovieCard {...item} />}
      />
    </View>
  );
};

export default MovieCarousel;
