import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
  notificationCount?: number;
  to: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isActive, notificationCount, to }) => (
  <li className={`flex gap-4 py-3 pr-4 pl-8 text-base font-medium ${isActive ? 'text-indigo-600 bg-violet-100' : 'text-slate-500'} max-md:px-5`}>
    <Link to={to} className="flex items-center w-full">
      <img loading="lazy" src={icon} alt="" className="shrink-0 w-6 aspect-square" />
      <span className="flex-1">{text}</span>
      {notificationCount && (
        <span className="flex flex-col justify-center text-sm font-semibold text-white">
          <span className="justify-center items-center w-6 h-6 bg-indigo-600 rounded-full">{notificationCount}</span>
        </span>
      )}
    </Link>
  </li>
);