import React from 'react';
import { BrowserRouter, Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import App from '../App';
import { LandingPage } from '../pages/LandindPage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
        </Route>
      </ReactRouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;