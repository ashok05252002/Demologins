import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedAuthState = sessionStorage.getItem('isLoggedIn') === 'true';
      if (storedAuthState) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Could not access session storage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = () => {
    try {
      sessionStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      // Navigation is now handled declaratively in App.jsx
    } catch (error) {
      console.error("Could not set session storage:", error);
    }
  };

  const logout = () => {
    try {
      sessionStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      navigate('/login');
    } catch (error) {
      console.error("Could not remove session storage:", error);
    }
  };

  const value = { isLoggedIn, isLoading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
