import React from 'react';

export const AuthContext = React.createContext({
  login: null,
  logout: null,
  user: null,
  userData: null
});