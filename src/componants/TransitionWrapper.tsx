import React, { ReactNode, useRef } from 'react';
import { Transition } from 'react-transition-group';

type TransitionStatus = 'entering' | 'entered' | 'exiting' | 'exited' | 'unmounted';

type TransitionStyles = {
  [key in Exclude<TransitionStatus, 'unmounted'>]: {
    transform: string;
  };
};

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
  timeout = { enter: 200, exit: 200 },
}) => {
  const nodeRef = useRef(null);

  const defaultStyle = {
    transition: `transform ${typeof timeout === 'number' ? timeout : timeout.enter || 300}ms ease-in-out`,
    transform: 'translateX(100%)',
  };

  const transitionStyles: TransitionStyles = {
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
    >
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...(transitionStyles[state as Exclude<TransitionStatus, 'unmounted'>] || {}),
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default TransitionWrapper;