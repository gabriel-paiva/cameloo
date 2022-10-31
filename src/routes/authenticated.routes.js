import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as AuthenticatedPages from '../screens/Authenticated';

const Stack = createStackNavigator();

export const AuthenticatedRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Feed" component={AuthenticatedPages.Feed} />
    </Stack.Navigator>
  );
};
