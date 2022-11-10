import React from 'react';

import { AuthProvider } from './auth';
import { CartProvider } from './cart';

export const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};
