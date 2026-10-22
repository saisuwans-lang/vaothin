import React, { useState } from 'react';
import {
  Bookmark,
  Trash2,
  Clock,
  ArrowRight,
  Search,
  BookOpen,
} from 'lucide-react';
import { DICTIONARY_DATA, REGION_CONFIG } from '../data/dictionaryData';
import { Region, UserProgress } from '../types';
import { StorageService } from '../services/storageService';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface FavoritesPageProps {
  userProgress: UserProgress;
  onSelectWord: (wordId: string) => void;
  onToggleFavorite: (wordId: string) => void;
  onNavigate: (tab: string, state?: any) => void;
  onClearHistory: () => void;
  onRemoveHistoryItem: (term: string) => void;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({
  userProgress,
  onSelectWord,
  onToggleFavorite,
  onNavigate,
  onClearHistory,
  onRemoveHistoryItem,
}) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'all'>('all');

  const savedWords = DICTIONARY_DATA.filter((w) =>
    userProgress.savedWordIds.includes(w.id)
  );

  const filteredSaved = savedWords.filter((w) => {
    if (selectedRegion !== 'all' && w.region !== selectedRegion) return false;
    if (filterQuery.trim()) {
      const q = filterQuery.toLowerCase();
      return (
        w.dialectWord.toLowerCase().includes(q) ||
        w.standardWord.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-8 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#FFD6C2]/40 via-[#FFFDF8] to-[#FFF0A8]/40 rounded-3xl border border-[#FFD6C2]/60 p-6 sm:p-10 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFD6C2] text-[#E15B28]">
                คลังส่วนตัว
              </span>
              <span className="text-xs text-gray-500">
                บันทึกไว้ {savedWords.length} คำ
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#29323D]">
              คำศัพท์ที่บันทึกไว้ & ประวัติ
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#6B7280] max-w-xl leading-relaxed">
              ทบทวนคำศัพท์ภาษาถิ่นที่คุณถูกใจ และเข้าถึงคำที่เคยค้นหาได้อย่างรวดเร็ว
            </p>
          </div>

          <MascotNongVao
            emotion="happy"
            size="md"
            speechBubbleText="สะสมคำศัพท์ไว้เยอะๆ เป็นเซียนภาษาถิ่นแน่นอน!"
          />
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="ค้นหาในรายการโปรด..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-[#FFFDF8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedRegion === 'all'
                  ? 'bg-[#29323D] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              ทุกภูมิภาค
            </button>
            {(['north', 'northeast', 'central', 'south'] as Region[]).map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedRegion === reg
                    ? `${REGION_CONFIG[reg].badgeBg} ${REGION_CONFIG[reg].textColor} font-bold`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {REGION_CONFIG[reg].nameThai}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Saved Words List */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#29323D] flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-[#E15B28] fill-current" />
          <span>รายการคำศัพท์โปรด ({filteredSaved.length})</span>
        </h2>

        {filteredSaved.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSaved.map((word) => {
              const reg = REGION_CONFIG[word.region];
              return (
                <div
                  key={word.id}
                  onClick={() => onSelectWord(word.id)}
                  className="rounded-3xl bg-white border border-gray-200/80 hover:border-[#DCD2FF] p-5 shadow-xs transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${reg.badgeBg} ${reg.textColor}`}
                      >
                        {reg.nameThai}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(word.id);
                        }}
                        className="p-1 rounded-lg text-[#E15B28] hover:bg-rose-50"
                        title="ลบออกจากรายการโปรด"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <h3 className="text-xl font-bold text-[#29323D]">
                      {word.dialectWord}
                    </h3>
                    <div className="text-xs font-semibold text-[#6C5CE7] mt-0.5">
                      ภาษากลาง: {word.standardWord}
                    </div>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {word.meaning}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span>{word.category}</span>
                    <span className="font-semibold text-[#6C5CE7] flex items-center gap-1">
                      ดูรายละเอียด <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center max-w-md mx-auto border border-gray-200/80 space-y-3">
            <Bookmark className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="text-base font-bold text-[#29323D]">
              ยังไม่มีคำศัพท์ที่บันทึกไว้ในหมวดนี้
            </h3>
            <p className="text-xs text-gray-500">
              กดไอคอนรูปบุ๊กมาร์กบนคำศัพท์ที่คุณสนใจเพื่อบันทึกเก็บไว้ดูย้อนหลัง
            </p>
            <button
              onClick={() => onNavigate('dictionary')}
              className="mt-3 px-5 py-2.5 rounded-2xl bg-[#29323D] text-white font-bold text-xs cursor-pointer shadow-xs"
            >
              ไปสำรวจพจนานุกรม
            </button>
          </div>
        )}
      </div>

      {/* Search History Section */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-400" />
            <h3 className="text-base font-bold text-[#29323D]">
              ประวัติการค้นหาล่าสุด
            </h3>
          </div>
          {userProgress.searchHistory.length > 0 && (
            <button
              onClick={onClearHistory}
              className="text-xs text-rose-600 hover:underline cursor-pointer"
            >
              ล้างประวัติทั้งหมด
            </button>
          )}
        </div>

        {userProgress.searchHistory.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-2">
            {userProgress.searchHistory.map((term) => (
              <div
                key={term}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700"
              >
                <span
                  onClick={() => onNavigate('dictionary', { query: term })}
                  className="cursor-pointer hover:text-[#6C5CE7] font-medium"
                >
                  {term}
                </span>
                <button
                  onClick={() => onRemoveHistoryItem(term)}
                  className="text-gray-400 hover:text-gray-700 ml-1"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400 italic">ไม่มีประวัติการค้นหา</p>
        )}
      </div>
    </div>
  );
};
