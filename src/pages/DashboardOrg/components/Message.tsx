import { MessageProps } from "../../../utils/Types";

export const Message: React.FC<MessageProps> = ({ avatar, name, time, message, isSelected }) => (
    <div className={`flex gap-4 border-b p-4 cursor-pointer hover:bg-blue-200 ${isSelected ? 'bg-violet-100' : 'bg-white shadow-sm'}`}>
        <img loading="lazy" src={avatar} alt={`${name}'s avatar`} className="shrink-0 my-auto w-12 aspect-square" />
        <div className="flex flex-col w-full">
            <div className="flex gap-5 justify-between">
                <div className="font-semibold text-slate-800">{name}</div>
                <div className="text-right text-slate-500">{time}</div>
            </div>
            <div className="mt-1 text-slate-600">{message}</div>
        </div>
    </div>
);