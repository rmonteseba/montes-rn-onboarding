import { Dimensions, View } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { MovieCard } from '@/components/MovieCard';

export const MovieCarousel = ({ movies }) => {
  console.log(movies);
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        width={Dimensions.get('window').width}
        height={50}
        data={movies}
        scrollAnimationDuration={3000}
        renderItem={({ item }) => <MovieCard {...item} />}
      />
    </View>
  );
};

export default MovieCarousel;
