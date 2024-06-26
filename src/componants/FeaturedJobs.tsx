import * as React from "react";

type JobCardProps = {
  imageSrc: string;
  jobType: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
};

const JobCard: React.FC<JobCardProps> = ({ imageSrc, jobType, title, company, location, description, tags }) => {
  return (
    <article className="flex flex-col grow p-4 sm:p-6 w-full text-sm sm:text-base leading-6 bg-white border border-solid border-zinc-200 transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="flex gap-3 sm:gap-5 justify-between text-center text-indigo-600">
        <img loading="lazy" src={imageSrc} alt={`${company} logo`} className="shrink-0 w-8 sm:w-12 aspect-square" />
        <div className="justify-center self-start px-2 sm:px-3 py-1 text-xs sm:text-sm border border-indigo-600 border-solid">{jobType}</div>
      </div>
      <h2 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-slate-800">{title}</h2>
      <div className="flex gap-2 text-sm sm:text-base text-slate-600 items-center">
        <div>{company}</div> 
        <span className="flex w-1 h-1 rounded-full bg-gray-400"></span>
        <div>{location}</div>
      </div>
      <div className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-500">{description}</div>
      <div className="flex flex-wrap gap-2 mt-3 sm:mt-4 text-xs sm:text-sm font-semibold">
        {tags.map((tag) => (
          <div
            key={tag}
            className={`justify-center px-3 py-1 bg-opacity-10 rounded-[80px] ${
              tag === "Marketing"
                ? "text-amber-400 bg-orange-400"
                : tag === "Design"
                ? "text-emerald-300 bg-emerald-300"
                : tag === "Business"
                ? "text-indigo-600 bg-indigo-600"
                : tag === "Technology"
                ? "text-red-400 bg-red-400"
                : ""
            }`}
          >
            {tag}
          </div>
        ))}
      </div>
    </article>
  );
};


const jobs = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f1a9cf2002efeb1c1b057456689ceaa26054a930c4207f91bf8a444e95f2e2b?apiKey=946bf3455d5f470191c249fabc019131&",
    jobType: "Freelancer",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    tags: ["Marketing", "Design"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b78489796b67fdc3b14ddfd1baea86d7dae2244f2ed0354a3544852f960da247?apiKey=946bf3455d5f470191c249fabc019131&",
    jobType: "Full Time",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    tags: ["Design", "Business"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c541deedc35de9312d35db62eed3d1849480c56fcafc66c1078627560e9e322f?apiKey=946bf3455d5f470191c249fabc019131&",
    jobType: "Full Time",
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t ...",
    tags: ["Marketing"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f23683e49d6b6dab0662725d96b42203d8d4b4834611c77f3aacb7ad6b7e236?apiKey=946bf3455d5f470191c249fabc019131&",
    jobType: "Full Time",
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team desi ...",
    tags: ["Design"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1249962360d873bce2ae77d9545621a0bda881c1a560741ba44a712b249f6845?apiKey=946bf3455d5f470191c249fabc019131&",
    jobType: "Full Time",
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    tags: ["Marketing", "Design"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e4c009a0e5e1756a9b7d0aa1b3dd2b5c9948105d5bac08c2506ef0b1be70f2d?apiKey=946bf3455d5f470191c249fabc019131&",
    jobType: "Full Time",
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    tags: ["Design", "Business"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d431d23b281c9085f9301cc93c6e4535ada9528d61af0b2db1265f204f23f0dc?apiKey=946bf3455d5f470191c249fabc019131&",
    jobType: "Full Time",
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: ["Marketing"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e68a26fa08d2abd46d8560af8424b64afb2c28d11d73faea886b6bcb78189f25?apiKey=946bf3455d5f470191c249fabc019131&",
    jobType: "Full Time",
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    tags: ["Technology"]
  }
];

const FeaturedJobs: React.FC = () => {
  return (
    <section className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 justify-end items-center pt-10 sm:pt-16 md:pt-20 w-full bg-white">
      <div className="flex flex-col w-full max-w-[1192px]">
        <header className="flex flex-col sm:flex-row gap-4 justify-between w-full font-semibold">
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
            Featured <span className="text-sky-400">jobs</span>
          </h1>
          <nav className="flex gap-2 sm:gap-4 items-center text-sm sm:text-base leading-6 text-center text-indigo-600">
            <a href="#" className="flex items-center">
              Show all jobs
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/247d3677732c680ee4f270e0de17e72780a5526fa8c7aeefd90199d2c241fe60?apiKey=946bf3455d5f470191c249fabc019131&"
                alt="Show all jobs icon"
                className="ml-1 shrink-0 w-4 sm:w-5 md:w-6 aspect-square"
              />
            </a>
          </nav>
        </header>
        <section className="mt-6 sm:mt-8 md:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default FeaturedJobs;