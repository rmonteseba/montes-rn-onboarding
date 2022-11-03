import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ScrollView } from 'react-native-gesture-handler';
import { getUpcomingMovies, getPopularMovies, getTopRatedMovies } from '@/actions/MovieActions';
import {
  getUpcomingMoviesState,
  getPopularMoviesState,
  getTopRatedMoviesState,
} from '@/selectors/MovieSelectors';
import MovieCarousel from '@/components/movie/MovieCarousel';
import { strings } from '@/localization';
import { baseStyles } from '@/screens/Home/Home.styles';
import MainCarousel from '@/components/main-movie/MainCarousel';

const Home = () => {
  const dispatch = useDispatch();

  const { fulfilled: upcomingMoviesFulfilled, error: upcomingMoviesError } =
    useSelector(getUpcomingMoviesState);

  const { fulfilled: topRatedMoviesFulfilled, error: topRatedMoviesError } =
    useSelector(getTopRatedMoviesState);

  const { fulfilled: popularMoviesFulfilled, error: popularMoviesError } =
    useSelector(getPopularMoviesState);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUpcomingMovies({ page }));
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

  useEffect(() => {
    if (upcomingMoviesError) {
      Alert.alert(upcomingMoviesError); // TODO improve error message :)
    }
  }, [upcomingMoviesError]);

  return (
    <ScrollView>
      <View style={baseStyles.headerCarouselContainer}>
        <MainCarousel
          titleStyles={baseStyles.carousel.title}
          movies={upcomingMoviesFulfilled || []}
        />
      </View>
      <View style={baseStyles.carouselsContainer}>
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
    </ScrollView>
  );
};

export default Home;
