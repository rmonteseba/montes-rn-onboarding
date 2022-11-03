import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { baseStyles } from '@/screens/MyList/MyList.styles';
import FavoritesList from '@/components/my-list/MyList';
import { getMyMovies } from '@/selectors/MyMoviesSelectors';

const MyList = () => {
  const savedMovies = useSelector(getMyMovies);
  return (
    <View style={baseStyles.container}>
      <FavoritesList
        movies={savedMovies}
        styles={baseStyles.list}
        cardStyles={baseStyles.cardStyles}
        imageStyles={baseStyles.imageStyles}
      />
    </View>
  );
};

export default MyList;
