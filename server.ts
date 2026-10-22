import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Server-side Gemini initialization
  const apiKey = process.env.GEMINI_API_KEY;
  let aiClient: GoogleGenAI | null = null;
  if (apiKey) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // Health and AI Status Endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      hasGeminiKey: Boolean(apiKey),
      timestamp: new Date().toISOString(),
    });
  });

  // Server-side Gemini AI Chat Proxy for Nong Vao
  app.post('/api/ai/chat', async (req: Request, res: Response) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'กรุณาส่งข้อความที่ถูกต้อง' });
      }

      if (!aiClient) {
        return res.status(503).json({
          error: 'ระบบผู้ช่วย AI ยังไม่ได้กำหนด GEMINI_API_KEY ในสภาพแวดล้อม',
          fallback: true,
        });
      }

      const systemInstruction = `คุณคือ "น้องเว้า" (Nong Vao) มาสคอตประจำเว็บแอป "เว้าถิ่น" (VaoThin) พจนานุกรมและชุมชนเรียนรู้ภาษาถิ่นไทย 4 ภาค (เหนือ, อีสาน, กลาง, ใต้)
สโลแกน: "ม่วนกับภาษา เรียนรู้ความเป็นเรา"
บุคลิกภาพของคุณ:
- ร่าเริง น่ารัก อบอุ่น เป็นมิตร สุภาพ และรักภาษาท้องถิ่นทุกภาค
- ไม่ล้อเลียนสำเนียงหรืออัตลักษณ์ใดๆ และตระหนักว่าทุกภาษามีคุณค่าเท่าเทียมกัน
- หากคำไหนมีความหมายต่างกันตามจังหวัดหรือบริบท ให้ระบุชัดเจน
- หากไม่มีข้อมูลแน่ชัด ให้บอกอย่างตรงไปตรงมาว่ายังไม่มีหลักฐานเพียงพอ อย่าแต่งข้อมูลเท็จ
- ตอบด้วยภาษาไทยที่อ่านง่าย มีคำลงท้ายน่ารัก เช่น "จ้า", "เด้อจ้า", "เจ้า" ตามบริบทภาคที่สนทนา`;

      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history.slice(-6)) {
          if (item.role && item.text) {
            contents.push({
              role: item.role === 'user' ? 'user' : 'model',
              parts: [{ text: String(item.text) }],
            });
          }
        }
      }

      contents.push({
        role: 'user',
        parts: [{ text: message }],
      });

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text || 'น้องเว้ากำลังรวบรวมคำตอบ ลองถามใหม่อีกครั้งนะจ๊ะ';
      return res.json({ reply });
    } catch (err: any) {
      console.error('Error calling Gemini API:', err);
      return res.status(500).json({
        error: err?.message || 'เกิดข้อผิดพลาดในการเชื่อมต่อกับน้องเว้า',
      });
    }
  });

  // Vite middleware in development or static serve in production
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[VaoThin] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
