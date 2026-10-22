import React, { useState, useEffect, useRef } from 'react';
import { AIService, ChatMessage } from '../../services/aiService';
import { MascotNongVao } from './MascotNongVao';
import { X, Send, Sparkles, RefreshCw, Bot } from 'lucide-react';

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

export const AIChatDrawer: React.FC<AIChatDrawerProps> = ({
  isOpen,
  onClose,
  initialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'สวัสดีจ้า! นู๋คือน้องเว้า มาสคอตผู้ช่วยเรียนรู้ภาษาถิ่นไทย 4 ภาค (เหนือ อีสาน กลาง ใต้) จ้า 🐱✨ มีคำไหนอยากถามความหมาย หรืออยากให้ช่วยเทียบสำเนียง พิมพ์บอกน้องเว้าได้เลยนะจ๊ะ!',
      timestamp: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'คำว่า "คิดฮอด" กับ "กึ๊ดเติง" แปลว่าอะไร?',
    'คนเหนือบอกว่าอร่อยพูดยังไงนะ?',
    'คำว่า "ได้แรงอก" ภาษาใต้ ใช้ตอนไหน?',
    'คำว่า "สลิด" ในภาษาเหนือแปลว่าอะไร?',
  ];

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSend(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = {
      id: `u_${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    try {
      const result = await AIService.askNongVao(text, messages);
      const botMsg: ChatMessage = {
        id: `m_${Date.now()}`,
        role: 'model',
        text: result.reply,
        timestamp: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `err_${Date.now()}`,
        role: 'model',
        text: 'น้องเว้าขออภัยจ้า เกิดปัญหาขัดข้องชั่วคราว ลองพิมพ์ถามใหม่อีกครั้งนะจ๊ะ',
        timestamp: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full sm:w-[420px] h-full bg-[#FFFDF8] border-l border-[#DCD2FF]/60 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-[#DCD2FF]/40 via-[#FFFDF8] to-[#B8EBD0]/40 border-b border-[#DCD2FF]/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MascotNongVao emotion="cheering" size="sm" />
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-[#29323D] text-base">น้องเว้า AI ผู้ช่วยภาษาถิ่น</h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#B8EBD0] text-[#1E824C]">
                  <Sparkles className="w-2.5 h-2.5" />
                  Gemini
                </span>
              </div>
              <p className="text-xs text-[#6B7280]">ไขข้อข้องใจภาษาถิ่น 4 ภาค อบอุ่น เป็นมิตร</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="ปิดหน้าต่างแชท"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-[#DCD2FF] flex items-center justify-center shrink-0 shadow-xs text-sm">
                  🐱
                </div>
              )}
              <div
                className={`max-w-[82%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-xs whitespace-pre-line ${
                  m.role === 'user'
                    ? 'bg-[#29323D] text-white rounded-br-xs'
                    : 'bg-white border border-[#DCD2FF]/60 text-[#29323D] rounded-bl-xs'
                }`}
              >
                {m.text}
                <div
                  className={`text-[10px] mt-1.5 font-sans ${
                    m.role === 'user' ? 'text-gray-300 text-right' : 'text-gray-400'
                  }`}
                >
                  {m.timestamp}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-2.5 items-center text-sm text-[#6B7280]">
              <div className="w-8 h-8 rounded-full bg-[#DCD2FF] flex items-center justify-center shrink-0">
                🐱
              </div>
              <div className="bg-white border border-[#DCD2FF]/60 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xs">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#6C5CE7]" />
                <span className="text-xs">น้องเว้ากำลังคิดคำตอบ...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Questions */}
        <div className="px-4 py-2 bg-gradient-to-t from-white to-transparent border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-[11px] text-[#6B7280] font-medium mb-1.5">
            <Bot className="w-3 h-3 text-[#6C5CE7]" />
            ลองถามน้องเว้า:
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {quickPrompts.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={loading}
                className="whitespace-nowrap text-xs bg-[#F7F5FE] hover:bg-[#DCD2FF]/60 text-[#29323D] px-2.5 py-1 rounded-full border border-[#DCD2FF]/80 transition-colors disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3.5 bg-white border-t border-gray-100 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
            placeholder="พิมพ์ถามคำศัพท์ภาษาถิ่นกับน้องเว้า..."
            className="flex-1 bg-[#F9FAFB] border border-gray-200 rounded-2xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#DCD2FF] focus:border-[#A794FF] transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim() || loading}
            className="w-10 h-10 rounded-2xl bg-[#DCD2FF] hover:bg-[#CFBEFF] active:scale-95 text-[#29323D] flex items-center justify-center transition-all disabled:opacity-40 disabled:scale-100"
            aria-label="ส่งข้อความ"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
