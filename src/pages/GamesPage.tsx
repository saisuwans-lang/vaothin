import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Gamepad2,
  Trophy,
  RotateCcw,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Check,
  Flame,
} from 'lucide-react';
import { DICTIONARY_DATA, REGION_CONFIG } from '../data/dictionaryData';
import { QUIZ_BANK } from '../data/lessonsData';
import { Region, UserProgress } from '../types';
import { StorageService } from '../services/storageService';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface GamesPageProps {
  userProgress: UserProgress;
  onNavigate: (tab: string) => void;
  onOpenAIChat: (prompt?: string) => void;
}

type GameMode = 'quiz_meaning' | 'pair_matching' | 'guess_region';

export const GamesPage: React.FC<GamesPageProps> = ({
  userProgress,
  onNavigate,
  onOpenAIChat,
}) => {
  const [activeGame, setActiveGame] = useState<GameMode>('quiz_meaning');

  // ================= GAME 1: ทายความหมาย (Meaning Quiz) =================
  const [quizQuestions, setQuizQuestions] = useState(() =>
    [...QUIZ_BANK].sort(() => 0.5 - Math.random()).slice(0, 5)
  );
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // ================= GAME 2: จับคู่คำศัพท์ (Pair Matching) =================
  interface MatchingCard {
    id: string;
    text: string;
    pairKey: string;
    type: 'dialect' | 'standard';
    region: Region;
  }

  const [matchingCards, setMatchingCards] = useState<MatchingCard[]>(() => initMatchingCards());
  const [selectedCards, setSelectedCards] = useState<MatchingCard[]>([]);
  const [matchedPairKeys, setMatchedPairKeys] = useState<string[]>([]);
  const [matchMoves, setMatchMoves] = useState(0);
  const [isMatchFinished, setIsMatchFinished] = useState(false);

  function initMatchingCards(): MatchingCard[] {
    const verified = [...DICTIONARY_DATA]
      .filter((w) => w.verificationStatus === 'verified')
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
    const cards: MatchingCard[] = [];
    verified.forEach((w) => {
      cards.push({
        id: `d_${w.id}`,
        text: w.dialectWord,
        pairKey: w.id,
        type: 'dialect',
        region: w.region,
      });
      cards.push({
        id: `s_${w.id}`,
        text: w.standardWord,
        pairKey: w.id,
        type: 'standard',
        region: w.region,
      });
    });
    // Deterministic or clean shuffle
    return cards.sort(() => 0.5 - Math.random());
  }

  // ================= GAME 3: คำนี้ภาคใด? (Guess Region) =================
  const regionQuestions = useMemo(() => {
    return DICTIONARY_DATA.filter(
      (w) => w.verificationStatus === 'verified' && w.dialectWord !== w.standardWord
    ).slice(0, 5);
  }, []);

  const [regionIndex, setRegionIndex] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [isRegionSubmitted, setIsRegionSubmitted] = useState(false);
  const [regionScore, setRegionScore] = useState(0);
  const [isRegionFinished, setIsRegionFinished] = useState(false);

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B8EBD0', '#DCD2FF', '#FFD6C2', '#FFF0A8'],
      });
    } catch {}
  };

  // ----- Quiz Handlers -----
  const handleAnswerQuiz = (optIndex: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(optIndex);
    setIsAnswerSubmitted(true);
    const currentQ = quizQuestions[currentQuizIndex];
    if (optIndex === currentQ.correctIndex) {
      setScore((s) => s + 1);
      StorageService.addXP(10);
    }
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizFinished(true);
      StorageService.addXP(15);
      triggerConfetti();
    }
  };

  const handleRestartQuiz = () => {
    setQuizQuestions([...QUIZ_BANK].sort(() => 0.5 - Math.random()).slice(0, 5));
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizFinished(false);
  };

  // ----- Matching Handlers -----
  const handleCardClick = (card: MatchingCard) => {
    if (matchedPairKeys.includes(card.pairKey)) return;
    if (selectedCards.some((c) => c.id === card.id)) return;

    const newSelected = [...selectedCards, card];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setMatchMoves((m) => m + 1);
      const [first, second] = newSelected;
      if (first.pairKey === second.pairKey && first.type !== second.type) {
        // Matched!
        setMatchedPairKeys((prev) => {
          const updated = [...prev, first.pairKey];
          if (updated.length === matchingCards.length / 2) {
            setIsMatchFinished(true);
            StorageService.addXP(25);
            triggerConfetti();
          }
          return updated;
        });
        setSelectedCards([]);
      } else {
        // Mismatch, reset after short pause
        setTimeout(() => {
          setSelectedCards([]);
        }, 800);
      }
    }
  };

  const handleRestartMatching = () => {
    setMatchingCards(initMatchingCards());
    setSelectedCards([]);
    setMatchedPairKeys([]);
    setMatchMoves(0);
    setIsMatchFinished(false);
  };

  // ----- Region Guess Handlers -----
  const handleSelectRegion = (reg: Region) => {
    if (isRegionSubmitted) return;
    setSelectedRegion(reg);
    setIsRegionSubmitted(true);
    const currentQ = regionQuestions[regionIndex];
    if (reg === currentQ.region) {
      setRegionScore((s) => s + 1);
      StorageService.addXP(10);
    }
  };

  const handleNextRegion = () => {
    if (regionIndex < regionQuestions.length - 1) {
      setRegionIndex((i) => i + 1);
      setSelectedRegion(null);
      setIsRegionSubmitted(false);
    } else {
      setIsRegionFinished(true);
      StorageService.addXP(15);
      triggerConfetti();
    }
  };

  const handleRestartRegion = () => {
    setRegionIndex(0);
    setSelectedRegion(null);
    setIsRegionSubmitted(false);
    setRegionScore(0);
    setIsRegionFinished(false);
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#FFF0A8]/40 via-[#FFFDF8] to-[#DCD2FF]/40 rounded-3xl border border-[#FFF0A8] p-6 sm:p-10 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFF0A8] text-[#8C6D00]">
                เกมคำศัพท์เว้าถิ่น
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-[#B8EBD0] px-2.5 py-0.5 rounded-full">
                ตอบถูก +10 XP
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#29323D]">
              ลานประลองปัญญา 4 ภูมิภาค
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#6B7280] max-w-xl leading-relaxed">
              ฝึกทักษะความจำภาษาถิ่นด้วยเกมที่สนุกสนาน ไม่กดดัน และได้ความรู้จริงจากคลังข้อมูลแท้
            </p>
          </div>

          <MascotNongVao
            emotion="cheering"
            size="md"
            speechBubbleText="ตอบถูกบ่ยากดอก มาลองเล่นกันเลย!"
          />
        </div>
      </div>

      {/* Game Mode Tabs */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveGame('quiz_meaning')}
          className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeGame === 'quiz_meaning'
              ? 'bg-[#29323D] text-white shadow-md'
              : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
          }`}
        >
          <span>🎯 เกมที่ 1: ทายความหมาย</span>
        </button>

        <button
          onClick={() => setActiveGame('pair_matching')}
          className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeGame === 'pair_matching'
              ? 'bg-[#29323D] text-white shadow-md'
              : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
          }`}
        >
          <span>🃏 เกมที่ 2: จับคู่คำศัพท์</span>
        </button>

        <button
          onClick={() => setActiveGame('guess_region')}
          className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeGame === 'guess_region'
              ? 'bg-[#29323D] text-white shadow-md'
              : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
          }`}
        >
          <span>🧭 เกมที่ 3: คำนี้ภาคใด?</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* GAME 1: ทายความหมาย (Meaning Quiz) */}
      {/* ============================================================== */}
      {activeGame === 'quiz_meaning' && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-xs space-y-6">
          {isQuizFinished ? (
            <div className="text-center py-6 space-y-4">
              <Trophy className="w-16 h-16 text-amber-500 mx-auto animate-bounce" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29323D]">
                ผลคะแนนของคุณ: {score} / {quizQuestions.length}
              </h2>
              <p className="text-sm text-gray-600">
                {score === quizQuestions.length
                  ? 'ยอดเยี่ยมที่สุด! คุณมีความรอบรู้ภาษาถิ่นระดับเซียน!'
                  : score >= 3
                  ? 'เก่งมากจ้า! มีความรู้ความจำที่ยอดเยี่ยมทีเดียว'
                  : 'เริ่มต้นได้ดีแล้วจ้า ลองทบทวนในพจนานุกรมแล้วเล่นอีกรอบนะ!'}
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FFF0A8] text-[#8C6D00] font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>รับ +{score * 10 + 15} XP แล้วในโปรไฟล์</span>
              </div>

              <div className="pt-6 flex justify-center gap-3">
                <button
                  onClick={handleRestartQuiz}
                  className="px-5 py-2.5 rounded-2xl border border-gray-200 hover:bg-gray-100 font-semibold text-xs sm:text-sm cursor-pointer flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  เล่นอีกครั้ง
                </button>
                <button
                  onClick={() => onNavigate('dictionary')}
                  className="px-6 py-2.5 rounded-2xl bg-[#29323D] hover:bg-black text-white font-bold text-xs sm:text-sm cursor-pointer"
                >
                  กลับไปค้นหาคำศัพท์
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Quiz progress */}
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
                <span>คำถามที่ {currentQuizIndex + 1} / {quizQuestions.length}</span>
                <span className="text-amber-600">คะแนนปัจจุบัน: {score}</span>
              </div>

              {/* Progress line */}
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6C5CE7] rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Current Question */}
              <div className="pt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#29323D] leading-snug">
                  {quizQuestions[currentQuizIndex].question}
                </h3>
              </div>

              {/* Options list */}
              <div className="space-y-2.5">
                {quizQuestions[currentQuizIndex].options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === quizQuestions[currentQuizIndex].correctIndex;

                  let style =
                    'border-gray-200 bg-white hover:border-[#DCD2FF] text-[#29323D]';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      style = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                    } else if (isSelected) {
                      style = 'border-rose-400 bg-rose-50 text-rose-800 line-through';
                    }
                  } else if (isSelected) {
                    style = 'border-[#29323D] bg-gray-50 font-bold';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleAnswerQuiz(idx)}
                      className={`w-full p-4 rounded-2xl border text-left text-sm transition-all flex items-center justify-between cursor-pointer disabled:cursor-default ${style}`}
                    >
                      <span>{option}</span>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explanation */}
              {isAnswerSubmitted && (
                <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-1">
                  <div className="font-bold text-[#29323D]">
                    {selectedOption === quizQuestions[currentQuizIndex].correctIndex
                      ? 'ยอดเยี่ยมมาก! ถูกต้องแล้วจ้า 🎉'
                      : 'ยังไม่ถูกต้องนะจ๊ะ 💡'}
                  </div>
                  <div>{quizQuestions[currentQuizIndex].explanation}</div>
                </div>
              )}

              {/* Controls */}
              {isAnswerSubmitted && (
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleNextQuiz}
                    className="px-6 py-2.5 rounded-2xl bg-[#29323D] hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>
                      {currentQuizIndex === quizQuestions.length - 1 ? 'ดูผลคะแนน' : 'ข้อถัดไป'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* GAME 2: จับคู่คำศัพท์ (Pair Matching) */}
      {/* ============================================================== */}
      {activeGame === 'pair_matching' && (
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#29323D]">
                จับคู่คำภาษาถิ่นกับความหมายภาษากลาง
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                แตะเลือกการ์ด 2 ใบที่มีความหมายตรงกันเพื่อจับคู่
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="font-semibold text-gray-500">
                จำนวนครั้งที่เปิด: {matchMoves}
              </span>
              <button
                onClick={handleRestartMatching}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                title="เริ่มใหม่"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {isMatchFinished ? (
            <div className="text-center py-10 space-y-4">
              <Trophy className="w-16 h-16 text-amber-500 mx-auto" />
              <h2 className="text-2xl font-bold text-[#29323D]">
                ยอดเยี่ยม! คุณจับคู่ครบทุกคู่แล้วใน {matchMoves} ครั้ง!
              </h2>
              <p className="text-xs text-gray-500">รับ +25 XP สำหรับชัยชนะครั้งนี้</p>
              <button
                onClick={handleRestartMatching}
                className="px-6 py-2.5 rounded-2xl bg-[#29323D] text-white font-bold text-xs sm:text-sm cursor-pointer shadow-md"
              >
                เล่นอีกรอบ
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {matchingCards.map((card) => {
                const isMatched = matchedPairKeys.includes(card.pairKey);
                const isSelected = selectedCards.some((c) => c.id === card.id);
                const reg = REGION_CONFIG[card.region];

                let cardStyle =
                  'bg-[#FFFDF8] border-gray-200 hover:border-[#DCD2FF] text-[#29323D]';

                if (isMatched) {
                  cardStyle =
                    'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-60 pointer-events-none';
                } else if (isSelected) {
                  cardStyle = 'bg-[#DCD2FF] border-[#6C5CE7] text-[#29323D] shadow-md scale-102';
                }

                return (
                  <button
                    key={card.id}
                    disabled={isMatched}
                    onClick={() => handleCardClick(card)}
                    className={`h-24 p-3 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center cursor-pointer select-none ${cardStyle}`}
                  >
                    <span className="text-xs text-gray-400 font-semibold mb-1">
                      {card.type === 'dialect' ? `[ถิ่น${reg.nameThai.replace('ภาค', '')}]` : '[ภาษากลาง]'}
                    </span>
                    <span className="font-extrabold text-base sm:text-lg tracking-tight">
                      {card.text}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* GAME 3: คำนี้ภาคใด? (Guess Region) */}
      {/* ============================================================== */}
      {activeGame === 'guess_region' && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-xs space-y-6">
          {isRegionFinished ? (
            <div className="text-center py-6 space-y-4">
              <Trophy className="w-16 h-16 text-amber-500 mx-auto" />
              <h2 className="text-2xl font-bold text-[#29323D]">
                ผลคะแนน: {regionScore} / {regionQuestions.length}
              </h2>
              <p className="text-sm text-gray-600">
                คุณจำแนกสำเนียงภาษาถิ่นได้แม่นยำมาก!
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleRestartRegion}
                  className="px-5 py-2.5 rounded-2xl border border-gray-200 font-semibold text-xs sm:text-sm cursor-pointer"
                >
                  เล่นใหม่อีกครั้ง
                </button>
                <button
                  onClick={() => onNavigate('comparison')}
                  className="px-6 py-2.5 rounded-2xl bg-[#29323D] text-white font-bold text-xs sm:text-sm cursor-pointer"
                >
                  ไปดูหน้าเทียบ 4 ภาค
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
                <span>ข้อที่ {regionIndex + 1} / {regionQuestions.length}</span>
                <span className="text-amber-600">คะแนน: {regionScore}</span>
              </div>

              {/* Big Word Display */}
              <div className="py-6 text-center space-y-2 bg-[#FFFDF8] rounded-3xl border border-gray-100">
                <div className="text-xs text-gray-400 font-semibold">คำภาษาถิ่นนี้มาจากภาคใด?</div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#29323D]">
                  "{regionQuestions[regionIndex].dialectWord}"
                </div>
                <div className="text-xs text-gray-500">
                  แปลว่า: {regionQuestions[regionIndex].meaning}
                </div>
              </div>

              {/* 4 Region Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {(['north', 'northeast', 'central', 'south'] as Region[]).map((rKey) => {
                  const reg = REGION_CONFIG[rKey];
                  const isCorrect = rKey === regionQuestions[regionIndex].region;
                  const isChosen = selectedRegion === rKey;

                  let style = 'bg-white border-gray-200 hover:border-[#DCD2FF] text-[#29323D]';
                  if (isRegionSubmitted) {
                    if (isCorrect) {
                      style = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold';
                    } else if (isChosen) {
                      style = 'bg-rose-50 border-rose-400 text-rose-800 line-through';
                    }
                  }

                  return (
                    <button
                      key={rKey}
                      disabled={isRegionSubmitted}
                      onClick={() => handleSelectRegion(rKey)}
                      className={`p-4 rounded-2xl border-2 text-center transition-all cursor-pointer font-bold text-sm ${style}`}
                    >
                      {reg.nameThai}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and next button */}
              {isRegionSubmitted && (
                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-gray-600 font-medium">
                    {selectedRegion === regionQuestions[regionIndex].region
                      ? 'เก่งมากจ้า! ทายถูกแล้ว'
                      : `คำนี้เป็นภาษา${REGION_CONFIG[regionQuestions[regionIndex].region].nameThai} จ้า`}
                  </div>
                  <button
                    onClick={handleNextRegion}
                    className="px-5 py-2.5 rounded-2xl bg-[#29323D] text-white font-bold text-xs sm:text-sm cursor-pointer"
                  >
                    {regionIndex === regionQuestions.length - 1 ? 'ดูผลลัพธ์' : 'ข้อถัดไป'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
