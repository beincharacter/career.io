import * as React from "react";

interface JobProps {
    imgSrc: string;
    title: string;
    company: string;
    location: string;
}


const jobsData: JobProps[] = [
    {
        imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/00df84a556bc62cffdc84c6a7e466c0ac0365cf2cec3200ebcbed12318e0aa9c?apiKey=946bf3455d5f470191c249fabc019131&",
        title: "Social Media Assistant",
        company: "Nomad",
        location: "Paris, France",
    },
    {
        imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3459f1f96f876f6e499823813e18b6a8827e6d912469a0a2bee9137d811970?apiKey=946bf3455d5f470191c249fabc019131&",
        title: "Brand Designer",
        company: "Dropbox",
        location: "San Fransisco, USA",
    },
    {
        imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a08c02b9b9d482dfe5363751a8dbf733fcc3393b299899e206760f182484c1e?apiKey=946bf3455d5f470191c249fabc019131&",
        title: "Interactive Developer",
        company: "Terraform",
        location: "Hamburg, Germany",
    },
    {
        imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/15ed45ceed55c4a64b945fb0dce03c635ff6c9f71ac13a9704ffe8cfa6375ad6?apiKey=946bf3455d5f470191c249fabc019131&",
        title: "HR Manager",
        company: "Packer",
        location: "Lucern, Switzerland",
    },
    {
        imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3957a51487401c52e7a419c5bfa66794280de1679258d1c6aacef342973fb21b?apiKey=946bf3455d5f470191c249fabc019131&",
        title: "Social Media Assistant",
        company: "Netlify",
        location: "Paris, France",
    },
    {
        imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5db8b45555abaa06f06b647b64a4f825e7a73c6913785916cd3effca74ceb4d9?apiKey=946bf3455d5f470191c249fabc019131&",
        title: "Brand Designer",
        company: "Maze",
        location: "San Fransisco, USA",
    },
    {
        imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe906a5c2847e1badb4ca32859986fc2e4b5fdaef4b0a50b51ba4192b35d3d24?apiKey=946bf3455d5f470191c249fabc019131&",
        title: "Interactive Developer",
        company: "Udacity",
        location: "Hamburg, Germany",
    },
    {
        imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c943e7321d8fac7f865bfada6e52e266db38d5ae81972d82de3db379cc13e3c0?apiKey=946bf3455d5f470191c249fabc019131&",
        title: "HR Manager",
        company: "Webflow",
        location: "Lucern, Switzerland",
    },
];


const JobCard: React.FC<JobProps> = ({ imgSrc, title, company, location }) => {
    return (
        <div className="p-4 sm:p-6 md:p-10 mt-4 bg-white">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex justify-center sm:justify-start sm:w-1/5">
                    <img
                        loading="lazy"
                        src={imgSrc}
                        alt={`${title} logo`}
                        className="w-12 sm:w-16 aspect-square"
                    />
                </div>
                <div className="flex flex-col sm:w-4/5">
                    <div className="flex flex-col font-semibold leading-tight">
                        <div className="text-lg sm:text-xl leading-6 text-slate-800">{title}</div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2 mt-2 text-sm sm:text-base text-slate-600">
                            <div>{company}</div>
                            <div>{location}</div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3 text-xs sm:text-sm whitespace-nowrap">
                            <div className="px-2 py-1 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-full">
                                Full-Time
                            </div>
                            <div className="hidden sm:block shrink-0 w-px bg-zinc-200 h-[34px]" />
                            <div className="px-2 py-1 text-amber-400 border border-amber-400 rounded-full">
                                Marketing
                            </div>
                            <div className="px-2 py-1 text-indigo-600 border border-indigo-600 rounded-full">
                                Design
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LatestJobsOpen: React.FC = () => {
    return (
        <section className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 justify-end items-center pt-10 sm:pt-16 md:pt-20 w-full bg-[#F8F8FD]">
            <div className="flex flex-col w-full max-w-[1192px]">
                <header className="flex flex-col sm:flex-row gap-4 justify-between w-full font-semibold">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-sky-400 leading-tight">
                        Latest <span className="text-sky-400">jobs open</span>
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