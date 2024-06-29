
type UserMessageProps = {
    message: string;
    time: string;
    icon: string;
    isAdmin: boolean;
    name: string;
};

export const UserMessage: React.FC<UserMessageProps> = ({ message, time, icon, isAdmin, name }) => (
    <div className={`flex gap-4 ${isAdmin ? 'self-start ml-8' : 'self-end mr-8'} text-base font-medium leading-6 text-slate-600 max-md:flex-wrap max-md:mx-2.5 w-4/6`}>
        {!isAdmin && (
            <div className="flex flex-col justify-center">
                <div className={`${isAdmin ? 'self-start' : 'self-end'} font-semibold text-slate-800`}>{name}</div>
                <div className="justify-center px-4 py-3 mt-2 leading-7 rounded-lg bg-slate-50 border border-solid border-zinc-200">{message}</div>
                <div className={`${isAdmin ? 'self-start' : 'self-end'} mt-2 text-slate-500`}>{time}</div>
            </div>
        )}
        <img loading="lazy" src={icon} alt={`${name}'s avatar`} className={`shrink-0 ${isAdmin ? 'self-start' : 'self-end'} w-12 aspect-square`} />
        {isAdmin && (
            <div className="flex flex-col justify-center">
                <div className={`${isAdmin ? 'self-start' : 'self-end'} font-semibold text-slate-800`}>{name}</div>
                <div className="justify-center px-4 py-3 mt-2 leading-7 rounded-lg bg-slate-50 border border-solid border-zinc-200">{message}</div>
                <div className={`${isAdmin ? 'self-start' : 'self-end'} mt-2 text-slate-500`}>{time}</div>
            </div>
        )}
    </div>
);