import React from 'react';
import {
  BookOpen,
  Scale,
  Users,
  GraduationCap,
  Sparkles,
  Bookmark,
  Gamepad2,
  Home,
  Bot,
} from 'lucide-react';
import { UserProgress } from '../../types';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  userProgress: UserProgress;
  onOpenAIChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  userProgress,
  onOpenAIChat,
}) => {
  const navItems = [
    { id: 'home', label: 'หน้าแรก', icon: Home },
    { id: 'dictionary', label: 'พจนานุกรม', icon: BookOpen },
    { id: 'comparison', label: 'เทียบถิ่น', icon: Scale },
    { id: 'community', label: 'ลานเว้าถิ่น', icon: Users },
    { id: 'learning', label: 'ห้องเรียน', icon: GraduationCap },
    { id: 'games', label: 'เกมคำศัพท์', icon: Gamepad2 },
  ];

  const userLevel = Math.floor(userProgress.xp / 50) + 1;

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#DCD2FF]/40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#B8EBD0] via-[#DCD2FF] to-[#FFD9E5] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105 border border-white">
            <span className="text-xl">🐱</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl text-[#29323D] tracking-tight group-hover:text-[#6C5CE7] transition-colors">
                เว้าถิ่น
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FFF0A8] text-[#8C6D00] border border-[#FFE770]">
                VaoThin
              </span>
            </div>
            <span className="text-[10px] text-[#6B7280] hidden sm:inline -mt-0.5 font-medium">
              ม่วนกับภาษา เรียนรู้ความเป็นเรา
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#DCD2FF]/70 text-[#29323D] shadow-xs'
                    : 'text-[#6B7280] hover:text-[#29323D] hover:bg-gray-100/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#6C5CE7]' : 'text-gray-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & Profile */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Ask Nong Vao AI Button */}
          <button
            onClick={onOpenAIChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-[#DCD2FF] to-[#B8EBD0] hover:from-[#CFBEFF] hover:to-[#A3E5C1] active:scale-95 text-[#29323D] text-xs sm:text-sm font-semibold shadow-xs border border-white/60 transition-all cursor-pointer"
            title="คุยกับน้องเว้า ผู้ช่วย AI ภาษาถิ่น"
          >
            <Bot className="w-4 h-4 text-[#6C5CE7]" />
            <span className="hidden sm:inline">ถามน้องเว้า</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
          </button>

          {/* Favorites shortcut */}
          <button
            onClick={() => onNavigate('favorites')}
            className={`relative p-2 rounded-2xl border border-gray-200/80 transition-all ${
              currentTab === 'favorites'
                ? 'bg-[#FFD6C2]/50 text-[#E15B28]'
                : 'hover:bg-gray-100/80 text-gray-600'
            }`}
            title="คำศัพท์ที่บันทึกไว้"
          >
            <Bookmark className="w-4 h-4" />
            {userProgress.savedWordIds.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-[#E15B28] text-white rounded-full text-[10px] font-bold flex items-center justify-center px-1 shadow-xs">
                {userProgress.savedWordIds.length}
              </span>
            )}
          </button>

          {/* User Profile Capsule */}
          <button
            onClick={() => onNavigate('profile')}
            className={`flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-2xl border transition-all ${
              currentTab === 'profile'
                ? 'bg-white border-[#A794FF] shadow-xs'
                : 'bg-white/80 border-gray-200/80 hover:border-[#DCD2FF]'
            }`}
          >
            <span className="text-lg">{userProgress.avatar || '🐱'}</span>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold text-[#29323D] leading-tight">
                {userProgress.name || 'ผู้เยี่ยมชม'}
              </div>
              <div className="text-[10px] text-[#6C5CE7] font-semibold flex items-center gap-1">
                <span>Lv.{userLevel}</span>
                <span className="text-amber-500 font-sans">⚡{userProgress.xp} XP</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
