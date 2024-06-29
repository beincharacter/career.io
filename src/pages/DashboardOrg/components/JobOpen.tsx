type JobOpenProps = {
    count: number;
  };

export const JobOpen: React.FC<JobOpenProps> = ({ count }) => {
    return (
      <section className="flex flex-col pt-6 pb-6 w-full bg-white border border-solid border-zinc-200">
        <h2 className="self-start ml-6 text-xl font-semibold leading-6 text-center text-slate-800 max-md:ml-2.5">Job Open</h2>
        <div className="flex gap-4 items-start px-6 pt-2.5 pb-5 mt-4 max-md:px-5">
          <div className="self-start text-7xl font-semibold leading-[72px] text-slate-800 max-md:text-4xl">{count}</div>
          <div className="flex-auto self-end mt-10 text-xl leading-8 text-slate-500">Jobs Opened</div>
        </div>
      </section>
    );
  };