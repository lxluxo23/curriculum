import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/ui/Sidebar';
import Header from '../components/ui/Header';
import InteractiveBackground from '../components/ui/InteractiveBackground';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Determinar qué variante de background usar según la ruta
  const getBackgroundVariant = () => {
    switch (location.pathname) {
      case '/':
        return 'particles';
      case '/cv':
        return 'grid';
      default:
        return 'particles';
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--bg-primary)'}}>
      {/* Interactive Background */}
      <InteractiveBackground variant={getBackgroundVariant()} />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="ml-80 pt-40 xl:pt-48 relative z-10">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
      
      {/* Responsive overlay for mobile - oculta sidebar en pantallas pequeñas */}
      <div className="lg:hidden fixed inset-0 bg-gray-950 z-50 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Portfolio de Luis Céspedes</h2>
          <p className="text-gray-400 mb-4">
            Este portafolio está optimizado para pantallas grandes.
          </p>
          <p className="text-sm text-gray-500">
            Por favor, visita desde un dispositivo con pantalla más grande para la mejor experiencia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;