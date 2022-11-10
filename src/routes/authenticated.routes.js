import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as AuthenticatedPages from '../screens/Authenticated';
import colors from '../utils/colors';

const Stack = createStackNavigator();
const BotomTabs = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <BotomTabs.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.orange,
        },
        tabBarShowLabel: false,
      }}
    >
      <BotomTabs.Screen
        name="Feed"
        component={AuthenticatedPages.Feed}
        options={({ route }) => ({
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={30} color="#000" />
          ),
          headerShown: false,
        })}
      />

      <BotomTabs.Screen
        name="Cart"
        component={AuthenticatedPages.Cart}
        options={({ route }) => ({
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="shopping-cart" size={30} color="#000" />
          ),
          headerShown: false,
        })}
      />

      <BotomTabs.Screen
        name="Profile"
        component={AuthenticatedPages.Profile}
        options={({ route }) => ({
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person" size={30} color="#000" />
          ),
          headerShown: false,
        })}
      />
    </BotomTabs.Navigator>
  );
};

export const AuthenticatedRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Feed" component={TabBar} />
      <Stack.Screen name="Cart" component={TabBar} />
      <Stack.Screen name="Profile" component={TabBar} />
      <Stack.Screen
        name="MyProducts"
        component={AuthenticatedPages.MyProducts}
      />
      <Stack.Screen
        name="MyRequests"
        component={AuthenticatedPages.MyRequests}
      />
      <Stack.Screen name="Product" component={AuthenticatedPages.Product} />
    </Stack.Navigator>
  );
};
