import React from 'react';
import { ArrowLeft, Heart, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface AboutPageProps {
  onBack: () => void;
  onNavigate: (tab: string) => void;
  onOpenAIChat: (prompt?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBack,
  onNavigate,
  onOpenAIChat,
}) => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-20">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#29323D] hover:text-[#6C5CE7] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>ย้อนกลับ</span>
      </button>

      {/* Main Header */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-xs text-center space-y-4">
        <MascotNongVao emotion="cheering" size="lg" />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#29323D]">
          เกี่ยวกับ "เว้าถิ่น" (VaoThin)
        </h1>
        <p className="text-base text-[#6C5CE7] font-bold">
          "ม่วนกับภาษา เรียนรู้ความเป็นเรา — คำเว้าบ้านเฮา มีเรื่องเล่าอยู่ทุกคำ"
        </p>
        <p className="text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto leading-relaxed">
          เว็บแอปพลิเคชันที่รวมพจนานุกรมภาษาถิ่นไทย ชุมชนแบ่งปันคำศัพท์
          และระบบเรียนรู้ผ่านเกม 4 ภูมิภาค (เหนือ อีสาน กลาง ใต้)
          เพื่อเป็นพื้นที่กลางสำหรับคนไทยทุกภูมิภาค โดยเฉพาะนักเรียนและคนรุ่นใหม่
        </p>
      </div>

      {/* Core Principles */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-5">
        <h2 className="text-xl font-bold text-[#29323D] flex items-center gap-2">
          <Heart className="w-5 h-5 text-rose-500 fill-current" />
          หลักการและเจตนารมณ์สำคัญ
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-gray-100 flex items-start gap-3">
            <span className="text-lg">🌿</span>
            <div>
              <div className="font-bold text-[#29323D]">ทุกภูมิภาคมีคุณค่าเท่าเทียมกัน</div>
              <p className="text-gray-600 mt-0.5">
                ภาษาถิ่นไม่มีภาษาใดด้อยกว่าหรือเหนือกว่าภาษาอื่น ทุกสำเนียงคือมรดกทางวัฒนธรรมที่มีชีวิต
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-gray-100 flex items-start gap-3">
            <span className="text-lg">🧭</span>
            <div>
              <div className="font-bold text-[#29323D]">
                ความหลากหลายตามพื้นที่และกาลเวลา
              </div>
              <p className="text-gray-600 mt-0.5">
                คำศัพท์อาจแตกต่างกันตามจังหวัด อำเภอ ชุมชน อายุ และบริบทการใช้
                เราเคารพในทุกความแตกต่างและไม่บังคับให้ภาษาถิ่นมีเพียงคำตอบเดียว
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-gray-100 flex items-start gap-3">
            <span className="text-lg">🛡️</span>
            <div>
              <div className="font-bold text-[#29323D]">
                ความจริงแท้และความถูกต้องทางภาษา
              </div>
              <p className="text-gray-600 mt-0.5">
                ไม่แต่งข้อมูลภาษาเท็จเพื่อเติมเต็มช่องว่าง ข้อมูลในระบบจำแนกสถานะ
                (ยืนยันแล้ว / รอตรวจทาน) อย่างชัดเจน โปร่งใส ตรวจสอบได้
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-gray-100 flex items-start gap-3">
            <span className="text-lg">💖</span>
            <div>
              <div className="font-bold text-[#29323D]">
                สร้างสรรค์และไม่ล้อเลียน
              </div>
              <p className="text-gray-600 mt-0.5">
                ส่งเสริมการเรียนรู้ด้วยความสนุก อบอุ่น และเป็นมิตร โดยไม่ล้อเลียนสำเนียงหรืออัตลักษณ์ท้องถิ่นใดๆ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mascot Nong Vao story */}
      <div className="bg-gradient-to-r from-[#DCD2FF]/30 to-[#B8EBD0]/30 rounded-3xl border border-[#DCD2FF] p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center gap-6">
        <MascotNongVao emotion="happy" size="md" />
        <div className="space-y-1.5 text-center sm:text-left">
          <h3 className="font-bold text-lg text-[#29323D]">ทำความรู้จักกับ "น้องเว้า"</h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            "น้องเว้า" คือมาสคอตแมวก้อนเมฆผู้รักการเดินทางและเรียนรู้ภาษาถิ่น
            น้องเว้าจะคอยเป็นผู้ช่วยแนะนำคำศัพท์ประจำวัน ให้กำลังใจหลังตอบคำถาม
            และตอบข้อสงสัยผ่านระบบ AI ผู้ช่วยในทุกหน้า!
          </p>
        </div>
      </div>
    </div>
  );
};
