import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './componants/Header';
import { LandingPage } from './pages/LandindPage';
import { Footer } from './componants/Footer';
import FindJobsComponent from './pages/FindJobs';
import JobDetailComponent from './pages/JobDetail';
import { CompanyDetail } from './pages/CompanyDetail';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path="/find-jobs" element={<FindJobsComponent />} />
          <Route path='/find-companies' Component={LandingPage} />
          <Route path='/find-jobs/job-123456' Component={JobDetailComponent} />
          <Route path='/company' Component={CompanyDetail} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};


export default App;
