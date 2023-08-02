import React from 'react';
import { Home } from '../screens';
import { Information } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Information"
        component={Information}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
