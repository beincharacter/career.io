import React from 'react';

type NavItemProps = {
  children: React.ReactNode;
};

export const NavItem: React.FC<NavItemProps> = ({ children }) => (
  <div className="pb-7">{children}</div>
);