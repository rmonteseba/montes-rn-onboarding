import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { baseStyles } from '@/screens/MovieDetail/MoveDetail.styles';
import { getCurrentMovie as getCurrentMovieSelector } from '@/selectors/CurrentMovieSelectors';
import { getCurrentMovie } from '@/actions/CurrentMovieActions';
import { strings } from '@/localization';
import MovieMainThumbnail from '@/components/main-movie/MovieMainThumbnail';

const MovieDetail = () => {
  const {
    params: { movieId },
  } = useRoute();

  const dispatch = useDispatch();

  const {
    error: currentMovieError,
    fulfilled: currentMovie,
    loading: currentMovieLoading,
  } = useSelector(getCurrentMovieSelector);

  useEffect(() => {
    if (movieId) {
      dispatch(getCurrentMovie({ movieId }));
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    if (currentMovieError) {
      Alert.alert(currentMovieError);
    }
  }, [currentMovieError]);

  return (
    <ScrollView>
      <Spinner
        visible={currentMovieLoading}
        textContent={'Loading...'}
        textStyle={baseStyles.spinnerTextStyle}
      />
      {currentMovie && (
        <View style={baseStyles.container}>
          <Text style={baseStyles.movieTitleStyle}>{currentMovie.title}</Text>
          <MovieMainThumbnail
            imageStyles={baseStyles.imageStyles}
            path={currentMovie.poster_path}
          />
          <View style={baseStyles.movieGenreViewStyle}>
            {currentMovie?.genres?.map(({ id }) => (
              <Text style={baseStyles.movieGenreStyle} key={id}>
                {`\u29BF ${strings.movieDetail.genres[id]}`}
              </Text>
            ))}
          </View>
          <Text style={baseStyles.movieOverviewStyle}>{currentMovie.overview}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetail;
