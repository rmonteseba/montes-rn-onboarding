import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';
import MovieDetail from '@/screens/MovieDetail/MovieDetail';
import { strings } from '@/localization';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.home}
        component={Home}
        options={{ title: strings.home.screenTitle }}
      />
      <Stack.Screen
        name={NAVIGATION.movieDetail}
        component={MovieDetail}
        options={{ title: strings.movieDetail.screenTitle }}
      />
    </Stack.Navigator>
  );
}
