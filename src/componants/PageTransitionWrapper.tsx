import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

type PageTransitionProps = {
  children: ReactNode;
  inProp: boolean;
  unmountOnExit?: boolean;
};

const PageTransitionWrapper: React.FC<PageTransitionProps> = ({ children, inProp, unmountOnExit = true }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={500} // Adjust timeout as per your CSS transition duration
      classNames="page-transition"
      unmountOnExit={unmountOnExit}
    >
      <div className="page-container">
        {children}
      </div>
    </CSSTransition>
  );
};

export default PageTransitionWrapper;
