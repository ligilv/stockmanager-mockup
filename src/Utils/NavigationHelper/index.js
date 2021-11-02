import React from 'react';
export const Navigation_ref = React.createRef();

export const Navigate = (route, params) =>
  Navigation_ref.current?.navigate(route, params);
