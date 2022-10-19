import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { SCREEN_WIDTH } from '@/lib/utils/dimension-utils/dimensions';
import MovieMainCard from '@/components/main-movie/MovieMainCard';
import MainActionButton from '@/components/main-movie/MainActionButton';
import AddButton from '@/assets/icons/add_button/add_icon.svg';
import PlayButton from '@/assets/icons/play_button/play_icon.svg';
import InfoButton from '@/assets/icons/info_button/info_button.svg';

const CAROUSEL_HEIGHT = 450;
const MOVIES_PER_SLIDE = 1;
const SCROLL_ANIMATION_DURATION = 2000;
const AUTOPLAY_INTERVAL_MS = 5000;
const IMAGE_RESIZE_MODE = 'contain';

const baseStyles = StyleSheet.create({
  carousel: {
    width: SCREEN_WIDTH,
    height: CAROUSEL_HEIGHT,
  },
  item: {
    width: SCREEN_WIDTH / MOVIES_PER_SLIDE,
    height: CAROUSEL_HEIGHT,
  },
  imageStyles: {
    width: SCREEN_WIDTH,
    height: CAROUSEL_HEIGHT,
    backgroundColor: 'black',
  },
  actionButtons: {
    display: 'flex',
    alignSelf: 'center',
    bottom: -45,
    flexDirection: 'row',
    position: 'absolute',
  },
});

export const MainCarousel = ({ movies, styles }) => {
  return (
    <View>
      <View>
        <Carousel
          autoPlay
          autoPlayInterval={AUTOPLAY_INTERVAL_MS}
          style={[baseStyles.carousel, styles]}
          width={baseStyles.item.width}
          height={baseStyles.item.height}
          data={movies}
          scrollAnimationDuration={SCROLL_ANIMATION_DURATION}
          renderItem={({ item }) => (
            <MovieMainCard
              movie={item}
              resizeMode={IMAGE_RESIZE_MODE}
              imageStyles={baseStyles.imageStyles}
            />
          )}
        />
      </View>
      <View style={baseStyles.actionButtons}>
        <MainActionButton icon={AddButton} text="My List" />
        <MainActionButton icon={PlayButton} text="Play" />
        <MainActionButton icon={InfoButton} text="Info" />
      </View>
    </View>
  );
};

export default MainCarousel;
