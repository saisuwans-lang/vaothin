import React, { useState } from 'react';
import {
  User,
  Flame,
  Award,
  Sparkles,
  BookOpen,
  Bookmark,
  CheckCircle2,
  Lock,
  Edit2,
  Check,
  RotateCcw,
  Info,
} from 'lucide-react';
import { ALL_BADGES, StorageService } from '../services/storageService';
import { UserProgress } from '../types';
import { LESSONS_DATA } from '../data/lessonsData';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface ProfilePageProps {
  userProgress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  onNavigate: (tab: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  userProgress,
  onUpdateProgress,
  onNavigate,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(userProgress.name);
  const [selectedAvatar, setSelectedAvatar] = useState(userProgress.avatar);

  const avatarOptions = ['🐱', '🌾', '🌸', '🌴', '🥥', '✨', '🐘', '🦋'];

  const level = Math.floor(userProgress.xp / 50) + 1;
  const xpInCurrentLevel = userProgress.xp % 50;

  const handleSaveProfile = () => {
    const updated = {
      ...userProgress,
      name: nameInput.trim() || 'คนรักภาษาถิ่น',
      avatar: selectedAvatar,
    };
    StorageService.saveUserProgress(updated);
    onUpdateProgress(updated);
    setIsEditingName(false);
  };

  const completedLessons = LESSONS_DATA.filter((l) =>
    userProgress.completedLessonIds.includes(l.id)
  );

  const submittedWords = StorageService.getSubmittedWords();

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Profile Hero Card */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#DCD2FF] via-[#FFD9E5] to-[#B8EBD0] flex items-center justify-center text-4xl shadow-md border-2 border-white">
              {selectedAvatar}
            </div>
            {isEditingName && (
              <div className="mt-3 flex flex-wrap gap-1.5 justify-center max-w-[200px]">
                {avatarOptions.map((av) => (
                  <button
                    key={av}
                    onClick={() => setSelectedAvatar(av)}
                    className={`w-8 h-8 rounded-xl text-lg flex items-center justify-center border transition-all ${
                      selectedAvatar === av
                        ? 'border-[#6C5CE7] bg-[#DCD2FF]'
                        : 'border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User info & Level */}
          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="text-xl font-bold p-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]"
                  />
                  <button
                    onClick={handleSaveProfile}
                    className="p-2 rounded-xl bg-[#29323D] text-white hover:bg-black"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#29323D]">
                    {userProgress.name}
                  </h1>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                    title="แก้ไขชื่อเล่นและรูปประจำตัว"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#DCD2FF] text-[#6C5CE7]">
                เลเวล {level}: {level === 1 ? 'นักเริ่มเว้า' : level === 2 ? 'เจ้าถิ่นคนเก่ง' : 'เซียนภาษาถิ่น'}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-current" />
                Streak {userProgress.streak} วัน
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                ⚡ สะสม {userProgress.xp} XP
              </span>
            </div>

            {/* Level XP Bar */}
            <div className="pt-3 max-w-md space-y-1">
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>ความก้าวหน้าระดับถัดไป (Level {level + 1})</span>
                <span>{xpInCurrentLevel} / 50 XP</span>
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#B8EBD0] via-[#DCD2FF] to-[#6C5CE7] rounded-full transition-all duration-500"
                  style={{ width: `${(xpInCurrentLevel / 50) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block shrink-0">
            <MascotNongVao emotion="cheering" size="md" />
          </div>
        </div>
      </div>

      {/* Badges Showcase */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#29323D] flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              ตราสัญลักษณ์ความสำเร็จ (Badges)
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              ปลดล็อกแล้ว {userProgress.unlockedBadgeIds.length} จาก {ALL_BADGES.length} ตรา
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {ALL_BADGES.map((badge) => {
            const isUnlocked = userProgress.unlockedBadgeIds.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                  isUnlocked
                    ? 'bg-[#FFFDF8] border-amber-200/80 shadow-xs'
                    : 'bg-gray-50/60 border-gray-200 opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
                    isUnlocked ? 'bg-gradient-to-tr ' + badge.bgGradient : 'bg-gray-200'
                  }`}
                >
                  {isUnlocked ? badge.icon : <Lock className="w-5 h-5 text-gray-400" />}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-[#29323D]">
                      {badge.name}
                    </span>
                    {isUnlocked && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learning & Contribution History */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Completed Lessons */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 shadow-xs space-y-3">
          <h3 className="font-bold text-[#29323D] text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#6C5CE7]" />
            บทเรียนที่สำเร็จ ({completedLessons.length})
          </h3>

          {completedLessons.length > 0 ? (
            <div className="space-y-2">
              {completedLessons.map((l) => (
                <div
                  key={l.id}
                  className="p-3 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs"
                >
                  <span className="font-bold text-[#29323D]">{l.title}</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> สำเร็จแล้ว
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-400 italic">
              ยังไม่มีบทเรียนที่สำเร็จ ลองเริ่มเรียนในห้องเรียนเว้าถิ่นเลย!
            </p>
          )}

          <button
            onClick={() => onNavigate('learning')}
            className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-800 transition-colors"
          >
            ไปที่ห้องเรียน
          </button>
        </div>

        {/* Submitted Words */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 shadow-xs space-y-3">
          <h3 className="font-bold text-[#29323D] text-base flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            คำศัพท์ที่ฉันส่งเข้าระบบ ({submittedWords.length})
          </h3>

          {submittedWords.length > 0 ? (
            <div className="space-y-2">
              {submittedWords.map((w) => (
                <div
                  key={w.id}
                  className="p-3 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold text-[#29323D]">{w.dialectWord}</span>
                    <span className="text-gray-500 ml-1.5">({w.standardWord})</span>
                  </div>
                  <span className="text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full">
                    รอการตรวจทาน
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-400 italic">
              คุณยังไม่ได้ส่งคำศัพท์เข้าระบบ ร่วมส่งคำศัพท์จากบ้านเกิดได้เลย!
            </p>
          )}

          <button
            onClick={() => onNavigate('submit_word')}
            className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-800 transition-colors"
          >
            + ส่งคำศัพท์ใหม่
          </button>
        </div>
      </div>

      {/* About VaoThin Footnote */}
      <div className="bg-[#FFFDF8] rounded-3xl border border-gray-200/80 p-6 text-center text-xs text-gray-500 space-y-2">
        <div className="font-bold text-[#29323D]">เว้าถิ่น — VaoThin</div>
        <p className="max-w-md mx-auto leading-relaxed">
          "ม่วนกับภาษา เรียนรู้ความเป็นเรา — คำเว้าบ้านเฮา มีเรื่องเล่าอยู่ทุกคำ"
          ส่งเสริมการเรียนรู้ภาษาถิ่นโดยไม่ล้อเลียนสำเนียงหรืออัตลักษณ์ท้องถิ่น
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('about')}
            className="text-[#6C5CE7] font-semibold hover:underline cursor-pointer"
          >
            อ่านเกี่ยวกับวิสัยทัศน์และการอนุรักษ์ภาษาถิ่น
          </button>
        </div>
      </div>
    </div>
  );
};
