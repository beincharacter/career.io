import React from 'react';
import "./App.css";
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './componants/Header';
import { LandingPage } from './pages/LandindPage';
import { Footer } from './componants/Footer';
import FindJobsComponent from './pages/FindJobs';
import JobDetailComponent from './pages/JobDetail';
import { CompanyDetail } from './pages/CompanyDetail';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Dashboard from './pages/DashboardOrg/OrgDashboard';

const App: React.FC = () => {
  const location = useLocation();
  const authRoutes = ['/auth/login', '/auth/signup'];
  const hideHeaderFooter = authRoutes.includes(location.pathname) || location.pathname.startsWith('/dashboard/organization');

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path="/find-jobs" element={<FindJobsComponent />} />
        <Route path='/find-companies' element={<LandingPage />} />
        <Route path='/find-jobs/job-123456' element={<JobDetailComponent />} />
        <Route path='/company' element={<CompanyDetail />} />
        <Route path='/dashboard/organization/*' element={<Dashboard />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};
export default App;