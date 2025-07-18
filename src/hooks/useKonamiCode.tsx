import { useState, useEffect, useCallback } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp', 
  'ArrowDown', 
  'ArrowDown', 
  'ArrowLeft', 
  'ArrowRight', 
  'ArrowLeft', 
  'ArrowRight'
];

export const useKonamiCode = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [isActivated, setIsActivated] = useState(false);

  const resetSequence = useCallback(() => {
    setSequence([]);
  }, []);

  const activateKonami = useCallback(() => {
    setIsActivated(true);
    setSequence([]);
    
    // Auto-reset after showing modal
    setTimeout(() => {
      setIsActivated(false);
    }, 100);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger if typing in input fields
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      const { key } = event;
      
      // Only listen for arrow keys
      if (!key.startsWith('Arrow')) {
        if (sequence.length > 0) {
          resetSequence();
        }
        return;
      }

      setSequence(prevSequence => {
        const newSequence = [...prevSequence, key];
        
        // Check if current sequence matches konami code
        const isValidSequence = KONAMI_CODE.slice(0, newSequence.length).every(
          (code, index) => code === newSequence[index]
        );

        if (!isValidSequence) {
          // Sequence broken, reset
          return key.startsWith('Arrow') ? [key] : [];
        }

        if (newSequence.length === KONAMI_CODE.length) {
          // Complete sequence matched!
          activateKonami();
          return [];
        }

        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence, resetSequence, activateKonami]);

  // Auto-reset sequence after timeout
  useEffect(() => {
    if (sequence.length > 0) {
      const timeout = setTimeout(() => {
        resetSequence();
      }, 3000); // Reset after 3 seconds of inactivity

      return () => clearTimeout(timeout);
    }
  }, [sequence, resetSequence]);

  return {
    isActivated,
    currentSequence: sequence,
    progress: (sequence.length / KONAMI_CODE.length) * 100
  };
};