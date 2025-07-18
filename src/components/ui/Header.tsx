import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Code, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const asciiName = `
██╗     ██╗   ██╗██╗███████╗    ██████╗███████╗███████╗██████╗ ███████╗██████╗ ███████╗███████╗
██║     ██║   ██║██║██╔════╝   ██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝
██║     ██║   ██║██║███████╗   ██║     █████╗  ███████╗██████╔╝█████╗  ██║  ██║█████╗  ███████╗
██║     ██║   ██║██║╚════██║   ██║     ██╔══╝  ╚════██║██╔═══╝ ██╔══╝  ██║  ██║██╔══╝  ╚════██║
███████╗╚██████╔╝██║███████║   ╚██████╗███████╗███████║██║     ███████╗██████╔╝███████╗███████║
╚══════╝ ╚═════╝ ╚═╝╚══════╝    ╚═════╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═════╝ ╚══════╝╚══════╝
  `;

  const navItems = [
    {
      icon: <Home className="w-4 h-4" />,
      label: "Terminal",
      path: "/",
      description: "Terminal interactivo"
    },
    {
      icon: <User className="w-4 h-4" />,
      label: "CV",
      path: "/cv",
      description: "Curriculum Vitae"
    },
    {
      icon: <Code className="w-4 h-4" />,
      label: "Projects",
      path: "/projects",
      description: "Mis proyectos"
    }
  ];

  const themes = [
    { key: 'dark', icon: <Monitor className="w-4 h-4" />, label: "Dark" },
    { key: 'light', icon: <Sun className="w-4 h-4" />, label: "Light" },
    { key: 'matrix', icon: <Moon className="w-4 h-4" />, label: "Matrix" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-80 right-0 z-20 backdrop-blur-sm border-b transition-colors duration-300" 
            style={{backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)'}}>
      <div className="px-8 py-4">
        {/* ASCII Name - Solo en pantallas grandes */}
        <div className="hidden xl:block mb-4">
          <pre className="text-xs leading-none font-mono opacity-60 overflow-hidden transition-colors duration-300" 
               style={{color: 'var(--text-accent)'}}>
            {asciiName}
          </pre>
        </div>

        {/* Navigation Bar */}
        <nav className="flex items-center justify-between">
          {/* Brand/Title para pantallas pequeñas */}
          <div className="xl:hidden">
            <h1 className="text-xl font-bold transition-colors duration-300" style={{color: 'var(--text-primary)'}}>Luis Céspedes</h1>
            <p className="text-sm transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>Full Stack Developer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                  ${isActive(item.path)
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }
                `}
                title={item.description}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Theme Switcher */}
          <div className="flex items-center gap-1 bg-gray-800/50 rounded-lg p-1">
            {themes.map((themeOption) => (
              <button
                key={themeOption.key}
                onClick={() => setTheme(themeOption.key as any)}
                className={`
                  p-2 rounded-md transition-all duration-200
                  ${theme === themeOption.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }
                `}
                title={`Tema ${themeOption.label}`}
              >
                {themeOption.icon}
              </button>
            ))}
          </div>
        </nav>

        {/* Status Bar */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>🟢 Sistema operativo</span>
            <span>⚡ {new Date().toLocaleDateString()}</span>
            <span>🎯 Backend Developer</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span>Powered by React + TypeScript</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;