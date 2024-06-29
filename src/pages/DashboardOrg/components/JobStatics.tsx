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

export const JobStatistics: React.FC<JobStatisticsProps> = ({ period, data }) => {
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