type ApplicantsSummaryProps = {
    total: number;
    categories: Array<{
        name: string;
        count: number;
        color: string;
    }>;
};

export const ApplicantsSummary: React.FC<ApplicantsSummaryProps> = ({ total, categories }) => {
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