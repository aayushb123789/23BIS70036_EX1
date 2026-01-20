import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    userName: '',
    role: 'guest',
    token: null,
  });

  function login({ userName, role = 'user', token = 'fake-token' }) {
    setAuth({ isLoggedIn: true, userName, role, token });
  }

  function logout() {
    setAuth({ isLoggedIn: false, userName: '', role: 'guest', token: null });
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}