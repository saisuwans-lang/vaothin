import React, { useState } from 'react';
import {
  Scale,
  Sparkles,
  ArrowRight,
  Bookmark,
  PlusCircle,
  HelpCircle,
  Search,
} from 'lucide-react';
import {
  CROSS_REGION_COMPARISONS,
  CrossRegionComparison,
  DICTIONARY_DATA,
  REGION_CONFIG,
} from '../data/dictionaryData';
import { Region } from '../types';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface ComparisonPageProps {
  onSelectWord: (wordId: string) => void;
  onNavigate: (tab: string, state?: any) => void;
  onToggleFavorite: (wordId: string) => void;
  isWordSaved: (wordId: string) => boolean;
  onOpenAIChat: (prompt?: string) => void;
}

export const ComparisonPage: React.FC<ComparisonPageProps> = ({
  onSelectWord,
  onNavigate,
  onToggleFavorite,
  isWordSaved,
  onOpenAIChat,
}) => {
  const [selectedStandard, setSelectedStandard] = useState<string>('อร่อย');
  const [searchWord, setSearchWord] = useState('');

  // Find the active comparison set
  const activeComparison =
    CROSS_REGION_COMPARISONS.find(
      (c) => c.standardWord === selectedStandard
    ) || CROSS_REGION_COMPARISONS[0];

  // Also allow searching custom standard words from dictionary data
  const customDictionaryMatches = DICTIONARY_DATA.filter((w) =>
    w.standardWord.toLowerCase().includes(searchWord.trim().toLowerCase())
  );

  return (
    <div className="space-y-8 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#DCD2FF]/40 via-[#FFFDF8] to-[#B8EBD0]/40 rounded-3xl border border-[#DCD2FF]/60 p-6 sm:p-10 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFF0A8] text-[#8C6D00]">
                เทียบสำเนียง 4 ภูมิภาค
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#29323D]">
              คำเดียวกัน เว้าจั่งได๋?
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#6B7280] max-w-xl leading-relaxed">
              เปรียบเทียบคำภาษาไทยมาตรฐานว่าในแต่ละภูมิภาค
              (เหนือ อีสาน กลาง ใต้) นิยมใช้คำว่าอะไร มีสำเนียงและตัวอย่างประโยคอย่างไร
            </p>
          </div>

          <MascotNongVao
            emotion="happy"
            size="md"
            speechBubbleText="ม่วนขนาด! คำเดียวกันแต่แต่ละภาคเพราะไม่เหมือนกันจ้า"
            onClick={() =>
              onOpenAIChat(
                `ช่วยเปรียบเทียบความแตกต่างระหว่างคำว่า "${activeComparison.standardWord}" ในทั้ง 4 ภาคให้ฟังหน่อย`
              )
            }
          />
        </div>

        {/* Preset Standard Word Selector Buttons */}
        <div className="mt-6 pt-6 border-t border-gray-200/60">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5">
            เลือกคำเพื่อเปรียบเทียบ:
          </div>
          <div className="flex flex-wrap gap-2">
            {CROSS_REGION_COMPARISONS.map((item) => {
              const isSelected = item.standardWord === activeComparison.standardWord;
              return (
                <button
                  key={item.standardWord}
                  onClick={() => setSelectedStandard(item.standardWord)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#29323D] text-white shadow-md scale-105'
                      : 'bg-white hover:bg-gray-100 text-[#29323D] border border-gray-200'
                  }`}
                >
                  {item.standardWord}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Comparison Grid (4 Cards: North, Isan, Central, South) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#29323D]">
              ผลการเปรียบเทียบคำว่า "{activeComparison.standardWord}"
            </h2>
            <p className="text-xs text-[#6B7280]">
              ความหมายกลาง: {activeComparison.meaning}
            </p>
          </div>

          <button
            onClick={() =>
              onOpenAIChat(
                `ช่วยอธิบายความแตกต่างและบริบทของคำว่า "${activeComparison.standardWord}" ในทั้ง 4 ภาค พร้อมแต่งบทสนทนาตัวอย่างให้หน่อย`
              )
            }
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#DCD2FF] hover:bg-[#CFBEFF] text-[#29323D] text-xs font-bold shadow-xs transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#6C5CE7]" />
            <span>ถามน้องเว้าเชิงลึก</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(['north', 'northeast', 'central', 'south'] as Region[]).map((regionKey) => {
            const regConfig = REGION_CONFIG[regionKey];
            const data = activeComparison.regions[regionKey];

            // Try to find full entry in dictionary data to get word id
            const matchedEntry = DICTIONARY_DATA.find(
              (w) =>
                w.region === regionKey &&
                (w.dialectWord === data?.word || w.standardWord === activeComparison.standardWord)
            );

            return (
              <div
                key={regionKey}
                className={`rounded-3xl p-6 border ${regConfig.borderColor} ${regConfig.bgColor} bg-white flex flex-col justify-between shadow-xs transition-all hover:shadow-md`}
              >
                <div>
                  {/* Region badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${regConfig.badgeBg} ${regConfig.textColor}`}
                    >
                      {regConfig.nameThai}
                    </span>
                    {matchedEntry && (
                      <button
                        onClick={() => onToggleFavorite(matchedEntry.id)}
                        className={`p-1.5 rounded-xl ${
                          isWordSaved(matchedEntry.id)
                            ? 'text-[#E15B28]'
                            : 'text-gray-300 hover:text-gray-600'
                        }`}
                        title="บันทึกรายการโปรด"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            isWordSaved(matchedEntry.id) ? 'fill-current' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {data ? (
                    <div className="space-y-3">
                      <div>
                        <div className="text-3xl font-extrabold text-[#29323D]">
                          {data.word}
                        </div>
                        {data.pronunciation && (
                          <div className="text-xs text-[#6B7280] font-sans mt-0.5">
                            คำอ่าน: {data.pronunciation}
                          </div>
                        )}
                      </div>

                      <div className="p-3 rounded-2xl bg-white/80 border border-black/5 text-xs">
                        <div className="font-semibold text-gray-500 mb-1">ตัวอย่างประโยค:</div>
                        <div className="font-bold text-[#29323D]">
                          "{data.example}"
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center text-xs text-gray-400 italic">
                      ยังไม่มีข้อมูลที่ตรวจสอบแล้วในภูมิภาคนี้
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs">
                  {matchedEntry ? (
                    <button
                      onClick={() => onSelectWord(matchedEntry.id)}
                      className="font-bold text-[#6C5CE7] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      ดูคำศัพท์นี้ <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onNavigate('submit_word')}
                      className="text-gray-500 hover:text-[#6C5CE7] flex items-center gap-1 cursor-pointer"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      เสนอคำนี้
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Propose a word CTA */}
      <div className="rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#29323D]">
            รู้จักคำในภาษาถิ่นของคุณที่มีความหมายเหมือนกันไหม?
          </h3>
          <p className="text-xs text-[#6B7280] mt-1">
            ร่วมกันเป็นส่วนหนึ่งในการอนุรักษ์และบันทึกคลังคำศัพท์ภาษาไทยให้ครบถ้วนทุกภูมิภาค
          </p>
        </div>
        <button
          onClick={() => onNavigate('submit_word')}
          className="shrink-0 px-5 py-2.5 rounded-2xl bg-[#B8EBD0] hover:bg-[#A3E5C1] text-[#29323D] font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4" />
          <span>เสนอคำศัพท์จากบ้านเฮา</span>
        </button>
      </div>
    </div>
  );
};
