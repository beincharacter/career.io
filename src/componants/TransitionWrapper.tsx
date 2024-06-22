import React, { ReactNode, useRef } from 'react';
import { Transition } from 'react-transition-group';
// import './TransitionWrapper.scss';

type TransitionProps = {
  children: ReactNode;
  inProp: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  timeout?: number | { enter?: number; exit?: number; appear?: number };
  onEnter?: (isAppearing: boolean) => void;
  onEntering?: (isAppearing: boolean) => void;
  onEntered?: (isAppearing: boolean) => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
};

const TransitionWrapper: React.FC<TransitionProps> = ({
  children,
  inProp,
  unmountOnExit = true,
  appear = true,
  timeout = { enter: 300, exit: 200 },
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
}) => {
  const nodeRef = useRef(null);

  const defaultStyle = {
    transition: `transform ${typeof timeout === 'number' ? timeout : timeout.enter || 300}ms ease-in-out`,
    transform: 'translateX(100%)',
  };

  const transitionStyles = {
    entering: { transform: 'translateX(0)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(-100%)' },
    exited: { transform: 'translateX(100%)' },
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={inProp}
      timeout={timeout}
      unmountOnExit={unmountOnExit}
      appear={appear}
      onEnter={(isAppearing) => onEnter && onEnter(isAppearing)}
      onEntering={(isAppearing) => onEntering && onEntering(isAppearing)}
      onEntered={(isAppearing) => onEntered && onEntered(isAppearing)}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default TransitionWrapper;