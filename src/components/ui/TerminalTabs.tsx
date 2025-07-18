import React, { useState, useEffect } from 'react';
import { Plus, X, Terminal as TerminalIcon } from 'lucide-react';
import Terminal from './Terminal';

interface Tab {
  id: string;
  title: string;
  isActive: boolean;
}

const TerminalTabs: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: '1', title: 'Terminal 1', isActive: true }
  ]);
  const [nextTabId, setNextTabId] = useState(2);

  const activeTab = tabs.find(tab => tab.isActive);

  const createNewTab = () => {
    const newTab: Tab = {
      id: nextTabId.toString(),
      title: `Terminal ${nextTabId}`,
      isActive: false
    };

    setTabs(prevTabs => [
      ...prevTabs.map(tab => ({ ...tab, isActive: false })),
      { ...newTab, isActive: true }
    ]);
    setNextTabId(prev => prev + 1);
  };

  const switchToTab = (tabId: string) => {
    setTabs(prevTabs =>
      prevTabs.map(tab => ({
        ...tab,
        isActive: tab.id === tabId
      }))
    );
  };

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (tabs.length === 1) return; // Don't close last tab

    const tabIndex = tabs.findIndex(tab => tab.id === tabId);
    const isClosingActiveTab = tabs[tabIndex].isActive;
    
    setTabs(prevTabs => {
      const newTabs = prevTabs.filter(tab => tab.id !== tabId);
      
      if (isClosingActiveTab && newTabs.length > 0) {
        // Activate the previous tab, or first tab if closing the first one
        const newActiveIndex = tabIndex > 0 ? tabIndex - 1 : 0;
        newTabs[newActiveIndex].isActive = true;
      }
      
      return newTabs;
    });
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 't':
            e.preventDefault();
            createNewTab();
            break;
          case 'w':
            e.preventDefault();
            if (activeTab && tabs.length > 1) {
              closeTab(activeTab.id, e as any);
            }
            break;
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            e.preventDefault();
            const tabIndex = parseInt(e.key) - 1;
            if (tabs[tabIndex]) {
              switchToTab(tabs[tabIndex].id);
            }
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tabs, activeTab]);

  return (
    <div className="p-2 sm:p-4 lg:p-6 border-none outline-none">
      <div className="max-w-[90vw] xl:max-w-[75vw] 2xl:max-w-[65vw] mx-auto">
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
          {/* Tab Bar */}
          <div className="bg-gray-800 border-b border-gray-700">
            <div className="flex items-center">
              {/* Tabs */}
              <div className="flex-1 flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`
                      flex items-center gap-2 px-4 py-2 cursor-pointer border-r border-gray-700 min-w-0 flex-shrink-0
                      ${tab.isActive 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-750'
                      }
                    `}
                    onClick={() => switchToTab(tab.id)}
                  >
                    <TerminalIcon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate text-sm">{tab.title}</span>
                    {tabs.length > 1 && (
                      <button
                        onClick={(e) => closeTab(tab.id, e)}
                        className="p-1 hover:bg-gray-600 rounded transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              {/* New Tab Button */}
              <button
                onClick={createNewTab}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                title="New Terminal"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="relative">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={tab.isActive ? 'block' : 'hidden'}
              >
                <Terminal />
              </div>
            ))}
          </div>
        </div>

        {/* Tab shortcuts hint */}
        <div className="mt-2 text-xs text-gray-500 text-center">
          <span className="hidden sm:inline">
            Shortcuts: Ctrl+T (new tab), Ctrl+W (close), Ctrl+1-9 (switch tabs)
          </span>
        </div>
      </div>
    </div>
  );
};

export default TerminalTabs;