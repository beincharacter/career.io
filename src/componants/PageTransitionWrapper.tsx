import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

type PageTransitionProps = {
  children: ReactNode;
};

export const PageTransitionWrapper: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <CSSTransition
      in={true}
      timeout={300}
      classNames="page-transition"
      unmountOnExit
    >
      <div className="page-container">
        {children}
      </div>
    </CSSTransition>
  );
};

