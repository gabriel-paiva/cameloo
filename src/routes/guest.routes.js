import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as GuestPages from '../screens/Guests';

const Stack = createStackNavigator();

export const GuestRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={GuestPages.Home} />
      <Stack.Screen name="Login" component={GuestPages.Login} />
      <Stack.Screen name="SignUp" component={GuestPages.SignUp} />
    </Stack.Navigator>
  );
};
