import * as React from "react";
import { jobsData } from "../assets/data";
import { JobCard } from "./JobsCard";

const LatestJobsOpen: React.FC = () => {
    return (
        <section className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 justify-end items-center pt-10 sm:pt-16 md:pt-20 w-full bg-[#F8F8FD]">
            <div className="flex flex-col w-full max-w-[1192px]">
                <header className="flex flex-col sm:flex-row gap-4 justify-between w-full font-semibold">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-sky-400 leading-tight">
                        Latest <span className="text-black">jobs open</span>
                    </h1>
                    <nav className="flex gap-2 sm:gap-4 items-center text-sm sm:text-base leading-6 text-center text-indigo-600">
                        <a href="#all-jobs" className="hover:underline">
                            Show all jobs
                        </a>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/247d3677732c680ee4f270e0de17e72780a5526fa8c7aeefd90199d2c241fe60?apiKey=946bf3455d5f470191c249fabc019131&"
                            alt=""
                            className="shrink-0 w-4 sm:w-5 md:w-6 aspect-square"
                        />
                    </nav>
                </header>
                <div className="mt-6 sm:mt-8 md:mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                        {jobsData.map((job, index) => (
                            <JobCard key={index} {...job} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestJobsOpen;