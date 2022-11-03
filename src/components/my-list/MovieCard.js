import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MovieThumbnail from './MovieThumbnail';
import { NAVIGATION } from '@/constants';

const MovieCard = ({ movie, cardStyles, imageStyles }) => {
  const navigation = useNavigation();
  const { title, image: imagePath } = movie;

  return (
    <View style={cardStyles}>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.navigate(NAVIGATION.movieDetail, { movieId: movie.id })}
      >
        <MovieThumbnail path={imagePath} imageStyles={imageStyles} />
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
