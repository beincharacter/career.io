import { ApplicantsSummary } from "./ApplicationSummary";
import { JobOpen } from "./JobOpen";
import { JobStatistics } from "./JobStatics";

export const Statics: React.FC = () => {
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