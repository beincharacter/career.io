import * as React from "react";

interface JobListingProps {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
  employmentType: string;
  category: string;
  tags: string[];
  applyUrl: string;
  appliedCount: number;
  capacity: number;
}

const JobListing: React.FC<JobListingProps> = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
  employmentType,
  category,
  tags,
  applyUrl,
  appliedCount,
  capacity,
}) => (
  <article className="flex gap-5 justify-between p-6 mt-4 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between font-semibold">
      <img loading="lazy" src={companyLogo} alt={`${companyName} logo`} className="shrink-0 self-start w-16 aspect-square" />
      <div className="flex flex-col">
        <h3 className="text-xl leading-6 text-slate-800">{jobTitle}</h3>
        <p className="flex gap-2 justify-between py-px mt-2 text-base text-slate-500">
          <span>{companyName}</span>
          <span>{location}</span>
        </p>
        <div className="flex gap-2 mt-2 text-sm whitespace-nowrap">
          <span className="justify-center px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
            {employmentType}
          </span>
          <div className="shrink-0 w-px bg-zinc-200 h-[34px]" />
          <span className="justify-center px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
            {category}
          </span>
          {tags.map((tag, index) => (
            <span key={index} className="justify-center px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-between text-center">
      <a href={applyUrl} className="justify-center px-6 py-3 text-base font-bold text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
        Apply
      </a>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/15b2c157c424782007e34bbaeba098a8101b9d33b776ee366a4c75f3ff429b65?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="self-center mt-4 aspect-[25] w-[164px]" />
      <p className="mt-2 text-sm text-slate-500">
        <span className="font-semibold text-slate-800">{appliedCount} applied</span>{" "}
        <span className="text-slate-500">of {capacity} capacity</span>
      </p>
    </div>
  </article>
);


const jobListings: JobListingProps[] = [
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/280e55916444ac0942e065bcbb64491fe3c4686333e9c11993846f3574cd5d1e?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Social Media Assistant",
    companyName: "Nomad",
    location: "Paris, France",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 5,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/db017e2232d25e9591b6b6afa03ae63029448ac36c6ef21eb55c821a226a5d74?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Brand Designer",
    companyName: "Dropbox",
    location: "San Francisco, USA",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 2,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7e54e3433e5406ea3cfd78fdd3c76529f7f9711da520b5ab89865269e1757ee?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Interactive Developer",
    companyName: "Terraform",
    location: "Hamburg, Germany",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 8,
    capacity: 12,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ee14618d47daa0ad5f6286d56f9c4280f2cfa214b94485e2d00367a6adcbf2f?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Email Marketing",
    companyName: "Revolut",
    location: "Madrid, Spain",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 0,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc01d084a32e58c49870dba37b6363c20d702a269619bdd2c7bfa7e84e201d77?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Lead Engineer",
    companyName: "Canva",
    location: "Ankara, Turkey",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 5,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b92776f167116aa5e7684b396cd2f7e4d194cff3051d53970c7b6992a1f6ddb0?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Product Designer",
    companyName: "ClassPass",
    location: "Berlin, Germany",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 5,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/45310905317a46400a71d03e6526a027a2296fe705613cc06a916760f0dc80ef?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Customer Manager",
    companyName: "Pitch",
    location: "Berlin, Germany",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 5,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/280e55916444ac0942e065bcbb64491fe3c4686333e9c11993846f3574cd5d1e?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Social Media Assistant",
    companyName: "Nomad",
    location: "Paris, France",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 5,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/db017e2232d25e9591b6b6afa03ae63029448ac36c6ef21eb55c821a226a5d74?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Brand Designer",
    companyName: "Dropbox",
    location: "San Francisco, USA",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 2,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7e54e3433e5406ea3cfd78fdd3c76529f7f9711da520b5ab89865269e1757ee?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Interactive Developer",
    companyName: "Terraform",
    location: "Hamburg, Germany",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 8,
    capacity: 12,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ee14618d47daa0ad5f6286d56f9c4280f2cfa214b94485e2d00367a6adcbf2f?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Email Marketing",
    companyName: "Revolut",
    location: "Madrid, Spain",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 0,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc01d084a32e58c49870dba37b6363c20d702a269619bdd2c7bfa7e84e201d77?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Lead Engineer",
    companyName: "Canva",
    location: "Ankara, Turkey",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 5,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b92776f167116aa5e7684b396cd2f7e4d194cff3051d53970c7b6992a1f6ddb0?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Product Designer",
    companyName: "ClassPass",
    location: "Berlin, Germany",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 5,
    capacity: 10,
  },
  {
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/45310905317a46400a71d03e6526a027a2296fe705613cc06a916760f0dc80ef?apiKey=946bf3455d5f470191c249fabc019131&",
    jobTitle: "Customer Manager",
    companyName: "Pitch",
    location: "Berlin, Germany",
    employmentType: "Full-Time",
    category: "Marketing",
    tags: ["Design"],
    applyUrl: "#",
    appliedCount: 5,
    capacity: 10,
  },
];

const FindJobsComponent: React.FC = () => {


  const [employmentOpen, setEmploymentOpen] = React.useState(true);
  const [levelOpen, setLevelOpen] = React.useState(true);
  const [locationOpen, setLocationOpen] = React.useState(true);
  const [categoryOpen, setCategoryOpen] = React.useState(true);

  const toggleEmployment = () => setEmploymentOpen(!employmentOpen);
  const toggleLevel = () => setLevelOpen(!levelOpen);
  const toggleLocation = () => setLocationOpen(!locationOpen);
  const toggleCategory = () => setCategoryOpen(!categoryOpen);

  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="w-full max-w-[1193px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0"><aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
      <section className="flex flex-col text-base leading-6 text-slate-600 max-md:mt-10">
        <header className="flex gap-2 justify-between font-bold leading-[150%] text-slate-800 cursor-pointer" onClick={toggleEmployment}>
          <h2>Type of Employment</h2>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1783c811bab5d5d70387c7477ce0eff6659e26ee841c6322bea54c6cb085945c?apiKey=946bf3455d5f470191c249fabc019131&" alt="Filter icon" className="shrink-0 my-auto w-5 aspect-square" />
        </header>
        {employmentOpen && (
          <>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Freelance</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Full Time</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Part Time</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Internship</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Temporary</p>
            </label>
          </>
        )}
      </section>
      <section className="flex flex-col mt-8 text-base leading-6 text-slate-600">
        <header className="flex gap-2 justify-between font-bold leading-[150%] text-slate-800 cursor-pointer" onClick={toggleLevel}>
          <h2>Level</h2>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1783c811bab5d5d70387c7477ce0eff6659e26ee841c6322bea54c6cb085945c?apiKey=946bf3455d5f470191c249fabc019131&" alt="Filter icon" className="shrink-0 my-auto w-5 aspect-square" />
        </header>
        {levelOpen && (
          <>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Entry</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Intermediate</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Senior</p>
            </label>
          </>
        )}
      </section>
      <section className="flex flex-col mt-8 text-base leading-6 text-slate-600">
        <header className="flex gap-2 justify-between font-bold leading-[150%] text-slate-800 cursor-pointer" onClick={toggleLocation}>
          <h2>Location</h2>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1783c811bab5d5d70387c7477ce0eff6659e26ee841c6322bea54c6cb085945c?apiKey=946bf3455d5f470191c249fabc019131&" alt="Filter icon" className="shrink-0 my-auto w-5 aspect-square" />
        </header>
        {locationOpen && (
          <>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Remote</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">In Office</p>
            </label>
          </>
        )}
      </section>
      <section className="flex flex-col mt-8 text-base leading-6 text-slate-600">
        <header className="flex gap-2 justify-between font-bold leading-[150%] text-slate-800 cursor-pointer" onClick={toggleCategory}>
          <h2>Category</h2>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1783c811bab5d5d70387c7477ce0eff6659e26ee841c6322bea54c6cb085945c?apiKey=946bf3455d5f470191c249fabc019131&" alt="Filter icon" className="shrink-0 my-auto w-5 aspect-square" />
        </header>
        {categoryOpen && (
          <>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Design</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Development</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Marketing</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Management</p>
            </label>
            <label className="flex items-center mt-5 gap-4">
              <input type="checkbox" />
              <p className="text-sm">Finance</p>
            </label>
          </>
        )}
      </section>
    </aside>
          <main className="w-full max-w-[942px] max-md:w-full">
            {jobListings.map((job, index) => (
              <JobListing
                key={index}
                companyLogo={job.companyLogo}
                jobTitle={job.jobTitle}
                companyName={job.companyName}
                location={job.location}
                employmentType={job.employmentType}
                category={job.category}
                tags={job.tags}
                applyUrl={job.applyUrl}
                appliedCount={job.appliedCount}
                capacity={job.capacity}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default FindJobsComponent;
