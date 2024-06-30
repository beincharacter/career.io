
import { JobProps } from "../utils/Types";


export const JobCard: React.FC<JobProps> = ({ imgSrc, title, company, location }) => {
    return (
        <div className="p-4 sm:p-6 md:p-10 mt-4 bg-white cursor-pointer">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex justify-start sm:justify-start sm:w-1/5 absolute right-8 sm:static">
                    <img
                        loading="lazy"
                        src={imgSrc}
                        alt={`${title} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 aspect-square"
                    />
                </div>
                <div className="flex flex-col sm:w-4/5">
                    <div className="flex flex-col font-semibold leading-tight">
                        <div className="text-lg sm:text-xl leading-6 text-slate-800">{title}</div>
                        <div className="flex sm:flex-row sm:justify-start gap-1 sm:gap-2 mt-2 text-sm sm:text-base text-slate-600">
                            <div className="flex">{company}</div> - <div className="flex">{location}</div>
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