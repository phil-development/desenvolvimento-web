import React from 'react';
import { AppContextProvider } from './Context';
import AppRoutes from './routes/index';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <AppRoutes /> 
    </AppContextProvider>
  );
};

export default App;