import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light' | 'matrix';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && ['dark', 'light', 'matrix'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.className = theme;
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', theme);

    // Apply specific styles based on theme
    const root = document.documentElement.style;
    
    switch (theme) {
      case 'light':
        root.setProperty('--bg-primary', '#f8fafc');
        root.setProperty('--bg-secondary', '#ffffff');
        root.setProperty('--bg-tertiary', '#e2e8f0');
        root.setProperty('--text-primary', '#111827');
        root.setProperty('--text-secondary', '#374151');
        root.setProperty('--text-accent', '#1d4ed8');
        root.setProperty('--border-color', '#9ca3af');
        root.setProperty('--terminal-bg', '#1f2937');
        root.setProperty('--terminal-border', '#374151');
        root.setProperty('--terminal-text', '#f9fafb');
        root.setProperty('--terminal-prompt', '#10b981');
        root.setProperty('--terminal-suggestion', '#6b7280');
        root.setProperty('--sidebar-bg', '#f3f4f6');
        root.setProperty('--sidebar-border', '#d1d5db');
        break;
      case 'matrix':
        root.setProperty('--bg-primary', '#000000');
        root.setProperty('--bg-secondary', '#001100');
        root.setProperty('--bg-tertiary', '#002200');
        root.setProperty('--text-primary', '#00ff00');
        root.setProperty('--text-secondary', '#00cc00');
        root.setProperty('--text-accent', '#00ff41');
        root.setProperty('--border-color', '#003300');
        root.setProperty('--terminal-bg', '#000000');
        root.setProperty('--terminal-border', '#00ff00');
        root.setProperty('--terminal-text', '#00ff00');
        root.setProperty('--terminal-prompt', '#00ff41');
        root.setProperty('--terminal-suggestion', '#008800');
        root.setProperty('--sidebar-bg', '#000000');
        root.setProperty('--sidebar-border', '#003300');
        break;
      default: // dark
        root.setProperty('--bg-primary', '#0f172a');
        root.setProperty('--bg-secondary', '#1e293b');
        root.setProperty('--bg-tertiary', '#334155');
        root.setProperty('--text-primary', '#f1f5f9');
        root.setProperty('--text-secondary', '#cbd5e1');
        root.setProperty('--text-accent', '#60a5fa');
        root.setProperty('--border-color', '#475569');
        root.setProperty('--terminal-bg', '#111827');
        root.setProperty('--terminal-border', '#374151');
        root.setProperty('--terminal-text', '#f1f5f9');
        root.setProperty('--terminal-prompt', '#10b981');
        root.setProperty('--terminal-suggestion', '#6b7280');
        root.setProperty('--sidebar-bg', '#1e293b');
        root.setProperty('--sidebar-border', '#475569');
        break;
    }
  }, [theme]);

  const toggleTheme = () => {
    const themes: Theme[] = ['dark', 'light', 'matrix'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};