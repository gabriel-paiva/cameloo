import { createRef } from 'react';

export const navigationRef = createRef();

// esse navigation serve para ser usado dentro de context api
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
