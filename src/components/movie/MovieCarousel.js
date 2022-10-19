import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import MovieCard from '@/components/movie/MovieCard';
import { SCREEN_WIDTH } from '@/lib/utils/dimension-utils/dimensions';

const CAROUSEL_HEIGHT = 180;
const MOVIES_PER_SLIDE = 4;
const SCROLL_ANIMATION_DURATION = 3000;

const baseStyles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 40,
    marginVertical: 15,
  },
  carousel: {
    width: SCREEN_WIDTH,
    height: CAROUSEL_HEIGHT,
  },
  item: {
    width: SCREEN_WIDTH / MOVIES_PER_SLIDE,
    height: CAROUSEL_HEIGHT,
  },
  imageStyles: {
    width: 95,
    height: 160,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#AAB1B2',
  },
});

export const MovieCarousel = ({ movies, title, styles, titleStyles }) => {
  return (
    <View>
      <Text style={[baseStyles.header, titleStyles]}>{title}</Text>
      <Carousel
        style={[baseStyles.carousel, styles]}
        width={baseStyles.item.width}
        height={baseStyles.item.height}
        data={movies}
        scrollAnimationDuration={SCROLL_ANIMATION_DURATION}
        renderItem={({ item }) => <MovieCard movie={item} imageStyles={baseStyles.imageStyles} />}
      />
    </View>
  );
};

export default MovieCarousel;
