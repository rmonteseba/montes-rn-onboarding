import React, { useEffect, useState } from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getPopularMovies, getTopRatedMovies } from '@/actions/MovieActions';
import { getPopularMoviesState, getTopRatedMoviesState } from '@/selectors/MovieSelectors';
import MovieCarousel from '@/components/MovieCarousel';
import { strings } from '@/localization';

const baseStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    base: {
      marginHorizontal: 20,
    },
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const { fulfilled: topRatedMoviesFulfilled, error: topRatedMoviesError } =
    useSelector(getTopRatedMoviesState);

  const { fulfilled: popularMoviesFulfilled, error: popularMoviesError } =
    useSelector(getPopularMoviesState);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getTopRatedMovies({ page }));
    dispatch(getPopularMovies({ page }));
  }, [page, dispatch]);

  useEffect(() => {
    if (topRatedMoviesError) {
      Alert.alert(topRatedMoviesError); // TODO improve error message :)
    }
  }, [topRatedMoviesError]);

  useEffect(() => {
    if (popularMoviesError) {
      Alert.alert(popularMoviesError); // TODO improve error message :)
    }
  }, [popularMoviesError]);

  return (
    <View style={baseStyles.container}>
      <MovieCarousel
        styles={baseStyles.carousel.base}
        titleStyles={baseStyles.carousel.title}
        title={strings.home.popularMovies}
        movies={popularMoviesFulfilled || []}
      />
      <MovieCarousel
        styles={baseStyles.carousel.base}
        titleStyles={baseStyles.carousel.title}
        title={strings.home.topFeaturedMovies}
        movies={topRatedMoviesFulfilled || []}
      />
    </View>
  );
};

export default Home;
