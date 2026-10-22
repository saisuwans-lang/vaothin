import React from 'react';
import { Home, BookOpen, Scale, Users, User, Gamepad2 } from 'lucide-react';

interface MobileNavProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  savedCount: number;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  currentTab,
  onNavigate,
  savedCount,
}) => {
  const tabs = [
    { id: 'home', label: 'หน้าแรก', icon: Home },
    { id: 'dictionary', label: 'ค้นหา/คลังคำ', icon: BookOpen },
    { id: 'games', label: 'เกม', icon: Gamepad2 },
    { id: 'community', label: 'ชุมชน', icon: Users },
    { id: 'profile', label: 'โปรไฟล์', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/80 px-2 py-1.5 shadow-lg">
      <div className="grid grid-cols-5 items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all select-none ${
                isActive
                  ? 'text-[#6C5CE7] font-bold scale-105'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-colors ${
                  isActive ? 'bg-[#DCD2FF]/60' : 'bg-transparent'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] mt-0.5 tracking-tight line-clamp-1">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
