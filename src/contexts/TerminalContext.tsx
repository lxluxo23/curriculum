import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TerminalContextType {
  currentCommand: string;
  setCurrentCommand: (command: string | ((prev: string) => string)) => void;
  executeCommand: (command: string) => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};

interface TerminalProviderProps {
  children: ReactNode;
}

export const TerminalProvider: React.FC<TerminalProviderProps> = ({ children }) => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [executeCommandCallback] = useState<((command: string) => void) | null>(null);

  const executeCommand = (command: string) => {
    if (executeCommandCallback) {
      executeCommandCallback(command);
    }
  };

  // Removed unused registerExecuteCallback to fix unused variable error

  return (
    <TerminalContext.Provider value={{ 
      currentCommand, 
      setCurrentCommand, 
      executeCommand: executeCommand 
    }}>
      {children}
    </TerminalContext.Provider>
  );
};