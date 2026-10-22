import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { MobileNav } from './components/layout/MobileNav';
import { AIChatDrawer } from './components/common/AIChatDrawer';
import { HomePage } from './pages/HomePage';
import { DictionaryPage } from './pages/DictionaryPage';
import { DictionaryDetailPage } from './pages/DictionaryDetailPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { CommunityPage } from './pages/CommunityPage';
import { SubmitWordPage } from './pages/SubmitWordPage';
import { LearningPage } from './pages/LearningPage';
import { GamesPage } from './pages/GamesPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutPage } from './pages/AboutPage';
import { StorageService } from './services/storageService';
import { UserProgress } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [navigationState, setNavigationState] = useState<any>({});
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);

  // User state
  const [userProgress, setUserProgress] = useState<UserProgress>(() =>
    StorageService.getUserProgress()
  );

  // AI Chat drawer state
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [aiChatPrompt, setAiChatPrompt] = useState<string | undefined>(undefined);

  // Update streak upon mounting
  useEffect(() => {
    StorageService.updateStreak();
    setUserProgress(StorageService.getUserProgress());
  }, []);

  // Browser History popstate support
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (e.state && e.state.tab) {
        setCurrentTab(e.state.tab);
        setSelectedWordId(e.state.wordId || null);
        setNavigationState(e.state.state || {});
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (tab: string, state?: any) => {
    setCurrentTab(tab);
    setNavigationState(state || {});
    if (tab !== 'word_detail') {
      setSelectedWordId(null);
    }
    try {
      window.history.pushState({ tab, state, wordId: null }, '', `#${tab}`);
    } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectWord = (wordId: string) => {
    setSelectedWordId(wordId);
    setCurrentTab('word_detail');
    try {
      window.history.pushState({ tab: 'word_detail', wordId }, '', `#word/${wordId}`);
    } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleFavorite = (wordId: string) => {
    StorageService.toggleFavoriteWord(wordId);
    setUserProgress(StorageService.getUserProgress());
  };

  const isWordSaved = (wordId: string) => {
    return userProgress.savedWordIds.includes(wordId);
  };

  const handleOpenAIChat = (prompt?: string) => {
    setAiChatPrompt(prompt);
    setIsAIChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#29323D] flex flex-col font-['Noto_Sans_Thai',sans-serif]">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onNavigate={navigateTo}
        userProgress={userProgress}
        onOpenAIChat={() => handleOpenAIChat()}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-24 md:pb-12">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectWord={handleSelectWord}
            userProgress={userProgress}
            onToggleFavorite={handleToggleFavorite}
            isWordSaved={isWordSaved}
            onOpenAIChat={handleOpenAIChat}
          />
        )}

        {currentTab === 'dictionary' && (
          <DictionaryPage
            initialQuery={navigationState?.query || ''}
            initialRegion={navigationState?.region || 'all'}
            onSelectWord={handleSelectWord}
            onToggleFavorite={handleToggleFavorite}
            isWordSaved={isWordSaved}
            onAddSearchHistory={(q) => {
              StorageService.addSearchHistory(q);
              setUserProgress(StorageService.getUserProgress());
            }}
            searchHistory={userProgress.searchHistory}
            onOpenAIChat={handleOpenAIChat}
          />
        )}

        {currentTab === 'word_detail' && selectedWordId && (
          <DictionaryDetailPage
            wordId={selectedWordId}
            onBack={() => navigateTo('dictionary')}
            onSelectWord={handleSelectWord}
            onToggleFavorite={handleToggleFavorite}
            isWordSaved={isWordSaved}
            onOpenAIChat={handleOpenAIChat}
          />
        )}

        {currentTab === 'comparison' && (
          <ComparisonPage
            onSelectWord={handleSelectWord}
            onNavigate={navigateTo}
            onToggleFavorite={handleToggleFavorite}
            isWordSaved={isWordSaved}
            onOpenAIChat={handleOpenAIChat}
          />
        )}

        {currentTab === 'community' && (
          <CommunityPage
            userProgress={userProgress}
            onSelectWord={handleSelectWord}
            onOpenAIChat={handleOpenAIChat}
          />
        )}

        {currentTab === 'submit_word' && (
          <SubmitWordPage
            onBack={() => navigateTo('home')}
            onNavigate={navigateTo}
          />
        )}

        {currentTab === 'learning' && (
          <LearningPage
            userProgress={userProgress}
            onLessonCompleted={() => {
              setUserProgress(StorageService.getUserProgress());
            }}
            onOpenAIChat={handleOpenAIChat}
          />
        )}

        {currentTab === 'games' && (
          <GamesPage
            userProgress={userProgress}
            onNavigate={navigateTo}
            onOpenAIChat={handleOpenAIChat}
          />
        )}

        {currentTab === 'favorites' && (
          <FavoritesPage
            userProgress={userProgress}
            onSelectWord={handleSelectWord}
            onToggleFavorite={handleToggleFavorite}
            onNavigate={navigateTo}
            onClearHistory={() => {
              StorageService.clearSearchHistory();
              setUserProgress(StorageService.getUserProgress());
            }}
            onRemoveHistoryItem={(term) => {
              StorageService.removeSearchHistoryItem(term);
              setUserProgress(StorageService.getUserProgress());
            }}
          />
        )}

        {currentTab === 'profile' && (
          <ProfilePage
            userProgress={userProgress}
            onUpdateProgress={setUserProgress}
            onNavigate={navigateTo}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onBack={() => navigateTo('home')}
            onNavigate={navigateTo}
            onOpenAIChat={handleOpenAIChat}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#DCD2FF]/40 bg-white/60 py-8 px-4 text-center text-xs text-[#6B7280]">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#29323D] font-medium">
            <button onClick={() => navigateTo('home')} className="hover:text-[#6C5CE7] cursor-pointer">หน้าแรก</button>
            <button onClick={() => navigateTo('dictionary')} className="hover:text-[#6C5CE7] cursor-pointer">พจนานุกรม</button>
            <button onClick={() => navigateTo('comparison')} className="hover:text-[#6C5CE7] cursor-pointer">เทียบภาษาถิ่น</button>
            <button onClick={() => navigateTo('learning')} className="hover:text-[#6C5CE7] cursor-pointer">ห้องเรียน</button>
            <button onClick={() => navigateTo('games')} className="hover:text-[#6C5CE7] cursor-pointer">เกมคำศัพท์</button>
            <button onClick={() => navigateTo('community')} className="hover:text-[#6C5CE7] cursor-pointer">ลานเว้าถิ่น</button>
            <button onClick={() => navigateTo('about')} className="hover:text-[#6C5CE7] cursor-pointer">เกี่ยวกับเรา</button>
          </div>
          <p className="text-gray-400">
            เว้าถิ่น — VaoThin © 2026 • “ม่วนกับภาษา เรียนรู้ความเป็นเรา”
          </p>
          <p className="text-[11px] text-gray-400 max-w-md mx-auto">
            ทุกภูมิภาคมีคุณค่าเท่าเทียมกัน คำศัพท์อาจแตกต่างกันตามจังหวัดและชุมชน
          </p>
        </div>
      </footer>

      {/* Mobile Bottom Navigation (5 items) */}
      <MobileNav
        currentTab={currentTab}
        onNavigate={navigateTo}
        savedCount={userProgress.savedWordIds.length}
      />

      {/* Nong Vao AI Chat Drawer */}
      <AIChatDrawer
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        initialPrompt={aiChatPrompt}
      />
    </div>
  );
}
