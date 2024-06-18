import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({ path, children }) => {
  const navigate = useNavigate();
  return (
    <span onClick={() => navigate(path)} className="nav-item hover cursor-pointer p-2">
      {children}
    </span>
  );
}
