import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from '@/screens/Home/Home.styles';
import { getTopRatedMovies } from '@/actions/MovieActions';
import { getTopRatedMoviesState } from '@/selectors/MovieSelectors';
import MovieCarousel from '@/components/MovieCarousel';

const Home = () => {
  const dispatch = useDispatch();
  const { fulfilled: topRatedMoviesFulfilled, error: topRatedMoviesError } =
    useSelector(getTopRatedMoviesState);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getTopRatedMovies({ page }));
  }, [page, dispatch]);

  useEffect(() => {
    if (topRatedMoviesError) {
      Alert.alert(topRatedMoviesError); // TODO improve error message :)
    }
  }, [topRatedMoviesError]);

  return (
    <View style={styles.container}>
      <MovieCarousel movies={topRatedMoviesFulfilled || []} />
    </View>
  );
};

export default Home;
