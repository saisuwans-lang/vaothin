import React, { useState } from 'react';
import {
  PlusCircle,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  Sparkles,
  Info,
} from 'lucide-react';
import { Region, SubmittedWordDraft } from '../types';
import { DICTIONARY_DATA, REGION_CONFIG } from '../data/dictionaryData';
import { StorageService } from '../services/storageService';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface SubmitWordPageProps {
  onBack: () => void;
  onNavigate: (tab: string) => void;
}

export const SubmitWordPage: React.FC<SubmitWordPageProps> = ({
  onBack,
  onNavigate,
}) => {
  const [dialectWord, setDialectWord] = useState('');
  const [standardWord, setStandardWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [pronunciation, setPronunciation] = useState('');
  const [region, setRegion] = useState<Region>('northeast');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [category, setCategory] = useState('ชีวิตประจำวันและบทสนทนา');
  const [dialectSentence, setDialectSentence] = useState('');
  const [standardTranslation, setStandardTranslation] = useState('');
  const [sourceNote, setSourceNote] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedDraft, setSubmittedDraft] = useState<SubmittedWordDraft | null>(null);

  const categories = [
    'ชีวิตประจำวันและบทสนทนา',
    'อาหารและรสชาติ',
    'ความรู้สึกและอารมณ์',
    'การเดินทางและกิจกรรม',
    'อุปนิสัยและพฤติกรรม',
    'ธรรมชาติและสัตว์',
    'คำสแลงและวัยรุ่น',
    'วัฒนธรรมและประเพณี',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!dialectWord.trim()) errs.dialectWord = 'กรุณาระบุคำภาษาถิ่น';
    if (!standardWord.trim()) errs.standardWord = 'กรุณาระบุคำภาษาไทยมาตรฐาน';
    if (!meaning.trim()) errs.meaning = 'กรุณาระบุคำอธิบายความหมาย';
    if (!province.trim()) errs.province = 'กรุณาระบุจังหวัดที่ใช้คำนี้';
    if (!dialectSentence.trim()) errs.dialectSentence = 'กรุณายกตัวอย่างประโยค';
    if (!standardTranslation.trim()) errs.standardTranslation = 'กรุณาระบุคำแปลตัวอย่าง';

    // Duplicate check
    const existing = DICTIONARY_DATA.find(
      (w) =>
        w.dialectWord.trim().toLowerCase() === dialectWord.trim().toLowerCase() &&
        w.region === region
    );
    if (existing) {
      errs.dialectWord = `คำว่า "${dialectWord}" ในภูมิภาคนี้มีอยู่ในระบบแล้ว (ID: ${existing.id})`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const draft: SubmittedWordDraft = {
      id: `draft_${Date.now()}`,
      dialectWord: dialectWord.trim(),
      standardWord: standardWord.trim(),
      pronunciation: pronunciation.trim() || undefined,
      meaning: meaning.trim(),
      region,
      province: province.trim(),
      district: district.trim() || undefined,
      category,
      examples: [
        {
          dialectSentence: dialectSentence.trim(),
          standardTranslation: standardTranslation.trim(),
        },
      ],
      sourceNote: sourceNote.trim() || undefined,
      status: 'pending',
      submittedAt: new Date().toISOString(),
    };

    StorageService.saveSubmittedWord(draft);
    setSubmittedDraft(draft);
    setIsSuccess(true);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20">
      {/* Top Back Nav */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#29323D] hover:text-[#6C5CE7] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>ย้อนกลับ</span>
      </button>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#B8EBD0]/40 via-[#FFFDF8] to-[#FFF0A8]/40 rounded-3xl border border-[#B8EBD0] p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#B8EBD0] text-[#1E824C]">
                การมีส่วนร่วมของชุมชน
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#29323D]">
              เพิ่มคำเว้าจากบ้านเฮา
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              ร่วมแบ่งปันคำศัพท์และสำนวนจากท้องถิ่นของคุณ
              เพื่อเป็นสมบัติความรู้และส่งต่อให้คนรุ่นใหม่ได้เรียนรู้
            </p>
          </div>

          <MascotNongVao
            emotion="cheering"
            size="md"
            speechBubbleText="ยินดีต้อนรับคำศัพท์ใหม่ๆ เด้อจ้า! +20 XP"
          />
        </div>
      </div>

      {isSuccess && submittedDraft ? (
        /* Success Screen */
        <div className="bg-white rounded-3xl border border-emerald-200 p-8 sm:p-12 text-center shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-[#29323D]">
            ส่งคำศัพท์สำเร็จแล้ว!
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            คำว่า <span className="font-bold text-[#6C5CE7]">"{submittedDraft.dialectWord}"</span> ({REGION_CONFIG[submittedDraft.region].nameThai})
            ได้รับการบันทึกเป็นแบบร่างรอตรวจทาน (สถานะ: Pending) เรียบร้อยแล้ว
            และคุณได้รับ <span className="font-bold text-amber-600">+20 XP</span> สำหรับการมีส่วนร่วม!
          </p>

          <div className="p-4 rounded-2xl bg-gray-50 max-w-md mx-auto text-left text-xs space-y-1.5 text-gray-600 border border-gray-100">
            <div><span className="font-semibold text-gray-800">คำศัพท์:</span> {submittedDraft.dialectWord}</div>
            <div><span className="font-semibold text-gray-800">ภาษากลาง:</span> {submittedDraft.standardWord}</div>
            <div><span className="font-semibold text-gray-800">ความหมาย:</span> {submittedDraft.meaning}</div>
            <div><span className="font-semibold text-gray-800">จังหวัด:</span> {submittedDraft.province}</div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setIsSuccess(false);
                setDialectWord('');
                setStandardWord('');
                setMeaning('');
                setDialectSentence('');
                setStandardTranslation('');
                setProvince('');
                setDistrict('');
              }}
              className="px-5 py-2.5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              ส่งคำศัพท์อื่นเพิ่มเติม
            </button>
            <button
              onClick={() => onNavigate('dictionary')}
              className="px-5 py-2.5 rounded-2xl bg-[#29323D] hover:bg-black text-white text-xs sm:text-sm font-bold cursor-pointer"
            >
              กลับไปดูพจนานุกรม
            </button>
          </div>
        </div>
      ) : (
        /* Form */
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-6 text-xs sm:text-sm"
        >
          {/* Note Info */}
          <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#FFF0A8] flex items-start gap-3 text-xs text-[#7A5E00]">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">หลักเกณฑ์การตรวจสอบ: </span>
              คำศัพท์ที่ส่งจะถูกจัดเก็บในเครื่องของคุณและเข้าสู่คิวรอตรวจทาน (Pending)
              ระบบจะไม่เผยแพร่ข้อมูลที่ไม่ผ่านการตรวจทานทางภาษาศาสตร์อัตโนมัติ เพื่อรักษาความถูกต้องของคลังข้อมูล
            </div>
          </div>

          {/* Dialect word & standard word */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-700 mb-1.5">
                คำภาษาถิ่น *
              </label>
              <input
                type="text"
                required
                value={dialectWord}
                onChange={(e) => setDialectWord(e.target.value)}
                placeholder="เช่น คิดฮอด, ลำ, หรอย, แอ่ว"
                className={`w-full p-3 rounded-2xl border ${
                  errors.dialectWord ? 'border-rose-400 bg-rose-50/30' : 'border-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-[#DCD2FF] text-base font-bold`}
              />
              {errors.dialectWord && (
                <div className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.dialectWord}
                </div>
              )}
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1.5">
                คำภาษาไทยมาตรฐาน (ภาษากลาง) *
              </label>
              <input
                type="text"
                required
                value={standardWord}
                onChange={(e) => setStandardWord(e.target.value)}
                placeholder="เช่น คิดถึง, อร่อย, เที่ยว"
                className={`w-full p-3 rounded-2xl border ${
                  errors.standardWord ? 'border-rose-400 bg-rose-50/30' : 'border-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-[#DCD2FF] text-base font-bold`}
              />
              {errors.standardWord && (
                <div className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.standardWord}
                </div>
              )}
            </div>
          </div>

          {/* Meaning & Pronunciation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-700 mb-1.5">
                คำอ่าน / วรรณยุกต์ (ถ้ามี)
              </label>
              <input
                type="text"
                value={pronunciation}
                onChange={(e) => setPronunciation(e.target.value)}
                placeholder="เช่น คิด-ฮอด, แอ่ว (เสียงโทต่ำ)"
                className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1.5">
                หมวดหมู่ *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF] bg-white"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Full meaning */}
          <div>
            <label className="block font-bold text-gray-700 mb-1.5">
              คำอธิบายความหมายโดยละเอียด *
            </label>
            <textarea
              required
              rows={2}
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
              placeholder="อธิบายความหมาย บริบททางอารมณ์ หรือความรู้สึกที่แฝงอยู่..."
              className={`w-full p-3 rounded-2xl border ${
                errors.meaning ? 'border-rose-400 bg-rose-50/30' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#DCD2FF] leading-relaxed`}
            />
            {errors.meaning && (
              <div className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.meaning}
              </div>
            )}
          </div>

          {/* Region, Province, District */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold text-gray-700 mb-1.5">
                ภูมิภาค *
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as Region)}
                className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF] bg-white font-semibold"
              >
                <option value="north">ภาคเหนือ</option>
                <option value="northeast">ภาคอีสาน</option>
                <option value="central">ภาคกลาง</option>
                <option value="south">ภาคใต้</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1.5">
                จังหวัด *
              </label>
              <input
                type="text"
                required
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                placeholder="เช่น เชียงใหม่, ขอนแก่น, สงขลา"
                className={`w-full p-3 rounded-2xl border ${
                  errors.province ? 'border-rose-400 bg-rose-50/30' : 'border-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]`}
              />
              {errors.province && (
                <div className="text-xs text-rose-500 mt-1">{errors.province}</div>
              )}
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1.5">
                อำเภอ หรือ ชุมชน (ถ้ามี)
              </label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="เช่น เมือง, ท่าฉาง, แม่แจ่ม"
                className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]"
              />
            </div>
          </div>

          {/* Examples sentence */}
          <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-gray-100 space-y-3">
            <div className="font-bold text-gray-800">ตัวอย่างประโยคการใช้จริง *</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  ประโยคภาษาถิ่น *
                </label>
                <input
                  type="text"
                  required
                  value={dialectSentence}
                  onChange={(e) => setDialectSentence(e.target.value)}
                  placeholder="เช่น คิดฮอดบ้านหลายเด้อสู"
                  className="w-full p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF] text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  คำแปลภาษากลาง *
                </label>
                <input
                  type="text"
                  required
                  value={standardTranslation}
                  onChange={(e) => setStandardTranslation(e.target.value)}
                  placeholder="เช่น คิดถึงบ้านมากๆ เลยนะพวกเธอ"
                  className="w-full p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF] text-xs"
                />
              </div>
            </div>
          </div>

          {/* Source Note */}
          <div>
            <label className="block font-bold text-gray-700 mb-1.5">
              แหล่งที่มา หรือ บุคคลอ้างอิง (ถ้ามี)
            </label>
            <input
              type="text"
              value={sourceNote}
              onChange={(e) => setSourceNote(e.target.value)}
              placeholder="เช่น ยายสอนมาตั้งแต่เด็ก, คำพูดติดปากของคนอำเภอ..., เพลงพื้นเมือง..."
              className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              * ข้อมูลที่ส่งจะได้รับ XP ทันทีหลังยืนยัน
            </span>
            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={onBack}
                className="px-5 py-2.5 rounded-2xl border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold cursor-pointer"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-2xl bg-[#29323D] hover:bg-black text-white font-bold shadow-md cursor-pointer transition-all active:scale-95"
              >
                ส่งคำศัพท์ (+20 XP)
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
