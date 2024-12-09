import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Home from '../views/Home/Home';
import Dashboard from '../views/Dashboard/Dashboard';
import Settings from '../views/Settings/Settings';
import SignIn from '../views/SignIn/SignIn';
import SignUp from '../views/SignUp/SignUp';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter basename="/desenvolvimento-web">
      <Routes>
        <Route path="/signIn" element={<PublicRoute><SignIn /></PublicRoute>} />
        <Route path="/signUp" element={<PublicRoute><SignUp /></PublicRoute>} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;