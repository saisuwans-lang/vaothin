import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Lock,
  ArrowRight,
  Flame,
  Award,
  Layers,
} from 'lucide-react';
import { LESSONS_DATA } from '../data/lessonsData';
import { Lesson, UserProgress } from '../types';
import { LessonPlayer } from '../components/learning/LessonPlayer';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface LearningPageProps {
  userProgress: UserProgress;
  onLessonCompleted: (lessonId: string) => void;
  onOpenAIChat: (prompt?: string) => void;
}

export const LearningPage: React.FC<LearningPageProps> = ({
  userProgress,
  onLessonCompleted,
  onOpenAIChat,
}) => {
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const completedCount = userProgress.completedLessonIds.length;
  const totalCount = LESSONS_DATA.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const filteredLessons = LESSONS_DATA.filter((lesson) => {
    if (selectedLevel !== 'all' && lesson.level !== selectedLevel) return false;
    return true;
  });

  if (activeLesson) {
    return (
      <LessonPlayer
        lesson={activeLesson}
        onClose={() => setActiveLesson(null)}
        onLessonCompleted={(id) => {
          onLessonCompleted(id);
        }}
      />
    );
  }

  return (
    <div className="space-y-8 pb-20">
      {/* Hero Learning Header */}
      <div className="bg-gradient-to-r from-[#B8EBD0]/40 via-[#FFFDF8] to-[#DCD2FF]/40 rounded-3xl border border-[#B8EBD0] p-6 sm:p-10 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#B8EBD0] text-[#1E824C]">
                ห้องเรียนเว้าถิ่น
              </span>
              <span className="text-xs text-amber-600 font-semibold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-current" />
                Streak: {userProgress.streak} วัน
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#29323D]">
              เรียนรู้ภาษาถิ่นแบบเป็นขั้นตอน
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#6B7280] max-w-xl leading-relaxed">
              ก้าวทีละขั้นตั้งแต่ระดับต้นสู่ระดับสูง เข้าใจบริบททางวัฒนธรรม
              และเก็บสะสม XP เพื่อปลดล็อกตราสัญลักษณ์พิเศษ!
            </p>
          </div>

          <MascotNongVao
            emotion="cheering"
            size="md"
            speechBubbleText="เรียนแค่วันละนิด ก็เว้าคล่องได้แล้วจ้า!"
            onClick={() =>
              onOpenAIChat('ช่วยแนะนำบทเรียนภาษาถิ่นที่เหมาะกับผู้เริ่มต้นให้หน่อย')
            }
          />
        </div>

        {/* Learning Progress Summary */}
        <div className="mt-6 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-80 space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-gray-700">
              <span>ความคืบหน้ารวม</span>
              <span>
                {completedCount} / {totalCount} บทเรียน ({progressPercent}%)
              </span>
            </div>
            <div className="h-2.5 w-full bg-white rounded-full overflow-hidden border border-gray-200">
              <div
                className="h-full bg-gradient-to-r from-[#B8EBD0] to-[#6C5CE7] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#6C5CE7]">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>รับ +20 XP เมื่อจบบทเรียน</span>
          </div>
        </div>
      </div>

      {/* Level Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedLevel('all')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            selectedLevel === 'all'
              ? 'bg-[#29323D] text-white shadow-xs'
              : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
          }`}
        >
          ทุกระดับ ({LESSONS_DATA.length})
        </button>
        <button
          onClick={() => setSelectedLevel('beginner')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            selectedLevel === 'beginner'
              ? 'bg-[#B8EBD0] text-[#1E824C] shadow-xs'
              : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
          }`}
        >
          ระดับต้น (Beginner)
        </button>
        <button
          onClick={() => setSelectedLevel('intermediate')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            selectedLevel === 'intermediate'
              ? 'bg-[#DCD2FF] text-[#6C5CE7] shadow-xs'
              : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
          }`}
        >
          ระดับกลาง (Intermediate)
        </button>
        <button
          onClick={() => setSelectedLevel('advanced')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            selectedLevel === 'advanced'
              ? 'bg-[#FFD6C2] text-[#E15B28] shadow-xs'
              : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
          }`}
        >
          ระดับสูง (Advanced)
        </button>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredLessons.map((lesson) => {
          const isCompleted = userProgress.completedLessonIds.includes(lesson.id);

          const levelBadgeConfig = {
            beginner: { label: 'ระดับต้น', bg: 'bg-[#B8EBD0]', text: 'text-[#1E824C]' },
            intermediate: { label: 'ระดับกลาง', bg: 'bg-[#DCD2FF]', text: 'text-[#6C5CE7]' },
            advanced: { label: 'ระดับสูง', bg: 'bg-[#FFD6C2]', text: 'text-[#E15B28]' },
          }[lesson.level];

          return (
            <div
              key={lesson.id}
              className={`rounded-3xl p-6 sm:p-7 border bg-white shadow-xs transition-all flex flex-col justify-between hover:shadow-md ${
                isCompleted ? 'border-emerald-200' : 'border-gray-200/80 hover:border-[#DCD2FF]'
              }`}
            >
              <div>
                {/* Header badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${levelBadgeConfig.bg} ${levelBadgeConfig.text}`}
                    >
                      {levelBadgeConfig.label}
                    </span>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full font-medium">
                      {lesson.category}
                    </span>
                  </div>

                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      เรียนจบแล้ว
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                      +{lesson.xpReward} XP
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#29323D]">
                  {lesson.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#6C5CE7]">
                  {lesson.subtitle}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {lesson.description}
                </p>

                {/* Details pill */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-500">
                  <span>📖 {lesson.slides.length} เนื้อหา</span>
                  <span>❓ {lesson.quickQuiz.length} แบบฝึกหัด</span>
                </div>
              </div>

              <div className="mt-6 pt-3">
                <button
                  onClick={() => setActiveLesson(lesson)}
                  className={`w-full py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isCompleted
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      : 'bg-[#6C5CE7] hover:bg-[#5848C2] text-white shadow-md active:scale-98'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{isCompleted ? 'ทบทวนบทเรียนนี้' : 'เริ่มเรียนบทนี้'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
