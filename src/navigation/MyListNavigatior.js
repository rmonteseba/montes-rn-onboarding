import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { MyList } from '@/screens';
import { strings } from '@/localization';

const Stack = createNativeStackNavigator();

export function MyListNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.myList}
        component={MyList}
        options={{ title: strings.myList.screenTitle }}
      />
    </Stack.Navigator>
  );
}
