import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const token = localStorage.getItem('supabase.auth.token');

  if (!token) {
    return <Navigate to="/signIn" replace state={{ from: location }} />; 
  }

  return children;
};

export default PrivateRoute;