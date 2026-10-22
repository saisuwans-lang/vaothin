import React, { useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Copy,
  Check,
  Volume2,
  VolumeX,
  AlertTriangle,
  FileEdit,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { DictionaryEntry, Region } from '../types';
import { DICTIONARY_DATA, REGION_CONFIG } from '../data/dictionaryData';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface DictionaryDetailPageProps {
  wordId: string;
  onBack: () => void;
  onSelectWord: (wordId: string) => void;
  onToggleFavorite: (wordId: string) => void;
  isWordSaved: (wordId: string) => boolean;
  onOpenAIChat: (prompt?: string) => void;
}

export const DictionaryDetailPage: React.FC<DictionaryDetailPageProps> = ({
  wordId,
  onBack,
  onSelectWord,
  onToggleFavorite,
  isWordSaved,
  onOpenAIChat,
}) => {
  const word = DICTIONARY_DATA.find((w) => w.id === wordId);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const [reportSent, setReportSent] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!word) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center max-w-md mx-auto shadow-xs border border-gray-200">
        <MascotNongVao emotion="thinking" size="md" />
        <h3 className="mt-4 text-lg font-bold text-[#29323D]">ไม่พบข้อมูลคำศัพท์นี้</h3>
        <p className="text-xs text-gray-500 mt-1">คำศัพท์อาจถูกย้ายหรือไม่มีอยู่ในฐานข้อมูล</p>
        <button
          onClick={onBack}
          className="mt-5 px-5 py-2.5 rounded-xl bg-[#29323D] text-white text-xs font-bold cursor-pointer"
        >
          กลับไปที่พจนานุกรม
        </button>
      </div>
    );
  }

  const isSaved = isWordSaved(word.id);
  const regConfig = REGION_CONFIG[word.region];

  const handleCopy = async () => {
    const textToCopy = `${word.dialectWord} (${regConfig.nameThai}) - แปลว่า: ${word.meaning}`;
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const shareData = {
      title: `เว้าถิ่น: คำว่า "${word.dialectWord}"`,
      text: `เรียนรู้คำว่า "${word.dialectWord}" (${regConfig.nameThai}) แปลว่า "${word.meaning}" บนเว็บแอปเว้าถิ่น`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to copy link
      }
    }
    await navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const handlePlayPronunciation = () => {
    if (!('speechSynthesis' in window)) return;
    setIsPlayingAudio(true);
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word.dialectWord);
    utterance.lang = 'th-TH';
    utterance.rate = 0.85;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleSendReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportReason.trim()) return;
    setReportSent(true);
    setTimeout(() => {
      setShowReportModal(false);
      setReportSent(false);
      setReportReason('');
    }, 1800);
  };

  // Find related words
  const relatedWords = DICTIONARY_DATA.filter((w) =>
    word.relatedWordIds?.includes(w.id)
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Navigation Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#29323D] hover:text-[#6C5CE7] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ย้อนกลับไปค้นหา</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Favorite Button */}
          <button
            onClick={() => onToggleFavorite(word.id)}
            className={`p-2.5 rounded-2xl border transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer ${
              isSaved
                ? 'bg-[#FFD6C2] text-[#E15B28] border-[#FFD6C2] shadow-xs'
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">
              {isSaved ? 'บันทึกแล้ว' : 'บันทึกรายการโปรด'}
            </span>
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-2.5 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            title="คัดลอกคำศัพท์"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span className="hidden sm:inline">{copied ? 'คัดลอกแล้ว' : 'คัดลอก'}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-2.5 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            title="แชร์ลิงก์คำศัพท์"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">{shared ? 'คัดลอกลิงก์แล้ว' : 'แชร์'}</span>
          </button>
        </div>
      </div>

      {/* Main Word Hero Header Card */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="space-y-3">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${regConfig.badgeBg} ${regConfig.textColor}`}
              >
                {regConfig.nameThai} ({regConfig.english})
              </span>
              {word.province && (
                <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                  จังหวัด {word.province}
                  {word.district && ` (อ.${word.district})`}
                </span>
              )}
              <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                หมวด: {word.category}
              </span>
              {word.verificationStatus === 'verified' ? (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  ยืนยันแล้ว
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                  รอการตรวจทานวิชาการ
                </span>
              )}
            </div>

            {/* Dialect Word */}
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#29323D] tracking-tight">
                {word.dialectWord}
              </h1>

              {/* Pronunciation Audio Button */}
              <button
                onClick={handlePlayPronunciation}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl border transition-all cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-[#B8EBD0] text-[#1E824C] border-[#B8EBD0] animate-pulse'
                    : 'bg-[#FFFDF8] border-gray-200 hover:border-[#DCD2FF] text-[#29323D]'
                }`}
                title="ฟังเสียงอ่านคำศัพท์ (ระบบจำลองเสียงอ่านมาตรฐาน)"
              >
                <Volume2 className="w-4 h-4 text-[#6C5CE7]" />
                <span className="text-xs font-semibold">
                  {isPlayingAudio ? 'กำลังเล่นเสียง...' : 'ฟังเสียงอ่าน'}
                </span>
              </button>
            </div>

            {/* Pronunciation note */}
            {word.pronunciation && (
              <div className="text-sm sm:text-base text-[#6B7280] font-sans">
                คำอ่าน: <span className="font-semibold text-[#29323D]">{word.pronunciation}</span>
              </div>
            )}
          </div>

          {/* Quick Mascot Advice */}
          <div className="shrink-0 hidden md:block">
            <MascotNongVao
              emotion="cheering"
              size="md"
              speechBubbleText={`คำนี้คน${regConfig.nameThai}ใช้กันบ่อยเลยจ้า!`}
              onClick={() => onOpenAIChat(`ช่วยยกตัวอย่างบทสนทนาที่มีคำว่า "${word.dialectWord}" ให้หน่อย`)}
            />
          </div>
        </div>

        {/* Meaning block */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
            ความหมายในภาษาไทยมาตรฐาน
          </div>
          <div className="text-xl sm:text-2xl font-bold text-[#6C5CE7]">
            {word.standardWord}
          </div>
          <p className="mt-2 text-base text-[#29323D] leading-relaxed">
            {word.meaning}
          </p>
        </div>

        {/* Cultural Note if available */}
        {word.culturalNote && (
          <div className="mt-6 p-4 rounded-2xl bg-[#FFFDF8] border border-[#DCD2FF]/80 flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div className="text-xs sm:text-sm text-[#29323D] leading-relaxed">
              <span className="font-bold text-[#6C5CE7]">เกร็ดความรู้ทางวัฒนธรรม: </span>
              {word.culturalNote}
            </div>
          </div>
        )}
      </div>

      {/* Example Sentences Card */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="text-lg font-bold text-[#29323D] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#6C5CE7]" />
          ตัวอย่างประโยคและบริบทการใช้
        </h3>

        {word.examples.length > 0 ? (
          <div className="space-y-3">
            {word.examples.map((ex, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FBFBFE] border border-gray-100 space-y-1.5"
              >
                <div className="text-xs font-bold text-gray-400">ประโยคที่ {idx + 1}:</div>
                <div className="text-base sm:text-lg font-bold text-[#29323D]">
                  "{ex.dialectSentence}"
                </div>
                <div className="text-xs sm:text-sm text-[#6B7280]">
                  แปลภาษากลาง: <span className="font-medium text-gray-800">{ex.standardTranslation}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-500 italic">
            ยังไม่มีตัวอย่างประโยคที่ตรวจสอบแล้วสำหรับคำนี้
          </p>
        )}
      </div>

      {/* Related words / Cross region variants */}
      {relatedWords.length > 0 && (
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-[#29323D] flex items-center gap-2">
            <span>คำที่เกี่ยวข้องหรือเทียบเคียง</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedWords.map((rel) => {
              const relReg = REGION_CONFIG[rel.region];
              return (
                <div
                  key={rel.id}
                  onClick={() => onSelectWord(rel.id)}
                  className="p-3.5 rounded-2xl bg-[#FFFDF8] border border-gray-200/80 hover:border-[#DCD2FF] transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${relReg.badgeBg} ${relReg.textColor}`}
                      >
                        {relReg.nameThai}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        = {rel.standardWord}
                      </span>
                    </div>
                    <div className="text-base font-bold text-[#29323D]">
                      {rel.dialectWord}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                      {rel.meaning}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sources & Action Footer */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-gray-500">
        <div>
          <div className="font-bold text-gray-700 mb-1">แหล่งข้อมูลอ้างอิง:</div>
          {word.sources && word.sources.length > 0 ? (
            <ul className="space-y-0.5">
              {word.sources.map((src, i) => (
                <li key={i} className="list-disc list-inside">
                  {src.url ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6C5CE7] hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      {src.title}
                      <ExternalLink className="w-3 h-3 inline-block" />
                    </a>
                  ) : (
                    src.title
                  )}
                  {src.note && ` (${src.note})`}
                </li>
              ))}
            </ul>
          ) : (
            <div>ข้อมูลภาษาถิ่นจากการรวบรวมของชุมชนเว้าถิ่น</div>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowReportModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:text-rose-600 hover:bg-rose-50 border border-gray-200 transition-colors cursor-pointer"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            รายงานข้อมูลผิด
          </button>
          <button
            onClick={() =>
              onOpenAIChat(
                `ช่วยอธิบายความลึกซึ้งและตัวอย่างการใช้คำว่า "${word.dialectWord}" ในภาษา${regConfig.nameThai} ให้ละเอียดหน่อย`
              )
            }
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#DCD2FF] hover:bg-[#CFBEFF] text-[#29323D] transition-colors cursor-pointer shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#6C5CE7]" />
            ถามน้องเว้าเกี่ยวกับคำนี้
          </button>
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-xl border border-gray-200">
            <h3 className="text-lg font-bold text-[#29323D] mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              รายงานข้อมูลคำศัพท์ไม่ถูกต้อง
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              ช่วยเราปรับปรุงคลังคำศัพท์ให้ถูกต้องและแม่นยำยิ่งขึ้น
            </p>

            {reportSent ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <div className="font-bold text-[#29323D]">ขอบคุณสำหรับข้อเสนอแนะ!</div>
                <div className="text-xs text-gray-500">
                  ทีมงานจะนำข้อเสนอไปตรวจสอบกับเอกสารอ้างอิงต่อไป
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendReport} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    ข้อผิดพลาดที่พบ หรือข้อเสนอแนะ:
                  </label>
                  <textarea
                    rows={3}
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    required
                    placeholder="เช่น ความหมายในอำเภอของฉันแปลว่า..., การสะกดที่ถูกต้องควรเป็น..."
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowReportModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 cursor-pointer"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-[#29323D] text-white hover:bg-black cursor-pointer"
                  >
                    ส่งรายงาน
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
