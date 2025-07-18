import React, { useState, useEffect } from 'react';
import { X, Gamepad2, Eye, EyeOff } from 'lucide-react';

interface KonamiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArt: (artType: string) => void;
  currentArt: string;
}

const KonamiModal: React.FC<KonamiModalProps> = ({ isOpen, onClose, onSelectArt, currentArt }) => {
  const [previewArt, setPreviewArt] = useState<string | null>(null);

  const artOptions = [
    {
      id: 'cat',
      name: '🐱 Dancing Cat',
      description: 'Adorable dancing cat animation',
      preview: `
     /\\_/\\  
    ( o.o ) 
     > ^ <  
   Dancing!
      `
    },
    {
      id: 'roach',
      name: '🪳 Dancing Roach',
      description: 'Classic meme roach dance',
      preview: `
    /(   )\\
   (  \\_/  )
    |     |
   Dancing!
      `
    },
    {
      id: 'donut',
      name: '🍩 Rotating Donut',
      description: '3D spinning donut animation',
      preview: `
      .===.
     (     )
      '==='
    Spinning!
      `
    }
  ];

  const handleSelect = (artId: string) => {
    onSelectArt(artId);
    onClose();
  };

  const togglePreview = (artId: string) => {
    setPreviewArt(previewArt === artId ? null : artId);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900 rounded-xl border border-gray-700 max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Gamepad2 className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">🎮 Konami Code Activated!</h2>
                <p className="text-blue-100">Choose your secret ASCII art for neofetch</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-300">
              <span>🎯</span>
              <span>Secret Easter Egg Unlocked!</span>
            </div>
          </div>

          {artOptions.map((option) => (
            <div key={option.id} className="space-y-2">
              {/* Option Card */}
              <div 
                className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:scale-[1.02] ${
                  currentArt === option.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                }`}
                onClick={() => handleSelect(option.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-white">{option.name}</h3>
                      {currentArt === option.id && (
                        <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{option.description}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePreview(option.id);
                    }}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {previewArt === option.id ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Preview */}
              {previewArt === option.id && (
                <div className="ml-4 p-3 bg-gray-900 rounded border-l-4 border-blue-500">
                  <pre className="text-green-400 text-xs font-mono whitespace-pre">
                    {option.preview}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-4 bg-gray-800/50">
          <div className="text-center text-xs text-gray-500">
            <p>🎮 Konami Code: ↑↑↓↓←→←→</p>
            <p>Your selection will be saved for future neofetch commands</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KonamiModal;