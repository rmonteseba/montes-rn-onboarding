import { View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MovieThumbnail from '@/components/movie/MovieThumbnail';
import { NAVIGATION } from '@/constants';

const MovieCard = ({ movie, imageStyles }) => {
  const navigation = useNavigation();
  const { poster_path: posterPath } = movie;

  return (
    <View>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.navigate(NAVIGATION.movieDetail, { movieId: movie.id })}
      >
        <MovieThumbnail path={posterPath} imageStyles={imageStyles} />
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
