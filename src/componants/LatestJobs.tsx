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
        <div className="px-10 py-6 mt-4 bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src={imgSrc}
                        alt={`${title} logo`}
                        className="shrink-0 w-16 aspect-square max-md:mt-10"
                    />
                </div>
                <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow font-semibold leading-[160%] max-md:mt-10">
                        <div className="text-xl leading-6 text-slate-800">{title}</div>
                        <div className="flex gap-2 justify-between py-px mt-2 text-base text-slate-600">
                            <div>{company}</div>
                            <div>{location}</div>
                        </div>
                        <div className="flex gap-2 mt-2 text-sm whitespace-nowrap">
                            <div className="justify-center px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                Full-Time
                            </div>
                            <div className="shrink-0 w-px bg-zinc-200 h-[34px]" />
                            <div className="justify-center px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                Marketing
                            </div>
                            <div className="justify-center px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
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
        <section className="flex flex-col px-24 justify-end items-center pt-20 w-full max-md:px-5 max-md:max-w-full bg-[#F8F8FD]">
          <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
                <header className="flex relative gap-2.5 justify-between w-full font-semibold max-md:flex-wrap max-md:max-w-full">
                    <h1 className="text-5xl text-sky-400 leading-[52.8px] max-md:text-4xl">
                        Latest <span className="text-sky-400">jobs open</span>
                    </h1>
                    <nav className="flex gap-4 self-end mt-7 text-base leading-6 text-center text-indigo-600">
                        <a href="#all-jobs" className="hover:underline">
                            Show all jobs
                        </a>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/247d3677732c680ee4f270e0de17e72780a5526fa8c7aeefd90199d2c241fe60?apiKey=946bf3455d5f470191c249fabc019131&"
                            alt=""
                            className="shrink-0 self-start w-6 aspect-square"
                        />
                    </nav>
                </header>
                <div className="relative mt-12 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            {jobsData.slice(0, 4).map((job, index) => (
                                <JobCard key={index} {...job} />
                            ))}
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            {jobsData.slice(4).map((job, index) => (
                                <JobCard key={index} {...job} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestJobsOpen;