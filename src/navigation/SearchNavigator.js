import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Search } from '@/screens';
import { strings } from '@/localization';

const Stack = createNativeStackNavigator();

export function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.search}
        component={Search}
        options={{ title: strings.search.screenTitle }}
      />
    </Stack.Navigator>
  );
}
