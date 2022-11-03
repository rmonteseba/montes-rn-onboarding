import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@/lib/utils/dimension-utils/dimensions';

export const baseStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: 200,
  },
  cardStyles: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  imageStyles: {
    width: 300,
    height: 160,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#AAB1B2',
  },
});
