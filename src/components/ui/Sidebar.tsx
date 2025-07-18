import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Coffee } from 'lucide-react';
import { useTerminal } from '../../contexts/TerminalContext';

const Sidebar: React.FC = () => {
  const { setCurrentCommand } = useTerminal();
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/lxluxo23",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/lcespedessep/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      url: "mailto:luis.cespedes.sep01@gmail.com",
      color: "hover:text-green-400"
    }
  ];

  const quickActions = [
    {
      icon: <User className="w-4 h-4" />,
      label: "Ver CV",
      command: "cv",
      color: "text-blue-400"
    },
    {
      icon: <Code className="w-4 h-4" />,
      label: "Proyectos",
      command: "projects",
      color: "text-purple-400"
    },
    {
      icon: <Coffee className="w-4 h-4" />,
      label: "Contacto",
      command: "contact",
      color: "text-orange-400"
    }
  ];

  const currentStatus = {
    status: "Disponible para trabajo",
    activity: "Desarrollando en Spring Boot",
    location: "Talca, Chile"
  };

  return (
    <div className="fixed left-0 top-0 h-full w-80 backdrop-blur-sm border-r p-6 flex flex-col z-10 transition-colors duration-300"
         style={{
           backgroundColor: 'var(--sidebar-bg)', 
           borderColor: 'var(--sidebar-border)'
         }}>
      {/* Profile Section */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">LC</span>
        </div>
        <h2 className="text-xl font-bold mb-1 transition-colors duration-300" 
            style={{color: 'var(--text-primary)'}}>Luis Céspedes</h2>
        <p className="text-sm transition-colors duration-300" 
           style={{color: 'var(--text-secondary)'}}>Full Stack Developer</p>
      </div>

      {/* Status Section */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3 flex items-center gap-2 transition-colors duration-300" 
            style={{color: 'var(--text-primary)'}}>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Estado Actual
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-green-400">
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            {currentStatus.status}
          </div>
          <div className="flex items-center gap-2 transition-colors duration-300" 
               style={{color: 'var(--text-secondary)'}}>
            <div className="w-1 h-1 rounded-full" style={{backgroundColor: 'var(--text-secondary)'}}></div>
            {currentStatus.activity}
          </div>
          <div className="flex items-center gap-2 transition-colors duration-300" 
               style={{color: 'var(--text-secondary)'}}>
            <div className="w-1 h-1 rounded-full" style={{backgroundColor: 'var(--text-secondary)'}}></div>
            📍 {currentStatus.location}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3 transition-colors duration-300" 
            style={{color: 'var(--text-primary)'}}>Acciones Rápidas</h3>
        <div className="space-y-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 text-left group hover:opacity-80"
              style={{backgroundColor: 'var(--bg-tertiary)'}}
              onClick={() => {
                setCurrentCommand(action.command);
                // Focus the terminal input
                const terminal = document.querySelector('input[type="text"]') as HTMLInputElement;
                if (terminal) {
                  terminal.focus();
                }
              }}
            >
              <span className={action.color}>{action.icon}</span>
              <span className="transition-colors duration-300" 
                    style={{color: 'var(--text-primary)'}}>
                {action.label}
              </span>
              <span className="text-xs ml-auto transition-colors duration-300" 
                    style={{color: 'var(--text-secondary)'}}>
                {action.command}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-auto">
        <h3 className="font-semibold mb-3 transition-colors duration-300" 
            style={{color: 'var(--text-primary)'}}>Conecta conmigo</h3>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 ${link.color} group hover:opacity-80`}
              style={{backgroundColor: 'var(--bg-tertiary)'}}
              title={link.label}
            >
              {link.icon}
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity absolute translate-x-1 -translate-y-1" />
            </a>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-6 pt-4 border-t transition-colors duration-300" 
             style={{borderColor: 'var(--border-color)'}}>
          <p className="text-xs text-center transition-colors duration-300" 
             style={{color: 'var(--text-secondary)'}}>
            © 2024 Luis Céspedes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;