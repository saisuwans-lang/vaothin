import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Filter,
  X,
  Bookmark,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
  RotateCcw,
} from 'lucide-react';
import { DictionaryEntry, Region, VerificationStatus } from '../types';
import { DICTIONARY_DATA, REGION_CONFIG } from '../data/dictionaryData';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface DictionaryPageProps {
  initialQuery?: string;
  initialRegion?: Region | 'all';
  onSelectWord: (wordId: string) => void;
  onToggleFavorite: (wordId: string) => void;
  isWordSaved: (wordId: string) => boolean;
  onAddSearchHistory: (query: string) => void;
  searchHistory: string[];
  onOpenAIChat: (prompt?: string) => void;
}

export const DictionaryPage: React.FC<DictionaryPageProps> = ({
  initialQuery = '',
  initialRegion = 'all',
  onSelectWord,
  onToggleFavorite,
  isWordSaved,
  onAddSearchHistory,
  searchHistory,
  onOpenAIChat,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [selectedRegion, setSelectedRegion] = useState<Region | 'all'>(initialRegion);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<VerificationStatus | 'all'>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'alpha' | 'views'>('relevance');
  const [selectedArchive, setSelectedArchive] = useState<'all' | 'lanna' | 'esan108' | 'south'>('all');

  // Sync initial props
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    if (initialRegion) {
      setSelectedRegion(initialRegion);
    }
  }, [initialRegion]);

  // Extract unique categories from dataset
  const categories = useMemo(() => {
    const set = new Set<string>();
    DICTIONARY_DATA.forEach((w) => {
      if (w.category) set.add(w.category);
    });
    return Array.from(set);
  }, []);

  // Filter & Search Logic
  const filteredWords = useMemo(() => {
    const q = query.trim().toLowerCase();

    return DICTIONARY_DATA.filter((entry) => {
      // Region filter
      if (selectedRegion !== 'all' && entry.region !== selectedRegion) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && entry.category !== selectedCategory) {
        return false;
      }

      // Verification Status filter
      if (selectedStatus !== 'all' && entry.verificationStatus !== selectedStatus) {
        return false;
      }

      // Archive / Source filter
      if (selectedArchive === 'lanna') {
        const matchesLanna = entry.sources.some(
          (s) =>
            s.url?.includes('moradoklanna.com') ||
            s.title?.includes('มรดกล้านนา') ||
            s.url?.includes('thapra.lib.su.ac.th') ||
            s.title?.includes('ศิลปากร') ||
            s.url?.includes('finearts.go.th') ||
            s.title?.includes('สวนสุนันทา')
        );
        if (!matchesLanna) return false;
      } else if (selectedArchive === 'esan108') {
        const matchesEsan = entry.sources.some(
          (s) => s.url?.includes('esan108.com') || s.title?.includes('esan108.com')
        );
        if (!matchesEsan) return false;
      } else if (selectedArchive === 'south') {
        const matchesSouth = entry.sources.some(
          (s) =>
            s.url?.includes('clib.psu.ac.th') ||
            s.title?.includes('คุณหญิงหลง') ||
            s.title?.includes('ทักษิณคดี') ||
            s.url?.includes('satun') ||
            s.url?.includes('sanook')
        );
        if (!matchesSouth) return false;
      }

      // Search query filter (matches dialect, standard, meaning, pronunciation, province)
      if (q) {
        const matchesDialect = entry.dialectWord.toLowerCase().includes(q);
        const matchesStandard = entry.standardWord.toLowerCase().includes(q);
        const matchesMeaning = entry.meaning.toLowerCase().includes(q);
        const matchesPronounce = entry.pronunciation?.toLowerCase().includes(q);
        const matchesProvince = entry.province?.toLowerCase().includes(q);
        const matchesExamples = entry.examples.some(
          (ex) =>
            ex.dialectSentence.toLowerCase().includes(q) ||
            ex.standardTranslation.toLowerCase().includes(q)
        );

        return (
          matchesDialect ||
          matchesStandard ||
          matchesMeaning ||
          matchesPronounce ||
          matchesProvince ||
          matchesExamples
        );
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'alpha') {
        return a.dialectWord.localeCompare(b.dialectWord, 'th');
      }
      if (sortBy === 'views') {
        return (b.viewCount || 0) - (a.viewCount || 0);
      }
      // Default: relevance / verified first
      if (a.verificationStatus === 'verified' && b.verificationStatus !== 'verified') return -1;
      if (b.verificationStatus === 'verified' && a.verificationStatus !== 'verified') return 1;
      return (b.favoritesCount || 0) - (a.favoritesCount || 0);
    });
  }, [query, selectedRegion, selectedCategory, selectedStatus, sortBy, selectedArchive]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onAddSearchHistory(query.trim());
    }
  };

  const handleClearFilters = () => {
    setQuery('');
    setSelectedRegion('all');
    setSelectedCategory('all');
    setSelectedStatus('all');
    setSortBy('relevance');
    setSelectedArchive('all');
  };

  const hasActiveFilters =
    query.trim() !== '' ||
    selectedRegion !== 'all' ||
    selectedCategory !== 'all' ||
    selectedStatus !== 'all' ||
    selectedArchive !== 'all';

  return (
    <div className="space-y-6 pb-16">
      {/* Header & Title */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#B8EBD0] text-[#1E824C]">
                คลังคำศัพท์ 4 ภูมิภาค
              </span>
              <span className="text-xs text-gray-500">
                รวม {DICTIONARY_DATA.length} รายการ
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#29323D]">
              พจนานุกรมภาษาถิ่น
            </h1>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
              ค้นหาความหมาย คำอ่าน ตัวอย่างประโยค และบริบทการใช้จากทั่วประเทศ
            </p>
          </div>

          {/* Ask AI shortcut */}
          <button
            onClick={() =>
              onOpenAIChat(
                query.trim()
                  ? `ช่วยอธิบายคำว่า "${query.trim()}" ในภาษาถิ่นหน่อยสิ`
                  : 'ช่วยแนะนำคำศัพท์ภาษาถิ่นที่น่าสนใจหน่อย'
              )
            }
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#DCD2FF]/70 hover:bg-[#DCD2FF] text-[#29323D] font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-[#6C5CE7]" />
            <span>ถามน้องเว้าเกี่ยวกับคำนี้</span>
          </button>
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="mt-6">
          <div className="relative flex items-center shadow-xs rounded-2xl bg-[#FFFDF8] border-2 border-gray-200 focus-within:border-[#A794FF] focus-within:ring-2 focus-within:ring-[#DCD2FF] transition-all p-1">
            <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นคำภาษาถิ่น ภาษากลาง ความหมาย หรือจังหวัด เช่น คิดฮอด, แอ่ว, หรอย..."
              className="w-full px-3 py-2.5 text-sm sm:text-base text-[#29323D] bg-transparent focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="p-1.5 mr-1 text-gray-400 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#29323D] hover:bg-black text-white text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer"
            >
              ค้นหา
            </button>
          </div>
        </form>

        {/* Recent Search Suggestions */}
        {searchHistory.length > 0 && !query && (
          <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs text-gray-500">
            <Clock className="w-3.5 h-3.5 shrink-0 text-gray-400" />
            <span className="shrink-0 font-medium">คำค้นล่าสุด:</span>
            {searchHistory.slice(0, 6).map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="shrink-0 px-2.5 py-1 rounded-full bg-gray-100 hover:bg-[#DCD2FF]/60 text-gray-700 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter Chips Bar */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-4">
        {/* Regions Filter */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            ภูมิภาค
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === 'all'
                  ? 'bg-[#29323D] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              ทุกภูมิภาค ({DICTIONARY_DATA.length})
            </button>
            {(['north', 'northeast', 'central', 'south'] as Region[]).map((reg) => {
              const count = DICTIONARY_DATA.filter((w) => w.region === reg).length;
              const conf = REGION_CONFIG[reg];
              const isActive = selectedRegion === reg;
              return (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    isActive
                      ? `${conf.badgeBg} ${conf.textColor} ${conf.borderColor} shadow-xs scale-102`
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {conf.nameThai} ({count})
                </button>
              );
            })}

            {/* Special Source / Archive Filter Chips */}
            <div className="w-full flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-1">
                คลังอ้างอิง:
              </span>
              <button
                onClick={() => {
                  setSelectedArchive(selectedArchive === 'lanna' ? 'all' : 'lanna');
                  if (selectedArchive !== 'lanna') setSelectedRegion('north');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
                  selectedArchive === 'lanna'
                    ? 'bg-[#DCD2FF] text-[#6C5CE7] border-[#DCD2FF] shadow-xs scale-102 ring-2 ring-[#DCD2FF]/40'
                    : 'bg-purple-50/60 border-purple-200 text-[#6C5CE7] hover:bg-[#DCD2FF]/30'
                }`}
                title="กรองคำศัพท์จาก มรดกล้านนา, หอสมุดวังท่าพระ ศิลปากร, กรมศิลปากร, สวนสุนันทา"
              >
                <Sparkles className="w-3 h-3 text-[#6C5CE7]" />
                มรดกล้านนา ({
                  DICTIONARY_DATA.filter((w) =>
                    w.sources.some(
                      (s) =>
                        s.url?.includes('moradoklanna.com') ||
                        s.title?.includes('มรดกล้านนา') ||
                        s.url?.includes('thapra.lib.su.ac.th') ||
                        s.title?.includes('ศิลปากร') ||
                        s.url?.includes('finearts.go.th') ||
                        s.title?.includes('สวนสุนันทา')
                    )
                  ).length
                })
              </button>

              <button
                onClick={() => {
                  setSelectedArchive(selectedArchive === 'esan108' ? 'all' : 'esan108');
                  if (selectedArchive !== 'esan108') setSelectedRegion('northeast');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
                  selectedArchive === 'esan108'
                    ? 'bg-[#FFD6C2] text-[#E15B28] border-[#FFD6C2] shadow-xs scale-102 ring-2 ring-[#FFD6C2]/40'
                    : 'bg-orange-50/60 border-orange-200 text-[#E15B28] hover:bg-[#FFD6C2]/30'
                }`}
                title="กรองเฉพาะคำศัพท์อีสานอ้างอิงจาก esan108.com"
              >
                <Sparkles className="w-3 h-3 text-[#E15B28]" />
                คลังอีสาน 108 ({
                  DICTIONARY_DATA.filter((w) =>
                    w.sources.some(
                      (s) => s.url?.includes('esan108.com') || s.title?.includes('esan108.com')
                    )
                  ).length
                })
              </button>

              <button
                onClick={() => {
                  setSelectedArchive(selectedArchive === 'south' ? 'all' : 'south');
                  if (selectedArchive !== 'south') setSelectedRegion('south');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
                  selectedArchive === 'south'
                    ? 'bg-[#FFF0A8] text-[#8C6D00] border-[#FFF0A8] shadow-xs scale-102 ring-2 ring-[#FFF0A8]/40'
                    : 'bg-amber-50/60 border-amber-200 text-[#8C6D00] hover:bg-[#FFF0A8]/30'
                }`}
                title="กรองคำศัพท์จาก หอสมุดคุณหญิงหลง ม.อ., สถาบันทักษิณคดีศึกษา, สตูล, Sanook"
              >
                <Sparkles className="w-3 h-3 text-[#8C6D00]" />
                สารสนเทศใต้ ({
                  DICTIONARY_DATA.filter((w) =>
                    w.sources.some(
                      (s) =>
                        s.url?.includes('clib.psu.ac.th') ||
                        s.title?.includes('คุณหญิงหลง') ||
                        s.title?.includes('ทักษิณคดี') ||
                        s.url?.includes('satun') ||
                        s.url?.includes('sanook')
                    )
                  ).length
                })
              </button>
            </div>
          </div>
        </div>

        {/* Category & Status Filter Row */}
        <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {/* Category dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-gray-500">หมวดหมู่:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-1 text-xs text-[#29323D] focus:outline-none focus:ring-1 focus:ring-[#DCD2FF]"
              >
                <option value="all">ทุกหมวดหมู่</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Verification Status */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-gray-500">สถานะ:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as any)}
                className="bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-1 text-xs text-[#29323D] focus:outline-none focus:ring-1 focus:ring-[#DCD2FF]"
              >
                <option value="all">สถานะทั้งหมด</option>
                <option value="verified">ยืนยันแล้ว (มีเอกสารอ้างอิง)</option>
                <option value="unverified">รอตรวจทาน (จากชุมชน)</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-gray-500">เรียงตาม:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-1 text-xs text-[#29323D] focus:outline-none focus:ring-1 focus:ring-[#DCD2FF]"
              >
                <option value="relevance">ความเกี่ยวข้อง & ยอดนิยม</option>
                <option value="alpha">ตัวอักษร ก-ฮ</option>
                <option value="views">ยอดเปิดดูสูงสุด</option>
              </select>
            </div>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              ล้างตัวกรองทั้งหมด
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 px-1">
        <div>
          พบ <span className="font-bold text-[#29323D]">{filteredWords.length}</span> คำศัพท์
          {query && (
            <span>
              {' '}
              ที่ตรงกับ "<span className="font-semibold text-[#6C5CE7]">{query}</span>"
            </span>
          )}
        </div>
      </div>

      {/* Word Grid or Empty State */}
      {filteredWords.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWords.map((word) => {
            const reg = REGION_CONFIG[word.region];
            const isSaved = isWordSaved(word.id);

            return (
              <div
                key={word.id}
                onClick={() => onSelectWord(word.id)}
                className="group relative rounded-3xl bg-white border border-gray-200/80 hover:border-[#DCD2FF] p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top badges & Favorite button */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${reg.badgeBg} ${reg.textColor}`}
                      >
                        {reg.nameThai}
                      </span>
                      {word.province && (
                        <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                          {word.province}
                        </span>
                      )}
                      {word.verificationStatus === 'verified' ? (
                        <span
                          className="inline-flex items-center text-emerald-600"
                          title="ข้อมูลผ่านการยืนยันจากแหล่งอ้างอิง"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span
                          className="inline-flex items-center text-amber-500 text-[10px] bg-amber-50 px-1.5 py-0.5 rounded-full"
                          title="ข้อมูลรอการตรวจทาน"
                        >
                          รอตรวจ
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(word.id);
                      }}
                      className={`p-1.5 rounded-xl transition-colors ${
                        isSaved
                          ? 'bg-[#FFD6C2] text-[#E15B28]'
                          : 'text-gray-300 hover:text-gray-600 hover:bg-gray-100'
                      }`}
                      title={isSaved ? 'ลบออกจากรายการโปรด' : 'บันทึกคำศัพท์'}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Word title & pronunciation */}
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-[#29323D] group-hover:text-[#6C5CE7] transition-colors">
                      {word.dialectWord}
                    </h3>
                    {word.pronunciation && (
                      <span className="text-xs text-[#6B7280] font-sans">
                        ({word.pronunciation})
                      </span>
                    )}
                  </div>

                  {/* Meaning & Standard translation */}
                  <div className="mt-2 text-sm text-[#29323D] leading-relaxed">
                    <span className="text-xs text-gray-500">ภาษากลาง: </span>
                    <span className="font-semibold text-[#6C5CE7]">{word.standardWord}</span>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{word.meaning}</p>
                  </div>

                  {/* Example preview */}
                  {word.examples.length > 0 && (
                    <div className="mt-3 p-2.5 rounded-xl bg-[#FFFDF8] border border-gray-100 text-xs">
                      <div className="font-medium text-[#29323D] line-clamp-1">
                        "{word.examples[0].dialectSentence}"
                      </div>
                      <div className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                        แปล: {word.examples[0].standardTranslation}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer category and click action */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span className="truncate max-w-[150px]">{word.category}</span>
                  <span className="font-semibold text-[#6C5CE7] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    รายละเอียด <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State with Mascot */
        <div className="rounded-3xl bg-white border border-gray-200/80 p-8 sm:p-12 text-center max-w-lg mx-auto shadow-xs">
          <MascotNongVao
            emotion="thinking"
            speechBubbleText="ยังบ่พบคำนี้ในคลังคำศัพท์เลยจ้า"
            size="md"
          />
          <h3 className="mt-4 text-lg font-bold text-[#29323D]">
            ไม่พบคำศัพท์ที่ตรงกับการค้นหา
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
            ลองปรับเปลี่ยนคำค้นหา ค้นหาด้วยภาษากลาง หรือล้างตัวกรองบางส่วนดูนะจ๊ะ
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#29323D] text-xs font-semibold cursor-pointer"
            >
              ล้างตัวกรองทั้งหมด
            </button>
            <button
              onClick={() => onOpenAIChat(`ในภาษาถิ่นมีคำว่า "${query}" หรือไม่ ช่วยอธิบายหน่อย`)}
              className="px-4 py-2 rounded-xl bg-[#DCD2FF] hover:bg-[#CFBEFF] text-[#29323D] text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#6C5CE7]" />
              ถามน้องเว้าเกี่ยวกับคำนี้
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
