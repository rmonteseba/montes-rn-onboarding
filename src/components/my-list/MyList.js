import React from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import MovieCard from '@/components/my-list/MovieCard';

const ESTIMATED_MOVIES_SIZE = 15;

const MyList = ({ movies, styles, cardStyles, imageStyles }) => {
  return (
    <View styles={{ ...styles }}>
      <FlashList
        data={movies}
        estimatedItemSize={ESTIMATED_MOVIES_SIZE}
        renderItem={({ item }) => (
          <MovieCard movie={item} cardStyles={cardStyles} imageStyles={imageStyles} />
        )}
      />
    </View>
  );
};

export default MyList;
