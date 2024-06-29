type StatCardProps = {
    count: number;
    title: string;
    bgColor: string;
    icon: string;
};

export const StatCard: React.FC<StatCardProps> = ({ count, title, bgColor, icon }) => (
    <article className={`flex grow gap-3.5 items-center p-6 w-full text-white ${bgColor} max-md:px-5 max-md:mt-6`}>
        <h2 className="self-stretch my-auto text-5xl font-semibold leading-10 max-md:text-4xl">{count}</h2>
        <p className="text-lg font-medium leading-7">{title}</p>
        <img loading="lazy" src={icon} alt="" className="shrink-0 self-stretch my-auto w-6 aspect-square" />
    </article>
);