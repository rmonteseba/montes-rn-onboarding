import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@/lib/utils/dimension-utils/dimensions';

export const baseStyles = StyleSheet.create({
  movieTitleStyle: {
    textAlign: 'center',
    fontSize: 35,
    marginVertical: 10,
  },
  movieOverviewStyle: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  movieGenreViewStyle: {
    flexDirection: 'row',
    marginVertical: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  movieGenreStyle: {
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 15,
  },
  imageStyles: {
    width: SCREEN_WIDTH,
    height: 400,
    backgroundColor: 'black',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
