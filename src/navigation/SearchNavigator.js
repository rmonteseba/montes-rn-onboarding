import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Search } from '@/screens';

const Stack = createNativeStackNavigator();

export function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.search} component={Search} />
    </Stack.Navigator>
  );
}
