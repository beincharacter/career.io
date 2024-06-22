import React, { ReactNode, createContext, useContext, useState } from 'react';

type TransitionContextType = {
  inProp: boolean;
  setInProp: React.Dispatch<React.SetStateAction<boolean>>;
};

type TransitionProviderProps = {
    children: ReactNode
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransitionContext = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransitionContext must be used within a TransitionProvider');
  }
  return context;
};

export const TransitionProvider: React.FC<TransitionProviderProps> = ({ children }) => {
  const [inProp, setInProp] = useState(true);

  return (
    <TransitionContext.Provider value={{ inProp, setInProp }}>
      {children}
    </TransitionContext.Provider>
  );
};
