import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  Bookmark,
  Share2,
  Gamepad2,
  Flame,
  CheckCircle,
  Users,
  Compass,
  MessageCircle,
} from 'lucide-react';
import { DictionaryEntry, Region, UserProgress } from '../types';
import {
  DICTIONARY_DATA,
  getDailyWord,
  REGION_CONFIG,
} from '../data/dictionaryData';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface HomePageProps {
  onNavigate: (tab: string, state?: any) => void;
  onSelectWord: (wordId: string) => void;
  userProgress: UserProgress;
  onToggleFavorite: (wordId: string) => void;
  isWordSaved: (wordId: string) => boolean;
  onOpenAIChat: (prompt?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectWord,
  userProgress,
  onToggleFavorite,
  isWordSaved,
  onOpenAIChat,
}) => {
  const [searchInput, setSearchInput] = useState('');
  const dailyWord = getDailyWord();
  const isDailySaved = isWordSaved(dailyWord.id);
  const [copiedDaily, setCopiedDaily] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onNavigate('dictionary', { query: searchInput.trim() });
    }
  };

  const handleShareDaily = async () => {
    const text = `คำศัพท์ประจำวันจากเว้าถิ่น: "${dailyWord.dialectWord}" (${REGION_CONFIG[dailyWord.region].nameThai}) หมายถึง "${dailyWord.meaning}"`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'เว้าถิ่น — คำศัพท์ประจำวัน',
          text,
          url: window.location.href,
        });
        return;
      } catch {
        // user cancelled or share failed, fallback to copy
      }
    }
    await navigator.clipboard.writeText(text);
    setCopiedDaily(true);
    setTimeout(() => setCopiedDaily(false), 2000);
  };

  const featuredWords = DICTIONARY_DATA.filter((w) => w.verificationStatus === 'verified').slice(0, 8);
  const userLevel = Math.floor(userProgress.xp / 50) + 1;

  return (
    <div className="space-y-12 pb-16">
      {/* SECTION A: Hero Header */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FFFDF8] via-[#F6F1FF]/60 to-[#FFFDF8] border border-[#DCD2FF]/60 p-6 sm:p-10 lg:p-12 shadow-sm">
        {/* Soft pastel ambient background spots */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8EBD0]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD6C2]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Mascot Header Badge */}
          <div className="mb-4">
            <MascotNongVao
              emotion="waving"
              speechBubbleText="สวัสดีจ้า! มาม่วนกับภาษาถิ่นนำกันเด้อ!"
              size="md"
              onClick={() => onOpenAIChat('สวัสดีน้องเว้า แนะนำตัวหน่อยสิ!')}
            />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29323D] tracking-tight leading-tight">
            คำเว้าบ้านเฮา <span className="text-[#6C5CE7] underline decoration-[#DCD2FF] decoration-wavy">ม่วนได้ทุกถิ่น!</span>
          </h1>

          <p className="mt-3.5 text-base sm:text-lg text-[#6B7280] max-w-2xl font-normal leading-relaxed">
            มาค้นคำใหม่ เรียนรู้สำเนียง และแบ่งปันภาษาจากบ้านเกิดไปนำกัน
            เพราะทุกภูมิภาคมีคุณค่าเท่าเทียมกัน และมีเรื่องเล่าอยู่ในทุกคำ
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="mt-8 w-full max-w-2xl">
            <div className="relative flex items-center shadow-md rounded-2xl bg-white border-2 border-[#DCD2FF] focus-within:border-[#A794FF] focus-within:ring-4 focus-within:ring-[#DCD2FF]/40 transition-all p-1.5">
              <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="ลองค้นหา เช่น คิดฮอด, แอ่ว, หรอย, สลิด, แซ่บ..."
                className="w-full px-3 py-2.5 text-sm sm:text-base text-[#29323D] bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 px-5 py-2.5 rounded-xl bg-[#DCD2FF] hover:bg-[#CFBEFF] text-[#29323D] font-bold text-sm transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                ค้นหา
              </button>
            </div>
          </form>

          {/* Quick CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('dictionary')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 text-[#29323D] text-sm font-semibold shadow-xs transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#6C5CE7]" />
              สำรวจพจนานุกรม
            </button>
            <button
              onClick={() => onNavigate('learning')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#B8EBD0] hover:bg-[#A3E5C1] text-[#29323D] text-sm font-bold shadow-xs transition-all cursor-pointer"
            >
              <span>เริ่มเรียนรู้</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('comparison')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#FFF0A8] hover:bg-[#FFE770] text-[#7A5E00] text-sm font-bold shadow-xs transition-all cursor-pointer"
            >
              <span>เทียบ 4 ภาค</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION B: 4 Regional Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#29323D]">
              เลือกสำรวจตามภูมิภาค
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              เจาะลึกคำศัพท์และวัฒนธรรมภาษาของทั้ง 4 ภาค
            </p>
          </div>
          <button
            onClick={() => onNavigate('dictionary')}
            className="text-xs sm:text-sm font-semibold text-[#6C5CE7] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ดูทั้งหมด
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(['north', 'northeast', 'central', 'south'] as Region[]).map((regionKey) => {
            const info = REGION_CONFIG[regionKey];
            const wordCount = DICTIONARY_DATA.filter((w) => w.region === regionKey).length;
            return (
              <div
                key={regionKey}
                onClick={() => onNavigate('dictionary', { region: regionKey })}
                className={`group relative overflow-hidden rounded-3xl p-5 border ${info.borderColor} ${info.bgColor} hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${info.badgeBg} ${info.textColor}`}
                    >
                      {info.english}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      {wordCount} คำศัพท์
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#29323D] group-hover:text-[#6C5CE7] transition-colors">
                    {info.nameThai}
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-1.5 line-clamp-2 leading-relaxed">
                    {info.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#29323D]">
                  <span className="italic opacity-80 font-normal">"{info.greeting}"</span>
                  <span className="inline-flex items-center gap-1 text-[#6C5CE7] group-hover:translate-x-1 transition-transform">
                    สำรวจ <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION C & D: Daily Word & Gamified Quiz Banner */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Daily Word Card (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl bg-white border border-[#DCD2FF]/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#FFD6C2]/20 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#DCD2FF] text-[#29323D] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#6C5CE7]" />
                  คำศัพท์ประจำวัน
                </span>
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    REGION_CONFIG[dailyWord.region].badgeBg
                  } ${REGION_CONFIG[dailyWord.region].textColor}`}
                >
                  {REGION_CONFIG[dailyWord.region].nameThai}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onToggleFavorite(dailyWord.id)}
                  className={`p-2 rounded-xl border transition-all ${
                    isDailySaved
                      ? 'bg-[#FFD6C2] text-[#E15B28] border-[#FFD6C2]'
                      : 'border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  title={isDailySaved ? 'ลบออกจากรายการโปรด' : 'บันทึกคำศัพท์'}
                >
                  <Bookmark className={`w-4 h-4 ${isDailySaved ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleShareDaily}
                  className="p-2 rounded-xl border border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-all"
                  title="แชร์คำศัพท์ประจำวัน"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-baseline gap-3">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#29323D] tracking-tight">
                  {dailyWord.dialectWord}
                </h3>
                {dailyWord.pronunciation && (
                  <span className="text-sm text-[#6B7280] font-sans">
                    ({dailyWord.pronunciation})
                  </span>
                )}
              </div>
              <p className="mt-2 text-base text-[#29323D] font-medium leading-relaxed">
                แปลว่า: <span className="font-bold text-[#6C5CE7]">{dailyWord.meaning}</span>
              </p>
            </div>

            {dailyWord.examples.length > 0 && (
              <div className="mt-4 p-3.5 rounded-2xl bg-[#FFFDF8] border border-gray-100">
                <div className="text-xs font-semibold text-[#6B7280] mb-1">ตัวอย่างประโยค:</div>
                <div className="text-sm font-medium text-[#29323D]">
                  "{dailyWord.examples[0].dialectSentence}"
                </div>
                <div className="text-xs text-[#6B7280] mt-0.5">
                  แปลว่า: {dailyWord.examples[0].standardTranslation}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            {copiedDaily ? (
              <span className="text-xs font-medium text-emerald-600">คัดลอกข้อความแล้ว!</span>
            ) : (
              <span className="text-xs text-[#6B7280]">
                อัปเดตทุกวันตามปฏิทินท้องถิ่น
              </span>
            )}
            <button
              onClick={() => onSelectWord(dailyWord.id)}
              className="text-xs font-bold text-[#6C5CE7] hover:underline flex items-center gap-1 cursor-pointer"
            >
              ดูรายละเอียดคำนี้
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Quick Game Card (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#DCD2FF]/60 via-[#FFFDF8] to-[#B8EBD0]/50 border border-[#DCD2FF] p-6 sm:p-7 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0A8] text-[#8C6D00] text-xs font-bold">
                <Gamepad2 className="w-3.5 h-3.5" />
                เล่นเกมคำศัพท์
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-[#B8EBD0] px-2.5 py-0.5 rounded-full">
                +10~25 XP
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#29323D]">
              ทายความหมาย 4 ภาค
            </h3>
            <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
              ท้าทายความจำกับคลังคำศัพท์ภาษาถิ่น 3 โหมดสนุก: ทายความหมาย, จับคู่คำ, และคำนี้ภาคใด?
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-white/80 p-2 rounded-xl border border-[#DCD2FF]/60">
                <div className="font-bold text-[#29323D]">5 ข้อ</div>
                <div className="text-[10px] text-gray-500">ความยาวสั้น</div>
              </div>
              <div className="bg-white/80 p-2 rounded-xl border border-[#DCD2FF]/60">
                <div className="font-bold text-[#29323D]">ง่าย~ปานกลาง</div>
                <div className="text-[10px] text-gray-500">ระดับ</div>
              </div>
              <div className="bg-white/80 p-2 rounded-xl border border-[#DCD2FF]/60">
                <div className="font-bold text-amber-600">รับเหรียญ</div>
                <div className="text-[10px] text-gray-500">Streak เพิ่ม</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => onNavigate('games')}
              className="w-full py-3 rounded-2xl bg-[#6C5CE7] hover:bg-[#5848C2] active:scale-98 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4" />
              เริ่มเล่นเกมตอนนี้
            </button>
          </div>
        </div>
      </section>

      {/* SECTION E: Featured Words Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#29323D]">
              คำศัพท์แนะนำ
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              คำยอดนิยมที่ผ่านการบันทึกและสืบค้นบ่อยในระบบ
            </p>
          </div>
          <button
            onClick={() => onNavigate('dictionary')}
            className="text-xs sm:text-sm font-semibold text-[#6C5CE7] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ดูทั้งหมด ({DICTIONARY_DATA.length})
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {featuredWords.map((word) => {
            const reg = REGION_CONFIG[word.region];
            const isSaved = isWordSaved(word.id);
            return (
              <div
                key={word.id}
                onClick={() => onSelectWord(word.id)}
                className="group p-4 rounded-2xl bg-white border border-gray-200/80 hover:border-[#DCD2FF] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
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
                      className={`p-1 rounded-lg ${
                        isSaved ? 'text-[#E15B28]' : 'text-gray-300 hover:text-gray-600'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  <h4 className="text-lg font-bold text-[#29323D] group-hover:text-[#6C5CE7] transition-colors">
                    {word.dialectWord}
                  </h4>
                  <p className="text-xs text-[#6B7280] mt-1 line-clamp-1">
                    {word.meaning}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span>ภาษากลาง: {word.standardWord}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-[#6C5CE7]" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION F: Community & User Progress Row */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* User Progress Card (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl bg-white border border-gray-200/80 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                ความก้าวหน้าของฉัน
              </span>
              <button
                onClick={() => onNavigate('profile')}
                className="text-xs font-semibold text-[#6C5CE7] hover:underline"
              >
                ดูโปรไฟล์
              </button>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FFD9E5] to-[#DCD2FF] flex items-center justify-center text-2xl shadow-xs border border-white">
                {userProgress.avatar || '🐱'}
              </div>
              <div>
                <h4 className="font-bold text-[#29323D] text-base">
                  {userProgress.name || 'คนรักภาษาถิ่น'}
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#DCD2FF] text-[#6C5CE7]">
                    เลเวล {userLevel}
                  </span>
                  <span className="text-xs text-amber-600 font-semibold flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    {userProgress.streak} วันติดต่อกัน
                  </span>
                </div>
              </div>
            </div>

            {/* XP Bar */}
            <div className="mt-5 space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-gray-600">
                <span>ความก้าวหน้าระดับ</span>
                <span>{userProgress.xp % 50} / 50 XP</span>
              </div>
              <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#B8EBD0] to-[#6C5CE7] rounded-full transition-all duration-500"
                  style={{ width: `${((userProgress.xp % 50) / 50) * 100}%` }}
                />
              </div>
            </div>

            {/* Badges preview */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-600">
              <span className="font-medium">ตราสัญลักษณ์ที่ปลดล็อก:</span>
              <div className="flex gap-1">
                {userProgress.unlockedBadgeIds.map((b) => (
                  <span key={b} className="text-base" title="ตราสัญลักษณ์">
                    🏅
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={() => onNavigate('learning')}
              className="w-full py-2.5 rounded-xl bg-[#B8EBD0] hover:bg-[#A3E5C1] text-[#29323D] font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>ไปเรียนต่อในห้องเรียน</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Community Snippet (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#FFFDF8] via-[#FFD6C2]/15 to-[#FFFDF8] border border-[#FFD6C2]/70 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFD6C2] text-[#E15B28] text-xs font-bold">
                  <Users className="w-3.5 h-3.5" />
                  ลานเว้าถิ่น (ชุมชน)
                </span>
                <span className="text-xs text-gray-500">แลกเปลี่ยนความรู้</span>
              </div>
              <button
                onClick={() => onNavigate('community')}
                className="text-xs font-bold text-[#E15B28] hover:underline flex items-center gap-1 cursor-pointer"
              >
                เข้าสู่ลานชุมชน
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-3">
              <div
                onClick={() => onNavigate('community')}
                className="p-3.5 rounded-2xl bg-white border border-gray-100 hover:border-[#FFD6C2] transition-all cursor-pointer shadow-xs"
              >
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span className="font-semibold text-[#29323D]">🌾 ต้นกล้า ขอนแก่น (อีสาน)</span>
                  <span>เมื่อวานนี้</span>
                </div>
                <div className="text-sm font-bold text-[#29323D]">
                  มีคำภาษาอีสานคำไหนที่เพื่อนๆ ต่างภาคมักจะเข้าใจผิดกันบ่อยๆ ไหมครับ?
                </div>
                <div className="mt-1 text-xs text-gray-600 line-clamp-1">
                  ผมสังเกตว่าเพื่อนๆ กรุงเทพฯ มักคิดว่าคำว่า "ส่วง" แปลว่า อิ่ม...
                </div>
              </div>

              <div
                onClick={() => onNavigate('community')}
                className="p-3.5 rounded-2xl bg-white border border-gray-100 hover:border-[#FFD6C2] transition-all cursor-pointer shadow-xs"
              >
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span className="font-semibold text-[#29323D]">🌺 น้องฟ้า สงขลา (ใต้)</span>
                  <span>2 วันที่แล้ว</span>
                </div>
                <div className="text-sm font-bold text-[#29323D]">
                  คำว่า "หรอย" นอกจากอาหารแล้ว คนใต้เอาไปใช้กับอะไรได้อีกมั่ง?
                </div>
                <div className="mt-1 text-xs text-gray-600 line-clamp-1">
                  หลายคนคิดว่า "หรอย" แปลว่า อร่อย อย่างเดียว แต่จริงๆ ใช้กับความสนุกได้ด้วย...
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              มีคำศัพท์จากบ้านเกิดอยากแบ่งปันไหม?
            </span>
            <button
              onClick={() => onNavigate('submit_word')}
              className="text-xs font-bold text-[#6C5CE7] hover:underline flex items-center gap-1 cursor-pointer"
            >
              + ส่งคำศัพท์เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
