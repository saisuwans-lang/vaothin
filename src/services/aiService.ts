import { DICTIONARY_DATA, REGION_CONFIG } from '../data/dictionaryData';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export const AIService = {
  async askNongVao(
    message: string,
    history: ChatMessage[] = []
  ): Promise<{ reply: string; source: 'gemini' | 'knowledge_base' }> {
    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          history: history.map((h) => ({ role: h.role, text: h.text })),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          return { reply: data.reply, source: 'gemini' };
        }
      }
    } catch {
      // Fallback to local dialect knowledge base
    }

    // Local grounded knowledge base fallback for Thai regional dialects
    const query = message.trim().toLowerCase();
    const matchedWord = DICTIONARY_DATA.find(
      (w) =>
        query.includes(w.dialectWord.toLowerCase()) ||
        query.includes(w.standardWord.toLowerCase())
    );

    if (matchedWord) {
      const reg = REGION_CONFIG[matchedWord.region];
      const ex = matchedWord.examples[0];
      return {
        reply: `น้องเว้าตรวจค้นพบคำว่า "${matchedWord.dialectWord}" (${reg.nameThai}) ให้แล้วจ้า! 🐱✨\n\n` +
          `• ความหมาย: ${matchedWord.meaning}\n` +
          (matchedWord.pronunciation ? `• คำอ่าน: ${matchedWord.pronunciation}\n` : '') +
          `• ภาษากลาง: ${matchedWord.standardWord}\n` +
          (ex ? `• ตัวอย่างประโยค: "${ex.dialectSentence}" (แปลว่า: ${ex.standardTranslation})\n` : '') +
          (matchedWord.culturalNote ? `\n💡 เกร็ดน่ารู้: ${matchedWord.culturalNote}` : ''),
        source: 'knowledge_base',
      };
    }

    // General regional inquiries
    if (query.includes('เหนือ') || query.includes('คำเมือง')) {
      return {
        reply: `ยินดีต้อนฮับเจ้า! ภาษาเหนือหรือคำเมืองมีเอกลักษณ์ที่เสียงวรรณยุกต์นุ่มนวลอ่อนหวาน เช่น "ลำ" (อร่อย), "กึ๊ดเติง" (คิดถึง), "แอ่ว" (เที่ยว) อยากให้น้องเว้าแนะนำคำไหนเพิ่มเติมถามได้เลยเน้อเจ้า! 🐱🌸`,
        source: 'knowledge_base',
      };
    }

    if (query.includes('อีสาน') || query.includes('เว้า')) {
      return {
        reply: `สวัสดีเด้อจ้า! ภาษาอีสานเป็นภาษาที่ม่วนซื่นและอบอุ่นหลาย เช่น "แซ่บ" (อร่อย), "คิดฮอด" (คิดถึง), "เบิ่ง" (ดู), "จ๊วด" (สุดยอด) มีคำว่า "เว้า" ที่แปลว่า พูด ซึ่งเป็นที่มาของชื่อแอปเราเลยจ้า! 🐱🌾`,
        source: 'knowledge_base',
      };
    }

    if (query.includes('ใต้') || query.includes('แหลง')) {
      return {
        reply: `ยินดีต้อนรับพี่น้องชาวใต้ครับผม! ภาษาใต้แหลงสั้น กระชับ ชัดถ้อยชัดคำ ได้แรงอก! เช่น "หรอย" (อร่อย/สนุก), "แหลง" (พูด), "แล" (ดู), "ได้แรงอก" (สะใจชื่นใจ) สนใจคำไหนบอกน้องเว้ามาได้เลย! 🐱🌊`,
        source: 'knowledge_base',
      };
    }

    if (query.includes('กลาง') || query.includes('ระยอง') || query.includes('สุพรรณ')) {
      return {
        reply: `สวัสดีครับ/ค่ะ! ภาคกลางนอกจากภาษากรุงเทพฯ แล้ว ยังมีสำเนียงเหน่อสุพรรณที่ไพเราะ และคำลงท้ายอย่าง "ฮิ" ของชาวระยอง-จันทบุรี-ตราด ที่เป็นกันเองมากๆ เลยนะฮิ! 🐱🥥`,
        source: 'knowledge_base',
      };
    }

    return {
      reply: `น้องเว้าอยู่นี่จ้า! 🐱☁️ คุณสามารถพิมพ์คำภาษาถิ่น เช่น "คิดฮอด", "แอ่ว", "หรอย", "สลิด", "ได้แรงอก" หรือพิมพ์ภาษากลางเพื่อให้น้องเว้าช่วยเทียบสำเนียงทั้ง 4 ภาคได้เลยจ้า มีคำไหนอยากชวนคุยไหมเอ่ย?`,
      source: 'knowledge_base',
    };
  },
};
