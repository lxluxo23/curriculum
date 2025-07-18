import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ArtType = 'cat' | 'roach' | 'donut';

interface AsciiArtContextType {
  currentArt: ArtType;
  setCurrentArt: (art: ArtType) => void;
}

const AsciiArtContext = createContext<AsciiArtContextType | undefined>(undefined);

export const useAsciiArt = () => {
  const context = useContext(AsciiArtContext);
  if (!context) {
    throw new Error('useAsciiArt must be used within an AsciiArtProvider');
  }
  return context;
};

interface AsciiArtProviderProps {
  children: ReactNode;
}

export const AsciiArtProvider: React.FC<AsciiArtProviderProps> = ({ children }) => {
  const [currentArt, setCurrentArt] = useState<ArtType>('donut');

  useEffect(() => {
    // Load from localStorage
    const savedArt = localStorage.getItem('portfolio-ascii-art') as ArtType;
    if (savedArt && ['cat', 'roach', 'donut'].includes(savedArt)) {
      setCurrentArt(savedArt);
    } else {
      setCurrentArt('donut'); // Default to donut
    }
  }, []);

  const handleSetCurrentArt = (art: ArtType) => {
    setCurrentArt(art);
    localStorage.setItem('portfolio-ascii-art', art);
  };

  return (
    <AsciiArtContext.Provider value={{ 
      currentArt, 
      setCurrentArt: handleSetCurrentArt 
    }}>
      {children}
    </AsciiArtContext.Provider>
  );
};