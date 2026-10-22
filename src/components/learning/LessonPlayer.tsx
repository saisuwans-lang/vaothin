import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Volume2,
  Award,
  RotateCcw,
} from 'lucide-react';
import { Lesson, QuizQuestion } from '../../types';
import { StorageService } from '../../services/storageService';
import { MascotNongVao } from '../common/MascotNongVao';

interface LessonPlayerProps {
  lesson: Lesson;
  onClose: () => void;
  onLessonCompleted: (lessonId: string) => void;
}

export const LessonPlayer: React.FC<LessonPlayerProps> = ({
  lesson,
  onClose,
  onLessonCompleted,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = lesson.slides.length + lesson.quickQuiz.length;
  const isQuizStep = currentSlideIndex >= lesson.slides.length;
  const currentQuizIndex = currentSlideIndex - lesson.slides.length;
  const currentQuiz = isQuizStep ? lesson.quickQuiz[currentQuizIndex] : null;
  const currentSlide = !isQuizStep ? lesson.slides[currentSlideIndex] : null;

  const progressPercent = Math.round(((currentSlideIndex + 1) / totalSteps) * 100);

  const handleNext = () => {
    if (currentSlideIndex < totalSteps - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    } else {
      finishLesson();
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleSelectQuizOption = (optionIndex: number) => {
    if (!currentQuiz) return;
    setQuizAnswers((prev) => ({ ...prev, [currentQuiz.id]: optionIndex }));
    setQuizSubmitted((prev) => ({ ...prev, [currentQuiz.id]: true }));
  };

  const finishLesson = () => {
    setIsCompleted(true);
    StorageService.completeLesson(lesson.id, lesson.xpReward);
    onLessonCompleted(lesson.id);

    // Fire cute confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B8EBD0', '#DCD2FF', '#FFD6C2', '#FFF0A8'],
      });
    } catch {
      // safe fallback if canvas not available
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-16">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#29323D] hover:text-[#6C5CE7] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ออกจากบทเรียน</span>
        </button>

        <div className="text-xs font-semibold text-gray-500">
          ขั้นตอนที่ {currentSlideIndex + 1} / {totalSteps}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#B8EBD0] via-[#DCD2FF] to-[#6C5CE7] rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {isCompleted ? (
        /* Completion Celebration Screen */
        <div className="bg-white rounded-3xl border border-[#DCD2FF] p-8 sm:p-12 text-center shadow-lg space-y-4">
          <MascotNongVao
            emotion="cheering"
            size="lg"
            speechBubbleText="เก่งขนาดเลยจ้า! จบบทเรียนแล้วเด้อ!"
          />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29323D]">
            ยินดีด้วย! คุณเรียนจบบทเรียนนี้แล้ว
          </h2>
          <p className="text-sm text-[#6B7280] max-w-md mx-auto">
            คุณได้เรียนรู้ {lesson.title} อย่างสมบูรณ์และได้รับรางวัล
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FFF0A8] text-[#8C6D00] font-bold text-sm shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>+{lesson.xpReward} XP เพิ่มในโปรไฟล์ของคุณ</span>
          </div>

          <div className="pt-6 flex justify-center gap-3">
            <button
              onClick={() => {
                setIsCompleted(false);
                setCurrentSlideIndex(0);
                setQuizSubmitted({});
              }}
              className="px-5 py-2.5 rounded-2xl border border-gray-200 hover:bg-gray-50 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              ทบทวนบทเรียนอีกครั้ง
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-2xl bg-[#29323D] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer"
            >
              กลับสู่ห้องเรียน
            </button>
          </div>
        </div>
      ) : (
        /* Active Step Content */
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-xs space-y-6">
          {!isQuizStep && currentSlide ? (
            /* Concept or Vocab Slide */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#DCD2FF] text-[#6C5CE7]">
                  {currentSlide.type === 'concept' ? 'แนวคิดบทเรียน' : 'คำศัพท์สำคัญ'}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {lesson.title}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29323D]">
                {currentSlide.title}
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {currentSlide.content}
              </p>

              {/* Vocab details card if applicable */}
              {currentSlide.dialectWord && (
                <div className="p-5 rounded-2xl bg-[#FFFDF8] border-2 border-[#DCD2FF]/60 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#29323D]">
                      {currentSlide.dialectWord}
                    </span>
                    {currentSlide.pronunciation && (
                      <span className="text-xs text-[#6B7280]">
                        ({currentSlide.pronunciation})
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-bold text-[#6C5CE7]">
                    แปลภาษากลาง: {currentSlide.standardWord}
                  </div>
                  {currentSlide.exampleSentence && (
                    <div className="pt-2 border-t border-gray-100 text-xs space-y-1">
                      <div className="font-semibold text-gray-800">
                        ตัวอย่าง: "{currentSlide.exampleSentence}"
                      </div>
                      <div className="text-gray-500">
                        แปลว่า: {currentSlide.exampleTranslation}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : currentQuiz ? (
            /* Quick Quiz Step */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFF0A8] text-[#8C6D00]">
                  แบบฝึกหัดท้ายบท
                </span>
                <span className="text-xs text-gray-400">
                  คำถามที่ {currentQuizIndex + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#29323D]">
                {currentQuiz.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQuiz.options.map((option, optIdx) => {
                  const isSubmitted = quizSubmitted[currentQuiz.id];
                  const isSelected = quizAnswers[currentQuiz.id] === optIdx;
                  const isCorrect = optIdx === currentQuiz.correctIndex;

                  let btnStyle =
                    'border-gray-200 bg-white hover:border-[#DCD2FF] text-[#29323D]';

                  if (isSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'border-rose-400 bg-rose-50 text-rose-800 line-through';
                    }
                  } else if (isSelected) {
                    btnStyle = 'border-[#29323D] bg-gray-50 font-bold';
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isSubmitted}
                      onClick={() => handleSelectQuizOption(optIdx)}
                      className={`w-full p-4 rounded-2xl border text-left text-sm transition-all flex items-center justify-between cursor-pointer disabled:cursor-default ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {isSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Quiz Feedback */}
              {quizSubmitted[currentQuiz.id] && (
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    quizAnswers[currentQuiz.id] === currentQuiz.correctIndex
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                      : 'bg-amber-50 border border-amber-200 text-amber-800'
                  }`}
                >
                  <div className="font-bold mb-1">
                    {quizAnswers[currentQuiz.id] === currentQuiz.correctIndex
                      ? 'ถูกต้องแล้วจ้า! 🎉'
                      : 'เกือบถูกแล้ว! มาดูคำอธิบายกันนะ 💡'}
                  </div>
                  <div>{currentQuiz.explanation}</div>
                </div>
              )}
            </div>
          ) : null}

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-500 hover:text-gray-800 disabled:opacity-30 cursor-pointer disabled:cursor-default"
            >
              ย้อนกลับ
            </button>

            <button
              onClick={handleNext}
              disabled={Boolean(isQuizStep && currentQuiz && !quizSubmitted[currentQuiz.id])}
              className="px-6 py-2.5 rounded-2xl bg-[#6C5CE7] hover:bg-[#5848C2] disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer disabled:cursor-default flex items-center gap-1.5"
            >
              <span>
                {currentSlideIndex === totalSteps - 1 ? 'จบบทเรียน' : 'ถัดไป'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
