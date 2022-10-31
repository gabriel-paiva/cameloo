import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from '../config/RootNavigation';
import { useAuth } from '../hooks/auth';

import { GuestRoutes } from './guest.routes';
import { AuthenticatedRoutes } from './authenticated.routes';

export const Routes = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer ref={navigationRef}>
      {!user?.id ? <GuestRoutes /> : <AuthenticatedRoutes />}
    </NavigationContainer>
  );
};
