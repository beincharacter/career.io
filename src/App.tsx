import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { Header } from './componants/Header';
import { LandingPage } from './pages/LandindPage';
import { Footer } from './componants/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const Layout: React.FC = () => {
  return <Outlet />;
};

export default App;