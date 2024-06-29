import React, { useState, useEffect } from 'react';
import { Link, useLocation, Routes, Route } from "react-router-dom";
import { DashboardArea } from './subpages/DashboardArea';
import { MessagesArea } from './subpages/MessageArea';
import { CompanyProfileArea } from './subpages/CompanyProfileArea';
import { AllApplicantsArea } from './subpages/AllApplicantsArea';
import { JobListingArea } from './subpages/JobListingArea';
import { MyScheduleArea } from './subpages/MyScheduleArea';

type AreaType = 'dashboard' | 'messages' | 'companyProfile' | 'allApplicants' | 'jobListing' | 'mySchedule';

interface SidebarItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
  notificationCount?: number;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isActive, notificationCount, to }) => (
  <li className={`flex gap-4 py-3 pr-4 pl-8 text-base font-medium ${isActive ? 'text-indigo-600 bg-violet-100' : 'text-slate-500'} max-md:px-5`}>
    <Link to={to} className="flex items-center w-full">
      <img loading="lazy" src={icon} alt="" className="shrink-0 w-6 aspect-square" />
      <span className="flex-1">{text}</span>
      {notificationCount && (
        <span className="flex flex-col justify-center text-sm font-semibold text-white">
          <span className="justify-center items-center w-6 h-6 bg-indigo-600 rounded-full">{notificationCount}</span>
        </span>
      )}
    </Link>
  </li>
);

const Dashboard: React.FC = () => {
  const location = useLocation();
  const [activeArea, setActiveArea] = useState<AreaType>('dashboard');

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    setActiveArea(path as AreaType || 'dashboard');
  }, [location]);

  return (
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
          <nav className="flex flex-col grow justify-between self-stretch py-8 mx-auto w-full shadow-sm bg-slate-50 leading-[160%]">
            <div className="flex gap-2 mx-6 text-2xl font-bold tracking-tight leading-9 text-gray-800 whitespace-nowrap max-md:mx-2.5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5ff2ad732c35c9d5325d7cff8af6b6126bdd9e147a1f9d27e48cd612c2d4d53?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 my-auto w-8 aspect-square" />
              <h1>carrer.io</h1>
            </div>
            <ul>
              <SidebarItem 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/13bda64b2764e7fd0f210e18620dbfa648f35bfe478ceba6ebddd17e66f760c4?apiKey=9930d1395d354fadb15c776dbd7b25f4&" 
                text="Dashboard" 
                isActive={activeArea === 'dashboard'} 
                to="/dashboard/organization" 
              />
              <SidebarItem 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1e19b4a6c8836c852e12ff71e5732a588ac56e43313e83ea25ac6ab63b826e9b?apiKey=9930d1395d354fadb15c776dbd7b25f4&" 
                text="Messages" 
                notificationCount={1} 
                isActive={activeArea === 'messages'}
                to="/dashboard/organization/messages" 
              />
              <SidebarItem 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6eb0947590b9261e78ac158468c2f2ca1ffc87d01c67ce14de4335a84f134065?apiKey=9930d1395d354fadb15c776dbd7b25f4&" 
                text="Company Profile" 
                isActive={activeArea === 'companyProfile'}
                to="/dashboard/organization/company-profile" 
              />
              <SidebarItem 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b358d7fbfcb41ba8281dc23ab77b79e2b605c3d4ed4fb4112878b368200619fa?apiKey=9930d1395d354fadb15c776dbd7b25f4&" 
                text="All Applicants" 
                isActive={activeArea === 'allApplicants'}
                to="/dashboard/organization/all-applicants" 
              />
              <SidebarItem 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f6f12e92a07a5d713b0b3546106dfce5b7a402f715425ae47bb4226631dd118d?apiKey=9930d1395d354fadb15c776dbd7b25f4&" 
                text="Job Listing" 
                isActive={activeArea === 'jobListing'}
                to="/dashboard/organization/job-listing" 
              />
              <SidebarItem 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2c8f942259b896a7fcaa9e83229b8a06804e2dc9e2e59b5bf400abc870c5e2f3?apiKey=9930d1395d354fadb15c776dbd7b25f4&" 
                text="My Schedule" 
                isActive={activeArea === 'mySchedule'}
                to="/dashboard/organization/my-schedule" 
              />
            </ul>
            <hr className="shrink-0 mt-8 h-px bg-indigo-200" />
            <h2 className="self-start mt-8 ml-8 text-sm font-semibold tracking-wide leading-6 text-gray-800 max-md:ml-2.5">SETTINGS</h2>
            <ul>
              <SidebarItem 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6fa6148bd6308148f2d6bbb36a1f1c44370a7235a22fbea630899cc6270a1786?apiKey=9930d1395d354fadb15c776dbd7b25f4&" 
                text="Settings" 
                to="/dashboard/organization/settings" 
              />
              <SidebarItem 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/aa6aa3c474a254652e566e074687b5993f1c6b6f3a63b15daffd470aef8223a3?apiKey=9930d1395d354fadb15c776dbd7b25f4&" 
                text="Help Center" 
                to="/dashboard/organization/help-center" 
              />
            </ul>
            <div className="flex flex-col justify-center px-8 pt-5 mt-[599px] max-md:px-5 max-md:mt-10">
              <div className="flex gap-4">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f9d45253aac761a5539e20b8201da5cb83c5ab41db3311a92547e3f07c649b9?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="Maria Kelly profile picture" className="shrink-0 my-auto w-12 aspect-square" />
                <div className="flex flex-col">
                  <div className="text-lg font-semibold text-slate-800">Maria Kelly</div>
                  <div className="text-sm text-slate-600">MariaKlly@email.com</div>
                </div>
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pb-6 max-md:max-w-full">
            <header className="flex gap-5 justify-between px-8 py-4 w-full bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b324028973919cfc0e2c27abba1322e798d3c345785332d399d0d3ea9a722dd7?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="Nomad company logo" className="shrink-0 self-start w-12 aspect-square" />
                <div className="flex flex-col">
                  <div className="text-base leading-6 text-slate-600">Company</div>
                  <div className="flex gap-2 text-xl font-semibold leading-6 text-slate-800">
                    <div>Nomad</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/094d56e22dd1b07143c6e0b7804b4e8167234f7715ffe38b80659cd99184a939?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 w-6 aspect-square" />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-center text-base font-bold leading-6 text-center text-white">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8887545a4c8e7b3ba273e6877a850d3f6c6cbd40ab7a9b68f7e22bf3dd4ae5ac?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 my-auto w-10 aspect-square" />
                <button className="flex gap-2.5 justify-center px-6 py-3 bg-indigo-600 max-md:px-5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d6fe27442973a9c6261df5958a248749702f22ad2ca4351f28b465fb3f31d69?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 self-start w-6 aspect-square" />
                  <span>Post a job</span>
                </button>
              </div>
            </header>
            <Routes>
              <Route path="/" element={<DashboardArea />} />
              <Route path="/messages" element={<MessagesArea />} />
              <Route path="/company-profile" element={<CompanyProfileArea />} />
              <Route path="/all-applicants" element={<AllApplicantsArea />} />
              <Route path="/job-listing" element={<JobListingArea />} />
              <Route path="/my-schedule" element={<MyScheduleArea />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;