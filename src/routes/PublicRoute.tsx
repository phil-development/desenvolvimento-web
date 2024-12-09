import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('supabase.auth.token');

  if (token) {
    return <Navigate to="/" replace />; 
  };

  return children;
};

export default PublicRoute;