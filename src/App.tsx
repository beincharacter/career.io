import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './componants/Header';
import { LandingPage } from './pages/LandindPage';
import { Footer } from './componants/Footer';
import FindJobsComponent from './pages/FindJobs';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/find-jobs" element={<FindJobsComponent />} />
          <Route path='/find-companies' Component={LandingPage} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};


export default App;