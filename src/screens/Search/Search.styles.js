import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@/lib/utils/dimension-utils/dimensions';

export const baseStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    alignItems: 'flex-start',
  },
  input: {
    flex: 1,
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 20,
  },
});
