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

export const JobCard: React.FC<JobCardProps> = ({ logo, jobType, title, company, location, tags, applicants, capacity }) => (
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