import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AuthenticatedRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="test"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="test" component={null} />
    </Stack.Navigator>
  );
};
