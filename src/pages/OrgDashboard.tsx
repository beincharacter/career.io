import React from 'react';

type JobCardProps = {
  logo: string;
  jobType: string;
  title: string;
  company: string;
  location: string;
  tags: string[];
  applicants: number;
  capacity: number;
};

const JobCard: React.FC<JobCardProps> = ({ logo, jobType, title, company, location, tags, applicants, capacity }) => (
  <article className="flex flex-col grow p-6 mx-auto w-full text-sm font-semibold leading-6 bg-white border border-solid border-zinc-200 max-md:pl-5 max-md:mt-10">
    <header className="flex gap-5 justify-between text-emerald-300 whitespace-nowrap">
      <img loading="lazy" src={logo} alt={`${company} logo`} className="shrink-0 w-12 aspect-square" />
      <span className="justify-center self-start px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px]">{jobType}</span>
    </header>
    <h3 className="mt-4 text-lg text-slate-800">{title}</h3>
    <div className="flex gap-2 justify-between text-base text-slate-500">
      <span>{company}</span>
      <span>{location}</span>
    </div>
    <div className="flex gap-2 mt-6 whitespace-nowrap">
      {tags.map((tag, index) => (
        <span key={index} className={`justify-center px-2.5 py-1.5 text-${tag.toLowerCase() === 'marketing' ? 'amber-400' : tag.toLowerCase() === 'business' ? 'emerald-300' : 'indigo-600'} border border-${tag.toLowerCase() === 'marketing' ? 'amber-400' : tag.toLowerCase() === 'business' ? 'emerald-300' : 'indigo-600'} border-solid rounded-[80px]`}>
          {tag}
        </span>
      ))}
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f6635cad5e74588291558b1c60dc0f01e32c9de2e293a8f96f01b1be6c87344?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="Progress bar" className="self-center mt-6 aspect-[33.33] w-[199px]" />
    <p className="mt-2 text-center text-slate-500">
      <span className="font-semibold text-slate-800">{applicants} applied</span>{" "}
      <span className="text-slate-500">of {capacity} capacity</span>
    </p>
  </article>
);

type StatCardProps = {
  count: number;
  title: string;
  bgColor: string;
  icon: string;
};

const StatCard: React.FC<StatCardProps> = ({ count, title, bgColor, icon }) => (
  <article className={`flex grow gap-3.5 items-center p-6 w-full text-white ${bgColor} max-md:px-5 max-md:mt-6`}>
    <h2 className="self-stretch my-auto text-5xl font-semibold leading-10 max-md:text-4xl">{count}</h2>
    <p className="text-lg font-medium leading-7">{title}</p>
    <img loading="lazy" src={icon} alt="" className="shrink-0 self-stretch my-auto w-6 aspect-square" />
  </article>
);

type SidebarItemProps = {
  icon: string;
  text: string;
  isActive?: boolean;
  notificationCount?: number;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isActive, notificationCount }) => (
  <li className={`flex gap-4 py-3 pr-4 pl-8 text-base font-medium ${isActive ? 'text-indigo-600 bg-violet-100' : 'text-slate-500'} max-md:px-5`}>
    <img loading="lazy" src={icon} alt="" className="shrink-0 w-6 aspect-square" />
    <span className="flex-1">{text}</span>
    {notificationCount && (
      <span className="flex flex-col justify-center text-sm font-semibold text-white">
        <span className="justify-center items-center w-6 h-6 bg-indigo-600 rounded-full">{notificationCount}</span>
      </span>
    )}
  </li>
);

const Dashboard: React.FC = () => {
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
              <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/13bda64b2764e7fd0f210e18620dbfa648f35bfe478ceba6ebddd17e66f760c4?apiKey=9930d1395d354fadb15c776dbd7b25f4&" text="Dashboard" isActive={true} />
              <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1e19b4a6c8836c852e12ff71e5732a588ac56e43313e83ea25ac6ab63b826e9b?apiKey=9930d1395d354fadb15c776dbd7b25f4&" text="Messages" notificationCount={1} />
              <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6eb0947590b9261e78ac158468c2f2ca1ffc87d01c67ce14de4335a84f134065?apiKey=9930d1395d354fadb15c776dbd7b25f4&" text="Company Profile" />
              <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b358d7fbfcb41ba8281dc23ab77b79e2b605c3d4ed4fb4112878b368200619fa?apiKey=9930d1395d354fadb15c776dbd7b25f4&" text="All Applicants" />
              <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f6f12e92a07a5d713b0b3546106dfce5b7a402f715425ae47bb4226631dd118d?apiKey=9930d1395d354fadb15c776dbd7b25f4&" text="Job Listing" />
              <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2c8f942259b896a7fcaa9e83229b8a06804e2dc9e2e59b5bf400abc870c5e2f3?apiKey=9930d1395d354fadb15c776dbd7b25f4&" text="My Schedule" />
            </ul>
            <hr className="shrink-0 mt-8 h-px bg-indigo-200" />
            <h2 className="self-start mt-8 ml-8 text-sm font-semibold tracking-wide leading-6 text-gray-800 max-md:ml-2.5">SETTINGS</h2>
            <ul>
              <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6fa6148bd6308148f2d6bbb36a1f1c44370a7235a22fbea630899cc6270a1786?apiKey=9930d1395d354fadb15c776dbd7b25f4&" text="Settings" />
              <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/aa6aa3c474a254652e566e074687b5993f1c6b6f3a63b15daffd470aef8223a3?apiKey=9930d1395d354fadb15c776dbd7b25f4&" text="Help Center" />
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
            <section className="flex gap-5 justify-between p-8 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <h2 className="text-2xl font-semibold leading-7 text-slate-800 max-md:max-w-full">Good morning, Maria</h2>
                <p className="mt-2 text-base font-medium leading-6 text-slate-500 max-md:max-w-full">Here is your job listings statistic report from July 19 - July 25.</p>
              </div>
              <div className="flex gap-4 justify-between px-4 py-3 my-auto text-base leading-6 bg-white border border-solid border-zinc-200 text-slate-800">
                <span>Jul 19 - Jul 25</span>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3335a5ece0240df147c783882102db24784a37951f3b87594d75dd5251923ce?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
              </div>
            </section>
            <section className="px-px mx-8 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <StatCard count={76} title="New candidates to review" bgColor="bg-indigo-600" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/941d13a990d4cbc86f7c8c3adcc355f291a87fd4eb447bb3f9d6e79546c42e33?apiKey=9930d1395d354fadb15c776dbd7b25f4&" />
                <StatCard count={3} title="Schedule for today" bgColor="bg-emerald-300" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7c2e7340f17e7a375d8385e249f25e61e76dbf3cfeafcd0340f750020e882f84?apiKey=9930d1395d354fadb15c776dbd7b25f4&" />
                <StatCard count={24} title="Messages received" bgColor="bg-sky-400" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6aae5462035bfc174202a6201231087516db20017747b2e372ec0e688c5d09ef?apiKey=9930d1395d354fadb15c776dbd7b25f4&" />
              </div>
            </section>
            <section className="mx-8 mt-6 max-md:mr-2.5 max-md:max-w-full"><Statics />
            </section>
            <section className="flex flex-col mx-8 mt-6 border border-solid border-zinc-200 max-md:mr-2.5 max-md:max-w-full">
              <header className="flex gap-5 justify-between p-6 w-full font-semibold bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <h2 className="text-xl leading-6 text-slate-800">Job Updates</h2>
                <button className="flex gap-2 text-base leading-6 text-indigo-600">
                  <span>View All</span>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf6c44027fa215379c9325061228bf4e23d57d4188c20d5c323c141a2e7cb9dc?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 self-start w-6 aspect-square" />
                </button>
              </header>
              <div className="p-6 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <JobCard
                    logo="https://cdn.builder.io/api/v1/image/assets/TEMP/a6298d2c3128a26ad9f48ff16af5ae7ed737ec7ea0571b1695c6da2925ddf5e7?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                    jobType="Full-Time"
                    title="Social Media Assistant"
                    company="Nomad"
                    location="Paris, France"
                    tags={["Marketing", "Design"]}
                    applicants={5}
                    capacity={10}
                  />
                  <JobCard
                    logo="https://cdn.builder.io/api/v1/image/assets/TEMP/c65cb95144e38180fdb5595327425ace9a18bcea174fe9ef42436b43634e6ad7?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                    jobType="Full-Time"
                    title="Brand Designer"
                    company="Nomad"
                    location="Paris, France"
                    tags={["Business", "Design"]}
                    applicants={5}
                    capacity={10}
                  />
                  <JobCard
                    logo="https://cdn.builder.io/api/v1/image/assets/TEMP/4368eb24adcd99b27948e96dd6f42755a5ba8dd952ed59bd8b5b9ff3a9fde84a?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                    jobType="Full-Time"
                    title="Interactive Developer"
                    company="Terraform"
                    location="Berlin, Germany"
                    tags={["Marketing", "Design"]}
                    applicants={5}
                    capacity={10}
                  />
                  <JobCard
                    logo="https://cdn.builder.io/api/v1/image/assets/TEMP/a20ad071afd21516dee9c00d5bbf615af1aea3ee17c09f6786983cd29abd0c47?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                    jobType="Full-Time"
                    title="Product Designer"
                    company="ClassPass"
                    location="Berlin, Germ.."
                    tags={["Business", "Design"]}
                    applicants={5}
                    capacity={10}
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

// import * as React from "react";

type JobStatisticsProps = {
  period: string;
  data: {
    jobViews: number;
    jobsApplied: number;
    jobViewPercentage: number;
    jobAppliedPercentage: number;
    isJobViewIncreased: boolean;
    isJobAppliedIncreased: boolean;
    dailyStats: Array<{
      day: string;
      jobViews: number;
      jobsApplied: number;
    }>;
  };
};

type JobOpenProps = {
  count: number;
};

type ApplicantsSummaryProps = {
  total: number;
  categories: Array<{
    name: string;
    count: number;
    color: string;
  }>;
};

const JobStatistics: React.FC<JobStatisticsProps> = ({ period, data }) => {
  return (
    <section className="flex flex-col grow py-6 w-full bg-white border border-solid border-zinc-200 max-md:mt-6 max-md:max-w-full">
      <div className="flex gap-5 justify-between mx-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold leading-6 text-slate-800">Job statistics</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">Showing Jobstatistic {period}</p>
        </div>
        <div className="flex gap-0 self-start p-1 text-base font-semibold leading-6 text-indigo-600 whitespace-nowrap bg-violet-100">
          <button className="justify-center px-3 py-2 bg-white">Week</button>
          <button className="justify-center px-3 py-2 bg-violet-100">Month</button>
          <button className="justify-center px-3 py-2 bg-violet-100">Year</button>
        </div>
      </div>
      <nav className="flex gap-5 justify-between items-start px-6 mt-4 text-base font-semibold leading-6 bg-white shadow-sm text-slate-500 max-md:flex-wrap max-md:px-5">
        <div className="flex flex-col self-stretch whitespace-nowrap text-slate-800">
          <div>Overview</div>
          <div className="shrink-0 mt-2 h-1 bg-indigo-600 rounded-none" />
        </div>
        <div>Jobs View</div>
        <div className="max-md:max-w-full">Jobs Applied</div>
      </nav>
      <div className="mx-6 mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base font-medium leading-6 text-center text-slate-500 max-md:mt-6 max-md:max-w-full">
              <div className="flex flex-col py-2 ml-28 text-white whitespace-nowrap bg-slate-800 w-[82px] max-md:ml-2.5">
                <div className="flex gap-2">
                  <div className="shrink-0 my-auto w-4 h-4 bg-emerald-300 rounded" />
                  <div>{data.jobViews}</div>
                </div>
                <div className="flex gap-2">
                  <div className="shrink-0 my-auto w-4 h-4 bg-sky-400 rounded" />
                  <div>{data.jobsApplied}</div>
                </div>
              </div>
              <div className="flex gap-4 items-end whitespace-nowrap max-md:flex-wrap">
                {data.dailyStats.map((stat, index) => (
                  <div key={index} className="flex flex-col flex-1">
                    <div className="shrink-0 bg-amber-400" style={{ height: `${stat.jobViews}px` }} />
                    <div className="shrink-0 bg-violet-500" style={{ height: `${stat.jobsApplied}px` }} />
                    <div className="mt-2">{stat.day}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-5 justify-between mt-2 max-md:flex-wrap">
                <div className="flex gap-2">
                  <div className="shrink-0 my-auto w-4 h-4 bg-amber-400 rounded" />
                  <div>Job View</div>
                </div>
                <div className="flex gap-2">
                  <div className="shrink-0 my-auto w-4 h-4 bg-violet-500 rounded" />
                  <div>Job Applied</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-1.5 max-md:mt-7">
              <div className="flex flex-col p-4 w-full bg-white border border-solid border-zinc-200">
                <div className="flex gap-5 justify-between">
                  <h3 className="text-lg font-semibold leading-7 text-slate-800">Job Views</h3>
                  <div className="flex justify-center items-center p-1.5 w-8 h-8 bg-amber-400 rounded-[32px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c0021ab189b58700704661735999bd683d5e9a3e8a6760e1a774aff3838f2cf?apiKey=9930d1395d354fadb15c776dbd7b25f4&" className="w-5 aspect-square" alt="" />
                  </div>
                </div>
                <div className="mt-3.5 text-4xl font-semibold leading-9 text-center text-slate-800">{data.jobViews}</div>
                <div className="flex gap-2 text-lg font-medium leading-7 text-center">
                  <div className="text-slate-500">This Week</div>
                  <div className={`flex gap-0 pr-1.5 whitespace-nowrap ${data.isJobViewIncreased ? 'text-violet-500' : 'text-red-400'}`}>
                    <div>{data.jobViewPercentage}%</div>
                    <img loading="lazy" src={`http://b.io/ext_${data.isJobViewIncreased ? '2' : '4'}-`} className="shrink-0 my-auto w-5 aspect-square" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-4 mt-4 w-full bg-white border border-solid border-zinc-200">
                <div className="flex gap-5 justify-between">
                  <h3 className="text-lg font-semibold leading-7 text-slate-800">Job Applied</h3>
                  <div className="flex justify-center items-center p-1.5 w-8 h-8 bg-violet-500 rounded-[32px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/15b9fcc23e2aeca138b237f19d07674329d3b9e632b47124ecfbff16b4d352d4?apiKey=9930d1395d354fadb15c776dbd7b25f4&" className="w-5 aspect-square" alt="" />
                  </div>
                </div>
                <div className="mt-3.5 text-4xl font-semibold leading-9 text-center text-slate-800">{data.jobsApplied}</div>
                <div className="flex gap-2 text-lg font-medium leading-7 text-center">
                  <div className="text-slate-500">This Week</div>
                  <div className={`flex gap-0 pr-1.5 whitespace-nowrap ${data.isJobAppliedIncreased ? 'text-violet-500' : 'text-red-400'}`}>
                    <div>{data.jobAppliedPercentage}%</div>
                    <img loading="lazy" src={`http://b.io/ext_${data.isJobAppliedIncreased ? '2' : '4'}-`} className="shrink-0 my-auto w-5 aspect-square" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const JobOpen: React.FC<JobOpenProps> = ({ count }) => {
  return (
    <section className="flex flex-col pt-6 pb-6 w-full bg-white border border-solid border-zinc-200">
      <h2 className="self-start ml-6 text-xl font-semibold leading-6 text-center text-slate-800 max-md:ml-2.5">Job Open</h2>
      <div className="flex gap-4 items-start px-6 pt-2.5 pb-5 mt-4 max-md:px-5">
        <div className="self-start text-7xl font-semibold leading-[72px] text-slate-800 max-md:text-4xl">{count}</div>
        <div className="flex-auto self-end mt-10 text-xl leading-8 text-slate-500">Jobs Opened</div>
      </div>
    </section>
  );
};

const ApplicantsSummary: React.FC<ApplicantsSummaryProps> = ({ total, categories }) => {
  return (
    <section className="flex flex-col pt-6 pb-6 mt-6 w-full bg-white border border-solid border-zinc-200">
      <h2 className="self-start ml-6 text-xl font-semibold leading-6 text-center text-slate-800 max-md:ml-2.5">Applicants Summary</h2>
      <div className="flex gap-2 px-6 py-2 mt-4 whitespace-nowrap max-md:px-5">
        <div className="text-7xl font-semibold leading-[72px] text-slate-800 max-md:text-4xl">{total}</div>
        <div className="self-end mt-6 text-xl leading-8 text-slate-500">Applicants</div>
      </div>
      <div className="flex gap-0 justify-center px-6 max-md:px-5">
        {categories.map((category, index) => (
          <div key={index} className={`shrink-0 h-4 bg-${category.color}`} style={{ width: `${(category.count / total) * 100}%` }} />
        ))}
      </div>
      <div className="flex gap-5 justify-between px-6 text-base leading-6 text-slate-800 max-md:px-5">
        <div className="flex flex-col pt-6">
          {categories.slice(0, 3).map((category, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <div className={`shrink-0 my-auto w-5 h-5 bg-${category.color} rounded`} />
              <div>
                {category.name}: <span className="font-medium text-slate-800">{category.count}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col self-start pt-6">
          {categories.slice(3).map((category, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <div className={`shrink-0 my-auto w-5 h-5 bg-${category.color} rounded`} />
              <div>
                {category.name}: <span className="font-medium text-slate-800">{category.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Statics: React.FC = () => {
  const jobStatisticsData = {
    period: "Jul 19-25",
    data: {
      jobViews: 2342,
      jobsApplied: 654,
      jobViewPercentage: 6.4,
      jobAppliedPercentage: 0.5,
      isJobViewIncreased: true,
      isJobAppliedIncreased: false,
      dailyStats: [
        { day: "Mon", jobViews: 115, jobsApplied: 115 },
        { day: "Tue", jobViews: 26, jobsApplied: 132 },
        { day: "Wed", jobViews: 110, jobsApplied: 48 },
        { day: "Thu", jobViews: 54, jobsApplied: 168 },
        { day: "Fri", jobViews: 132, jobsApplied: 64 },
        { day: "Sat", jobViews: 43, jobsApplied: 42 },
        { day: "Sun", jobViews: 11, jobsApplied: 96 },
      ],
    },
  };

  const applicantsSummaryData = {
    total: 67,
    categories: [
      { name: "Full Time", count: 45, color: "violet-500" },
      { name: "Part-Time", count: 24, color: "emerald-300" },
      { name: "Remote", count: 22, color: "sky-400" },
      { name: "Internship", count: 32, color: "amber-400" },
      { name: "Contract", count: 30, color: "red-400" },
    ],
  };

  return (
    <main className="mx-8 mt-6 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
          <JobStatistics {...jobStatisticsData} />
        </div>
        <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-6">
            <JobOpen count={12} />
            <ApplicantsSummary {...applicantsSummaryData} />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Dashboard;