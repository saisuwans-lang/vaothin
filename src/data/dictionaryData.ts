import { DictionaryEntry } from '../types';

export const DICTIONARY_DATA: DictionaryEntry[] = [
  // ================= NORTH (ภาคเหนือ - คำเมือง) =================
  {
    id: 'north-aew',
    dialectWord: 'แอ่ว',
    standardWord: 'เที่ยว',
    pronunciation: 'แอ่ว (เสียงโทต่ำ)',
    meaning: 'เดินทางท่องเที่ยว ไปเที่ยวเตร่เพื่อความเพลิดเพลินหรือพักผ่อน',
    region: 'north',
    province: 'เชียงใหม่',
    category: 'การเดินทางและกิจกรรม',
    examples: [
      {
        dialectSentence: 'วันพูกเฮาไปแอ่วดอยสุเทพกั๋นบ่',
        standardTranslation: 'พรุ่งนี้เราไปเที่ยวดอยสุเทพด้วยกันไหม',
      },
      {
        dialectSentence: 'เปิ้นชอบไปแอ่วกาดเจียงใหม่แต๊ๆ',
        standardTranslation: 'เขาชอบไปเดินเที่ยวตลาดเชียงใหม่จริงๆ',
      },
    ],
    relatedWordIds: ['north-kad', 'north-pik', 'isan-pai-thiao'],
    spellingVariants: ['แอ๋ว'],
    sources: [
      {
        title: 'พจนานุกรมคำเมืองล้านนาไทย สถาบันวิจัยสังคม มช.',
        note: 'คำศัพท์พื้นฐานภาษาล้านนา',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'คำว่า "แอ่วสาว" ในอดีตหมายถึงหนุ่มๆ เดินไปพูดคุยเกี้ยวพาราสีสาวที่บ้านในยามค่ำคืน',
    viewCount: 1420,
    favoritesCount: 312,
    createdAt: '2025-01-10T08:00:00Z',
    updatedAt: '2025-01-10T08:00:00Z',
  },
  {
    id: 'north-lam',
    dialectWord: 'ลำ',
    standardWord: 'อร่อย',
    pronunciation: 'ลำ (เสียงสามัญสั้น)',
    meaning: 'รสชาติดี ถูกปาก มีความเอร็ดอร่อย',
    region: 'north',
    province: 'เชียงราย',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'น้ำพริกหนุ่มถ้วยนี้ลำขนาดเน้อเจ้า',
        standardTranslation: 'น้ำพริกหนุ่มถ้วยนี้อร่อยมากๆ เลยค่ะ',
      },
      {
        dialectSentence: 'กิ๋นข้าวตอนกับไส้อั่ว ลำแต๊ๆ',
        standardTranslation: 'กินข้าวเที่ยงกับไส้อั่ว อร่อยจริงๆ',
      },
    ],
    relatedWordIds: ['isan-saep', 'south-roi', 'central-aroi'],
    spellingVariants: ['ลำขนาด'],
    sources: [
      {
        title: 'สารานุกรมวัฒนธรรมไทยภาคเหนือ',
        note: 'หมวดภาษาและอาหารพื้นถิ่น',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'หากอร่อยมากมักจะพูดว่า "ลำแต๊ๆ" หรือ "ลำขนาด"',
    viewCount: 2350,
    favoritesCount: 540,
    createdAt: '2025-01-11T09:00:00Z',
    updatedAt: '2025-01-11T09:00:00Z',
  },
  {
    id: 'north-kued-teung',
    dialectWord: 'กึ๊ดเติง',
    standardWord: 'คิดถึง',
    pronunciation: 'กึ๊ด-เติง',
    meaning: 'คำนึงถึง หวนระลึกถึงด้วยความผูกพันและห่วงใย',
    region: 'north',
    province: 'ลำพูน',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'กึ๊ดเติงหาเปิ้นขนาด บ่ได้ปะกั๋นเมินแล้ว',
        standardTranslation: 'คิดถึงเธอมากเหลือเกิน ไม่ได้เจอกันนานแล้ว',
      },
    ],
    relatedWordIds: ['isan-khit-hot', 'south-sa-wa', 'central-khit-thueng'],
    spellingVariants: ['กึ๊ดฮอด', 'กึดเติงหา'],
    sources: [
      {
        title: 'รวมเพลงค่าวซอและภาษาถิ่นล้านนา',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'มักใช้ในบทเพลงพื้นเมืองแสดงความอาลัยอาวรณ์คู่รักหรือบ้านเกิด',
    viewCount: 1890,
    favoritesCount: 420,
    createdAt: '2025-01-12T10:00:00Z',
    updatedAt: '2025-01-12T10:00:00Z',
  },
  {
    id: 'north-oo',
    dialectWord: 'อู้',
    standardWord: 'พูด',
    pronunciation: 'อู้ (เสียงโทลากยาวนุ่มนวล)',
    meaning: 'พูดจา เปล่งเสียงบอกเล่าสนทนากัน',
    region: 'north',
    province: 'เชียงใหม่',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'อู้คำเมืองเป็นก่เจ้า',
        standardTranslation: 'พูดภาษาเหนือเป็นไหมคะ',
      },
      {
        dialectSentence: 'อู้จ๋าไพเราะน่าฟังแต๊ๆ',
        standardTranslation: 'พูดจาไพเราะน่าฟังจริงๆ',
      },
    ],
    relatedWordIds: ['isan-wao', 'south-laeng', 'central-phut'],
    sources: [
      {
        title: 'พจนานุกรมล้านนา มหาวิทยาลัยเชียงใหม่',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1670,
    favoritesCount: 290,
    createdAt: '2025-01-12T10:30:00Z',
    updatedAt: '2025-01-12T10:30:00Z',
  },
  {
    id: 'north-phor',
    dialectWord: 'ผ่อ',
    standardWord: 'ดู',
    pronunciation: 'ผ่อ (เสียงเอก)',
    meaning: 'มองดู ชำเลืองดู สังเกตดู',
    region: 'north',
    province: 'ลำปาง',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'ลองมาผ่อตางเพ้แล บ่เกยหันเลย',
        standardTranslation: 'ลองมาดูทางนี้สิ ไม่เคยเห็นเลย',
      },
    ],
    relatedWordIds: ['isan-boeng', 'south-lae', 'central-du'],
    sources: [
      {
        title: 'สารานุกรมภาษาถิ่นล้านนา',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 980,
    favoritesCount: 154,
    createdAt: '2025-01-13T11:00:00Z',
    updatedAt: '2025-01-13T11:00:00Z',
  },
  {
    id: 'north-pik',
    dialectWord: 'ปิ๊ก',
    standardWord: 'กลับ',
    pronunciation: 'ปิ๊ก (เสียงตรีสั้น)',
    meaning: 'หวนกลับ คืนสู่ที่เดิม เดินทางกลับ',
    region: 'north',
    province: 'พะเยา',
    category: 'การเดินทางและกิจกรรม',
    examples: [
      {
        dialectSentence: 'แลงนี้เปิ้นจะปิ๊กบ้านแล้วเน้อ',
        standardTranslation: 'เย็นนี้ฉันจะกลับบ้านแล้วนะ',
      },
    ],
    relatedWordIds: ['isan-muea-ban', 'south-lop-ban', 'central-klap-ban'],
    spellingVariants: ['ปิ๊กบ้าน'],
    sources: [
      {
        title: 'พจนานุกรมคำเมืองล้านนาไทย',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1120,
    favoritesCount: 210,
    createdAt: '2025-01-13T11:20:00Z',
    updatedAt: '2025-01-13T11:20:00Z',
  },
  {
    id: 'north-kad',
    dialectWord: 'กาด',
    standardWord: 'ตลาด',
    pronunciation: 'กาด (เสียงเอกยาว)',
    meaning: 'สถานที่ชุมนุมค้าขายสินค้า อาหาร และพืชผล',
    region: 'north',
    province: 'เชียงใหม่',
    category: 'สถานที่และสิ่งของ',
    examples: [
      {
        dialectSentence: 'แม่ญิงเปิ้นไปจ่ายกาดเจ๊า',
        standardTranslation: 'พวกผู้หญิงเขาไปซื้อของที่ตลาดเช้า',
      },
    ],
    relatedWordIds: ['north-aew'],
    sources: [
      {
        title: 'วิถีกาดล้านนา สถาบันวิจัยภาษา',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'เช่น "กาดหลวง" (ตลาดวโรรส), "กาดหมั้ว" (ตลาดของกินโบราณ)',
    viewCount: 1340,
    favoritesCount: 180,
    createdAt: '2025-01-14T09:00:00Z',
    updatedAt: '2025-01-14T09:00:00Z',
  },
  {
    id: 'north-khajai',
    dialectWord: 'ขะใจ๋',
    standardWord: 'เร็วๆ',
    pronunciation: 'ขะ-ใจ๋',
    meaning: 'รีบเร่ง กระทำด้วยความรวดเร็ว อย่าชักช้า',
    region: 'north',
    province: 'น่าน',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'ขะใจ๋หน้อย รถจะออกแล้วเน้อ',
        standardTranslation: 'เร็วๆ หน่อยนะ รถจะออกแล้วนะ',
      },
    ],
    relatedWordIds: ['isan-chuan', 'south-wai-wai'],
    sources: [
      {
        title: 'ภาษาและวรรณกรรมเมืองน่าน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 890,
    favoritesCount: 160,
    createdAt: '2025-01-14T10:15:00Z',
    updatedAt: '2025-01-14T10:15:00Z',
  },
  {
    id: 'north-khao-laeng',
    dialectWord: 'ข้าวแลง',
    standardWord: 'อาหารเย็น',
    pronunciation: 'ข้าว-แลง',
    meaning: 'มื้ออาหารที่รับประทานในเวลาเย็นหรือพลบค่ำ',
    region: 'north',
    province: 'แพร่',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'วันนี้กิ๋นข้าวแลงกับอะหยังเจ้า',
        standardTranslation: 'วันนี้ทานข้าวเย็นกับอะไรคะ',
      },
    ],
    relatedWordIds: ['north-lam', 'south-hwan-yen'],
    sources: [
      {
        title: 'อาหารล้านนา สำนักส่งเสริมวัฒนธรรม',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 760,
    favoritesCount: 110,
    createdAt: '2025-01-15T12:00:00Z',
    updatedAt: '2025-01-15T12:00:00Z',
  },
  {
    id: 'north-jad-nak',
    dialectWord: 'จ๊าดนัก',
    standardWord: 'เยอะมาก',
    pronunciation: 'จ๊าด-นัก',
    meaning: 'มากมาย จำนวนมหาศาล เกินกว่าปกติ',
    region: 'north',
    province: 'เชียงราย',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'คนมาแอ่วงานดอยตุงจ๊าดนักเลย',
        standardTranslation: 'คนมาเที่ยวดอยตุงเยอะมากๆ เลย',
      },
    ],
    relatedWordIds: ['south-jang-hu', 'isan-ka-dor'],
    sources: [
      {
        title: 'พจนานุกรมคำเมืองล้านนาไทย',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 920,
    favoritesCount: 140,
    createdAt: '2025-01-16T14:00:00Z',
    updatedAt: '2025-01-16T14:00:00Z',
  },
  {
    id: 'north-ja-dai',
    dialectWord: 'จะได',
    standardWord: 'อย่างไร',
    pronunciation: 'จะ-ได',
    meaning: 'เป็นอย่างไร วิธีการใด ทำนองไหน',
    region: 'north',
    province: 'แม่ฮ่องสอน',
    category: 'คำถามและสรรพนาม',
    examples: [
      {
        dialectSentence: 'เรื่องมันเป็นมาจะได เล่าหื้อฟังพ่องแล',
        standardTranslation: 'เรื่องมันเป็นมาอย่างไร เล่าให้ฟังหน่อยสิ',
      },
    ],
    relatedWordIds: ['isan-pen-jang-dai', 'south-phan-prue'],
    sources: [
      {
        title: 'ภาษาไตและล้านนาตะวันตก',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 650,
    favoritesCount: 95,
    createdAt: '2025-01-16T15:30:00Z',
    updatedAt: '2025-01-16T15:30:00Z',
  },
  {
    id: 'north-juen-jai',
    dialectWord: 'จื้นใจ๋',
    standardWord: 'ชื่นใจ',
    pronunciation: 'จื้น-ใจ๋',
    meaning: 'รู้สึกสดชื่น ผ่อนคลาย สบายอกสบายใจ',
    region: 'north',
    province: 'เชียงใหม่',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'ได้กิ๋นน้ำฮากบัวเย็นๆ แล้วจื้นใจ๋แต๊',
        standardTranslation: 'ได้ดื่มน้ำรากบัวเย็นๆ แล้วชื่นใจจริงๆ',
      },
    ],
    relatedWordIds: ['south-dai-raeng-ok', 'isan-suang'],
    sources: [
      {
        title: 'วรรณกรรมล้านนา',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 540,
    favoritesCount: 88,
    createdAt: '2025-01-17T09:00:00Z',
    updatedAt: '2025-01-17T09:00:00Z',
  },
  {
    id: 'north-salid',
    dialectWord: 'สลิด',
    standardWord: 'ดัดจริต/ซุกซน',
    pronunciation: 'สะ-หลิด',
    meaning: 'แสดงท่าทางมารยา ซุกซน หรือแสร้งทำกิริยาน่ารักน่าตี',
    region: 'north',
    province: 'ลำพูน',
    category: 'อุปนิสัยและพฤติกรรม',
    examples: [
      {
        dialectSentence: 'สลิดดกขนาดเน้อ แมวตั๋วนี้',
        standardTranslation: 'ทำตัวดัดจริตน่ารักเหลือเกินนะ เจ้าแมวตัวนี้',
      },
    ],
    relatedWordIds: ['south-tham-thao'],
    sources: [
      {
        title: 'ภาษาพูดล้านนาในชีวิตประจำวัน',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'มักใช้แซวด้วยความเอ็นดู เช่น "สลิดดก" หรือแอบหยอกเพื่อนสนิท',
    viewCount: 1100,
    favoritesCount: 220,
    createdAt: '2025-01-17T11:00:00Z',
    updatedAt: '2025-01-17T11:00:00Z',
  },
  {
    id: 'north-ba-goei',
    dialectWord: 'บ่าเกย',
    standardWord: 'ไม่เคย',
    pronunciation: 'บ่า-เกย',
    meaning: 'มิเคยกระทำมาก่อน ไม่เคยมีประสบการณ์',
    region: 'north',
    province: 'เชียงใหม่',
    category: 'คำปฏิเสธและเงื่อนไข',
    examples: [
      {
        dialectSentence: 'เปิ้นบ่าเกยไปตางปู้นเลยสักเตื้อ',
        standardTranslation: 'ฉันไม่เคยไปทางโน้นเลยสักครั้ง',
      },
    ],
    relatedWordIds: ['isan-bo-khoei', 'south-mai-khoei'],
    sources: [
      {
        title: 'พจนานุกรมคำเมือง',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 430,
    favoritesCount: 60,
    createdAt: '2025-01-18T10:00:00Z',
    updatedAt: '2025-01-18T10:00:00Z',
  },
  {
    id: 'north-toey',
    dialectWord: 'โตย',
    standardWord: 'ด้วย/ตาม',
    pronunciation: 'โตย (เสียงสามัญ)',
    meaning: 'ร่วมด้วย ไปด้วยกัน ติดตามไปด้วย',
    region: 'north',
    province: 'เชียงราย',
    category: 'คำเชื่อมและบทสนทนา',
    examples: [
      {
        dialectSentence: 'รอเปิ้นโตย เปิ้นขอไปตวยคนเน้อ',
        standardTranslation: 'รอฉันด้วย ฉันขอไปด้วยคนนะ',
      },
    ],
    relatedWordIds: ['isan-nam-kan'],
    spellingVariants: ['ตวย'],
    sources: [
      {
        title: 'ภาษาถิ่นพายัพ',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 830,
    favoritesCount: 115,
    createdAt: '2025-01-18T14:00:00Z',
    updatedAt: '2025-01-18T14:00:00Z',
  },
  {
    id: 'north-hak',
    dialectWord: 'ฮัก',
    standardWord: 'รัก',
    pronunciation: 'ฮัก (เสียงตรีสั้น)',
    meaning: 'มีความผูกพัน เสน่หา เมตตากรุณาอย่างลึกซึ้ง',
    region: 'north',
    province: 'เชียงใหม่',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'ฮักเปิ้นขนาด บ่มีวันลืม',
        standardTranslation: 'รักเธอมากเหลือเกิน ไม่มีวันลืมเลือน',
      },
    ],
    relatedWordIds: ['isan-hak', 'central-rak', 'south-rak'],
    sources: [
      {
        title: 'วรรณคดีล้านนาโบราณ',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1540,
    favoritesCount: 380,
    createdAt: '2025-01-19T08:30:00Z',
    updatedAt: '2025-01-19T08:30:00Z',
  },
  {
    id: 'north-ya-kan',
    dialectWord: 'ยะการ',
    standardWord: 'ทำงาน',
    pronunciation: 'ยะ-ก๋าน',
    meaning: 'ประกอบกิจการงาน ประกอบสัมมาอาชีพ',
    region: 'north',
    province: 'ลำปาง',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'ยะการเหน็ดเหนื่อยทั้งวันแล้ว แวะพักก่อน',
        standardTranslation: 'ทำงานเหน็ดเหนื่อยมาทั้งวันแล้ว แวะพักก่อนเถอะ',
      },
    ],
    relatedWordIds: ['isan-het-wiak', 'south-tham-ngan'],
    sources: [
      {
        title: 'สารานุกรมภาษาล้านนา',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 670,
    favoritesCount: 92,
    createdAt: '2025-01-19T10:00:00Z',
    updatedAt: '2025-01-19T10:00:00Z',
  },
  {
    id: 'north-id',
    dialectWord: 'อิด',
    standardWord: 'เหนื่อย',
    pronunciation: 'อิด (เสียงเอกสั้น)',
    meaning: 'อ่อนเพลีย หมดแรงจากการตรากตรำ',
    region: 'north',
    province: 'แพร่',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'เดินขึ้นดอยมาเมิน อิดขนาดแท้',
        standardTranslation: 'เดินขึ้นเขามานาน เหนื่อยมากๆ เลย',
      },
    ],
    relatedWordIds: ['isan-mueai', 'south-nueai'],
    sources: [
      {
        title: 'พจนานุกรมคำเมืองล้านนาไทย',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 710,
    favoritesCount: 98,
    createdAt: '2025-01-20T11:00:00Z',
    updatedAt: '2025-01-20T11:00:00Z',
  },

  // ================= NORTHEAST (ภาคอีสาน) =================
  {
    id: 'isan-wao',
    dialectWord: 'เว้า',
    standardWord: 'พูด',
    pronunciation: 'เว้า (เสียงโทลากเสียงเข้ม)',
    meaning: 'พูดคุย สนทนา กล่าวถ้อยคำ',
    region: 'northeast',
    province: 'ขอนแก่น',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'เว้าอีสานเป็นบ่ อ้ายสิสอนให้',
        standardTranslation: 'พูดภาษาอีสานเป็นไหม เดี๋ยวพี่จะสอนให้',
      },
      {
        dialectSentence: 'อย่าเว้าหลาย ย่านบ่แม่นความจริง',
        standardTranslation: 'อย่าพูดเยอะเลย กลัวจะไม่ใช่ความจริง',
      },
    ],
    relatedWordIds: ['north-oo', 'south-laeng', 'central-phut'],
    sources: [
      {
        title: 'พจนานุกรมภาษาถิ่นอีสาน สถาบันวิจัยภาษาและวัฒนธรรมเอเชีย',
        note: 'คำศัพท์พื้นฐานสำคัญ',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'เป็นคำเอกลักษณ์ของวัฒนธรรมอีสาน ดังชื่อเว็บแอป "เว้าถิ่น"',
    viewCount: 3100,
    favoritesCount: 890,
    createdAt: '2025-01-10T08:00:00Z',
    updatedAt: '2025-01-10T08:00:00Z',
  },
  {
    id: 'isan-boeng',
    dialectWord: 'เบิ่ง',
    standardWord: 'ดู',
    pronunciation: 'เบิ่ง (เสียงเอกหนักแน่น)',
    meaning: 'มอง ทอดสายตาดู ชำเลืองดู สังเกตการณ์',
    region: 'northeast',
    province: 'อุบลราชธานี',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'มาเบิ่งทางพี่ มีของแปลกให้ชม',
        standardTranslation: 'มาดูทางนี้สิ มีของแปลกให้ชม',
      },
      {
        dialectSentence: 'เบิ่งแยงกันดีๆ เด้อพี่น้อง',
        standardTranslation: 'ดูแลเอาใจใส่กันดีๆ นะพี่น้อง',
      },
    ],
    relatedWordIds: ['north-phor', 'south-lae', 'central-du'],
    sources: [
      {
        title: 'สารานุกรมวัฒนธรรมไทยภาคอีสาน',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'คำว่า "เบิ่งแยง" มีความหมายว่าดูแล คอยเทคแคร์ห่วงใย',
    viewCount: 2150,
    favoritesCount: 490,
    createdAt: '2025-01-10T09:30:00Z',
    updatedAt: '2025-01-10T09:30:00Z',
  },
  {
    id: 'isan-khit-hot',
    dialectWord: 'คิดฮอด',
    standardWord: 'คิดถึง',
    pronunciation: 'คิด-ฮอด',
    meaning: 'ระลึกถึงด้วยความคิดถึง โหยหา อาลัยอาวรณ์',
    region: 'northeast',
    province: 'อุดรธานี',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'คิดฮอดบ้านหลาย อยู่กรุงเทพฯ คิดฮอดพ่อแม่',
        standardTranslation: 'คิดถึงบ้านมากๆ อยู่กรุงเทพฯ คิดถึงพ่อแม่เสมอ',
      },
      {
        dialectSentence: 'คิดฮอดเจ้าสุแลงค่ำคืน',
        standardTranslation: 'คิดถึงเธอทุกค่ำคืน',
      },
    ],
    relatedWordIds: ['north-kued-teung', 'central-khit-thueng'],
    sources: [
      {
        title: 'รวมเพลงลูกทุ่งหมอลำและสำเนียงอีสาน',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'คำแสดงความรู้สึกที่ลึกซึ้งและอบอุ่นที่สุดคำหนึ่งในภาษาถิ่นอีสาน',
    viewCount: 2900,
    favoritesCount: 780,
    createdAt: '2025-01-11T10:00:00Z',
    updatedAt: '2025-01-11T10:00:00Z',
  },
  {
    id: 'isan-saep',
    dialectWord: 'แซ่บ',
    standardWord: 'อร่อย',
    pronunciation: 'แซ่บ (เสียงโทสะบัด)',
    meaning: 'มีรสชาติจัดจ้าน ถูกปาก กลมกล่อม หรือเอร็ดอร่อยมาก',
    region: 'northeast',
    province: 'ร้อยเอ็ด',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'ส้มตำจานนี้แซ่บอีหลี แซ่บหลายๆ',
        standardTranslation: 'ส้มตำจานนี้อร่อยจริงๆ อร่อยมากๆ',
      },
      {
        dialectSentence: 'ต้มแซ่บกระดูกหมู ร้อนๆ คักขนาด',
        standardTranslation: 'ต้มแซ่บกระดูกหมู ร้อนๆ รสชาติเยี่ยมยอดมาก',
      },
    ],
    relatedWordIds: ['north-lam', 'south-roi', 'central-aroi'],
    sources: [
      {
        title: 'พจนานุกรมภาษาถิ่นไทย ราชบัณฑิตยสถาน',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"แซ่บอีหลี" แปลว่า อร่อยจริงๆ ส่วน "แซ่บนัว" คือ อร่อยกลมกล่อมนัวๆ ด้วยเครื่องปรุง',
    viewCount: 3800,
    favoritesCount: 950,
    createdAt: '2025-01-11T11:00:00Z',
    updatedAt: '2025-01-11T11:00:00Z',
  },
  {
    id: 'isan-ee-hyang',
    dialectWord: 'อีหยัง',
    standardWord: 'อะไร',
    pronunciation: 'อี-หยัง (เสียงจัตวาท้าย)',
    meaning: 'สิ่งใด สิ่งไหน เรื่องอะไร',
    region: 'northeast',
    province: 'สกลนคร',
    category: 'คำถามและสรรพนาม',
    examples: [
      {
        dialectSentence: 'สูเว้าเรื่องอีหยังกัน ข้อยบ่เข้าใจ',
        standardTranslation: 'พวกเธอคุยเรื่องอะไรกัน ฉันไม่เข้าใจเลย',
      },
    ],
    relatedWordIds: ['south-ai-rai', 'central-a-rai'],
    sources: [
      {
        title: 'ภาษาอีสานในวิถีชีวิต มหาวิทยาลัยมหาสารคาม',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 2200,
    favoritesCount: 420,
    createdAt: '2025-01-12T09:00:00Z',
    updatedAt: '2025-01-12T09:00:00Z',
  },
  {
    id: 'isan-khee-tua',
    dialectWord: 'ขี้ตั๋ว',
    standardWord: 'โกหก',
    pronunciation: 'ขี้-ตั๋ว',
    meaning: 'พูดไม่จริง หลอกลวง กุเรื่องขึ้นมา',
    region: 'northeast',
    province: 'กาฬสินธุ์',
    category: 'อุปนิสัยและพฤติกรรม',
    examples: [
      {
        dialectSentence: 'อย่ามาขี้ตั๋วข้อยเด้อ ข้อยฮู้ทันเบิดแล้ว',
        standardTranslation: 'อย่ามาโกหกฉันนะ ฉันรู้ทันหมดแล้ว',
      },
    ],
    relatedWordIds: ['south-khee-hok', 'central-ko-hok'],
    sources: [
      {
        title: 'พจนานุกรมภาษาถิ่นอีสาน',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"ขี้ตั๋วตาใส" หมายถึง พูดโกหกหน้าตาเฉย',
    viewCount: 1650,
    favoritesCount: 310,
    createdAt: '2025-01-12T13:00:00Z',
    updatedAt: '2025-01-12T13:00:00Z',
  },
  {
    id: 'isan-suang',
    dialectWord: 'ส่วง',
    standardWord: 'โล่งใจ/สบายตัว',
    pronunciation: 'ส่วง (เสียงเอกยาว)',
    meaning: 'รู้สึกโล่ง ปลอดโปร่ง หายอึดอัด สร่างเมา หรือผ่อนคลายสบายกาย',
    region: 'northeast',
    province: 'นครพนม',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'ได้ซดต้มฮ้อนๆ แล้วส่วงวาบเลย',
        standardTranslation: 'ได้ซดน้ำซุปร้อนๆ แล้วรู้สึกโล่งสบายตัวทันที',
      },
    ],
    relatedWordIds: ['north-juen-jai', 'south-dai-raeng-ok'],
    sources: [
      {
        title: 'วัฒนธรรมลุ่มน้ำโขง',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'มักใช้เวลาตื่นเช้าได้ดื่มน้ำอุ่น ซุป หรือผ่านสถานการณ์ตึงเครียดมาได้',
    viewCount: 1430,
    favoritesCount: 265,
    createdAt: '2025-01-13T10:00:00Z',
    updatedAt: '2025-01-13T10:00:00Z',
  },
  {
    id: 'isan-jwat',
    dialectWord: 'จ๊วด',
    standardWord: 'สุดยอด/เต็มที่',
    pronunciation: 'จ๊วด (เสียงตรีสั้นเน้น)',
    meaning: 'จัดเต็ม รวดเร็ว พุ่งทะยาน สนุกสนานถึงขีดสุด',
    region: 'northeast',
    province: 'มหาสารคาม',
    category: 'คำสแลงและวัยรุ่น',
    examples: [
      {
        dialectSentence: 'งานบุญบั้งไฟมื้อนี้ จ๊วดจ๊าดแท้สู',
        standardTranslation: 'งานบุญบั้งไฟวันนี้ สนุกสนานเต็มที่จริงๆ พวกเรา',
      },
    ],
    relatedWordIds: ['south-roi-raeng', 'central-man'],
    sources: [
      {
        title: 'ภาษาถิ่นร่วมสมัยในกลุ่มวัยรุ่นอีสาน',
        note: 'คำสแลงยอดนิยมในโซเชียลมีเดีย',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'มักใช้ในจังหวะเพลงหมอลำซิ่ง หรือตอนจัดกิจกรรมสนุกสนาน',
    viewCount: 1980,
    favoritesCount: 450,
    createdAt: '2025-01-13T14:30:00Z',
    updatedAt: '2025-01-13T14:30:00Z',
  },
  {
    id: 'isan-mak',
    dialectWord: 'มัก',
    standardWord: 'ชอบ',
    pronunciation: 'มัก (เสียงตรีสั้น)',
    meaning: 'พึงพอใจ นิยมชมชอบ รักใคร่ชอบพอ',
    region: 'northeast',
    province: 'สุรินทร์',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'ข้อยมักเจ้าหลาย เจ้าฮู้บ่',
        standardTranslation: 'ฉันชอบเธอมากๆ เธอรู้ไหม',
      },
    ],
    relatedWordIds: ['north-hak', 'central-chop'],
    sources: [
      {
        title: 'พจนานุกรมอีสาน-ไทย-อังกฤษ มหาวิทยาลัยขอนแก่น',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1870,
    favoritesCount: 390,
    createdAt: '2025-01-14T08:45:00Z',
    updatedAt: '2025-01-14T08:45:00Z',
  },
  {
    id: 'isan-pen-ta-hak',
    dialectWord: 'เป็นตาฮัก',
    standardWord: 'น่ารัก',
    pronunciation: 'เป็น-ตา-ฮัก',
    meaning: 'น่ารักน่าเอ็นดู ชวนให้หลงใหลและทะนุถนอม',
    region: 'northeast',
    province: 'เลย',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'ลูกสาวบ้านนั้นเป็นตาฮักหลาย กิริยาเรียบร้อย',
        standardTranslation: 'ลูกสาวบ้านโน้นน่ารักมากๆ มารยาทเรียบร้อย',
      },
    ],
    relatedWordIds: ['north-salid', 'central-na-rak'],
    sources: [
      {
        title: 'วรรณคดีและนิทานพื้นบ้านอีสาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 2450,
    favoritesCount: 560,
    createdAt: '2025-01-14T11:20:00Z',
    updatedAt: '2025-01-14T11:20:00Z',
  },
  {
    id: 'isan-sao',
    dialectWord: 'เซา',
    standardWord: 'หยุด/หายดี',
    pronunciation: 'เซา (เสียงสามัญ)',
    meaning: 'ยุติการกระทำ หยุดพัก หรือหายจากอาการเจ็บไข้',
    region: 'northeast',
    province: 'ศรีสะเกษ',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'เซาฮ้องไห้ได้แล้ว เซาเจ็บแผลหรือยัง',
        standardTranslation: 'หยุดร้องไห้ได้แล้ว หายเจ็บแผลหรือยัง',
      },
    ],
    relatedWordIds: ['south-yut', 'central-yut'],
    sources: [
      {
        title: 'พจนานุกรมภาษาถิ่นอีสาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 880,
    favoritesCount: 130,
    createdAt: '2025-01-15T09:10:00Z',
    updatedAt: '2025-01-15T09:10:00Z',
  },
  {
    id: 'isan-soon',
    dialectWord: 'สูน',
    standardWord: 'โมโห/โกรธ',
    pronunciation: 'สูน (เสียงจัตวา)',
    meaning: 'รู้สึกขุ่นเคือง โกรธจัด ขัดเคืองใจ',
    region: 'northeast',
    province: 'ยโสธร',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'อย่ามาเว้ากวน ข้อยกำลังสูนเด้อนี่',
        standardTranslation: 'อย่ามาพูดกวนประสาท ฉันกำลังโมโหอยู่นะนี่',
      },
    ],
    relatedWordIds: ['south-chao', 'central-krot'],
    sources: [
      {
        title: 'ภาษาและสำนวนชาวอีสาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1310,
    favoritesCount: 215,
    createdAt: '2025-01-15T13:40:00Z',
    updatedAt: '2025-01-15T13:40:00Z',
  },
  {
    id: 'isan-jak-noi',
    dialectWord: 'จักหน่อย',
    standardWord: 'นิดหน่อย',
    pronunciation: 'จัก-หน่อย',
    meaning: 'เล็กน้อย ชั่วประเดี๋ยว พอประมาณ',
    region: 'northeast',
    province: 'หนองคาย',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'ขอตักชิมเบิ่งจักหน่อยแนเด้อ',
        standardTranslation: 'ขอตักชิมดูสักนิดหน่อยนะ',
      },
    ],
    relatedWordIds: ['south-hid-hui', 'north-noi'],
    sources: [
      {
        title: 'ภาษาไทยถิ่นอีสาน มหาวิทยาลัยรามคำแหง',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 970,
    favoritesCount: 145,
    createdAt: '2025-01-16T10:00:00Z',
    updatedAt: '2025-01-16T10:00:00Z',
  },
  {
    id: 'isan-ka-dor',
    dialectWord: 'กะด้อ',
    standardWord: 'เหลือเกิน/มากมาย',
    pronunciation: 'กะ-ด้อ',
    meaning: 'มากเกินไป อะไรจะขนาดนั้น เกินความพอดี',
    region: 'northeast',
    province: 'บึงกาฬ',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'คืองามแท้งามกะด้อ อ้ายหลงฮักแล้ว',
        standardTranslation: 'ทำไมสวยขนาดนี้นะ สวยเหลือเกิน พี่หลงรักแล้ว',
      },
    ],
    relatedWordIds: ['north-jad-nak', 'south-jang-hu'],
    sources: [
      {
        title: 'รวมถ้อยคำผญาภาษิตอีสาน',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'มักใช้ต่อท้ายคำคุณศัพท์ เช่น "งามกะด้อกะเดี้ย" แปลว่า งามอะไรจะขนาดนั้น',
    viewCount: 1620,
    favoritesCount: 340,
    createdAt: '2025-01-16T15:00:00Z',
    updatedAt: '2025-01-16T15:00:00Z',
  },
  {
    id: 'isan-het',
    dialectWord: 'เฮ็ด',
    standardWord: 'ทำ',
    pronunciation: 'เฮ็ด (เสียงเอกสั้น)',
    meaning: 'กระทำ สร้าง ลงมือปฏิบัติการ',
    region: 'northeast',
    province: 'ขอนแก่น',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'มื้อนี้เฮ็ดหยังกินแลงน้อ',
        standardTranslation: 'วันนี้ทำอะไรกินเป็นมื้อเย็นนะ',
      },
    ],
    relatedWordIds: ['north-ya-kan', 'south-tham', 'central-tham'],
    sources: [
      {
        title: 'พจนานุกรมภาษาถิ่นอีสาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1780,
    favoritesCount: 290,
    createdAt: '2025-01-17T08:15:00Z',
    updatedAt: '2025-01-17T08:15:00Z',
  },
  {
    id: 'isan-muea-ban',
    dialectWord: 'เมือบ้าน',
    standardWord: 'กลับบ้าน',
    pronunciation: 'เมือ-บ้าน',
    meaning: 'เดินทางกลับเคหสถาน คืนสู่ถิ่นฐานภูมิลำเนาเดิม',
    region: 'northeast',
    province: 'ชัยภูมิ',
    category: 'การเดินทางและกิจกรรม',
    examples: [
      {
        dialectSentence: 'สงกรานต์ปีนี้สิได้เมือบ้านไปกราบเฒ่าแม่',
        standardTranslation: 'สงกรานต์ปีนี้จะได้กลับบ้านไปกราบคุณแม่',
      },
    ],
    relatedWordIds: ['north-pik', 'south-lop-ban', 'central-klap-ban'],
    sources: [
      {
        title: 'วิถีการอพยพและภาษาถิ่นคนอีสาน',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'คำสะท้อนความผูกพันกับผืนแผ่นดินบ้านเกิดของชาวอีสาน',
    viewCount: 2100,
    favoritesCount: 460,
    createdAt: '2025-01-17T14:20:00Z',
    updatedAt: '2025-01-17T14:20:00Z',
  },
  {
    id: 'isan-phaya',
    dialectWord: 'ผญา',
    standardWord: 'ปรัชญา/คำคม',
    pronunciation: 'ผะ-หยา',
    meaning: 'คำคม สุภาษิต ปรัชญา หรือคติสอนใจของบรรพชนชาวอีสาน',
    region: 'northeast',
    province: 'อุบลราชธานี',
    category: 'วัฒนธรรมและประเพณี',
    examples: [
      {
        dialectSentence: 'ผญาโบราณเพิ่นสอนไว้ ให้ฮักพี่ฮักน้อง',
        standardTranslation: 'คำคมโบราณท่านสอนไว้ ให้รักใคร่กลมเกลียวพี่น้อง',
      },
    ],
    relatedWordIds: ['isan-wao'],
    sources: [
      {
        title: 'วรรณกรรมผญาอีสาน สถาบันศิลปวัฒนธรรม',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'มักแต่งเป็นกลอนคล้องจอง ใช้เกี้ยวพาราสีหรือสั่งสอนลูกหลาน',
    viewCount: 1150,
    favoritesCount: 275,
    createdAt: '2025-01-18T10:30:00Z',
    updatedAt: '2025-01-18T10:30:00Z',
  },

  // ================= SOUTH (ภาคใต้ - ภาษาใต้) =================
  {
    id: 'south-roi',
    dialectWord: 'หรอย',
    standardWord: 'อร่อย/สุดยอด',
    pronunciation: 'หรอย (เสียงจัตวาหรือเอกสั้นห้วนตามสำเนียง)',
    meaning: 'รสชาติดี อร่อยถูกปาก สนุกสนาน หรือสะใจยอดเยี่ยม',
    region: 'south',
    province: 'สงขลา',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'แกงไตปลาหม้อนี้หรอยจังหู้ ได้แรงอก!',
        standardTranslation: 'แกงไตปลาหม้อนี้อร่อยมากๆ สะใจชื่นใจจริง!',
      },
      {
        dialectSentence: 'หนังลุงคืนนี้เล่นได้หรอยจริง',
        standardTranslation: 'การแสดงหนังตะลุงคืนนี้สนุกสุดยอดจริงๆ',
      },
    ],
    relatedWordIds: ['north-lam', 'isan-saep', 'central-aroi', 'south-dai-raeng-ok'],
    spellingVariants: ['หรอยจังหู', 'หรอยแรง'],
    sources: [
      {
        title: 'พจนานุกรมภาษาไทยถิ่นใต้ สถาบันทักษิณคดีศึกษา',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"หรอยแรง" คือ อร่อยมากหรือยอดเยี่ยมมาก ใช้ได้ทั้งเรื่องอาหารและความบันเทิง',
    viewCount: 3600,
    favoritesCount: 920,
    createdAt: '2025-01-10T08:00:00Z',
    updatedAt: '2025-01-10T08:00:00Z',
  },
  {
    id: 'south-laeng',
    dialectWord: 'แหลง',
    standardWord: 'พูด',
    pronunciation: 'แหลง (เสียงจัตวาห้วนสั้น)',
    meaning: 'พูดคุย สนทนา บอกเล่า',
    region: 'south',
    province: 'นครศรีธรรมราช',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'แหลงใต้ชัดเจนจังหูนะน้องบ่าว',
        standardTranslation: 'พูดภาษาใต้ได้ชัดเจนมากๆ เลยนะน้องชาย',
      },
      {
        dialectSentence: 'อย่ามาแหลงพล่าม พูดความจริงมา',
        standardTranslation: 'อย่ามาพูดเพ้อเจ้อ พูดความจริงออกมาสิ',
      },
    ],
    relatedWordIds: ['north-oo', 'isan-wao', 'central-phut'],
    sources: [
      {
        title: 'สารานุกรมวัฒนธรรมภาคใต้',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"แหลงใต้" คือการพูดภาษาถิ่นใต้ ส่วน "แหลงทองแดง" คือคนใต้พูดภาษากลางแต่สำเนียงติดใต้',
    viewCount: 2800,
    favoritesCount: 650,
    createdAt: '2025-01-10T10:00:00Z',
    updatedAt: '2025-01-10T10:00:00Z',
  },
  {
    id: 'south-lae',
    dialectWord: 'แล',
    standardWord: 'ดู',
    pronunciation: 'แล (เสียงเอกสั้นห้วน)',
    meaning: 'มองดู ชำเลืองดู สังเกตการณ์',
    region: 'south',
    province: 'สุราษฎร์ธานี',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'แลต๊ะ นกบินมาเต็มต้นไม้เลย',
        standardTranslation: 'ดูสิ นกบินมาเกาะเต็มต้นไม้เลย',
      },
    ],
    relatedWordIds: ['north-phor', 'isan-boeng', 'central-du'],
    sources: [
      {
        title: 'ภาษาไทยถิ่นใต้ สถาบันทักษิณคดีศึกษา',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1950,
    favoritesCount: 380,
    createdAt: '2025-01-11T09:00:00Z',
    updatedAt: '2025-01-11T09:00:00Z',
  },
  {
    id: 'south-dai-raeng-ok',
    dialectWord: 'ได้แรงอก',
    standardWord: 'สะใจ/ชื่นใจมาก',
    pronunciation: 'ได้-แรง-อก',
    meaning: 'รู้สึกสมใจอยาก สะใจ ชื่นใจอย่างถึงที่สุด หายหิวกระหาย',
    region: 'south',
    province: 'พัทลุง',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'กินน้ำชุบเผ็ดๆ กับผักเหนาะ ได้แรงอกจริง!',
        standardTranslation: 'กินน้ำพริกเผ็ดๆ แกล้มผักสด สะใจถึงใจจริงๆ!',
      },
    ],
    relatedWordIds: ['south-roi', 'isan-suang', 'north-juen-jai'],
    sources: [
      {
        title: 'ภาษาและอารมณ์ขันชาวใต้ มหาวิทยาลัยทักษิณ',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'คำอุทานแสดงความพึงพอใจอย่างสูงสุด มักใช้เวลาได้กินของเผ็ดร้อนสมใจ',
    viewCount: 3100,
    favoritesCount: 810,
    createdAt: '2025-01-11T12:00:00Z',
    updatedAt: '2025-01-11T12:00:00Z',
  },
  {
    id: 'south-khee-hok',
    dialectWord: 'ขี้ฮก',
    standardWord: 'โกหก',
    pronunciation: 'ขี้-ฮก',
    meaning: 'พูดเท็จ หลอกลวง ไม่พูดเรื่องจริง',
    region: 'south',
    province: 'ตรัง',
    category: 'อุปนิสัยและพฤติกรรม',
    examples: [
      {
        dialectSentence: 'คนขี้ฮกเบเบ พูดอะไรก็ไม่มีใครเชื่อแล้ว',
        standardTranslation: 'คนพูดโกหกหลอกลวง พูดอะไรก็ไม่มีใครเชื่อแล้ว',
      },
    ],
    relatedWordIds: ['isan-khee-tua', 'central-ko-hok'],
    sources: [
      {
        title: 'พจนานุกรมภาษาไทยถิ่นใต้',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"ขี้ฮกเบเบ" หมายถึง โกหกพกลมไปเรื่อย',
    viewCount: 2200,
    favoritesCount: 470,
    createdAt: '2025-01-12T08:30:00Z',
    updatedAt: '2025-01-12T08:30:00Z',
  },
  {
    id: 'south-nui',
    dialectWord: 'นุ้ย',
    standardWord: 'น้อง/ฉัน',
    pronunciation: 'นุ้ย (เสียงตรี)',
    meaning: 'สรรพนามแทนตนเองสำหรับเด็ก ผู้น้อย หรือคำเรียกเด็กเล็กด้วยความเอ็นดู',
    region: 'south',
    province: 'ภูเก็ต',
    category: 'คำถามและสรรพนาม',
    examples: [
      {
        dialectSentence: 'นุ้ยจะไปซื้อของกับแม่นะป้า',
        standardTranslation: 'หนูจะไปซื้อของกับแม่นะคะคุณป้า',
      },
    ],
    relatedWordIds: ['south-bao', 'central-chan'],
    sources: [
      {
        title: 'วัฒนธรรมปักษ์ใต้และชุมชนภูเก็ต',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1600,
    favoritesCount: 310,
    createdAt: '2025-01-12T14:00:00Z',
    updatedAt: '2025-01-12T14:00:00Z',
  },
  {
    id: 'south-chao',
    dialectWord: 'ฉาว',
    standardWord: 'เสียงดัง/เอ็ดตะโร',
    pronunciation: 'ฉาว (เสียงจัตวา)',
    meaning: 'ส่งเสียงดัง อื้ออึง โวยวาย หรือทะเลาะกันเสียงดัง',
    region: 'south',
    province: 'กระบี่',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'อย่าทำฉาวไป คนเฒ่าคนแก่กำลังนอนพัก',
        standardTranslation: 'อย่าส่งเสียงดังไป คนแก่กำลังนอนพักผ่อนอยู่',
      },
    ],
    relatedWordIds: ['central-siang-dang'],
    sources: [
      {
        title: 'สารานุกรมภาษาถิ่นใต้',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1250,
    favoritesCount: 210,
    createdAt: '2025-01-13T09:40:00Z',
    updatedAt: '2025-01-13T09:40:00Z',
  },
  {
    id: 'south-sai',
    dialectWord: 'ไซร',
    standardWord: 'ทำไม',
    pronunciation: 'ไซร (เสียงเอกสั้นห้วน)',
    meaning: 'ด้วยเหตุใด เพราะอะไร ทำไมจึงเป็นเช่นนั้น',
    region: 'south',
    province: 'สตูล',
    category: 'คำถามและสรรพนาม',
    examples: [
      {
        dialectSentence: 'ไซรถึงไม่มากินข้าวด้วยกันเล่า',
        standardTranslation: 'ทำไมถึงไม่มากินข้าวด้วยกันล่ะ',
      },
    ],
    relatedWordIds: ['isan-ee-hyang', 'central-tham-mai'],
    sources: [
      {
        title: 'ภาษาถิ่นใต้สตูลและฝั่งอันดามัน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1850,
    favoritesCount: 390,
    createdAt: '2025-01-13T16:15:00Z',
    updatedAt: '2025-01-13T16:15:00Z',
  },
  {
    id: 'south-mai',
    dialectWord: 'ม้าย',
    standardWord: 'ไหม/หรือไม่',
    pronunciation: 'ม้าย (เสียงโทสูงห้วน)',
    meaning: 'คำลงท้ายประโยคคำถามว่า ใช่หรือไม่ หรือเปล่า',
    region: 'south',
    province: 'พังงา',
    category: 'คำถามและสรรพนาม',
    examples: [
      {
        dialectSentence: 'วันนี้ไปหลบบ้านม้ายน้อง',
        standardTranslation: 'วันนี้กลับบ้านหรือเปล่าน้อง',
      },
    ],
    relatedWordIds: ['isan-bo', 'north-kor'],
    sources: [
      {
        title: 'พจนานุกรมภาษาถิ่นใต้',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1410,
    favoritesCount: 230,
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  {
    id: 'south-lop-ban',
    dialectWord: 'หลบบ้าน',
    standardWord: 'กลับบ้าน',
    pronunciation: 'หลบ-บ้าน',
    meaning: 'เดินทางกลับบ้าน ถอยกลับคืนที่พักอาศัย',
    region: 'south',
    province: 'นครศรีธรรมราช',
    category: 'การเดินทางและกิจกรรม',
    examples: [
      {
        dialectSentence: 'หวันเย็นแล้ว รีบหลบบ้านต๊ะ ค่อยคุยใหม่',
        standardTranslation: 'พลบค่ำแล้ว รีบกลับบ้านเถอะ ค่อยคุยกันใหม่',
      },
    ],
    relatedWordIds: ['north-pik', 'isan-muea-ban', 'central-klap-ban'],
    sources: [
      {
        title: 'สำนวนและวิถีชาวใต้ สถาบันทักษิณคดีศึกษา',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'คำว่า "หลบ" ในภาษาใต้แปลว่า กลับ หันกลับ',
    viewCount: 2300,
    favoritesCount: 510,
    createdAt: '2025-01-14T15:30:00Z',
    updatedAt: '2025-01-14T15:30:00Z',
  },
  {
    id: 'south-jang-hu',
    dialectWord: 'จังหู',
    standardWord: 'เยอะมาก',
    pronunciation: 'จัง-หู',
    meaning: 'มากมาย มหาศาล ล้นหลาม',
    region: 'south',
    province: 'ชุมพร',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'ลูกทุเรียนปีนี้ออกดกจังหูเลยคุณป้า',
        standardTranslation: 'ทุเรียนปีนี้ติดผลดกเยอะมากๆ เลยคุณป้า',
      },
    ],
    relatedWordIds: ['north-jad-nak', 'isan-ka-dor'],
    spellingVariants: ['จังหู้'],
    sources: [
      {
        title: 'ภาษาไทยถิ่นใต้ ชุมพร-ระนอง',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 2050,
    favoritesCount: 430,
    createdAt: '2025-01-15T08:00:00Z',
    updatedAt: '2025-01-15T08:00:00Z',
  },
  {
    id: 'south-tham-thao',
    dialectWord: 'ทำเฒ่า',
    standardWord: 'ทำอวดรู้/ทำตัวแก่แดด',
    pronunciation: 'ทำ-เฒ่า',
    meaning: 'แสดงตนว่ารู้ดีเกินอายุ สอดรู้ หรือวางท่าเป็นผู้ใหญ่เกินตัว',
    region: 'south',
    province: 'ระนอง',
    category: 'อุปนิสัยและพฤติกรรม',
    examples: [
      {
        dialectSentence: 'เด็กอย่ามาทำเฒ่าเรื่องผู้ใหญ่ ฟังเขาคุยไปก่อน',
        standardTranslation: 'เด็กอย่ามาทำอวดรู้เรื่องของผู้ใหญ่ นั่งฟังไปก่อน',
      },
    ],
    relatedWordIds: ['north-salid'],
    sources: [
      {
        title: 'สารานุกรมภาษาถิ่นใต้',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1720,
    favoritesCount: 310,
    createdAt: '2025-01-15T11:45:00Z',
    updatedAt: '2025-01-15T11:45:00Z',
  },
  {
    id: 'south-hwan-yen',
    dialectWord: 'หวันเย็น',
    standardWord: 'พลบค่ำ/ตอนเย็น',
    pronunciation: 'หวัน-เย็น',
    meaning: 'ช่วงเวลาที่พระอาทิตย์กำลังจะตกดิน เวลาโพล้เพล้',
    region: 'south',
    province: 'ปัตตานี',
    category: 'ธรรมชาติและเวลา',
    examples: [
      {
        dialectSentence: 'พอหวันเย็น ลมทะเลพัดเย็นสบายน่าเดินเล่น',
        standardTranslation: 'พอถึงช่วงพลบค่ำ ลมทะเลพัดเย็นสบายน่าเดินเล่น',
      },
    ],
    relatedWordIds: ['north-khao-laeng'],
    sources: [
      {
        title: 'ภาษาไทยถิ่นใต้ชายแดนภาคใต้',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"หวัน" ในภาษาใต้หมายถึง ตะวัน หรือ พระอาทิตย์ เช่น หวันเที่ยง หวันมุ้งมิ้ง',
    viewCount: 1480,
    favoritesCount: 280,
    createdAt: '2025-01-16T12:00:00Z',
    updatedAt: '2025-01-16T12:00:00Z',
  },
  {
    id: 'south-khee-chit',
    dialectWord: 'ขี้ชิด',
    standardWord: 'ขี้เหนียว',
    pronunciation: 'ขี้-ชิด',
    meaning: 'ตระหนี่ถี่เหนียว ไม่ยอมสละทรัพย์หรือแบ่งปัน',
    region: 'south',
    province: 'ยะลา',
    category: 'อุปนิสัยและพฤติกรรม',
    examples: [
      {
        dialectSentence: 'อย่าขี้ชิดแรง เลี้ยงน้ำเพื่อนสักแก้วจะเป็นไร',
        standardTranslation: 'อย่าขี้เหนียวจนเกินไป เลี้ยงน้ำเพื่อนสักแก้วจะเป็นไรไป',
      },
    ],
    relatedWordIds: ['central-ta-nhee'],
    sources: [
      {
        title: 'ภาษาถิ่นใต้ ยะลาและนราธิวาส',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 890,
    favoritesCount: 125,
    createdAt: '2025-01-16T16:20:00Z',
    updatedAt: '2025-01-16T16:20:00Z',
  },
  {
    id: 'south-hid-hui',
    dialectWord: 'หิดหุ้ย',
    standardWord: 'นิดเดียว',
    pronunciation: 'หิด-หุ้ย',
    meaning: 'เล็กน้อยมาก นิดเดียว จิ๊บจ๊อย',
    region: 'south',
    province: 'นราธิวาส',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'ตักข้าวให้หิดหุ้ย กลัวอ้วนหรืออย่างไร',
        standardTranslation: 'ตักข้าวให้แค่นิดเดียว กลัวอ้วนหรืออย่างไร',
      },
    ],
    relatedWordIds: ['isan-jak-noi', 'north-noi'],
    sources: [
      {
        title: 'พจนานุกรมภาษาถิ่นใต้',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1100,
    favoritesCount: 195,
    createdAt: '2025-01-17T09:40:00Z',
    updatedAt: '2025-01-17T09:40:00Z',
  },
  {
    id: 'south-khob',
    dialectWord: 'ขบ',
    standardWord: 'กัด',
    pronunciation: 'ขบ (เสียงเอกสั้น)',
    meaning: 'ใช้ฟันงับหรือขบกัดสิ่งใดสิ่งหนึ่ง',
    region: 'south',
    province: 'สงขลา',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'ระวังหมาขบเน้อ มันดุอยู่',
        standardTranslation: 'ระวังหมากัดนะ มันดุอยู่เหมือนกัน',
      },
    ],
    relatedWordIds: ['central-kat'],
    sources: [
      {
        title: 'ภาษาถิ่นสงขลา',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 950,
    favoritesCount: 140,
    createdAt: '2025-01-17T11:00:00Z',
    updatedAt: '2025-01-17T11:00:00Z',
  },
  {
    id: 'south-bao',
    dialectWord: 'บ่าว',
    standardWord: 'เด็กหนุ่ม/พี่ชาย',
    pronunciation: 'บ่าว (เสียงเอก)',
    meaning: 'ชายหนุ่ม ชายรุ่น หรือคำเรียกน้องชาย/พี่ชายด้วยความสนิท',
    region: 'south',
    province: 'นครศรีธรรมราช',
    category: 'คำถามและสรรพนาม',
    examples: [
      {
        dialectSentence: 'น้องบ่าวไปไหนมา แต่งตัวหล่อเชียว',
        standardTranslation: 'น้องชายไปไหนมา แต่งตัวหล่อเชียว',
      },
    ],
    relatedWordIds: ['south-nui'],
    sources: [
      {
        title: 'สารานุกรมวัฒนธรรมภาคใต้',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"ไอ้บ่าว" หรือ "น้องบ่าว" ใช้เรียกผู้ชายด้วยความเอ็นดูเป็นกันเอง',
    viewCount: 1350,
    favoritesCount: 240,
    createdAt: '2025-01-18T09:00:00Z',
    updatedAt: '2025-01-18T09:00:00Z',
  },

  // ================= CENTRAL (ภาคกลาง / พื้นถิ่นกลาง / สำเนียงถิ่น) =================
  {
    id: 'central-aroi',
    dialectWord: 'อร่อย',
    standardWord: 'อร่อย',
    pronunciation: 'อะ-หร่อย',
    meaning: 'มีรสชาติดี ถูกลิ้น ทำให้เจริญอาหาร (คำภาษาไทยมาตรฐาน)',
    region: 'central',
    province: 'กรุงเทพมหานคร',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'กับข้าวฝีมือแม่ อร่อยที่สุดในโลก',
        standardTranslation: 'กับข้าวฝีมือแม่ อร่อยที่สุดในโลก',
      },
    ],
    relatedWordIds: ['north-lam', 'isan-saep', 'south-roi'],
    sources: [
      {
        title: 'พจนานุกรมฉบับราชบัณฑิตยสถาน พ.ศ. 2554',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 2500,
    favoritesCount: 500,
    createdAt: '2025-01-10T08:00:00Z',
    updatedAt: '2025-01-10T08:00:00Z',
  },
  {
    id: 'central-phut',
    dialectWord: 'พูด',
    standardWord: 'พูด',
    pronunciation: 'พูด (เสียงโท)',
    meaning: 'เปล่งเสียงออกมาเป็นถ้อยคำ สื่อสารความหมาย (คำภาษาไทยมาตรฐาน)',
    region: 'central',
    province: 'พระนครศรีอยุธยา',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'พูดความจริงออกมาเถิด จะได้สบายใจ',
        standardTranslation: 'พูดความจริงออกมาเถิด จะได้สบายใจ',
      },
    ],
    relatedWordIds: ['north-oo', 'isan-wao', 'south-laeng'],
    sources: [
      {
        title: 'พจนานุกรมฉบับราชบัณฑิตยสถาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1900,
    favoritesCount: 320,
    createdAt: '2025-01-10T08:30:00Z',
    updatedAt: '2025-01-10T08:30:00Z',
  },
  {
    id: 'central-khit-thueng',
    dialectWord: 'คิดถึง',
    standardWord: 'คิดถึง',
    pronunciation: 'คิด-ถึง',
    meaning: 'นึกถึง นึกถึงด้วยความผูกพันและห่วงหา (คำภาษาไทยมาตรฐาน)',
    region: 'central',
    province: 'นนทบุรี',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'ฉันคิดถึงเธอเสมอแม้เราจะอยู่ไกลกัน',
        standardTranslation: 'ฉันคิดถึงเธอเสมอแม้เราจะอยู่ไกลกัน',
      },
    ],
    relatedWordIds: ['north-kued-teung', 'isan-khit-hot'],
    sources: [
      {
        title: 'พจนานุกรมฉบับราชบัณฑิตยสถาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 2200,
    favoritesCount: 460,
    createdAt: '2025-01-11T08:00:00Z',
    updatedAt: '2025-01-11T08:00:00Z',
  },
  {
    id: 'central-du',
    dialectWord: 'ดู',
    standardWord: 'ดู',
    pronunciation: 'ดู (เสียงสามัญ)',
    meaning: 'มอง ใช้สายตาสังเกตสิ่งใดสิ่งหนึ่ง (คำภาษาไทยมาตรฐาน)',
    region: 'central',
    province: 'กรุงเทพมหานคร',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'ช่วยดูทางข้างหน้าให้ดีๆ นะ',
        standardTranslation: 'ช่วยดูทางข้างหน้าให้ดีๆ นะ',
      },
    ],
    relatedWordIds: ['north-phor', 'isan-boeng', 'south-lae'],
    sources: [
      {
        title: 'พจนานุกรมฉบับราชบัณฑิตยสถาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1400,
    favoritesCount: 190,
    createdAt: '2025-01-11T09:00:00Z',
    updatedAt: '2025-01-11T09:00:00Z',
  },
  {
    id: 'central-hi',
    dialectWord: 'ฮิ',
    standardWord: 'สิ/นะ (คำลงท้าย)',
    pronunciation: 'ฮิ (เสียงตรีสั้น)',
    meaning: 'คำลงท้ายประโยคแสดงความเป็นกันเองและยืนยันในภาษาถิ่นระยอง จันทบุรี ตราด',
    region: 'central',
    province: 'ระยอง',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'ไปเที่ยวเกาะเสม็ดกันฮิ น้ำใสแจ๋วเลย',
        standardTranslation: 'ไปเที่ยวเกาะเสม็ดกันสิ น้ำทะเลใสแจ๋วเลยนะ',
      },
    ],
    relatedWordIds: ['central-phut'],
    sources: [
      {
        title: 'ภาษาและวัฒนธรรมพื้นบ้านภาคตะวันออก มหาวิทยาลัยบูรพา',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'เป็นเอกลักษณ์ของสำเนียงระยอง-จันทบุรี เช่น "กินข้าวฮิ"',
    viewCount: 2150,
    favoritesCount: 520,
    createdAt: '2025-01-12T10:00:00Z',
    updatedAt: '2025-01-12T10:00:00Z',
  },
  {
    id: 'central-jia',
    dialectWord: 'เจี๊ยะ',
    standardWord: 'กิน',
    pronunciation: 'เจี๊ยะ (เสียงตรีสั้น)',
    meaning: 'รับประทานอาหาร (คำยืมภาษาแต้จิ๋วที่ใช้ในหมู่ชาวไทยเชื้อสายจีนภาคกลาง)',
    region: 'central',
    province: 'กรุงเทพมหานคร',
    district: 'สัมพันธวงศ์ (เยาวราช)',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'ไปเจี๊ยะข้าวต้มกุ๊ยแถวเยาวราชกันไหม',
        standardTranslation: 'ไปกินข้าวต้มกุ๊ยแถวเยาวราชกันไหม',
      },
    ],
    relatedWordIds: ['central-aroi'],
    sources: [
      {
        title: 'ภาษาจีนแต้จิ๋วในภาษาไทย จุฬาลงกรณ์มหาวิทยาลัย',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1720,
    favoritesCount: 310,
    createdAt: '2025-01-12T14:30:00Z',
    updatedAt: '2025-01-12T14:30:00Z',
  },
  {
    id: 'central-klap-ban',
    dialectWord: 'กลับบ้าน',
    standardWord: 'กลับบ้าน',
    pronunciation: 'กลับ-บ้าน',
    meaning: 'คืนสู่ที่พัก คืนสู่ภูมิลำเนา (คำภาษาไทยมาตรฐาน)',
    region: 'central',
    province: 'ปทุมธานี',
    category: 'การเดินทางและกิจกรรม',
    examples: [
      {
        dialectSentence: 'เย็นวันศุกร์ทุกคนต่างรีบกลับบ้านไปพักผ่อน',
        standardTranslation: 'เย็นวันศุกร์ทุกคนต่างรีบกลับบ้านไปพักผ่อน',
      },
    ],
    relatedWordIds: ['north-pik', 'isan-muea-ban', 'south-lop-ban'],
    sources: [
      {
        title: 'พจนานุกรมฉบับราชบัณฑิตยสถาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1650,
    favoritesCount: 270,
    createdAt: '2025-01-13T08:00:00Z',
    updatedAt: '2025-01-13T08:00:00Z',
  },
  {
    id: 'central-ko-hok',
    dialectWord: 'โกหก',
    standardWord: 'โกหก',
    pronunciation: 'โก-หก',
    meaning: 'พูดปด กล่าวเท็จ ไม่เป็นความจริง (คำภาษาไทยมาตรฐาน)',
    region: 'central',
    province: 'กรุงเทพมหานคร',
    category: 'อุปนิสัยและพฤติกรรม',
    examples: [
      {
        dialectSentence: 'การโกหกทำให้สูญเสียความไว้วางใจจากผู้อื่น',
        standardTranslation: 'การโกหกทำให้สูญเสียความไว้วางใจจากผู้อื่น',
      },
    ],
    relatedWordIds: ['isan-khee-tua', 'south-khee-hok'],
    sources: [
      {
        title: 'พจนานุกรมฉบับราชบัณฑิตยสถาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1390,
    favoritesCount: 210,
    createdAt: '2025-01-13T11:00:00Z',
    updatedAt: '2025-01-13T11:00:00Z',
  },
  {
    id: 'central-pai-noer',
    dialectWord: 'เหน่อ',
    standardWord: 'สำเนียงแปร่ง/ลากเสียง',
    pronunciation: 'เหน่อ (เสียงเอก)',
    meaning: 'ลักษณะการออกเสียงที่มีสำเนียงสูงต่ำลากเสียงเฉพาะถิ่น โดยเฉพาะสุพรรณบุรี กาญจนบุรี',
    region: 'central',
    province: 'สุพรรณบุรี',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'พูดเหน่อสุพรรณนี่ฟังแล้วมีเสน่ห์จังเลยนะจ๊ะ',
        standardTranslation: 'พูดสำเนียงเหน่อสุพรรณนี้ฟังแล้วมีเสน่ห์มากเลยนะ',
      },
    ],
    relatedWordIds: ['central-phut'],
    sources: [
      {
        title: 'สำเนียงสุพรรณบุรีและวิถีคนลุ่มน้ำท่าจีน',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'สำเนียงเหน่อสุพรรณถือเป็นสำเนียงภาษาไทยดั้งเดิมที่มีความไพเราะและมีเอกลักษณ์',
    viewCount: 1980,
    favoritesCount: 420,
    createdAt: '2025-01-14T09:00:00Z',
    updatedAt: '2025-01-14T09:00:00Z',
  },
  {
    id: 'central-bia',
    dialectWord: 'เบี้ย',
    standardWord: 'เงิน',
    pronunciation: 'เบี้ย (เสียงโท)',
    meaning: 'เงินตรา หรือมูลค่าเงิน (คำภาษาไทยโบราณที่ยังพบในวรรณกรรมและสำนวนภาคกลาง)',
    region: 'central',
    province: 'พระนครศรีอยุธยา',
    category: 'สถานที่และสิ่งของ',
    examples: [
      {
        dialectSentence: 'ทำงานมาทั้งเดือน ได้เบี้ยมาใช้จ่ายในครอบครัว',
        standardTranslation: 'ทำงานมาทั้งเดือน ได้เงินมาใช้จ่ายในครอบครัว',
      },
    ],
    relatedWordIds: ['central-ta-nhee'],
    sources: [
      {
        title: 'ประวัติศาสตร์เงินตราสยาม',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'ในอดีตใช้เปลือกหอยเบี้ยเป็นตัวกลางในการแลกเปลี่ยนสินค้า',
    viewCount: 890,
    favoritesCount: 150,
    createdAt: '2025-01-14T14:00:00Z',
    updatedAt: '2025-01-14T14:00:00Z',
  },
  {
    id: 'central-chamoi',
    dialectWord: 'ชะม้อย',
    standardWord: 'ชำเลืองมอง',
    pronunciation: 'ชะ-ม้อย',
    meaning: 'ชำเลืองสายตาดู หรือส่งสายตาหวาน (คำภาคกลางโบราณ)',
    region: 'central',
    province: 'เพชรบุรี',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'แม่หญิงชะม้อยชะม้ายชายตาแลมาทางนี้',
        standardTranslation: 'หญิงสาวชำเลืองส่งสายตาหวานมองมาทางนี้',
      },
    ],
    relatedWordIds: ['central-du'],
    sources: [
      {
        title: 'วรรณคดีไทยสมัยอยุธยาและรัตนโกสินทร์',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 780,
    favoritesCount: 120,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'central-ta-nhee',
    dialectWord: 'ตระหนี่',
    standardWord: 'ขี้เหนียว',
    pronunciation: 'ตระ-หนี่',
    meaning: 'หวงแหนทรัพย์ ไม่ยอมเสียสละแบ่งปัน (คำภาษาไทยมาตรฐาน)',
    region: 'central',
    province: 'กรุงเทพมหานคร',
    category: 'อุปนิสัยและพฤติกรรม',
    examples: [
      {
        dialectSentence: 'ความตระหนี่ถี่เหนียวเกินไปทำให้ไม่มีมิตรสหาย',
        standardTranslation: 'ความขี้เหนียวเกินไปทำให้ไม่มีเพื่อนฝูง',
      },
    ],
    relatedWordIds: ['south-khee-chit'],
    sources: [
      {
        title: 'พจนานุกรมฉบับราชบัณฑิตยสถาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 920,
    favoritesCount: 110,
    createdAt: '2025-01-15T15:00:00Z',
    updatedAt: '2025-01-15T15:00:00Z',
  },
  {
    id: 'central-ko',
    dialectWord: 'โก้',
    standardWord: 'เท่/ดูดีมีสง่า',
    pronunciation: 'โก้ (เสียงโท)',
    meaning: 'สง่างาม ภูมิฐาน หรูหรา สะดุดตา',
    region: 'central',
    province: 'กรุงเทพมหานคร',
    category: 'คำสแลงและวัยรุ่น',
    examples: [
      {
        dialectSentence: 'สวมเสื้อสูทตัวใหม่แล้วดูโก้เก๋ไม่เบาเลยนะ',
        standardTranslation: 'สวมเสื้อสูทตัวใหม่แล้วดูเท่สง่างามมากทีเดียว',
      },
    ],
    relatedWordIds: ['central-na-rak'],
    sources: [
      {
        title: 'คำสแลงและภาษาปากในสังคมไทย',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1120,
    favoritesCount: 195,
    createdAt: '2025-01-16T11:00:00Z',
    updatedAt: '2025-01-16T11:00:00Z',
  },
  {
    id: 'central-poep',
    dialectWord: 'เปิบ',
    standardWord: 'กินด้วยมือ',
    pronunciation: 'เปิบ (เสียงเอกสั้น)',
    meaning: 'ใช้นิ้วมือหยิบข้าวหรืออาหารเข้าปากอย่างเอร็ดอร่อย',
    region: 'central',
    province: 'สุพรรณบุรี',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'เปิบข้าวกับน้ำพริกปลาทูคลุกมือ อร่อยอย่าบอกใคร',
        standardTranslation: 'กินข้าวด้วยมือกับน้ำพริกปลาทู อร่อยจนไม่ต้องบอกใคร',
      },
    ],
    relatedWordIds: ['central-aroi', 'central-jia'],
    sources: [
      {
        title: 'วัฒนธรรมการกินของคนไทยภาคกลาง',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'เช่นบทกวีชื่อดัง "เปิบข้าวทุกคราวคำ จงสูจำเป็นอาจิณ..." ของจิตร ภูมิศักดิ์',
    viewCount: 1450,
    favoritesCount: 290,
    createdAt: '2025-01-16T16:00:00Z',
    updatedAt: '2025-01-16T16:00:00Z',
  },

  // ================= UNVERIFIED / PENDING / USER COMMUNITY SAMPLE WORDS =================
  {
    id: 'north-som-kham',
    dialectWord: 'ส้มขาม',
    standardWord: 'มะขามเปรี้ยว',
    pronunciation: 'ส้ม-ขาม',
    meaning: 'มะขามที่มีรสเปรี้ยว ใช้ปรุงอาหารพื้นบ้าน',
    region: 'north',
    province: 'เชียงใหม่',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'เอาส้มขามมาใส่แกงส้มหน่อยเจ้า',
        standardTranslation: 'เอามะขามเปรี้ยวมาใส่แกงส้มหน่อยค่ะ',
      },
    ],
    relatedWordIds: ['north-lam'],
    sources: [
      {
        title: 'ข้อมูลภาษาถิ่นจากชุมชน (ยังรอเอกสารอ้างอิงยืนยัน)',
      },
    ],
    verificationStatus: 'unverified',
    viewCount: 320,
    favoritesCount: 45,
    createdAt: '2025-02-01T10:00:00Z',
    updatedAt: '2025-02-01T10:00:00Z',
  },
  {
    id: 'isan-khao-piak',
    dialectWord: 'ข้าวเปียก',
    standardWord: 'ก๋วยจั๊บญวน/ข้าวต้มเครื่อง',
    pronunciation: 'ข้าว-เปียก',
    meaning: 'อาหารประเภทเส้นต้มในน้ำซุปกระดูกหมูเข้มข้น นิยมในอุดรธานี นครพนม อุบลราชธานี',
    region: 'northeast',
    province: 'อุดรธานี',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'ตื่นเช้ามาซดข้าวเปียกเส้นร้อนๆ อิ่มท้องดีแท้',
        standardTranslation: 'ตื่นเช้ามาทานก๋วยจั๊บญวนเส้นสดร้อนๆ อิ่มท้องดีจริงๆ',
      },
    ],
    relatedWordIds: ['isan-saep'],
    sources: [
      {
        title: 'วัฒนธรรมอาหารอีสานตอนบน (ข้อมูลรอการตรวจยืนยัน)',
      },
    ],
    verificationStatus: 'unverified',
    viewCount: 610,
    favoritesCount: 88,
    createdAt: '2025-02-02T12:00:00Z',
    updatedAt: '2025-02-02T12:00:00Z',
  },
  {
    id: 'south-phak-noh',
    dialectWord: 'ผักเหนาะ',
    standardWord: 'ผักเคียง/ผักแกล้ม',
    pronunciation: 'ผัก-เหนาะ',
    meaning: 'ผักสดพื้นบ้านหลากหลายชนิดที่เสิร์ฟแกล้มกับน้ำพริก แกงไตปลา หรือขนมจีนน้ำยา',
    region: 'south',
    province: 'สุราษฎร์ธานี',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'กินขนมจีนปักษ์ใต้ต้องมีผักเหนาะเต็มถาดถึงจะได้แรง',
        standardTranslation: 'กินขนมจีนปักษ์ใต้ต้องมีผักเคียงเต็มถาดถึงจะสะใจ',
      },
    ],
    relatedWordIds: ['south-roi', 'south-dai-raeng-ok'],
    sources: [
      {
        title: 'วัฒนธรรมผักพื้นบ้านภาคใต้ (กำลังตรวจทานวิชาการ)',
      },
    ],
    verificationStatus: 'unverified',
    viewCount: 540,
    favoritesCount: 75,
    createdAt: '2025-02-03T14:00:00Z',
    updatedAt: '2025-02-03T14:00:00Z',
  },

  // ================= EXPANDED NORTHERN (คำเมืองเพิ่มเติม) =================
  {
    id: 'north-hom',
    dialectWord: 'ฮอม',
    standardWord: 'ร่วมลงขัน/สะสม',
    pronunciation: 'ฮอม (เสียงสามัญ)',
    meaning: 'ร่วมกันบริจาค รวมเงิน หรือสะสมสิ่งของร่วมกันเพื่อการกุศลหรืองานบุญ',
    region: 'north',
    province: 'เชียงใหม่',
    category: 'วัฒนธรรมและประเพณี',
    examples: [
      {
        dialectSentence: 'มาฮอมเงินทำบุญทอดผ้าป่าตวยกั๋นเน้อเจ้า',
        standardTranslation: 'มาร่วมลงขันทำบุญทอดผ้าป่าด้วยกันนะคะ',
      },
    ],
    relatedWordIds: ['north-toey'],
    sources: [
      {
        title: 'ประเพณีและวัฒนธรรมล้านนา มหาวิทยาลัยเชียงใหม่',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"ฮอมผ้าป่า" หรือ "ฮอมบุญ" คือวิถีความสามัคคีของชุมชนล้านนา',
    viewCount: 880,
    favoritesCount: 140,
    createdAt: '2025-02-05T08:00:00Z',
    updatedAt: '2025-02-05T08:00:00Z',
  },
  {
    id: 'north-ba-dai',
    dialectWord: 'บ่าดาย',
    standardWord: 'เปล่าๆ/เฉยๆ',
    pronunciation: 'บ่า-ดาย',
    meaning: 'ไม่มีอะไรแอบแฝง ทำไปเปล่าๆ หรืออยู่เฉยๆ โดยมิได้มีเจตนาอื่น',
    region: 'north',
    province: 'เชียงราย',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'เปิ้นแวะมาแอ่วหาบ่าดาย บ่ได้มีเรื่องอะหยังหรอก',
        standardTranslation: 'ฉันแวะมาเที่ยวหาเฉยๆ ไม่ได้มีเรื่องอะไรหรอก',
      },
    ],
    relatedWordIds: ['north-aew'],
    sources: [
      {
        title: 'พจนานุกรมคำเมืองล้านนาไทย',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 750,
    favoritesCount: 95,
    createdAt: '2025-02-05T09:00:00Z',
    updatedAt: '2025-02-05T09:00:00Z',
  },
  {
    id: 'north-po-chai',
    dialectWord: 'ป้อจาย',
    standardWord: 'ผู้ชาย',
    pronunciation: 'ป้อ-จาย',
    meaning: 'บุรุษ เพศชาย',
    region: 'north',
    province: 'ลำพูน',
    category: 'คำถามและสรรพนาม',
    examples: [
      {
        dialectSentence: 'ป้อจายคนนั้นอู้จ๋าเพราะขนาด',
        standardTranslation: 'ผู้ชายคนนั้นพูดจาเพราะมาก',
      },
    ],
    relatedWordIds: ['north-mae-ying', 'south-bao'],
    sources: [
      {
        title: 'ภาษาล้านนาเพื่อการสื่อสาร',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 920,
    favoritesCount: 110,
    createdAt: '2025-02-05T10:00:00Z',
    updatedAt: '2025-02-05T10:00:00Z',
  },
  {
    id: 'north-mae-ying',
    dialectWord: 'แม่ญิง',
    standardWord: 'ผู้หญิง',
    pronunciation: 'แม่-ยิง (เสียงนาสิก)',
    meaning: 'สตรี เพศหญิง',
    region: 'north',
    province: 'น่าน',
    category: 'คำถามและสรรพนาม',
    examples: [
      {
        dialectSentence: 'แม่ญิงเมืองน่านงามแต๊และอ่อนช้อย',
        standardTranslation: 'ผู้หญิงเมืองน่านสวยงามจริงๆ และกิริยาอ่อนช้อย',
      },
    ],
    relatedWordIds: ['north-po-chai'],
    sources: [
      {
        title: 'พจนานุกรมคำเมืองล้านนาไทย',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1040,
    favoritesCount: 165,
    createdAt: '2025-02-05T11:00:00Z',
    updatedAt: '2025-02-05T11:00:00Z',
  },
  {
    id: 'north-kued-yak',
    dialectWord: 'กึ๊ดยาก',
    standardWord: 'กลุ้มใจ/คิดหนัก',
    pronunciation: 'กึ๊ด-ยาก',
    meaning: 'มีความวิตกกังวล หนักใจ ตัดสินใจยาก',
    region: 'north',
    province: 'พะเยา',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'งานนี้ทำหื้อกึ๊ดยากขนาด บ่ฮู้จะยะจะไดดี',
        standardTranslation: 'งานนี้ทำให้กลุ้มใจคิดหนักมาก ไม่รู้จะทำอย่างไรดี',
      },
    ],
    relatedWordIds: ['north-kued-teung', 'south-khuay-jai'],
    sources: [
      {
        title: 'สารานุกรมภาษาถิ่นล้านนา',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 680,
    favoritesCount: 82,
    createdAt: '2025-02-06T09:00:00Z',
    updatedAt: '2025-02-06T09:00:00Z',
  },
  {
    id: 'north-khao-neung',
    dialectWord: 'ข้าวนึ่ง',
    standardWord: 'ข้าวเหนียวนึ่ง',
    pronunciation: 'ข้าว-นึ่ง',
    meaning: 'ข้าวเหนียวที่นึ่งสุกแล้วสำหรับรับประทานเป็นอาหารหลักของชาวเหนือ',
    region: 'north',
    province: 'เชียงใหม่',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'กิ๋นข้าวนึ่งฮ้อนๆ กับลาบคั่ว ลำแต๊ๆ เน้อ',
        standardTranslation: 'กินข้าวเหนียวนึ่งร้อนๆ กับลาบคั่ว อร่อยจริงๆ นะ',
      },
    ],
    relatedWordIds: ['north-lam'],
    sources: [
      {
        title: 'วิถีการกินล้านนา',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'ชาวเหนือนิยมใส่กระติบข้าวหรือ "แอ๊บข้าว"',
    viewCount: 830,
    favoritesCount: 120,
    createdAt: '2025-02-06T10:00:00Z',
    updatedAt: '2025-02-06T10:00:00Z',
  },

  // ================= EXPANDED NORTHEASTERN (อีสานเพิ่มเติม) =================
  {
    id: 'isan-soi',
    dialectWord: 'ซ่อย',
    standardWord: 'ช่วย/ช่วยเหลือ',
    pronunciation: 'ซ่อย (เสียงเอก)',
    meaning: 'ให้ความช่วยเหลือ เกื้อกูล สงเคราะห์',
    region: 'northeast',
    province: 'ขอนแก่น',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'ไผกะได้ ซ่อยข้อยยกของแนเด้อ',
        standardTranslation: 'ใครก็ได้ ช่วยฉันยกของหน่อยนะ',
      },
    ],
    relatedWordIds: ['central-chuai'],
    sources: [
      {
        title: 'พจนานุกรมภาษาถิ่นอีสาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1420,
    favoritesCount: 260,
    createdAt: '2025-02-07T08:00:00Z',
    updatedAt: '2025-02-07T08:00:00Z',
  },
  {
    id: 'isan-on-son',
    dialectWord: 'ออนซอน',
    standardWord: 'ชื่นชม/หลงใหล',
    pronunciation: 'ออน-ซอน',
    meaning: 'รู้สึกประทับใจ หลงใหล ปลื้มปีติในความงดงามหรือความสามารถ',
    region: 'northeast',
    province: 'กาฬสินธุ์',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'เบิ่งหมอลำแล้วออนซอนในเสียงพิณเสียงแคนหลาย',
        standardTranslation: 'ดูหมอลำแล้วรู้สึกชื่นชมหลงใหลในเสียงพิณเสียงแคนมาก',
      },
    ],
    relatedWordIds: ['isan-boeng', 'isan-mak'],
    sources: [
      {
        title: 'ศิลปวัฒนธรรมดนตรีอีสาน',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'คำนี้สะท้อนความซาบซึ้งใจในศิลปะและธรรมชาติของคนอีสาน',
    viewCount: 1650,
    favoritesCount: 390,
    createdAt: '2025-02-07T09:30:00Z',
    updatedAt: '2025-02-07T09:30:00Z',
  },
  {
    id: 'isan-khai-nae',
    dialectWord: 'ไคแหน่',
    standardWord: 'ค่อยยังชั่ว/ดีขึ้น',
    pronunciation: 'ไค-แหน่',
    meaning: 'อาการทุเลาลง ดีขึ้นจากความเจ็บป่วย หรือสถานการณ์คลี่คลายขึ้น',
    region: 'northeast',
    province: 'ร้อยเอ็ด',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'กินยาแล้วไคแหน่ขึ้นหลาย ส่วงไข้แล้ว',
        standardTranslation: 'กินยาแล้วค่อยยังชั่วขึ้นมาก สร่างไข้แล้ว',
      },
    ],
    relatedWordIds: ['isan-suang', 'isan-sao'],
    sources: [
      {
        title: 'ภาษาอีสานในชีวิตประจำวัน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1100,
    favoritesCount: 180,
    createdAt: '2025-02-07T11:00:00Z',
    updatedAt: '2025-02-07T11:00:00Z',
  },
  {
    id: 'isan-jang-see',
    dialectWord: 'จั่งซี่',
    standardWord: 'อย่างนี้/แบบนี้',
    pronunciation: 'จั่ง-ซี่',
    meaning: 'ในลักษณะเช่นนี้ แบบนี้ เช่นนี้',
    region: 'northeast',
    province: 'มหาสารคาม',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'เฮ็ดแบบนี้มันจั่งซี่มันถืกต้องแล้วสู',
        standardTranslation: 'ทำแบบนี้ อย่างนี้นี่แหละถูกต้องแล้วพวกเธอ',
      },
    ],
    relatedWordIds: ['isan-het'],
    sources: [
      {
        title: 'พจนานุกรมภาษาถิ่นอีสาน',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'เช่นเพลงลูกทุ่งยอดฮิต "จั่งซี่มันต้องถอน"',
    viewCount: 2200,
    favoritesCount: 410,
    createdAt: '2025-02-08T08:00:00Z',
    updatedAt: '2025-02-08T08:00:00Z',
  },
  {
    id: 'isan-khee-khan',
    dialectWord: 'ขี้ค้าน',
    standardWord: 'ขี้เกียจ',
    pronunciation: 'ขี้-ค้าน',
    meaning: 'เกียจคร้าน ไม่อยากลงมือทำงานหรือออกแรง',
    region: 'northeast',
    province: 'อุดรธานี',
    category: 'อุปนิสัยและพฤติกรรม',
    examples: [
      {
        dialectSentence: 'มื้อนี้อากาศครึ้มๆ เป็นตาขี้ค้านลุกไปทำงานแท้',
        standardTranslation: 'วันนี้อากาศครึ้มๆ ชวนให้ขี้เกียจลุกไปทำงานจริงๆ',
      },
    ],
    relatedWordIds: ['isan-het'],
    sources: [
      {
        title: 'พจนานุกรมคำถิ่นอีสาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1380,
    favoritesCount: 220,
    createdAt: '2025-02-08T10:00:00Z',
    updatedAt: '2025-02-08T10:00:00Z',
  },
  {
    id: 'isan-ta-hak-ta-phaeng',
    dialectWord: 'ตาฮักตาแพง',
    standardWord: 'น่ารักน่าเอ็นดู',
    pronunciation: 'ตา-ฮัก-ตา-แพง',
    meaning: 'น่ารักน่าชัง ชวนให้ทะนุถนอมหวงแหนด้วยความรักใคร่',
    region: 'northeast',
    province: 'อุบลราชธานี',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'หลานน้อยเพิ่งเกิดมาตาฮักตาแพงขนาดเด้อ',
        standardTranslation: 'หลานตัวน้อยเพิ่งเกิด น่ารักน่าเอ็นดูเหลือเกิน',
      },
    ],
    relatedWordIds: ['isan-pen-ta-hak', 'isan-mak'],
    sources: [
      {
        title: 'คติชนวิทยาอีสาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1540,
    favoritesCount: 330,
    createdAt: '2025-02-08T14:00:00Z',
    updatedAt: '2025-02-08T14:00:00Z',
  },

  // ================= ESAN 108 CURATED COLLECTION (คลังศัพท์อีสานร้อยแปด) =================
  {
    id: 'isan-ngeut',
    dialectWord: 'งึด',
    standardWord: 'แปลกใจ/เหลือเชื่อ',
    pronunciation: 'งึด (เสียงเอกสั้น)',
    meaning: 'รู้สึกประหลาดใจอย่างยิ่ง แปลกใจจนคิดไม่ถึง มหัศจรรย์ใจ หรือเหลือเชื่อ',
    region: 'northeast',
    province: 'ขอนแก่น',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'ข้อยละงึดหลาย เป็นไปได้จั่งได๋ คืองามแท้',
        standardTranslation: 'ฉันแปลกใจเหลือเชื่อจริงๆ เป็นไปได้อย่างไร ทำไมสวยขนาดนี้',
      },
      {
        dialectSentence: 'สูบ่ต้องมางึดดอก เรื่องมันเกิดไปแล้ว',
        standardTranslation: 'พวกเธอไม่ต้องมาแปลกใจหรอก เรื่องมันเกิดขึ้นไปแล้ว',
      },
    ],
    relatedWordIds: ['isan-jang-see', 'isan-pote-poh'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
        note: 'คำศัพท์ภาษาอีสานหมวด ง.',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"งึดหลาย" หรือ "งึดใจ" เป็นคำอุทานยอดนิยมที่ชาวอีสานใช้เมื่อเจอเรื่องประหลาดใจหรือทึ่งมากๆ',
    viewCount: 2850,
    favoritesCount: 620,
    createdAt: '2025-02-12T08:00:00Z',
    updatedAt: '2025-02-12T08:00:00Z',
  },
  {
    id: 'isan-jaop-loy',
    dialectWord: 'จอบหลอย',
    standardWord: 'แอบทำ/ลอบทำลับๆ',
    pronunciation: 'จอบ-หลอย',
    meaning: 'แอบทำสิ่งใดสิ่งหนึ่งโดยไม่ให้ผู้อื่นรู้ ลักลอบกระทำ หรือแอบย่องไปทำ',
    region: 'northeast',
    province: 'มหาสารคาม',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'อย่าพากันจอบหลอยไปกินขนมตอนเดิกล่ะสู',
        standardTranslation: 'อย่าพากันแอบย่องไปกินขนมตอนดึกๆ นะพวกเธอ',
      },
    ],
    relatedWordIds: ['isan-som'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
        note: 'คำว่า จอบ หมายถึง ซุ่มดู และ หลอย หมายถึง แอบ/ลอบ',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'เกิดจากการรวมคำว่า "จอบ" (เฝ้าดู/ซุ่ม) กับ "หลอย" (ลอบ/แอบ)',
    viewCount: 2410,
    favoritesCount: 510,
    createdAt: '2025-02-12T09:15:00Z',
    updatedAt: '2025-02-12T09:15:00Z',
  },
  {
    id: 'isan-pote-poh',
    dialectWord: 'โพดโพ',
    standardWord: 'มากมายเกินไป/อะไรจะขนาดนั้น',
    pronunciation: 'โพด-โพ',
    meaning: 'คำอุทานแสดงความรู้สึกว่ามากมายเกินไป เกินขอบเขต หรืออะไรจะปานนั้น',
    region: 'northeast',
    province: 'ร้อยเอ็ด',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'งามโพดโพ บักโมบักแตง คนมาเบิ่งงานหลายคัก',
        standardTranslation: 'สวยงามอะไรจะขนาดนั้น คนมาดูงานกันเยอะมากๆ',
      },
    ],
    relatedWordIds: ['isan-ka-dor', 'isan-khak'],
    spellingVariants: ['โพดโพ บักโมบักแตง'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'มักสร้อยคำว่า "โพดโพ บักโมบักแตง" เพื่อเพิ่มอรรถรสความสนุกในการสนทนา',
    viewCount: 3100,
    favoritesCount: 780,
    createdAt: '2025-02-12T10:30:00Z',
    updatedAt: '2025-02-12T10:30:00Z',
  },
  {
    id: 'isan-khak',
    dialectWord: 'คัก',
    standardWord: 'สุดยอด/ถึงใจ/แน่นอน',
    pronunciation: 'คัก (เสียงเอกหนักแน่น)',
    meaning: 'ดีที่สุด ชัดเจน แน่นอน ได้ดั่งใจ หรือใช้เน้นย้ำความรู้สึกว่ามาก เช่น ม่วนคัก, แซ่บคัก',
    region: 'northeast',
    province: 'อุดรธานี',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'งานบุญบั้งไฟมื้อนี้ม่วนคักม่วนแน เต้นกันจนส่วง',
        standardTranslation: 'งานบุญบั้งไฟวันนี้สนุกสุดยอดจริงๆ เต้นกันจนโล่งสบายตัว',
      },
      {
        dialectSentence: 'ต้มแซ่บหม้อนี้รสชาติคักขนาด',
        standardTranslation: 'ต้มแซ่บหม้อนี้รสชาติถึงใจจัดจ้านมากๆ',
      },
    ],
    relatedWordIds: ['isan-saep', 'south-roi'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"คักหลาย" หรือ "ม่วนคัก" หมายถึง สนุกสนานถึงใจอย่างยิ่ง',
    viewCount: 3500,
    favoritesCount: 890,
    createdAt: '2025-02-12T11:00:00Z',
    updatedAt: '2025-02-12T11:00:00Z',
  },
  {
    id: 'isan-pen-ta-sang',
    dialectWord: 'เป็นตาซัง',
    standardWord: 'น่าหมั่นไส้/น่าตี',
    pronunciation: 'เป็น-ตา-ซัง',
    meaning: 'น่าหมั่นไส้ น่าตี น่าชัง (มักใช้ในเชิงเอ็นดูเด็กเล็กหรือหยอกล้อคนรัก ไม่ใช่ความเกลียดชังแท้จริง)',
    region: 'northeast',
    province: 'อุบลราชธานี',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'เด็กน้อยคนนี้แก้มป่องเป็นตาซังแท้ ขอหอมแก้มจักฟอดแน',
        standardTranslation: 'เด็กคนนี้แก้มป่องน่าหมั่นไส้จัง ขอหอมแก้มสักทีนะ',
      },
    ],
    relatedWordIds: ['isan-pen-ta-hak'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'ตรงข้ามกับ "เป็นตาฮัก" (น่ารัก) แต่เวลาชาวอีสานพูดมักมีความหมายเอ็นดูแฝงอยู่เสมือนคำว่า "น่ารักน่าตี"',
    viewCount: 2200,
    favoritesCount: 470,
    createdAt: '2025-02-12T13:40:00Z',
    updatedAt: '2025-02-12T13:40:00Z',
  },
  {
    id: 'isan-ta-wen',
    dialectWord: 'ตะเว็น',
    standardWord: 'พระอาทิตย์/ดวงตะวัน',
    pronunciation: 'ตะ-เว็น',
    meaning: 'ดวงอาทิตย์ พระอาทิตย์ แสงตะวัน',
    region: 'northeast',
    province: 'ศรีสะเกษ',
    category: 'ธรรมชาติและเวลา',
    examples: [
      {
        dialectSentence: 'ตะเว็นขึ้นยามเช้า แสงส่องทุ่งนาเป็นตางามหลาย',
        standardTranslation: 'พระอาทิตย์ขึ้นยามเช้า แสงส่องประกายทุ่งนาช่างสวยงามเหลือเกิน',
      },
      {
        dialectSentence: 'ตะเว็นตกดินแล้ว รีบเมือบ้านเถาะสู',
        standardTranslation: 'พระอาทิตย์ตกดินแล้ว รีบกลับบ้านกันเถอะพวกเธอ',
      },
    ],
    relatedWordIds: ['south-hwan-yen'],
    spellingVariants: ['ตาเว็น'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'คนอีสานเรียกช่วงเวลาอิงกับตะเว็น เช่น "ตะเว็นแยงตา" (แดดส่องตาช่วงบ่าย), "ตะเว็นค่ำ"',
    viewCount: 1950,
    favoritesCount: 380,
    createdAt: '2025-02-13T08:10:00Z',
    updatedAt: '2025-02-13T08:10:00Z',
  },
  {
    id: 'isan-huean',
    dialectWord: 'เฮือน',
    standardWord: 'บ้าน/เรือน',
    pronunciation: 'เฮือน (เสียงสามัญยาว)',
    meaning: 'บ้านพักอาศัย เรือน ที่อยู่อาศัยของครอบครัว',
    region: 'northeast',
    province: 'เลย',
    category: 'สถานที่และสิ่งของ',
    examples: [
      {
        dialectSentence: 'เพิ่นพากันเฮ็ดบุญขึ้นเฮือนใหม่ อบอุ่นหลาย',
        standardTranslation: 'พวกเขาจัดงานทำบุญขึ้นบ้านใหม่ บรรยากาศอบอุ่นมาก',
      },
    ],
    relatedWordIds: ['isan-muea-ban'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"เฮือนอีสาน" มักเป็นเรือนไม้ยกใต้ถุนสูงสำหรับนั่งเล่น ทอผ้า และรับลม',
    viewCount: 1820,
    favoritesCount: 340,
    createdAt: '2025-02-13T09:30:00Z',
    updatedAt: '2025-02-13T09:30:00Z',
  },
  {
    id: 'isan-yang',
    dialectWord: 'ย่าง',
    standardWord: 'เดิน',
    pronunciation: 'ย่าง (เสียงโท)',
    meaning: 'ก้าวเท้าเดิน สัญจรด้วยสองเท้า',
    region: 'northeast',
    province: 'หนองบัวลำภู',
    category: 'การเดินทางและกิจกรรม',
    examples: [
      {
        dialectSentence: 'ย่างไปซื้อของอยู่งานวัดนำกันบ่เพื่อน',
        standardTranslation: 'เดินไปซื้อของที่งานวัดด้วยกันไหมเพื่อน',
      },
    ],
    relatedWordIds: ['north-aew'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1680,
    favoritesCount: 290,
    createdAt: '2025-02-13T10:50:00Z',
    updatedAt: '2025-02-13T10:50:00Z',
  },
  {
    id: 'isan-som',
    dialectWord: 'ซอม',
    standardWord: 'แอบมอง/เฝ้าดู/สอดส่อง',
    pronunciation: 'ซอม (เสียงสามัญ)',
    meaning: 'แอบมอง เฝ้าสังเกตการณ์ คอยจับตาดูด้วยความสนใจหรือห่วงใย',
    region: 'northeast',
    province: 'ยโสธร',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'ข้อยกะซอมเบิ่งเจ้าอยู่สุวัน เจ้าสิฮู้โตบ่น้อ',
        standardTranslation: 'ฉันก็คอยแอบมองดูเธออยู่ทุกวัน เธอจะรู้ตัวบ้างไหมนะ',
      },
    ],
    relatedWordIds: ['isan-boeng', 'isan-jaop-loy'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'พบในบทเพลงรักอีสานชื่อดังมากมาย เช่น เพลง "ซอมเบิ่ง"',
    viewCount: 2600,
    favoritesCount: 590,
    createdAt: '2025-02-13T13:00:00Z',
    updatedAt: '2025-02-13T13:00:00Z',
  },
  {
    id: 'isan-ka-sang',
    dialectWord: 'กะส่าง',
    standardWord: 'ช่างมัน/ช่างเถอะ',
    pronunciation: 'กะ-ส่าง',
    meaning: 'ช่างมัน ช่างเถิด ปล่อยวาง ไม่เก็บมาใส่ใจ',
    region: 'northeast',
    province: 'บึงกาฬ',
    category: 'คำปฏิเสธและเงื่อนไข',
    examples: [
      {
        dialectSentence: 'ไผสิเว้าหยังกะส่างเถาะ เฮาเฮ็ดหน้าที่ของเฮาให้ดีที่สุด',
        standardTranslation: 'ใครจะพูดอะไรก็ช่างเถอะ เราทำหน้าที่ของเราให้ดีที่สุด',
      },
    ],
    relatedWordIds: ['isan-sao'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'สะท้อนปรัชญาการใช้ชีวิตแบบปล่อยวางและมองโลกในแง่ดีของชาวอีสาน',
    viewCount: 1750,
    favoritesCount: 360,
    createdAt: '2025-02-13T15:20:00Z',
    updatedAt: '2025-02-13T15:20:00Z',
  },
  {
    id: 'isan-peuk',
    dialectWord: 'ปึก',
    standardWord: 'ทึ่ม/เข้าใจยาก',
    pronunciation: 'ปึก (เสียงเอกสั้น)',
    meaning: 'ทึ่ม ไม่ทันเล่ห์เหลี่ยม คิดช้า หรือหัวช้า (ใช้แซวหยอกล้อกัน)',
    region: 'northeast',
    province: 'นครพนม',
    category: 'อุปนิสัยและพฤติกรรม',
    examples: [
      {
        dialectSentence: 'อย่ามาเฮ็ดปึกหลาย อธิบายไปตั้งหลายเทื่อแล้ว',
        standardTranslation: 'อย่ามาทำเป็นทึ่มไปเลย อธิบายไปตั้งหลายรอบแล้วนะ',
      },
    ],
    relatedWordIds: ['south-bluer'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"ปึกหนา" แปลว่า หัวทึ่มมาก มักใช้หยอกเพื่อนสนิท',
    viewCount: 1480,
    favoritesCount: 270,
    createdAt: '2025-02-14T08:00:00Z',
    updatedAt: '2025-02-14T08:00:00Z',
  },
  {
    id: 'isan-dork',
    dialectWord: 'ดอก',
    standardWord: 'หรอก (คำลงท้าย)',
    pronunciation: 'ดอก (เสียงเอก)',
    meaning: 'คำลงท้ายประโยคเพื่อปฏิเสธ ยืนยัน หรือบรรเทาความรุนแรง ตรงกับคำว่า "หรอก" ในภาษากลาง',
    region: 'northeast',
    province: 'ขอนแก่น',
    category: 'คำเชื่อมและบทสนทนา',
    examples: [
      {
        dialectSentence: 'ข้อยบ่ได้ลืมสัญญาดอก จำได้เสมอเด้อ',
        standardTranslation: 'ฉันไม่ได้ลืมสัญญาหรอกนะ จำได้เสมอเลย',
      },
      {
        dialectSentence: 'บ่เป็นหยังดอก เรื่องแค่นี้เอง',
        standardTranslation: 'ไม่เป็นไรหรอก เรื่องแค่นี้เอง',
      },
    ],
    relatedWordIds: ['central-hi'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com',
        url: 'https://esan108.com/dict/',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1910,
    favoritesCount: 395,
    createdAt: '2025-02-14T09:30:00Z',
    updatedAt: '2025-02-14T09:30:00Z',
  },
  {
    id: 'isan-loy',
    dialectWord: 'หลอย',
    standardWord: 'แอบ/ลอบ/ขโมยทำ',
    pronunciation: 'หลอย (เสียงจัตวา)',
    meaning: 'แอบกระทำโดยไม่ให้คนอื่นเห็น หรือลอบทำสิ่งใดสิ่งหนึ่งอย่างลับๆ',
    region: 'northeast',
    province: 'ขอนแก่น',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'หลอยกินขนมตอนเดิก ย่านหมู่เห็น',
        standardTranslation: 'แอบกินขนมตอนดึก กลัวเพื่อนจะเห็น',
      },
      {
        dialectSentence: 'เจ้าหลอยไปเที่ยวไสมา บ่บอกข้อยเลย',
        standardTranslation: 'เธอแอบไปเที่ยวที่ไหนมา ไม่บอกฉันเลยนะ',
      },
    ],
    relatedWordIds: ['isan-jaop-loy'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com/dict/last',
        url: 'https://esan108.com/dict/last',
        note: 'คำศัพท์ภาษาอีสานล่าสุด',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 2950,
    favoritesCount: 680,
    createdAt: '2025-02-15T08:00:00Z',
    updatedAt: '2025-02-15T08:00:00Z',
  },
  {
    id: 'isan-khee-deat',
    dialectWord: 'ขี้เดียด',
    standardWord: 'รังเกียจ/ขยะแขยง',
    pronunciation: 'ขี้-เดียด',
    meaning: 'รู้สึกขยะแขยง รังเกียจ หรือคลื่นไส้ต่อสิ่งที่ไม่สะอาด',
    region: 'northeast',
    province: 'ร้อยเอ็ด',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'เห็นหนอนเกลื่อนพื้นแล้วเป็นตาขี้เดียดหลาย',
        standardTranslation: 'เห็นหนอนเต็มพื้นแล้วรู้สึกขยะแขยงมาก',
      },
    ],
    relatedWordIds: ['isan-soon'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com/dict/last',
        url: 'https://esan108.com/dict/last',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 2100,
    favoritesCount: 420,
    createdAt: '2025-02-15T09:30:00Z',
    updatedAt: '2025-02-15T09:30:00Z',
  },
  {
    id: 'isan-hoo-khing',
    dialectWord: 'ฮู้คิง',
    standardWord: 'รู้สึกตัว/ได้สติ',
    pronunciation: 'ฮู้-คิง',
    meaning: 'รู้สึกตัว ฟื้นคืนสติ มีสัมปชัญญะรับรู้ตนเอง',
    region: 'northeast',
    province: 'อุบลราชธานี',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'คนไข้เริ่มฮู้คิงแล้ว ลืมตามองหน้าหมอได้',
        standardTranslation: 'คนไข้เริ่มรู้สึกตัวแล้ว ลืมตามองหน้าคุณหมอได้',
      },
    ],
    relatedWordIds: ['isan-suang'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com/dict/last',
        url: 'https://esan108.com/dict/last',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"คิง" ในภาษาอีสานและลาวโบราณหมายถึง ตัว หรือ ร่างกาย',
    viewCount: 1750,
    favoritesCount: 310,
    createdAt: '2025-02-15T11:00:00Z',
    updatedAt: '2025-02-15T11:00:00Z',
  },
  {
    id: 'isan-duek',
    dialectWord: 'ดึก',
    standardWord: 'ขว้าง/ปา/โยน',
    pronunciation: 'ดึก (เสียงเอกสั้น)',
    meaning: 'ขว้าง ปา เหวี่ยงสิ่งของออกไปด้วยกำลังแขน (ต่างจากคำว่าดึกที่แปลว่ากลางคืน)',
    region: 'northeast',
    province: 'มหาสารคาม',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'อย่าดึกก้อนหินลงน้ำ ย่านมันกระเด็นใส่คนอื่น',
        standardTranslation: 'อย่าขว้างก้อนหินลงน้ำ กลัวมันจะกระเด็นใส่คนอื่น',
      },
    ],
    relatedWordIds: ['isan-het'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com/dict/last',
        url: 'https://esan108.com/dict/last',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1980,
    favoritesCount: 360,
    createdAt: '2025-02-15T13:15:00Z',
    updatedAt: '2025-02-15T13:15:00Z',
  },
  {
    id: 'isan-khiat',
    dialectWord: 'เคียด',
    standardWord: 'โกรธ/เคือง/งอน',
    pronunciation: 'เคียด (เสียงโท)',
    meaning: 'รู้สึกโกรธ ขุ่นเคือง หรือแง่งอนในใจ',
    region: 'northeast',
    province: 'อุดรธานี',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'อย่าเคียดให้อ้ายเด้อ อ้ายบ่ได้ตั้งใจลืมสัญญา',
        standardTranslation: 'อย่าโกรธพี่เลยนะ พี่ไม่ได้ตั้งใจลืมสัญญา',
      },
    ],
    relatedWordIds: ['isan-soon'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com/dict/last',
        url: 'https://esan108.com/dict/last',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 2320,
    favoritesCount: 490,
    createdAt: '2025-02-15T14:40:00Z',
    updatedAt: '2025-02-15T14:40:00Z',
  },
  {
    id: 'isan-mid-im-sim',
    dialectWord: 'มิดอิ่มสิ่ม',
    standardWord: 'เงียบสงัด/เงียบกริบ',
    pronunciation: 'มิด-อิ่ม-สิ่ม',
    meaning: 'เงียบสงบ ปราศจากเสียงรบกวน นิ่งเงียบสนิท',
    region: 'northeast',
    province: 'ยโสธร',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'ตกดึกมาบ้านทุ่งมิดอิ่มสิ่ม ได้ยินแต่เสียงลมพัดใบไม้',
        standardTranslation: 'พอดึกมาบ้านทุ่งเงียบสงัดสนิท ได้ยินเพียงเสียงลมพัดใบไม้',
      },
    ],
    relatedWordIds: ['isan-ta-wen'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com/dict/last',
        url: 'https://esan108.com/dict/last',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"มิด" แปลว่า เงียบ ส่วน "อิ่มสิ่ม" เป็นคำสร้อยเน้นย้ำความเงียบสนิท',
    viewCount: 1840,
    favoritesCount: 395,
    createdAt: '2025-02-16T08:20:00Z',
    updatedAt: '2025-02-16T08:20:00Z',
  },
  {
    id: 'isan-kon',
    dialectWord: 'ก่น',
    standardWord: 'ขุด/ขุดดิน',
    pronunciation: 'ก่น (เสียงเอก)',
    meaning: 'ขุดดิน ขุดหาสัตว์หรือพืชใต้ดินด้วยจอบหรือเสียม',
    region: 'northeast',
    province: 'สกลนคร',
    category: 'การเดินทางและกิจกรรม',
    examples: [
      {
        dialectSentence: 'มื้อนี้ชวนกันไปก่นปูนำทุ่งนา มาต้มกินแลง',
        standardTranslation: 'วันนี้ชวนกันไปขุดปูที่ทุ่งนา เอามาต้มกินเป็นมื้อเย็น',
      },
    ],
    relatedWordIds: ['isan-yang'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com/dict/last',
        url: 'https://esan108.com/dict/last',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'วิถีการหากินของชาวอีสาน เช่น ก่นปู, ก่นมัน, ก่นแย้',
    viewCount: 1610,
    favoritesCount: 280,
    createdAt: '2025-02-16T10:00:00Z',
    updatedAt: '2025-02-16T10:00:00Z',
  },
  {
    id: 'isan-sa-doed',
    dialectWord: 'สะเดิด',
    standardWord: 'สะดุ้ง/ตกใจตื่น',
    pronunciation: 'สะ-เดิด',
    meaning: 'สะดุ้งตกใจ กิริยาสะดุ้งตื่นขึ้นมาอย่างฉับพลัน',
    region: 'northeast',
    province: 'ชัยภูมิ',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'นอนหลับอยู่ได้ยินเสียงฟ้าร้องจนสะเดิดตื่น',
        standardTranslation: 'นอนหลับอยู่ได้ยินเสียงฟ้าร้องจนสะดุ้งตื่นขึ้นมา',
      },
    ],
    relatedWordIds: ['isan-hoo-khing'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com/dict/last',
        url: 'https://esan108.com/dict/last',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1920,
    favoritesCount: 350,
    createdAt: '2025-02-16T11:45:00Z',
    updatedAt: '2025-02-16T11:45:00Z',
  },
  {
    id: 'isan-pho',
    dialectWord: 'พ้อ',
    standardWord: 'พบ/เจอ',
    pronunciation: 'พ้อ (เสียงโท)',
    meaning: 'พบปะ ได้เจอ ประสบพบเห็น',
    region: 'northeast',
    province: 'ขอนแก่น',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'ดีใจหลายที่ได้มาพ้อหน้าเจ้าอีกเทื่อหนึ่ง',
        standardTranslation: 'ดีใจมากๆ ที่ได้มาพบหน้าเธออีกครั้งหนึ่ง',
      },
    ],
    relatedWordIds: ['isan-khit-hot'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com/dict/last',
        url: 'https://esan108.com/dict/last',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: '"พ้อหน้าพ้อตา" แปลว่า พบหน้าค่าตากัน',
    viewCount: 2750,
    favoritesCount: 560,
    createdAt: '2025-02-16T13:20:00Z',
    updatedAt: '2025-02-16T13:20:00Z',
  },
  {
    id: 'isan-kueak',
    dialectWord: 'เกือก',
    standardWord: 'เกลือกกลิ้ง/คลุกเคล้า',
    pronunciation: 'เกือก (เสียงเอก)',
    meaning: 'กลิ้งเกลือกตัวกับพื้น หรือคลุกเคล้ากับสิ่งสกปรก ฝุ่น โคลน',
    region: 'northeast',
    province: 'บุรีรัมย์',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'อย่าปล่อยให้เด็กน้อยไปเกือกขี้ดิน เดี๋ยวสิเป็นผื่น',
        standardTranslation: 'อย่าปล่อยให้เด็กๆ ไปเกลือกกลิ้งกับดิน เดี๋ยวจะเป็นผื่นคัน',
      },
    ],
    relatedWordIds: ['isan-yang'],
    sources: [
      {
        title: 'พจนานุกรมภาษาอีสาน esan108.com/dict/last',
        url: 'https://esan108.com/dict/last',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1490,
    favoritesCount: 260,
    createdAt: '2025-02-16T15:00:00Z',
    updatedAt: '2025-02-16T15:00:00Z',
  },

  // ================= EXPANDED SOUTHERN (ภาษาใต้เพิ่มเติม) =================
  {
    id: 'south-sa-wa',
    dialectWord: 'สาว่า',
    standardWord: 'รู้สึกว่า/ดูเหมือนว่า',
    pronunciation: 'สา-ว่า',
    meaning: 'มีความรู้สึก คาดคะเน หรือประเมินว่าน่าจะเป็นเช่นนั้น',
    region: 'south',
    province: 'นครศรีธรรมราช',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'สาว่าฝนจะตกแล้ว ลมพัดแรงจังหู',
        standardTranslation: 'รู้สึกว่าฝนจะตกแล้วนะ ลมพัดแรงมากทีเดียว',
      },
    ],
    relatedWordIds: ['south-jang-hu'],
    sources: [
      {
        title: 'พจนานุกรมภาษาไทยถิ่นใต้ สถาบันทักษิณคดีศึกษา',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1890,
    favoritesCount: 360,
    createdAt: '2025-02-09T08:30:00Z',
    updatedAt: '2025-02-09T08:30:00Z',
  },
  {
    id: 'south-hua-chao',
    dialectWord: 'หัวเช้า',
    standardWord: 'เช้าตรู่/ตอนเช้า',
    pronunciation: 'หัว-เช้า',
    meaning: 'รุ่งอรุณ ช่วงเวลาเริ่มแรกของวันยามเช้า',
    region: 'south',
    province: 'สงขลา',
    category: 'ธรรมชาติและเวลา',
    examples: [
      {
        dialectSentence: 'ตื่นแต่หัวเช้า ไปกินแต่เตี้ยมกับชาร้อนกัน',
        standardTranslation: 'ตื่นแต่เช้าตรู่ ไปกินติ่มซำกับชาร้อนด้วยกัน',
      },
    ],
    relatedWordIds: ['south-hwan-yen'],
    sources: [
      {
        title: 'วิถีชีวิตคนใต้ สถาบันทักษิณคดีศึกษา',
      },
    ],
    verificationStatus: 'verified',
    culturalNote: 'คนใต้นิยมตื่นแต่หัวเช้าไปนั่งร้านน้ำชาสนทนากัน',
    viewCount: 1450,
    favoritesCount: 290,
    createdAt: '2025-02-09T09:40:00Z',
    updatedAt: '2025-02-09T09:40:00Z',
  },
  {
    id: 'south-plam',
    dialectWord: 'ปล้ำ',
    standardWord: 'พยายาม/ขวนขวาย',
    pronunciation: 'ปล้ำ (เสียงโท)',
    meaning: 'ตั้งอกตั้งใจทำอย่างมุ่งมั่น พากเพียรพยายามไม่ย่อท้อ',
    region: 'south',
    province: 'พัทลุง',
    category: 'กิริยาและบทสนทนา',
    examples: [
      {
        dialectSentence: 'อย่าเพิ่งท้อ ปล้ำทำไปเรื่อยๆ เดี๋ยวก็สำเร็จ',
        standardTranslation: 'อย่าเพิ่งท้อแท้ พยายามทำต่อไปเรื่อยๆ เดี๋ยวก็สำเร็จ',
      },
    ],
    relatedWordIds: ['south-tham'],
    sources: [
      {
        title: 'ภาษาและสำนวนชาวใต้',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1200,
    favoritesCount: 210,
    createdAt: '2025-02-09T11:00:00Z',
    updatedAt: '2025-02-09T11:00:00Z',
  },
  {
    id: 'south-bluer',
    dialectWord: 'เบล่อ',
    standardWord: 'เซ่อ/เปิ่น',
    pronunciation: 'เบล่อ (เสียงเอก)',
    meaning: 'เซ่อซ่า งุ่มง่าม ทำอะไรเปิ่นๆ หรือไม่ทันเล่ห์เหลี่ยม',
    region: 'south',
    province: 'ตรัง',
    category: 'อุปนิสัยและพฤติกรรม',
    examples: [
      {
        dialectSentence: 'อย่าทำตัวเบล่อให้เขาหลอกเอาได้นะน้อง',
        standardTranslation: 'อย่าทำตัวเซ่อซ่าให้เขาหลอกเอาได้นะน้อง',
      },
    ],
    relatedWordIds: ['south-tham-thao'],
    sources: [
      {
        title: 'พจนานุกรมภาษาไทยถิ่นใต้',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1340,
    favoritesCount: 195,
    createdAt: '2025-02-09T14:30:00Z',
    updatedAt: '2025-02-09T14:30:00Z',
  },
  {
    id: 'south-khuay-jai',
    dialectWord: 'ขวยใจ',
    standardWord: 'กระวนกระวาย/อึดอัดใจ',
    pronunciation: 'ขวย-ใจ',
    meaning: 'รู้สึกไม่สบายใจ เป็นห่วง หวาดระแวง หรืออึดอัดคับข้องใจ',
    region: 'south',
    province: 'สุราษฎร์ธานี',
    category: 'ความรู้สึกและอารมณ์',
    examples: [
      {
        dialectSentence: 'ลูกยังไม่หลบบ้าน แม่ก็ขวยใจนอนไม่หลับ',
        standardTranslation: 'ลูกยังไม่กลับบ้าน คุณแม่ก็กระวนกระวายนอนไม่หลับ',
      },
    ],
    relatedWordIds: ['south-lop-ban', 'north-kued-yak'],
    sources: [
      {
        title: 'ภาษาไทยถิ่นใต้',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1150,
    favoritesCount: 185,
    createdAt: '2025-02-10T08:00:00Z',
    updatedAt: '2025-02-10T08:00:00Z',
  },

  // ================= EXPANDED CENTRAL (ถิ่นกลางเพิ่มเติม) =================
  {
    id: 'central-chat-pha-ra-roi',
    dialectWord: 'ชะรอย',
    standardWord: 'สงสัยว่า/ดูเหมือนว่า',
    pronunciation: 'ชะ-รอย',
    meaning: 'ดูเหมือนว่า น่าจะเป็นเช่นนั้น (คำโบราณภาคกลาง)',
    region: 'central',
    province: 'พระนครศรีอยุธยา',
    category: 'คำวิเศษณ์และปริมาณ',
    examples: [
      {
        dialectSentence: 'ชะรอยจะมีข่าวดีมาเยือนเรือนเราในเร็ววันนี้',
        standardTranslation: 'ดูเหมือนว่าจะมีข่าวดีมาเยือนบ้านเราในเร็วๆ นี้',
      },
    ],
    relatedWordIds: ['south-sa-wa'],
    sources: [
      {
        title: 'พจนานุกรมฉบับราชบัณฑิตยสถาน',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 890,
    favoritesCount: 130,
    createdAt: '2025-02-10T10:00:00Z',
    updatedAt: '2025-02-10T10:00:00Z',
  },
  {
    id: 'central-khed-fan',
    dialectWord: 'เข็ดฟัน',
    standardWord: 'เสียวฟันจากรสเปรี้ยว',
    pronunciation: 'เข็ด-ฟัน',
    meaning: 'อาการเสียวแปลบที่ฟันเมื่อรับประทานของที่มีรสเปรี้ยวจัด',
    region: 'central',
    province: 'สมุทรสงคราม',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'มะม่วงเบาเปรี้ยวจนเข็ดฟัน แต่น้ำปลาหวานอร่อยมาก',
        standardTranslation: 'มะม่วงเปรี้ยวจนเสียวฟัน แต่น้ำปลาหวานอร่อยมาก',
      },
    ],
    relatedWordIds: ['central-aroi'],
    sources: [
      {
        title: 'พจนานุกรมภาษาไทย',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 960,
    favoritesCount: 145,
    createdAt: '2025-02-10T11:30:00Z',
    updatedAt: '2025-02-10T11:30:00Z',
  },
  {
    id: 'central-im-mee-pee-man',
    dialectWord: 'อิ่มหมีพีมัน',
    standardWord: 'อิ่มหนำสำราญอย่างยิ่ง',
    pronunciation: 'อิ่ม-หมี-พี-มัน',
    meaning: 'ได้รับประทานอาหารอย่างบริบูรณ์สมบูรณ์ อิ่มท้องและมีความสุข',
    region: 'central',
    province: 'กรุงเทพมหานคร',
    category: 'อาหารและรสชาติ',
    examples: [
      {
        dialectSentence: 'งานเลี้ยงปีนี้แขกทุกคนอิ่มหมีพีมันกันถ้วนหน้า',
        standardTranslation: 'งานเลี้ยงปีนี้แขกทุกคนอิ่มหนำสำราญกันถ้วนหน้า',
      },
    ],
    relatedWordIds: ['central-aroi'],
    sources: [
      {
        title: 'สำนวนไทย ฉบับราชบัณฑิตยสภา',
      },
    ],
    verificationStatus: 'verified',
    viewCount: 1120,
    favoritesCount: 175,
    createdAt: '2025-02-10T13:00:00Z',
    updatedAt: '2025-02-10T13:00:00Z',
  },
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-keub",
  dialectWord: "เกิบ",
  standardWord: "รองเท้า",
  pronunciation: "เกิบ (เสียงเอกสั้น)",
  meaning: "เครื่องสวมใส่เท้าเพื่อกันความร้อน ความเจ็บ หรือสิ่งสกปรกในการเดิน",
  region: "northeast",
  province: "ขอนแก่น",
  category: "ของใช้และสิ่งของ",
  examples: [
    {
      dialectSentence: "ถอดเกิบไว้ใต้ตะล่างเฮือนก่อนขึ้นบ้านเด้อ",
      standardTranslation: "ถอดรองเท้าไว้ใต้ถุนบ้านก่อนขึ้นเรือนนะ"
    },
    {
      dialectSentence: "เกิบแตะคู่นี้ใส่สบาย ย่างไปไสบ่เจ็บตีน",
      standardTranslation: "รองเท้าแตะคู่นี้ใส่สบาย เดินไปไหนไม่เจ็บเท้า"
    }
  ],
  relatedWordIds: [
    "north-kueak",
    "south-kueak",
    "central-rong-thao"
  ],
  spellingVariants: [
    "เกิบแตะ"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/",
      note: "หมวดของใช้และเครื่องแต่งกายอีสาน"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "ชาวอีสานนิยมเรียก \"เกิบแตะ\" สำหรับรองเท้าแตะฟองน้ำ และ \"เกิบผ้าใบ\" สำหรับรองเท้าผ้าใบ",
  viewCount: 2840,
  favoritesCount: 610,
  createdAt: "2025-02-12T10:00:00Z",
  updatedAt: "2025-02-12T10:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-ngaeng",
  dialectWord: "แงง",
  standardWord: "ส่อง/มองดู",
  pronunciation: "แงง (เสียงสามัญ)",
  meaning: "ชะโงกดู มองดู หรือส่องกระจกเพื่อสังเกตดูเงาตนเอง",
  region: "northeast",
  province: "ร้อยเอ็ด",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "แงงกระจกเบิ่งดูว่าผมเผ้าเรียบร้อยบ่",
      standardTranslation: "ส่องกระจกดูซิว่าผมเผ้าเรียบร้อยไหม"
    },
    {
      dialectSentence: "เจ้าอย่ามัวแต่แงงคีง ฟ่าวแต่งโตให้ทันเวลา",
      standardTranslation: "เธออย่ามัวแต่ส่องกระจกดูตัวเอง รีบแต่งตัวให้ทันเวลา"
    }
  ],
  relatedWordIds: [
    "isan-boeng",
    "north-phor",
    "south-lae"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/",
      note: "คำศัพท์กิริยาโบราณอีสาน"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า \"แงงคีง\" หมายถึง ส่องกระจกดูเรือนร่างของตนเอง เป็นคำโบราณที่มีมนต์เสน่ห์",
  viewCount: 1980,
  favoritesCount: 380,
  createdAt: "2025-02-12T10:30:00Z",
  updatedAt: "2025-02-12T10:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-hon-huay",
  dialectWord: "หนหวย",
  standardWord: "รำคาญ/หงุดหงิด",
  pronunciation: "หน-หวย",
  meaning: "เกิดความรู้สึกอึดอัด รำคาญใจ กระสับกระส่าย ไม่สบอารมณ์",
  region: "northeast",
  province: "กาฬสินธุ์",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "อากาศฮ้อนอบอ้าวหลาย เป็นตาหนหวยอีหลี",
      standardTranslation: "อากาศร้อนอบอ้าวมาก น่าหงุดหงิดรำคาญใจจริงๆ"
    },
    {
      dialectSentence: "อย่ามาเว้ากวนประสาท ข้อยกำลังหนหวยอยู่",
      standardTranslation: "อย่ามาพูดกวนประสาท ฉันกำลังหงุดหงิดอยู่นะ"
    }
  ],
  relatedWordIds: [
    "isan-soon",
    "south-whib"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/",
      note: "หมวดอารมณ์และความรู้สึกยอดนิยม"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "เป็นคำอุทานยอดฮิตของวัยรุ่นอีสานเมื่อเจอเรื่องขัดหูขัดตาหรือสภาพอากาศร้อนจัด",
  viewCount: 3120,
  favoritesCount: 750,
  createdAt: "2025-02-12T11:00:00Z",
  updatedAt: "2025-02-12T11:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-uk-ang",
  dialectWord: "อุกอั่ง",
  standardWord: "อึดอัดใจ/กลัดกลุ้ม",
  pronunciation: "อุก-อั่ง",
  meaning: "รู้สึกอัดอั้นตันใจ คับแค้น กลัดกลุ้มใจจนบอกไม่ถูก",
  region: "northeast",
  province: "มหาสารคาม",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "มีเรื่องบ่สบายใจ อุกอั่งเอ้าในหัวอกหลาย",
      standardTranslation: "มีเรื่องไม่สบายใจ กลัดกลุ้มอัดอั้นในใจเหลือเกิน"
    }
  ],
  relatedWordIds: [
    "north-kued-yak",
    "south-khuay-jai"
  ],
  spellingVariants: [
    "อุกอั่งเอ้าใจ",
    "อุกใจ"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/",
      note: "คำศัพท์และผญาอารมณ์ลึกซึ้ง"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "มักใช้คู่กันเป็น \"อุกอั่งเอ้าใจ\" พบบ่อยในบทกลอนลำเต้ยและผญาแสดงความเศร้า",
  viewCount: 1650,
  favoritesCount: 290,
  createdAt: "2025-02-12T11:30:00Z",
  updatedAt: "2025-02-12T11:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-suad-luad",
  dialectWord: "ซวดลวด",
  standardWord: "มูมมาม/กิริยาไม่สำรวม",
  pronunciation: "ซวด-ลวด",
  meaning: "แสดงกิริยาลุกลี้ลุกลน มูมมาม ตะกละ ไม่เรียบร้อย โดยเฉพาะเวลากินอาหาร",
  region: "northeast",
  province: "อุบลราชธานี",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "กินข้าวให้อยู่ในระเบียบ อย่าไปเฮ็ดซวดลวดต่อหน้าแขก",
      standardTranslation: "ทานข้าวให้เรียบร้อย อย่าแสดงกิริยามูมมามต่อหน้าแขก"
    }
  ],
  relatedWordIds: [
    "north-salid"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "ผู้ใหญ่มักใช้ตักเตือนเด็กๆ บนพาข้าว (สำรับข้าว) เพื่อฝึกมารยาทการร่วมโต๊ะอาหาร",
  viewCount: 2150,
  favoritesCount: 410,
  createdAt: "2025-02-12T12:00:00Z",
  updatedAt: "2025-02-12T12:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-jak-laew",
  dialectWord: "จั๊กแหล่ว",
  standardWord: "ไม่รู้สิ/ใครจะไปรู้",
  pronunciation: "จั๊ก-แหล่ว",
  meaning: "คำอุทานแสดงความไม่รู้ ไม่แน่ใจ หรือปัดว่าตนไม่ทราบเรื่อง",
  region: "northeast",
  province: "อุดรธานี",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "ถามข้อย ข้อยกะจั๊กแหล่ว บ่ได้ไปนำเพิ่น",
      standardTranslation: "มาถามฉัน ฉันก็ไม่รู้เหมือนกัน ไม่ได้ไปกับเขานี่"
    }
  ],
  relatedWordIds: [
    "isan-jak-noi",
    "north-ba-hu"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "เป็นคำตอบยอดนิยมแบบหยอกล้อ เมื่อผู้พูดไม่อยากตอบหรือไม่มีข้อมูลจริงๆ",
  viewCount: 3450,
  favoritesCount: 880,
  createdAt: "2025-02-12T12:30:00Z",
  updatedAt: "2025-02-12T12:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-wao-peun",
  dialectWord: "เว้าพื้น",
  standardWord: "นินทา/พูดลับหลัง",
  pronunciation: "เว้า-พื้น",
  meaning: "การนำเรื่องราวของผู้อื่นมาพูดคุยวิพากษ์วิจารณ์ลับหลัง",
  region: "northeast",
  province: "ชัยภูมิ",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "อย่าพากันไปนั่งสุมหัวเว้าพื้นผู้อื่น มันบ่ดี",
      standardTranslation: "อย่าพากันไปนั่งจับกลุ่มนินทาคนอื่น มันไม่ดี"
    }
  ],
  relatedWordIds: [
    "isan-wao",
    "central-phut"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1890,
  favoritesCount: 340,
  createdAt: "2025-02-12T13:00:00Z",
  updatedAt: "2025-02-12T13:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-fao",
  dialectWord: "ฟ่าว",
  standardWord: "รีบ/เร่งรีบ",
  pronunciation: "ฟ่าว (เสียงโทสั้น)",
  meaning: "รีบเร่ง เร่งความเร็ว รีบเดินทางหรือลงมือทำโดยด่วน",
  region: "northeast",
  province: "หนองคาย",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "ฟ่าวตื่นฟ่าวลุก เดี๋ยวสิไปโรงเรียนบ่ทัน",
      standardTranslation: "รีบตื่นรีบลุก เดี๋ยวจะไปโรงเรียนไม่ทัน"
    },
    {
      dialectSentence: "ฟ่าวมากินข้าว ข้าวเหนียวกำลังฮ้อนๆ",
      standardTranslation: "รีบมากินข้าว ข้าวเหนียวกำลังร้อนๆ อยู่เลย"
    }
  ],
  relatedWordIds: [
    "north-khajai",
    "south-duan"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2780,
  favoritesCount: 560,
  createdAt: "2025-02-12T13:30:00Z",
  updatedAt: "2025-02-12T13:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-yan",
  dialectWord: "ย่าน",
  standardWord: "กลัว",
  pronunciation: "ย่าน (เสียงโท)",
  meaning: "เกิดความหวาดกลัว รู้สึกไม่ปลอดภัย กลัวภัยอันตรายหรือสิ่งลี้ลับ",
  region: "northeast",
  province: "นครพนม",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "ยามค่ำคืนข้อยย่านความมืด ย่านผีหลอก",
      standardTranslation: "ตอนกลางคืนฉันกลัวความมืด กลัวผีหลอก"
    },
    {
      dialectSentence: "อย่าไปย่านเลย มีหมู่เฮาอยู่ข้างๆ นำกัน",
      standardTranslation: "ไม่ต้องกลัวหรอก มีเพื่อนๆ เราอยู่เคียงข้างด้วยกัน"
    }
  ],
  relatedWordIds: [
    "north-kua",
    "south-klua"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า \"เป็นตาย่าน\" แปลว่า น่ากลัวมาก เช่น \"ทางเส้นนี้มืดเป็นตาย่าน\"",
  viewCount: 2490,
  favoritesCount: 490,
  createdAt: "2025-02-12T14:00:00Z",
  updatedAt: "2025-02-12T14:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-jom",
  dialectWord: "จ่ม",
  standardWord: "บ่น/พึมพำ",
  pronunciation: "จ่ม (เสียงเอก)",
  meaning: "บ่นพึมพำ ตัดพ้อ หรือพูดซ้ำๆ ซากๆ ด้วยความขัดใจหรือไม่พอใจ",
  region: "northeast",
  province: "ยโสธร",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "แม่จ่มตั้งแต่เช้าฮอดค่ำเรื่องบ่ปัดกวาดห้อง",
      standardTranslation: "คุณแม่บ่นตั้งแต่เช้าจรดค่ำเรื่องไม่กวาดห้องนอน"
    }
  ],
  relatedWordIds: [
    "north-jom",
    "central-bon"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1720,
  favoritesCount: 310,
  createdAt: "2025-02-12T14:30:00Z",
  updatedAt: "2025-02-12T14:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-job",
  dialectWord: "จอบ",
  standardWord: "แอบมอง/ซุ่มดู",
  pronunciation: "จอบ (เสียงเอก)",
  meaning: "แอบดู ซุ่มสังเกตการณ์ ลอบส่องมองอย่างระมัดระวังไม่ให้รู้ตัว",
  region: "northeast",
  province: "สกลนคร",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "ไปยืนจอบเบิ่งแนว่าเพิ่นกำลังเฮ็ดหยังกันอยู่",
      standardTranslation: "ไปยืนแอบส่องดูหน่อยว่าเขากำลังทำอะไรกันอยู่"
    }
  ],
  relatedWordIds: [
    "isan-boeng",
    "isan-som-boeng"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "มักใช้คู่กับคำว่า \"หลอย\" เป็น \"จอบหลอย\" แปลว่า แอบทำลับหลังอย่างแนบเนียน",
  viewCount: 2210,
  favoritesCount: 430,
  createdAt: "2025-02-12T15:00:00Z",
  updatedAt: "2025-02-12T15:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-som-boeng",
  dialectWord: "ซอม",
  standardWord: "คอยสังเกต/จับตาดู",
  pronunciation: "ซอม (เสียงสามัญ)",
  meaning: "เฝ้าสังเกตการณ์ แอบจับตาดูพฤติกรรมอย่างเงียบๆ",
  region: "northeast",
  province: "บุรีรัมย์",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "ข้อยซอมเบิ่งพฤติกรรมเจ้ามาโดนแล้วเด้อ",
      standardTranslation: "ฉันคอยเฝ้าสังเกตพฤติกรรมของเธอมานานแล้วนะ"
    }
  ],
  relatedWordIds: [
    "isan-boeng",
    "isan-job"
  ],
  spellingVariants: [
    "ซอมเบิ่ง"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1890,
  favoritesCount: 350,
  createdAt: "2025-02-12T15:30:00Z",
  updatedAt: "2025-02-12T15:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-mong",
  dialectWord: "หม่อง",
  standardWord: "ที่/สถานที่/จุด",
  pronunciation: "หม่อง (เสียงเอก)",
  meaning: "สถานที่ ที่ตั้ง ตำแหน่งแห่งหน",
  region: "northeast",
  province: "บึงกาฬ",
  category: "การเดินทางและกิจกรรม",
  examples: [
    {
      dialectSentence: "หม่องนี้มีฮ่มไม้เย็นสบาย นั่งเซาเมื่อยก่อน",
      standardTranslation: "ตรงนี้มีร่มไม้เย็นสบาย นั่งพักเหนื่อยก่อน"
    },
    {
      dialectSentence: "เจ้าสิไปหม่องได๋ต่อ มื้อนี้มีตลาดนัดเด้อ",
      standardTranslation: "เธอจะไปที่ไหนต่อ วันนี้มีตลาดนัดนะ"
    }
  ],
  relatedWordIds: [
    "central-thi"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "\"หม่องได๋\" แปลว่า ที่ไหน ตรงไหน เป็นคำถามพื้นฐานที่ได้ยินทุกวันในอีสาน",
  viewCount: 2650,
  favoritesCount: 520,
  createdAt: "2025-02-12T16:00:00Z",
  updatedAt: "2025-02-12T16:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-poen",
  dialectWord: "เพิ่น",
  standardWord: "เขา/ท่าน (สุภาพ)",
  pronunciation: "เพิ่น (เสียงเอก)",
  meaning: "สรรพนามบุรุษที่ 3 สุภาพ หรือใช้เรียกบุคคลผู้ใหญ่หรือผู้อื่นด้วยความเคารพยกย่อง",
  region: "northeast",
  province: "ขอนแก่น",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "เพิ่นบอกว่ามื้ออื่นสิพาไปเที่ยวทุ่งดอกกระเจียว",
      standardTranslation: "ท่านบอกว่าวันพรุ่งนี้จะพาไปเที่ยวทุ่งดอกกระเจียว"
    }
  ],
  relatedWordIds: [
    "isan-lao",
    "north-poen"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า \"เพิ่น\" แสดงถึงความอ่อนน้อมถ่อมตนและมารยาทอันงดงามของคนอีสาน",
  viewCount: 3010,
  favoritesCount: 680,
  createdAt: "2025-02-12T16:30:00Z",
  updatedAt: "2025-02-12T16:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-sum",
  dialectWord: "ซุม",
  standardWord: "พวก/กลุ่ม/เหล่า",
  pronunciation: "ซุม (เสียงสามัญ)",
  meaning: "พวก กลุ่ม คณะ หมู่เหล่า",
  region: "northeast",
  province: "นครราชสีมา",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "ซุมเฮาไปเตะบอลนำกันยามแลงบ่",
      standardTranslation: "พวกเราไปเตะฟุตบอลด้วยกันตอนเย็นไหม"
    },
    {
      dialectSentence: "ซุมเจ้าฟ่าวไปไส รอซุมข้อยนำแหน่",
      standardTranslation: "พวกเธอรีบไปไหนกัน รอพวกฉันด้วยสิ"
    }
  ],
  relatedWordIds: [
    "north-moo"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "\"ซุมเฮา\" = พวกเรา, \"ซุมเจ้า\" = พวกเธอ, \"ซุมสู\" = พวกมึง/พวกสู",
  viewCount: 2340,
  favoritesCount: 460,
  createdAt: "2025-02-12T17:00:00Z",
  updatedAt: "2025-02-12T17:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-yon",
  dialectWord: "ย่อน",
  standardWord: "เพราะว่า/เนื่องจาก",
  pronunciation: "ย่อน (เสียงเอก)",
  meaning: "สาเหตุจาก ด้วยเหตุว่า เนื่องจาก",
  region: "northeast",
  province: "สุรินทร์",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "ย่อนว่าฮักหลาย จึงยอมเฮ็ดให้สู่อย่าง",
      standardTranslation: "เพราะว่ารักมาก จึงยอมทำให้ทุกสิ่งทุกอย่าง"
    }
  ],
  relatedWordIds: [
    "central-phro"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1580,
  favoritesCount: 280,
  createdAt: "2025-02-12T17:30:00Z",
  updatedAt: "2025-02-12T17:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-hoo",
  dialectWord: "ฮู้",
  standardWord: "รู้/เข้าใจ",
  pronunciation: "ฮู้ (เสียงโท)",
  meaning: "ล่วงรู้ ทราบความ เข้าใจในเรื่องราว",
  region: "northeast",
  province: "มุกดาหาร",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "ข้อยฮู้อยู่แก่ใจ แต่บ่อยากเว้าให้อารมณ์เสีย",
      standardTranslation: "ฉันรู้อยู่แก่ใจ แต่ไม่อยากพูดให้อารมณ์เสีย"
    },
    {
      dialectSentence: "เจ้าฮู้บ่ว่าเพิ่นสิกลับบ้านมื้อได๋",
      standardTranslation: "เธอรู้ไหมว่าเขาจะกลับบ้านวันไหน"
    }
  ],
  relatedWordIds: [
    "north-hu",
    "south-ru"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 3100,
  favoritesCount: 620,
  createdAt: "2025-02-12T18:00:00Z",
  updatedAt: "2025-02-12T18:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-boed",
  dialectWord: "เบิ๊ด",
  standardWord: "หมด/เกลี้ยง",
  pronunciation: "เบิ๊ด (เสียงตรี)",
  meaning: "สิ้นสุด หมดสิ้น เกลี้ยง ไม่เหลือหลอ",
  region: "northeast",
  province: "อำนาจเจริญ",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "เบิ๊ดคำสิเว้ากับเจ้าอีหลี",
      standardTranslation: "หมดคำจะพูดกับเธอจริงๆ เลย"
    },
    {
      dialectSentence: "กับข้าวบนโต๊ะกินเบิ๊ดเกลี้ยงบ่เหลือเลย",
      standardTranslation: "กับข้าวบนโต๊ะกินหมดเกลี้ยงไม่เหลือเลยสักอย่าง"
    }
  ],
  relatedWordIds: [
    "north-sut",
    "south-mot"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า \"เบิ๊ดสู่แนว\" แปลว่า หมดทุกสิ่งทุกอย่าง",
  viewCount: 2890,
  favoritesCount: 590,
  createdAt: "2025-02-12T18:30:00Z",
  updatedAt: "2025-02-12T18:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-khee-thee",
  dialectWord: "ขี้ถี่",
  standardWord: "ตระหนี่/ขี้เหนียว",
  pronunciation: "ขี้-ถี่",
  meaning: "ขี้เหนียว หวงของ ไม่ยอมเผื่อแผ่แบ่งปัน",
  region: "northeast",
  province: "ศรีสะเกษ",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "อย่าเป็นคนขี้ถี่หลาย มีน้ำใจแบ่งปันขนมแหน่",
      standardTranslation: "อย่าเป็นคนขี้เหนียวเกินไป มีน้ำใจแบ่งปันขนมหน่อย"
    }
  ],
  relatedWordIds: [
    "central-khee-niao",
    "north-khee-thee"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "\"ขี้ถี่เหนียวหนึบ\" ใช้เปรียบเปรยคนที่ไม่ยอมควักเงินแม้แต่สตางค์เดียว",
  viewCount: 1980,
  favoritesCount: 360,
  createdAt: "2025-02-12T19:00:00Z",
  updatedAt: "2025-02-12T19:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-theuk",
  dialectWord: "ถึก",
  standardWord: "ถูก/โดน/ตรงใจ",
  pronunciation: "ถึก (เสียงเอกสั้น)",
  meaning: "ถูกต้อง โดน ได้รับ สัมผัสตรงเป้า โดนใจ",
  region: "northeast",
  province: "หนองบัวลำภู",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "เสื้อตัวนี้ใส่งามถึกใจข้อยหลาย",
      standardTranslation: "เสื้อตัวนี้ใส่สวยถูกใจฉันมากๆ"
    },
    {
      dialectSentence: "ย่างตากฝนจนถึกฝนเป็นไข้หวัด",
      standardTranslation: "เดินตากฝนจนโดนฝนเป็นไข้หวัด"
    }
  ],
  relatedWordIds: [
    "central-thuk"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "\"ถึกคิง\" แปลว่า ถูกกับธาตุ ถูกใจ เข้ากันได้ดี",
  viewCount: 2420,
  favoritesCount: 470,
  createdAt: "2025-02-12T19:30:00Z",
  updatedAt: "2025-02-12T19:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-mak-hung",
  dialectWord: "หมากหุ่ง",
  standardWord: "มะละกอ",
  pronunciation: "หมาก-หุ่ง",
  meaning: "ผลไม้ชนิดหนึ่ง ผลดิบใช้ปรุงตำส้มตำ ผลสุกเนื้อสีส้มรสหวานชื่นใจ",
  region: "northeast",
  province: "อุดรธานี",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "ตำบักหุ่งใส่ปลาร้าแซ่บๆ กินกับข้าวเหนียวฮ้อนๆ",
      standardTranslation: "ส้มตำมะละกอใส่ปลาร้าอร่อยๆ กินกับข้าวเหนียวร้อนๆ"
    }
  ],
  relatedWordIds: [
    "north-ba-kueay-tet",
    "south-lor-kor",
    "central-ma-la-kor"
  ],
  spellingVariants: [
    "บักหุ่ง"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/",
      note: "คำศัพท์อาหารและพืชพันธุ์อีสาน"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "ส้มตำบักหุ่งถือเป็นอาหารประจำจิตวิญญาณของชาวอีสานทุกครัวเรือน",
  viewCount: 4100,
  favoritesCount: 1120,
  createdAt: "2025-02-12T20:00:00Z",
  updatedAt: "2025-02-12T20:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-mak-see-da",
  dialectWord: "หมากสีดา",
  standardWord: "ฝรั่ง (ผลไม้)",
  pronunciation: "หมาก-สี-ดา",
  meaning: "ผลไม้ผลกลมหรือรี เปลือกสีเขียว เนื้อกรอบ รสหวานอมเปรี้ยว",
  region: "northeast",
  province: "อุบลราชธานี",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "ไปเก็บหมากสีดาสดๆ หลังสวนมาจิ้มพริกเกลือกินกัน",
      standardTranslation: "ไปเก็บผลฝรั่งสดๆ หลังสวนมาจิ้มพริกเกลือกินกัน"
    }
  ],
  relatedWordIds: [
    "north-ba-man",
    "south-chom-poo"
  ],
  spellingVariants: [
    "บักสีดา"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า \"บักสีดา\" บางครั้งคนอีสานใช้เรียกชาวต่างชาติตะวันตกด้วยอารมณ์ขันและเป็นกันเอง",
  viewCount: 3250,
  favoritesCount: 710,
  createdAt: "2025-02-12T20:30:00Z",
  updatedAt: "2025-02-12T20:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-mak-nat",
  dialectWord: "หมากนัด",
  standardWord: "สับปะรด",
  pronunciation: "หมาก-นัด",
  meaning: "ผลไม้มีตา เนื้อสีเหลือง ฉ่ำน้ำ รสเปรี้ยวอมหวาน",
  region: "northeast",
  province: "เลย",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "หมากนัดหวานฉ่ำ กินแล้วชื่นใจหลาย",
      standardTranslation: "สับปะรดรสหวานฉ่ำ กินแล้วชื่นใจมาก"
    }
  ],
  relatedWordIds: [
    "north-ba-khanat",
    "south-yanat"
  ],
  spellingVariants: [
    "บักนัด"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2200,
  favoritesCount: 430,
  createdAt: "2025-02-12T21:00:00Z",
  updatedAt: "2025-02-12T21:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-ka-ta",
  dialectWord: "กะต่า",
  standardWord: "ตะกร้า",
  pronunciation: "กะ-ต่า",
  meaning: "ภาชนะสานด้วยไม้ไผ่หรือหวาย มีหูหิ้ว ใช้ใส่สิ่งของหรือไปจ่ายตลาด",
  region: "northeast",
  province: "ร้อยเอ็ด",
  category: "ของใช้และสิ่งของ",
  examples: [
    {
      dialectSentence: "แม่ถือกระต่าไปตลาดเช้า ซื้อปลาซื้อผักมาเฮ็ดกับข้าว",
      standardTranslation: "คุณแม่ถือตะกร้าไปตลาดเช้า ซื้อปลาซื้อผักมาทำกับข้าว"
    }
  ],
  relatedWordIds: [
    "north-sa-khor",
    "south-kratra"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "งานจักสานกะต่าเป็นภูมิปัญญาท้องถิ่นที่สืบทอดกันมายาวนานในชนบทอีสาน",
  viewCount: 1980,
  favoritesCount: 370,
  createdAt: "2025-02-12T21:30:00Z",
  updatedAt: "2025-02-12T21:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-jok",
  dialectWord: "จอก",
  standardWord: "แก้วน้ำ/ถ้วยน้ำ",
  pronunciation: "จอก (เสียงเอก)",
  meaning: "ภาชนะสำหรับใส่น้ำดื่มหรือของเหลว",
  region: "northeast",
  province: "กาฬสินธุ์",
  category: "ของใช้และสิ่งของ",
  examples: [
    {
      dialectSentence: "รินน้ำเย็นใส่จอกให้แขกเพิ่นดื่มเซาเมื่อยแหน่",
      standardTranslation: "รินน้ำเย็นใส่แก้วให้แขกท่านดื่มคลายเหนื่อยหน่อย"
    }
  ],
  relatedWordIds: [
    "north-jok",
    "south-kaew"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "\"จั๊กโบก\" หรือ \"จั๊กจอก\" หมายถึง ขอสักแก้ว แสดงถึงความเป็นกันเองยามล้อมวงสังสรรค์",
  viewCount: 2310,
  favoritesCount: 450,
  createdAt: "2025-02-12T22:00:00Z",
  updatedAt: "2025-02-12T22:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-khao-neung",
  dialectWord: "คาวหนึ่ง",
  standardWord: "ครู่หนึ่ง/แป๊บเดียว",
  pronunciation: "คาว-หนึ่ง",
  meaning: "ช่วงระยะเวลาสั้นๆ ชั่วขณะหนึ่ง ชั่วประเดี๋ยว",
  region: "northeast",
  province: "ขอนแก่น",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "ถ่าข้อยอยู่ตรงนี้คาวหนึ่งเด้อ เดี๋ยวข้อยฟ่าวกลับมา",
      standardTranslation: "รอฉันอยู่ตรงนี้สักครู่นะ เดี๋ยวฉันรีบกลับมา"
    }
  ],
  relatedWordIds: [
    "north-kam-diao",
    "south-diao"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2120,
  favoritesCount: 390,
  createdAt: "2025-02-12T22:30:00Z",
  updatedAt: "2025-02-12T22:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-ta-li-ton",
  dialectWord: "ตาลิโตน",
  standardWord: "น่าสงสาร/น่าเวทนา",
  pronunciation: "ตา-ลิ-โตน",
  meaning: "น่าเห็นอกเห็นใจ น่าสงสาร รู้สึกสะเทือนใจในความทุกข์ยาก",
  region: "northeast",
  province: "มหาสารคาม",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "แนมเห็นลูกนกตกจากฮัง เป็นตาลิโตนแท้",
      standardTranslation: "มองดูลูกนกตกลงมาจากรัง น่าสงสารจริงๆ"
    }
  ],
  relatedWordIds: [
    "north-e-doo",
    "south-song-san"
  ],
  spellingVariants: [
    "ตาหลตน",
    "โตน"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2550,
  favoritesCount: 510,
  createdAt: "2025-02-13T08:00:00Z",
  updatedAt: "2025-02-13T08:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-hao",
  dialectWord: "ห่าว",
  standardWord: "กระปรี้กระเปร่า/คึกคัก",
  pronunciation: "ห่าว (เสียงเอก)",
  meaning: "มีเรี่ยวแรง สดชื่น กระปรี้กระเปร่า มีพลังชีวิตชีวา",
  region: "northeast",
  province: "ชัยภูมิ",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "ได้ดื่มน้ำใบเตยเย็นๆ แล้วตื่นห่าวขึ้นมาทันที",
      standardTranslation: "ได้ดื่มน้ำใบเตยเย็นๆ แล้วรู้สึกกระปรี้กระเปร่าขึ้นมาทันที"
    }
  ],
  relatedWordIds: [
    "central-kheuk-khak"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1680,
  favoritesCount: 310,
  createdAt: "2025-02-13T08:30:00Z",
  updatedAt: "2025-02-13T08:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-nguak",
  dialectWord: "ง้วก",
  standardWord: "หันมอง/เหลียวมอง",
  pronunciation: "ง้วก (เสียงตรี)",
  meaning: "เหลียวหลัง หันหน้าหรือเอี้ยวตัวกลับไปมอง",
  region: "northeast",
  province: "อุดรธานี",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "ได้ยินเสียงคนฮ้องเอิ้น เลยง้วกหน้าไปเบิ่ง",
      standardTranslation: "ได้ยินเสียงคนตะโกนเรียก เลยหันหน้ากลับไปมอง"
    }
  ],
  relatedWordIds: [
    "isan-boeng",
    "isan-auy"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2040,
  favoritesCount: 420,
  createdAt: "2025-02-13T09:00:00Z",
  updatedAt: "2025-02-13T09:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-toy",
  dialectWord: "ต้อย",
  standardWord: "สะกิด/แตะเบาๆ",
  pronunciation: "ต้อย (เสียงโท)",
  meaning: "ใช้ปลายนิ้วหรือมือสะกิดหรือแตะเบาๆ เพื่อส่งสัญญาณเรียก",
  region: "northeast",
  province: "สกลนคร",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "อย่าต้อยแขนข้อย ข้อยกำลังคัดลายมืออยู่",
      standardTranslation: "อย่ามาสะกิดแขนฉัน ฉันกำลังคัดลายมืออยู่"
    }
  ],
  relatedWordIds: [
    "central-sa-kit"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1590,
  favoritesCount: 270,
  createdAt: "2025-02-13T09:30:00Z",
  updatedAt: "2025-02-13T09:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-sam-bai",
  dialectWord: "สำบาย",
  standardWord: "สบาย/สุขกายสบายใจ",
  pronunciation: "สำ-บาย",
  meaning: "มีความสุขกาย สุขใจ ปราศจากโรคภัยและเรื่องทุกข์ร้อน",
  region: "northeast",
  province: "นครพนม",
  category: "บทสนทนาในชีวิตประจำวัน",
  examples: [
    {
      dialectSentence: "สำบายดีบ่พี่น้องทางไกล มีความสุขกายสบายใจสุคนเด้อ",
      standardTranslation: "สบายดีไหมพี่น้องทางไกล ขอให้มีความสุขกายสบายใจทุกคนนะ"
    }
  ],
  relatedWordIds: [
    "central-sabai",
    "north-sabai-dee"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำทักทาย \"สำบายดีบ่\" มักตอบรับว่า \"สำบายดี\" หรือ \"อยู่ดีมีแฮง\"",
  viewCount: 3600,
  favoritesCount: 890,
  createdAt: "2025-02-13T10:00:00Z",
  updatedAt: "2025-02-13T10:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-lao",
  dialectWord: "เลา",
  standardWord: "เขา/ท่าน (สรรพนาม)",
  pronunciation: "เลา (เสียงสามัญ)",
  meaning: "สรรพนามบุรุษที่ 3 ใช้เรียกบุคคลรุ่นราวคราวเดียวกันหรือผู้ใหญ่ด้วยความเป็นกันเองและสุภาพ",
  region: "northeast",
  province: "หนองคาย",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "เลาเพิ่งกลับมาจากทุ่งนา กำลังนั่งกินข้าวแลง",
      standardTranslation: "เขาเพิ่งกลับมาจากทุ่งนา กำลังนั่งกินมื้อเย็น"
    }
  ],
  relatedWordIds: [
    "isan-poen",
    "central-khao"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2450,
  favoritesCount: 460,
  createdAt: "2025-02-13T10:30:00Z",
  updatedAt: "2025-02-13T10:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-ha-lang-thuea",
  dialectWord: "ห่าลางเทื่อ",
  standardWord: "บางครั้งบางคราว/บางที",
  pronunciation: "ห่า-ลาง-เทื่อ",
  meaning: "บางโอกาส บางช่วงเวลา มิได้เกิดขึ้นเป็นประจำ",
  region: "northeast",
  province: "สุรินทร์",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "ห่าลางเทื่อชีวิตกะต้องพบพานอุปสรรคให้เฮาเข้มแข็งขึ้น",
      standardTranslation: "บางครั้งชีวิตก็ต้องพบเจออุปสรรคเพื่อให้เราเข้มแข็งขึ้น"
    }
  ],
  relatedWordIds: [
    "central-bang-khrang"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1780,
  favoritesCount: 320,
  createdAt: "2025-02-13T11:00:00Z",
  updatedAt: "2025-02-13T11:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-khit-phor",
  dialectWord: "คึดพ้อ",
  standardWord: "นึกขึ้นได้/คิดออก",
  pronunciation: "คึด-พ้อ",
  meaning: "จดจำได้ หวนคิดถึง นึกภาพหรือเรื่องราวในอดีตขึ้นมาได้กระจ่างแจ้ง",
  region: "northeast",
  province: "บึงกาฬ",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "นั่งเบิ่งรูปเก่าๆ แล้วคึดพ้อความหลังสมัยเป็นเด็กน้อย",
      standardTranslation: "นั่งดูรูปเก่าๆ แล้วนึกถึงความหลังสมัยยังเป็นเด็ก"
    }
  ],
  relatedWordIds: [
    "isan-khit-hot",
    "north-kued-teung"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2680,
  favoritesCount: 540,
  createdAt: "2025-02-13T11:30:00Z",
  updatedAt: "2025-02-13T11:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-mid-jee-lee",
  dialectWord: "มิดจี่หลี่",
  standardWord: "เงียบสงัด/เงียบกริบ",
  pronunciation: "มิด-จี่-หลี่",
  meaning: "เงียบสนิท ไม่มีเสียงเล็ดลอด นิ่งสงบไร้ความเคลื่อนไหวใดๆ",
  region: "northeast",
  province: "ยโสธร",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "พอครูเดินเข้าห้องมา นักเรียนทุกคนกะนั่งมิดจี่หลี่",
      standardTranslation: "พอคุณครูเดินเข้าห้องมา นักเรียนทุกคนก็นั่งเงียบกริบ"
    }
  ],
  relatedWordIds: [
    "isan-mid-im-sim",
    "central-ngiap"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำวิเศษณ์บอกระดับความเงียบในภาษาอีสานมีเสน่ห์มาก เช่น มิดอิ่มสิ่ม, มิดจี่หลี่",
  viewCount: 2390,
  favoritesCount: 480,
  createdAt: "2025-02-13T12:00:00Z",
  updatedAt: "2025-02-13T12:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-poeng-woeng",
  dialectWord: "เปิ่งเวิ่ง",
  standardWord: "โล่งแจ้ง/สว่างโปร่งตา",
  pronunciation: "เปิ่ง-เวิ่ง",
  meaning: "โล่งเตียน สว่างตา ไม่มีสิ่งใดมาบดบังสายตาหรือบดบังทัศนียภาพ",
  region: "northeast",
  province: "บุรีรัมย์",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "ถางหญ้าตัดแต่งกิ่งไม้แล้ว หน้าบ้านแจ้งเปิ่งเวิ่งเลย",
      standardTranslation: "ถางหญ้าตัดแต่งกิ่งไม้แล้ว บริเวณหน้าบ้านสว่างโล่งโปร่งตาเลย"
    }
  ],
  relatedWordIds: [
    "central-long"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1620,
  favoritesCount: 280,
  createdAt: "2025-02-13T12:30:00Z",
  updatedAt: "2025-02-13T12:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-so-thim",
  dialectWord: "โสถิ่ม",
  standardWord: "สละทิ้ง/ตัดใจทิ้ง",
  pronunciation: "โส-ถิ่ม",
  meaning: "ยอมสละทิ้ง ตัดใจไม่เอาแล้ว ไม่สนใจที่จะเก็บรักษาไว้อีกต่อไป ยอมปล่อยวาง",
  region: "northeast",
  province: "อุบลราชธานี",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "เสื้อตัวนี้ขาดหลายเกินซ่อม โสถิ่มเลยสาอย่าเสียดาย",
      standardTranslation: "เสื้อตัวนี้ขาดเกินจะซ่อม ตัดใจทิ้งไปเลยเถอะอย่าเสียดาย"
    }
  ],
  relatedWordIds: [
    "central-thing"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า \"โส\" มีรากศัพท์จากบาลี \"อโส\" หมายถึง สละ หรือ เสี่ยงตาย ไม่เสียดาย",
  viewCount: 2110,
  favoritesCount: 390,
  createdAt: "2025-02-13T13:00:00Z",
  updatedAt: "2025-02-13T13:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-ton-nam",
  dialectWord: "โตน",
  standardWord: "กระโดด",
  pronunciation: "โตน (เสียงสามัญ)",
  meaning: "กระโดด ทิ้งตัวลงสู่น้ำหรือกระโจนลงมาจากที่สูง",
  region: "northeast",
  province: "อำนาจเจริญ",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "แลงนี้พากันไปโตนน้ำห้วยคลายฮ้อนกันบ่",
      standardTranslation: "เย็นนี้พากันไปกระโดดน้ำลำห้วยคลายร้อนกันไหม"
    }
  ],
  relatedWordIds: [
    "central-kradot"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "\"โตนน้ำ\" คือกิจกรรมสุดสนุกของเด็กๆ ชนบทอีสานในยามฤดูร้อน",
  viewCount: 1940,
  favoritesCount: 350,
  createdAt: "2025-02-13T13:30:00Z",
  updatedAt: "2025-02-13T13:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-hak-phaeng",
  dialectWord: "ฮักแพง",
  standardWord: "รักใคร่กลมเกลียว",
  pronunciation: "ฮัก-แพง",
  meaning: "มีความรักใคร่ ปรารถนาดี ทะนุถนอมและห่วงใยกันดั่งญาติมิตร",
  region: "northeast",
  province: "ขอนแก่น",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "พี่น้องร่วมชาติให้อยู่ฮักแพงแบ่งปันกันเด้อ",
      standardTranslation: "พี่น้องร่วมชาติขอให้อยู่รักใคร่กลมเกลียวแบ่งปันกันนะ"
    }
  ],
  relatedWordIds: [
    "isan-mak",
    "north-hak"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า \"ฮักแพงแบ่งปัน\" สะท้อนปรัชญาความเอื้อเฟื้อเผื่อแผ่ของชาวอีสาน",
  viewCount: 3410,
  favoritesCount: 820,
  createdAt: "2025-02-13T14:00:00Z",
  updatedAt: "2025-02-13T14:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-ta-sa-on",
  dialectWord: "ตาสะออน",
  standardWord: "น่านิยมชมชอบ/น่าประทับใจ",
  pronunciation: "ตา-สะ-ออน",
  meaning: "น่าพึงพอใจ น่ายินดี ชวนให้หลงใหลชื่นชม น่าอิจฉาในทางที่ดีงาม",
  region: "northeast",
  province: "ร้อยเอ็ด",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "รวงข้าวสีทองเต็มทุ่งนา เป็นตาสะออนหลาย",
      standardTranslation: "รวงข้าวสีทองเต็มทุ่งนา ชวนให้น่าชื่นชมประทับใจเหลือเกิน"
    }
  ],
  relatedWordIds: [
    "isan-on-son",
    "central-cheun-chom"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2590,
  favoritesCount: 570,
  createdAt: "2025-02-13T14:30:00Z",
  updatedAt: "2025-02-13T14:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-ee-lee",
  dialectWord: "อีหลี",
  standardWord: "จริงๆ/แท้จริง",
  pronunciation: "อี-หลี",
  meaning: "จริงๆ เป็นความจริงอย่างแท้จริง ไม่ได้โป้ปดมดเท็จ",
  region: "northeast",
  province: "อุดรธานี",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "ส้มตำร้านนี้แซ่บอีหลี บ่ได้ตั๋วเด้อพี่น้อง",
      standardTranslation: "ส้มตำร้านนี้อร่อยจริงๆ ไม่ได้โกหกนะพี่น้อง"
    },
    {
      dialectSentence: "คิดฮอดบ้านอีหลี อยากเมือบ้านแล้ว",
      standardTranslation: "คิดถึงบ้านจริงๆ เลย อยากกลับบ้านแล้ว"
    }
  ],
  relatedWordIds: [
    "north-tae",
    "south-jing"
  ],
  spellingVariants: [
    "อีหลีเด้อ",
    "อีหลีตั้ว"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า \"อีหลี\" เป็นคำต่อท้ายยืนยันความจริงที่แพร่หลายที่สุดในภาคอีสาน",
  viewCount: 4890,
  favoritesCount: 1350,
  createdAt: "2025-02-13T15:00:00Z",
  updatedAt: "2025-02-13T15:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-nua",
  dialectWord: "นัว",
  standardWord: "กลมกล่อม/รสชาติดีลงตัว",
  pronunciation: "นัว (เสียงสามัญ)",
  meaning: "รสชาติกลมกล่อม เค็มหวานมันลงตัว มักใช้อธิบายรสชาติอาหารอีสานใส่ปลาร้า",
  region: "northeast",
  province: "กาฬสินธุ์",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "น้ำแกงเห็ดหม้อนี้รสนัวคัก ซดแล้วชื่นใจ",
      standardTranslation: "น้ำแกงเห็ดหม้อนี้รสชาติกลมกล่อมมาก ซดแล้วชื่นใจ"
    },
    {
      dialectSentence: "ส้มตำปลาร้าครกนี้ แซ่บนัวอีหลีเด้อ",
      standardTranslation: "ส้มตำปลาร้าครกนี้ อร่อยกลมกล่อมจริงๆ นะ"
    }
  ],
  relatedWordIds: [
    "isan-saep",
    "north-lam",
    "south-roi"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/",
      note: "รสชาติอันเป็นเอกลักษณ์ของคนอีสาน"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า \"นัว\" สื่อถึงความอูมามิแบบฉบับอีสาน ซึ่งเกิดจากน้ำปลาร้าต้มสุกและสมุนไพรพื้นบ้าน",
  viewCount: 3950,
  favoritesCount: 940,
  createdAt: "2025-02-13T15:30:00Z",
  updatedAt: "2025-02-13T15:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-hua-sa",
  dialectWord: "หัวซา",
  standardWord: "ใส่ใจ/สนใจ/ให้ความสำคัญ",
  pronunciation: "หัว-ซา",
  meaning: "ให้ความสำคัญ แยแส สนใจ หรือเก็บมาคิดใส่ใจ",
  region: "northeast",
  province: "ขอนแก่น",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "คำคนที่เขาเว้าพื้น อย่าไปหัวซามันเลย",
      standardTranslation: "คำพูดของคนที่เขานินทา อย่าไปใส่ใจมันเลย"
    }
  ],
  relatedWordIds: [
    "central-sai-jai"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "มักใช้ในเชิงปฏิเสธ เช่น \"บ่ต้องไปหัวซา\" แปลว่า ไม่ต้องไปแยแสสนใจ",
  viewCount: 2280,
  favoritesCount: 460,
  createdAt: "2025-02-13T16:00:00Z",
  updatedAt: "2025-02-13T16:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-hon-jai",
  dialectWord: "ฮน",
  standardWord: "ร้อนรน/กระวนกระวาย",
  pronunciation: "ฮน (เสียงสามัญ)",
  meaning: "มีอาการกระวนกระวายใจ ไม่อยู่นิ่ง นั่งไม่ติด ร้อนใจ",
  region: "northeast",
  province: "ชัยภูมิ",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "นั่งบ่ติด นั่งฮนกระสับกระส่าย คอยถ่าฟังข่าวดี",
      standardTranslation: "นั่งไม่ติด นั่งกระวนกระวายใจ รอคอยฟังข่าวดี"
    }
  ],
  relatedWordIds: [
    "central-krasap-krasai"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1690,
  favoritesCount: 290,
  createdAt: "2025-02-13T16:30:00Z",
  updatedAt: "2025-02-13T16:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-boeng-ngaeng",
  dialectWord: "เบิ่งแงง",
  standardWord: "ดูแลเอาใจใส่/คุ้มครองดูแล",
  pronunciation: "เบิ่ง-แงง",
  meaning: "ดูแลรักษา คุ้มครอง ปรนนิบัติและเอาใจใส่อย่างใกล้ชิด",
  region: "northeast",
  province: "หนองคาย",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "ฝากเบิ่งแงงพ่อเฒ่าแม่เฒ่ายามลูกไปเฮ็ดงานทางไกลแหน่เด้อ",
      standardTranslation: "ฝากช่วยดูแลคุณตาคุณยายยามลูกไปทำงานแดนไกลหน่อยนะ"
    }
  ],
  relatedWordIds: [
    "isan-boeng",
    "central-doo-lae"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำนี้สื่อถึงความรัก ความเอื้ออาทรและความกตัญญูในครอบครัวอีสาน",
  viewCount: 2850,
  favoritesCount: 610,
  createdAt: "2025-02-13T17:00:00Z",
  updatedAt: "2025-02-13T17:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-son-goong",
  dialectWord: "ส่อน",
  standardWord: "ช้อนปลาหรือกุ้งด้วยสวิง",
  pronunciation: "ส่อน (เสียงเอก)",
  meaning: "การใช้อุปกรณ์สานหรือสวิงช้อนกุ้งฝอยหรือปลาเล็กตามริมน้ำลำห้วย",
  region: "northeast",
  province: "นครพนม",
  category: "การเดินทางและกิจกรรม",
  examples: [
    {
      dialectSentence: "แลงนี้สิพาไปส่อนกุ้งเต้นริมห้วยมาเฮ็ดก้อยกุ้งแซ่บๆ",
      standardTranslation: "เย็นนี้จะพาไปช้อนกุ้งฝอยริมลำห้วยมาทำก้อยกุ้งอร่อยๆ"
    }
  ],
  relatedWordIds: [
    "central-chon"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "\"ส่อนกุ้ง\" เป็นวิถีหากินริมห้วยหนองคลองบึงของชาวบ้านที่เรียบง่ายและยั่งยืน",
  viewCount: 1750,
  favoritesCount: 310,
  createdAt: "2025-02-13T17:30:00Z",
  updatedAt: "2025-02-13T17:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-seng-aor",
  dialectWord: "เซ็ง",
  standardWord: "อิ่มจนแน่น/อิ่มตื้อ",
  pronunciation: "เซ็ง (เสียงสามัญ)",
  meaning: "อิ่มอาหารมากจนแน่นท้อง อิ่มจนแทบขยับร่างกายไม่ไหว",
  region: "northeast",
  province: "สกลนคร",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "กินข้าวเหนียวกับไก่ย่างหลายโพด ตอนนี้นั่งเซ็งอิ่มตื้อเลย",
      standardTranslation: "กินข้าวเหนียวกับไก่ย่างมากเกินไป ตอนนี้นั่งอิ่มแน่นท้องเลย"
    }
  ],
  relatedWordIds: [
    "central-im"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า \"เซ็ง\" ในภาษาอีสานเดิมมิได้แปลว่าเบื่อหน่าย แต่หมายถึง อิ่มแน่นจนจุก",
  viewCount: 2400,
  favoritesCount: 470,
  createdAt: "2025-02-13T18:00:00Z",
  updatedAt: "2025-02-13T18:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-daew-daew",
  dialectWord: "กะแด่วๆ",
  standardWord: "ดิ้นกระแด่วๆ/กระดิกตัว",
  pronunciation: "กะ-แด่ว-ๆ",
  meaning: "อาการดิ้นไปมาอย่างรวดเร็ว เช่น กุ้งเต้น หรืออาการกระโดดโลดเต้นแสดงความดีใจ",
  region: "northeast",
  province: "อุบลราชธานี",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "กุ้งฝอยสดๆ ดิ้นกะแด่วๆ อยู่ในจานก้อย",
      standardTranslation: "กุ้งฝอยสดๆ ดิ้นกระแด่วๆ อยู่ในจานก้อยกุ้ง"
    }
  ],
  relatedWordIds: [
    "central-din"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2010,
  favoritesCount: 390,
  createdAt: "2025-02-13T18:30:00Z",
  updatedAt: "2025-02-13T18:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-ta-wen-tok",
  dialectWord: "ตะเว็นตก",
  standardWord: "พระอาทิตย์ตกดิน/ยามพลบค่ำ",
  pronunciation: "ตะ-เว็น-ตก",
  meaning: "ช่วงเวลาที่ดวงอาทิตย์ลับขอบฟ้า ยามเย็นย่ำพลบค่ำ",
  region: "northeast",
  province: "มุกดาหาร",
  category: "ธรรมชาติและสิ่งแวดล้อม",
  examples: [
    {
      dialectSentence: "ตะเว็นตกดินแล้ว ฟ่าวต้อนงัวควายเข้าคอกเด้อ",
      standardTranslation: "พระอาทิตย์ตกดินแล้ว รีบต้อนวัวควายเข้าคอกนะ"
    }
  ],
  relatedWordIds: [
    "isan-ta-wen",
    "central-yen"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2230,
  favoritesCount: 450,
  createdAt: "2025-02-13T19:00:00Z",
  updatedAt: "2025-02-13T19:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-auy",
  dialectWord: "อ่วย",
  standardWord: "หัน/เลี้ยว/เบนทิศทาง",
  pronunciation: "อ่วย (เสียงเอก)",
  meaning: "หันหน้า หรือเปลี่ยนทิศทาง เลี้ยวไปอีกด้านหนึ่ง",
  region: "northeast",
  province: "กาฬสินธุ์",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "อ่วยหน้ามาทางพี่แหน่ สิถ่ายรูปให้งามๆ",
      standardTranslation: "หันหน้ามาทางนี้หน่อย จะถ่ายรูปให้สวยๆ"
    }
  ],
  relatedWordIds: [
    "isan-nguak"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1870,
  favoritesCount: 330,
  createdAt: "2025-02-13T19:30:00Z",
  updatedAt: "2025-02-13T19:30:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-jang-dai",
  dialectWord: "จั่งได๋",
  standardWord: "อย่างไร/แบบไหน",
  pronunciation: "จั่ง-ได๋",
  meaning: "อย่างไร เป็นอย่างไร แบบใด เป็นเช่นไร",
  region: "northeast",
  province: "ขอนแก่น",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "มื้อนี้เป็นจั่งได๋แหน่ สบายดีบ่",
      standardTranslation: "วันนี้เป็นอย่างไรบ้าง สบายดีไหม"
    },
    {
      dialectSentence: "เฮ็ดจั่งได๋ถึงสิเว้าอีสานเก่งคือเจ้า",
      standardTranslation: "ทำอย่างไรถึงจะพูดภาษาอีสานเก่งเหมือนเธอ"
    }
  ],
  relatedWordIds: [
    "north-ja-dai",
    "south-pan-prue"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "\"เป็นจั่งได๋แหน่\" เป็นคำถามสารทุกข์สุกดิบที่อบอุ่นและคุ้นหูที่สุดคำหนึ่ง",
  viewCount: 3750,
  favoritesCount: 910,
  createdAt: "2025-02-13T20:00:00Z",
  updatedAt: "2025-02-13T20:00:00Z"
},
  // ================= NEW ISAN (esan108.com) ================
{
  id: "isan-ka-dia",
  dialectWord: "กะเดี้ย",
  standardWord: "เหลือเกิน/ปานนั้น",
  pronunciation: "กะ-เดี้ย",
  meaning: "มากมาย เกินพอดี มักใช้ประกอบกับคำว่า \"กะด้อ\" เช่น \"งามกะด้อกะเดี้ย\"",
  region: "northeast",
  province: "อุดรธานี",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "เป็นตาฮักกะด้อกะเดี้ย ไผเห็นกะหลงมัก",
      standardTranslation: "น่ารักอะไรจะขนาดนั้น ใครเห็นก็หลงรัก"
    }
  ],
  relatedWordIds: [
    "isan-ka-dor",
    "north-jad-nak"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาอีสาน (esan108.com)",
      url: "https://esan108.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำคู่ \"กะด้อกะเดี้ย\" ใช้เน้นความรู้สึกเกินบรรยายในภาษาพูดอีสาน",
  viewCount: 2630,
  favoritesCount: 580,
  createdAt: "2025-02-13T20:30:00Z",
  updatedAt: "2025-02-13T20:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-ngom",
  dialectWord: "ง่อม",
  standardWord: "เหงา/คิดถึงบ้าน",
  pronunciation: "ง่อม (เสียงโท)",
  meaning: "รู้สึกเปล่าเปลี่ยว เหงา ว้าเหว่ หรือคิดถึงบ้านและคนที่อยู่ห่างไกล",
  region: "north",
  province: "เชียงใหม่",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "อยู่เจียงใหม่คนเดียว ยามแลงมาฮู้สึกง่อมหาบ้านขนาด",
      standardTranslation: "อยู่เชียงใหม่คนเดียว ยามเย็นมารู้สึกเหงาคิดถึงบ้านมาก"
    }
  ],
  relatedWordIds: [
    "north-kued-teung",
    "isan-khit-hot"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/",
      note: "หมวดคำบอกอารมณ์ความรู้สึกคำเมือง"
    },
    {
      title: "หอสมุดวังท่าพระ มหาวิทยาลัยศิลปากร - คำศัพท์ภาษาไทยถิ่นเหนือ",
      url: "http://www.thapra.lib.su.ac.th/e-book/northern_thai/appendix.pdf"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า 'ง่อม' สื่อถึงความคิดถึงที่ลึกซึ้งและเหงาจับใจ มักพบในบทขับซอเมืองเหนือ",
  viewCount: 2190,
  favoritesCount: 520,
  createdAt: "2025-02-14T09:00:00Z",
  updatedAt: "2025-02-14T09:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-la-on",
  dialectWord: "ละอ่อน",
  standardWord: "เด็ก/เยาวชน/วัยรุ่น",
  pronunciation: "ละ-อ่อน",
  meaning: "เด็ก วัยรุ่น ผู้ที่ยังมีอายุน้อย ยังไม่โตเป็นผู้ใหญ่",
  region: "north",
  province: "เชียงราย",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "ละอ่อนตึงหลาย พากันไปแอ่วเล่นตี้ลานวัด",
      standardTranslation: "เด็กๆ ทั้งหลาย พากันไปวิ่งเล่นที่ลานวัด"
    }
  ],
  relatedWordIds: [
    "north-po-chai",
    "north-mae-ying"
  ],
  sources: [
    {
      title: "สำนักวิชาการ มรภ.สวนสุนันทา - คำศัพท์ภาษาเหนือยอดนิยม",
      url: "https://skm.ssru.ac.th/news/view/1392241"
    },
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "'ละอ่อน' เป็นคำเรียกเด็กด้วยความเอ็นดูที่เป็นเอกลักษณ์โดดเด่นของล้านนา",
  viewCount: 3820,
  favoritesCount: 890,
  createdAt: "2025-02-14T09:30:00Z",
  updatedAt: "2025-02-14T09:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-jum-jai",
  dialectWord: "จุ่มอกจุ่มใจ๋",
  standardWord: "ร่มเย็นเป็นสุข/สบายใจ",
  pronunciation: "จุ่ม-อก-จุ่ม-ใจ๋",
  meaning: "มีความสุขสงบ ร่มเย็น ปลอดโปร่ง ปราศจากความทุกข์ร้อน",
  region: "north",
  province: "ลำพูน",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "เข้าวัดฟังธรรมแล้ว จุ่มอกจุ่มใจ๋แต๊ๆ เน้อเจ้า",
      standardTranslation: "เข้าวัดฟังธรรมแล้ว รู้สึกร่มเย็นเป็นสุขสบายใจจริงๆ เลยค่ะ"
    }
  ],
  relatedWordIds: [
    "north-juen-jai"
  ],
  sources: [
    {
      title: "กรมศิลปากร - ภาษาถิ่นล้านนา",
      url: "https://www.finearts.go.th/storage/contents/2020/08/file/VMvo5Hh3tZmvE8jUGJtgpp4cAngaSWeQ215tQ11f.pdf"
    },
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "มักใช้เป็นคำอวยพรในวันปีใหม่เมือง (สงกรานต์) เช่น 'ขอหื้ออยู่เย็นเป็นสุข จุ่มอกจุ่มใจ๋'",
  viewCount: 1840,
  favoritesCount: 410,
  createdAt: "2025-02-14T10:00:00Z",
  updatedAt: "2025-02-14T10:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-khai-lap",
  dialectWord: "ไค่หลับ",
  standardWord: "ง่วงนอน",
  pronunciation: "ไค่-หลับ",
  meaning: "รู้สึกง่วง ต้องการจะนอนพักผ่อน (ไค่ = ใคร่/อยาก)",
  region: "north",
  province: "น่าน",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "กิ๋นข้าวตอนอิ่มแล้ว หนังต๋าตึงตึง ไค่หลับขนาด",
      standardTranslation: "กินข้าวเที่ยงอิ่มแล้ว หนังตาตึงมาก รู้สึกง่วงนอนเหลือเกิน"
    }
  ],
  relatedWordIds: [
    "north-id"
  ],
  sources: [
    {
      title: "สำนักวิชาการ มรภ.สวนสุนันทา - คำศัพท์ภาษาเหนือ",
      url: "https://skm.ssru.ac.th/news/view/1392241"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2470,
  favoritesCount: 560,
  createdAt: "2025-02-14T10:30:00Z",
  updatedAt: "2025-02-14T10:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-khai-hua",
  dialectWord: "ไค่หัว",
  standardWord: "หัวเราะ/ขำ",
  pronunciation: "ไค่-หัว",
  meaning: "เปล่งเสียงหัวเราะด้วยความขบขัน ตลก หรือเบิกบานใจ",
  region: "north",
  province: "พะเยา",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "เปิ้นอู้เรื่องตลกหื้อฟังจนไค่หัวกั๋นบ่หยุด",
      standardTranslation: "เขาเล่าเรื่องตลกให้ฟังจนหัวเราะกันไม่หยุด"
    }
  ],
  relatedWordIds: [
    "north-oo"
  ],
  sources: [
    {
      title: "หอสมุดวังท่าพระ มหาวิทยาลัยศิลปากร - คำศัพท์ภาษาไทยถิ่นเหนือ",
      url: "http://www.thapra.lib.su.ac.th/e-book/northern_thai/appendix.pdf"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1980,
  favoritesCount: 390,
  createdAt: "2025-02-14T11:00:00Z",
  updatedAt: "2025-02-14T11:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-khao-ngai",
  dialectWord: "ข้าวงาย",
  standardWord: "อาหารเช้า/มื้อเช้า",
  pronunciation: "ข้าว-งาย",
  meaning: "อาหารมื้อแรกของวันในตอนเช้าตรู่",
  region: "north",
  province: "ลำปาง",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "วันนี้ตื่นเมื่อเจ๊ามากิ๋นข้าวงายกับน้ำพริกหนุ่ม",
      standardTranslation: "วันนี้ตื่นตอนเช้ามากินข้าวเช้ากับน้ำพริกหนุ่ม"
    }
  ],
  relatedWordIds: [
    "north-khao-laeng",
    "north-khao-ton"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/",
      note: "หมวดอาหารและวิถีชีวิตคนเมือง"
    },
    {
      title: "กรมศิลปากร - ภาษาถิ่นล้านนา",
      url: "https://www.finearts.go.th/storage/contents/2020/08/file/VMvo5Hh3tZmvE8jUGJtgpp4cAngaSWeQ215tQ11f.pdf"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "ชาวล้านนาแบ่งมื้ออาหารเป็น ข้าวงาย (เช้า), ข้าวตอน (เที่ยง), ข้าวแลง (เย็น)",
  viewCount: 2650,
  favoritesCount: 620,
  createdAt: "2025-02-14T11:30:00Z",
  updatedAt: "2025-02-14T11:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-khao-ton",
  dialectWord: "ข้าวตอน",
  standardWord: "อาหารกลางวัน/มื้อเที่ยง",
  pronunciation: "ข้าว-ตอน",
  meaning: "อาหารมื้อกลางวัน",
  region: "north",
  province: "แพร่",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "เที่ยงแล้ว ไปพักกิ๋นข้าวตอนตวยกั๋นบ่",
      standardTranslation: "เที่ยงแล้ว ไปพักกินข้าวเที่ยงด้วยกันไหม"
    }
  ],
  relatedWordIds: [
    "north-khao-ngai",
    "north-khao-laeng"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2130,
  favoritesCount: 470,
  createdAt: "2025-02-14T12:00:00Z",
  updatedAt: "2025-02-14T12:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-pho-ui",
  dialectWord: "พ่ออุ้ย",
  standardWord: "คุณปู่/คุณตา",
  pronunciation: "พ่อ-อุ้ย",
  meaning: "บิดาของพ่อหรือบิดาของแม่ ชายชราผู้เป็นที่เคารพนับถือในวงศ์ตระกูล",
  region: "north",
  province: "เชียงใหม่",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "พ่ออุ้ยนั่งสานกุ๊บอยู่ใต้ถุนบ้านอย่างใจ๋เย็น",
      standardTranslation: "คุณตานั่งสานหมวกสานอยู่ใต้ถุนบ้านอย่างใจเย็น"
    }
  ],
  relatedWordIds: [
    "north-mae-ui"
  ],
  sources: [
    {
      title: "กรมศิลปากร - ภาษาถิ่นล้านนา",
      url: "https://www.finearts.go.th/storage/contents/2020/08/file/VMvo5Hh3tZmvE8jUGJtgpp4cAngaSWeQ215tQ11f.pdf"
    },
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า 'อุ้ย' แปลว่า ผู้เฒ่าผู้แก่ผู้ทรงคุณวุฒิและเปี่ยมด้วยเมตตาธรรม",
  viewCount: 3100,
  favoritesCount: 720,
  createdAt: "2025-02-14T12:30:00Z",
  updatedAt: "2025-02-14T12:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-mae-ui",
  dialectWord: "แม่อุ้ย",
  standardWord: "คุณย่า/คุณยาย",
  pronunciation: "แม่-อุ้ย",
  meaning: "มารดาของพ่อหรือมารดาของแม่ หญิงชราผู้เป็นที่เคารพรักของลูกหลาน",
  region: "north",
  province: "เชียงใหม่",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "แม่อุ้ยเกยเล่านิทานโบราณหื้อลูกหลานฟังยามค่ำ",
      standardTranslation: "คุณยายเคยเล่านิทานโบราณให้ลูกหลานฟังยามค่ำคืน"
    }
  ],
  relatedWordIds: [
    "north-pho-ui"
  ],
  sources: [
    {
      title: "กรมศิลปากร - ภาษาถิ่นล้านนา",
      url: "https://www.finearts.go.th/storage/contents/2020/08/file/VMvo5Hh3tZmvE8jUGJtgpp4cAngaSWeQ215tQ11f.pdf"
    },
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2980,
  favoritesCount: 680,
  createdAt: "2025-02-14T13:00:00Z",
  updatedAt: "2025-02-14T13:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-kad-mua",
  dialectWord: "กาดมั่ว",
  standardWord: "ตลาดเช้าชุมชนล้านนา",
  pronunciation: "กาด-มั่ว",
  meaning: "ตลาดเช้าพื้นบ้านที่มีของกิน พืชผักพื้นบ้าน และของใช้หลากหลายละลานตา",
  region: "north",
  province: "เชียงราย",
  category: "การเดินทางและกิจกรรม",
  examples: [
    {
      dialectSentence: "เมื่อเจ๊าเดินไปแอ่วกาดมั่ว ได้ข้าวจี่กับไส้อั่วฮ้อนๆ",
      standardTranslation: "ตอนเช้าเดินไปเที่ยวกาดมั่ว ได้ข้าวจี่กับไส้อั่วร้อนๆ มาทาน"
    }
  ],
  relatedWordIds: [
    "north-kad",
    "north-aew"
  ],
  sources: [
    {
      title: "สำนักวิชาการ มรภ.สวนสุนันทา - คำศัพท์ภาษาเหนือ",
      url: "https://skm.ssru.ac.th/news/view/1392241"
    },
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า 'มั่ว' ในที่นี้หมายถึง การรวมตัวกันของสิ่งของสารพัดชนิดอย่างคึกคักมีชีวิตชีวา",
  viewCount: 3340,
  favoritesCount: 810,
  createdAt: "2025-02-14T13:30:00Z",
  updatedAt: "2025-02-14T13:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-khee-ji",
  dialectWord: "ขี้จิ๊",
  standardWord: "ขี้เหนียว/ตระหนี่",
  pronunciation: "ขี้-จิ๊",
  meaning: "หวงทรัพย์สิน ไม่ยอมควักจ่าย ตระหนี่ถี่เหนียว",
  region: "north",
  province: "แม่ฮ่องสอน",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "บ่าต้องขี้จิ๊นักหนา มีน้ำใจ๋แบ่งปันกั๋นพ่อง",
      standardTranslation: "ไม่ต้องขี้เหนียวมากนัก มีน้ำใจแบ่งปันกันบ้าง"
    }
  ],
  relatedWordIds: [
    "isan-khee-thee",
    "south-khee-chit"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2150,
  favoritesCount: 430,
  createdAt: "2025-02-14T14:00:00Z",
  updatedAt: "2025-02-14T14:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-sap-pa-lee",
  dialectWord: "สัปปะลี่",
  standardWord: "กะล่อน/ตลกโปกฮา",
  pronunciation: "สัป-ปะ-ลี่",
  meaning: "พูดจาหยอกล้อ กะล่อน ตลกไม่อยู่กับร่องกับรอยแต่แฝงความสนุกสนาน",
  region: "north",
  province: "ลำพูน",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "อู้จ๋าเล่นลิ้นสัปปะลี่แต๊ๆ คนหยังมาตลกปะล้ำปะเหลือ",
      standardTranslation: "พูดจาเล่นลิ้นกะล่อนจริงๆ คนอะไรจะตลกเกินเบอร์ขนาดนี้"
    }
  ],
  relatedWordIds: [
    "north-salid"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    },
    {
      title: "หอสมุดวังท่าพระ มหาวิทยาลัยศิลปากร - คำศัพท์ภาษาไทยถิ่นเหนือ",
      url: "http://www.thapra.lib.su.ac.th/e-book/northern_thai/appendix.pdf"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1760,
  favoritesCount: 320,
  createdAt: "2025-02-14T14:30:00Z",
  updatedAt: "2025-02-14T14:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-sa-lee",
  dialectWord: "สะลี",
  standardWord: "ที่นอน/ฟูกนอน",
  pronunciation: "สะ-ลี",
  meaning: "ที่นอน ฟูก หรือเบาะรองนอนแบบดั้งเดิมของชาวล้านนา",
  region: "north",
  province: "เชียงใหม่",
  category: "ของใช้และสิ่งของ",
  examples: [
    {
      dialectSentence: "ปูสะลีหื้อแขกนอนพักผ่อนบนเรือน",
      standardTranslation: "ปูฟูกที่นอนให้แขกนอนพักผ่อนบนเรือน"
    }
  ],
  relatedWordIds: [
    "north-toey"
  ],
  sources: [
    {
      title: "กรมศิลปากร - ภาษาถิ่นล้านนา",
      url: "https://www.finearts.go.th/storage/contents/2020/08/file/VMvo5Hh3tZmvE8jUGJtgpp4cAngaSWeQ215tQ11f.pdf"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1890,
  favoritesCount: 360,
  createdAt: "2025-02-14T15:00:00Z",
  updatedAt: "2025-02-14T15:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-kha-chao",
  dialectWord: "ข้าเจ้า",
  standardWord: "ดิฉัน/ข้าพเจ้า",
  pronunciation: "ข้า-เจ้า",
  meaning: "สรรพนามแทนตัวสตรีล้านนาที่สุภาพอ่อนหวาน",
  region: "north",
  province: "เชียงใหม่",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "ข้าเจ้าเป๋นสาวเจียงใหม่ ยินดีต้อนฮับสู่เมืองเหนือเจ้า",
      standardTranslation: "ดิฉันเป็นสาวเชียงใหม่ ยินดีต้อนรับสู่เมืองเหนือค่ะ"
    }
  ],
  relatedWordIds: [
    "north-mae-ying"
  ],
  sources: [
    {
      title: "สำนักวิชาการ มรภ.สวนสุนันทา - คำศัพท์ภาษาเหนือ",
      url: "https://skm.ssru.ac.th/news/view/1392241"
    },
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "'ข้าเจ้า' สื่อถึงความนอบน้อมและมารยาทอันอ่อนช้อยของสตรีล้านนา",
  viewCount: 4210,
  favoritesCount: 1040,
  createdAt: "2025-02-14T15:30:00Z",
  updatedAt: "2025-02-14T15:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-jin-som",
  dialectWord: "จิ๊นส้ม",
  standardWord: "แหนม/หมูหมักเปรี้ยว",
  pronunciation: "จิ๊น-ส้ม",
  meaning: "เนื้อหมูหมักข้าวเหนียวและกระเทียมจนมีรสเปรี้ยวกลมกล่อม (แหนมหมู)",
  region: "north",
  province: "ลำปาง",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "ย่างจิ๊นส้มหอมๆ กินกับข้าวนึ่งฮ้อนๆ ลำขนาด",
      standardTranslation: "ย่างแหนมหมูหอมๆ กินกับข้าวเหนียวนึ่งร้อนๆ อร่อยมาก"
    }
  ],
  relatedWordIds: [
    "north-lam",
    "north-khao-neung"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "'จิ๊นส้มหมก' คือการนำแหนมห่อใบตองไปหมกไฟจนหอมกรุ่น เป็นอาหารยอดนิยม",
  viewCount: 3120,
  favoritesCount: 740,
  createdAt: "2025-02-14T16:00:00Z",
  updatedAt: "2025-02-14T16:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-kaeng-khae",
  dialectWord: "แกงแค",
  standardWord: "แกงผักรวมพื้นบ้านล้านนา",
  pronunciation: "แกง-แค",
  meaning: "แกงพื้นถิ่นล้านนาที่รวมพืชผักพื้นบ้านหลากชนิดและสมุนไพรกลิ่นหอม",
  region: "north",
  province: "น่าน",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "แกงแคไก่ใส่ผักละมาด ถ้วยนี้รสชาติถึงเครื่องแต๊ๆ",
      standardTranslation: "แกงแคไก่ใส่ผักพื้นบ้าน ถ้วยนี้รสชาติถึงเครื่องจริงๆ"
    }
  ],
  relatedWordIds: [
    "north-lam"
  ],
  sources: [
    {
      title: "สำนักวิชาการ มรภ.สวนสุนันทา - วัฒนธรรมอาหารล้านนา",
      url: "https://skm.ssru.ac.th/news/view/1392241"
    },
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2540,
  favoritesCount: 580,
  createdAt: "2025-02-14T16:30:00Z",
  updatedAt: "2025-02-14T16:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-kat-tong",
  dialectWord: "กั๊ดต้อง",
  standardWord: "อิ่มแน่นท้องมาก",
  pronunciation: "กั๊ด-ต้อง",
  meaning: "อิ่มอาหารมากจนแน่นท้อง ท้องตึงจนแทบเดินไม่ไหว (ต้อง = ท้อง)",
  region: "north",
  province: "พะเยา",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "กิ๋นข้าวนึ่งกับลาบคั่วจนกั๊ดต้อง ลุกแทบบ่ขึ้น",
      standardTranslation: "กินข้าวเหนียวกับลาบคั่วจนแน่นท้อง ลุกแทบไม่ขึ้น"
    }
  ],
  relatedWordIds: [
    "isan-seng-aor"
  ],
  sources: [
    {
      title: "หอสมุดวังท่าพระ มหาวิทยาลัยศิลปากร - คำศัพท์ภาษาไทยถิ่นเหนือ",
      url: "http://www.thapra.lib.su.ac.th/e-book/northern_thai/appendix.pdf"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2280,
  favoritesCount: 490,
  createdAt: "2025-02-14T17:00:00Z",
  updatedAt: "2025-02-14T17:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-khod",
  dialectWord: "โขด",
  standardWord: "โกรธ/เคืองใจ",
  pronunciation: "โขด (เสียงเอก)",
  meaning: "โกรธ ขุ่นเคืองใจ โมโห ไม่สบอารมณ์",
  region: "north",
  province: "เชียงราย",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "เปิ้นบ่ได้ตั้งใจ๋ยะแก้วแตก อย่าโขดหื้อเปิ้นเน้อ",
      standardTranslation: "ฉันไม่ได้ตั้งใจทำแก้วแตก อย่าโกรธฉันเลยนะ"
    }
  ],
  relatedWordIds: [
    "isan-soon",
    "south-whib"
  ],
  sources: [
    {
      title: "สำนักวิชาการ มรภ.สวนสุนันทา - คำศัพท์ภาษาเหนือ",
      url: "https://skm.ssru.ac.th/news/view/1392241"
    },
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2610,
  favoritesCount: 530,
  createdAt: "2025-02-14T17:30:00Z",
  updatedAt: "2025-02-14T17:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-paeng",
  dialectWord: "แป๋ง",
  standardWord: "ทำ/สร้าง/ปรุง",
  pronunciation: "แป๋ง (เสียงจัตวา)",
  meaning: "ประดิษฐ์ สร้างขึ้น ปรุงอาหาร หรือซ่อมแซมสิ่งของ",
  region: "north",
  province: "แพร่",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "แม่อุ้ยกำลังแป๋งกับข้าวอยู่ในครัว หอมโชยมาแต่ไกล",
      standardTranslation: "คุณยายกำลังทำกับข้าวอยู่ในครัว กลิ่นหอมลอยมาแต่ไกล"
    }
  ],
  relatedWordIds: [
    "north-ya-kan",
    "isan-het"
  ],
  sources: [
    {
      title: "กรมศิลปากร - ภาษาถิ่นล้านนา",
      url: "https://www.finearts.go.th/storage/contents/2020/08/file/VMvo5Hh3tZmvE8jUGJtgpp4cAngaSWeQ215tQ11f.pdf"
    },
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2890,
  favoritesCount: 620,
  createdAt: "2025-02-14T18:00:00Z",
  updatedAt: "2025-02-14T18:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-soh",
  dialectWord: "เซาะ",
  standardWord: "หา/ค้นหา",
  pronunciation: "เซาะ (เสียงตรีสั้น)",
  meaning: "เสาะหา ค้นหา เที่ยวตามหาสิ่งของหรือบุคคล",
  region: "north",
  province: "น่าน",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "พากันไปเซาะเห็ดถอบในป่า ยามหน้าฝน",
      standardTranslation: "พากันไปหาเห็ดเผาะในป่ายามฤดูฝน"
    }
  ],
  relatedWordIds: [
    "north-aew"
  ],
  sources: [
    {
      title: "หอสมุดวังท่าพระ มหาวิทยาลัยศิลปากร - คำศัพท์ภาษาไทยถิ่นเหนือ",
      url: "http://www.thapra.lib.su.ac.th/e-book/northern_thai/appendix.pdf"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2010,
  favoritesCount: 410,
  createdAt: "2025-02-14T18:30:00Z",
  updatedAt: "2025-02-14T18:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-pa",
  dialectWord: "ปะ",
  standardWord: "พบ/เจอ",
  pronunciation: "ปะ (เสียงเอกสั้น)",
  meaning: "พบปะ เจอะเจอ เผชิญหน้า",
  region: "north",
  province: "เชียงใหม่",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "บ่ปะกั๋นเมินขนาด ตั๋วสบายดีก่เจ้า",
      standardTranslation: "ไม่ได้เจอกันนานมาก เธอสบายดีไหมคะ"
    }
  ],
  relatedWordIds: [
    "isan-pho"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    },
    {
      title: "สำนักวิชาการ มรภ.สวนสุนันทา - คำศัพท์ภาษาเหนือ",
      url: "https://skm.ssru.ac.th/news/view/1392241"
    }
  ],
  verificationStatus: "verified",
  viewCount: 3450,
  favoritesCount: 780,
  createdAt: "2025-02-14T19:00:00Z",
  updatedAt: "2025-02-14T19:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-jang-man",
  dialectWord: "จ่างมัน",
  standardWord: "ช่างมันเถอะ",
  pronunciation: "จ่าง-มัน",
  meaning: "ช่างมันเถอะ ปล่อยวาง ไม่ต้องเก็บมาใส่ใจ",
  region: "north",
  province: "ลำพูน",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "เรื่องตี้ผ่านไปแล้วก็จ่างมันเต๊อะ เริ่มต้นใหม่ได้",
      standardTranslation: "เรื่องที่ผ่านไปแล้วก็ช่างมันเถอะ เริ่มต้นใหม่ได้เสมอ"
    }
  ],
  relatedWordIds: [
    "isan-ka-sang"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2210,
  favoritesCount: 460,
  createdAt: "2025-02-14T19:30:00Z",
  updatedAt: "2025-02-14T19:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-juay",
  dialectWord: "จ้วย",
  standardWord: "ช่วย/ช่วยเหลือ",
  pronunciation: "จ้วย (เสียงโท)",
  meaning: "ให้ความช่วยเหลือ เกื้อกูล บรรเทาความยากลำบาก",
  region: "north",
  province: "เชียงราย",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "จ้วยเปิ้นยกหม้อแกงหน้อยเน้อ มันหนักขนาด",
      standardTranslation: "ช่วยฉันยกหม้อแกงหน่อยนะ มันหนักมาก"
    }
  ],
  relatedWordIds: [
    "isan-het"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2570,
  favoritesCount: 530,
  createdAt: "2025-02-14T20:00:00Z",
  updatedAt: "2025-02-14T20:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-tang-dai",
  dialectWord: "ตางได",
  standardWord: "ทางไหน/ทิศทางใด",
  pronunciation: "ตาง-ได",
  meaning: "ทางไหน ทิศทางใด แถบไหน",
  region: "north",
  province: "ลำปาง",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "ทางไปวัดพระธาตุลำปางหลวง ไปตางไดเจ้า",
      standardTranslation: "ทางไปวัดพระธาตุลำปางหลวง ไปทางไหนคะ"
    }
  ],
  relatedWordIds: [
    "north-tang-phe",
    "north-tang-poon"
  ],
  sources: [
    {
      title: "กรมศิลปากร - ภาษาถิ่นล้านนา",
      url: "https://www.finearts.go.th/storage/contents/2020/08/file/VMvo5Hh3tZmvE8jUGJtgpp4cAngaSWeQ215tQ11f.pdf"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1950,
  favoritesCount: 380,
  createdAt: "2025-02-14T20:30:00Z",
  updatedAt: "2025-02-14T20:30:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-tang-phe",
  dialectWord: "ตางเพ้",
  standardWord: "ทางนี้/ที่นี่",
  pronunciation: "ตาง-เพ้",
  meaning: "ทางนี้ ฝั่งนี้ ด้านนี้ หรือที่ตรงนี้",
  region: "north",
  province: "เชียงใหม่",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "ย้ายมานั่งตางเพ้แล ลมพัดเย็นสบายดี",
      standardTranslation: "ย้ายมานั่งทางนี้สิ ลมพัดเย็นสบายดี"
    }
  ],
  relatedWordIds: [
    "north-tang-poon"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2110,
  favoritesCount: 420,
  createdAt: "2025-02-14T21:00:00Z",
  updatedAt: "2025-02-14T21:00:00Z"
},
  // ================= NEW NORTH (moradoklanna.com / SSRU / FineArts) ================
{
  id: "north-tang-poon",
  dialectWord: "ตางปู้น",
  standardWord: "ทางโน้น/ที่โน่น",
  pronunciation: "ตาง-ปู้น",
  meaning: "ทางโน้น ที่โน่น ฝั่งโน้น ที่อยู่ไกลออกไป",
  region: "north",
  province: "พะเยา",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "กว๊านพะเยาอยู่ตางปู้น เดินไปแหมน้อยกะถึงแล้ว",
      standardTranslation: "กว๊านพะเยาอยู่ทางโน้น เดินไปอีกนิดเดียวก็ถึงแล้ว"
    }
  ],
  relatedWordIds: [
    "north-tang-phe"
  ],
  sources: [
    {
      title: "พจนานุกรมมรดกล้านนา (moradoklanna.com)",
      url: "https://moradoklanna.com/dict/"
    },
    {
      title: "หอสมุดวังท่าพระ มหาวิทยาลัยศิลปากร - คำศัพท์ภาษาไทยถิ่นเหนือ",
      url: "http://www.thapra.lib.su.ac.th/e-book/northern_thai/appendix.pdf"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2060,
  favoritesCount: 390,
  createdAt: "2025-02-14T21:30:00Z",
  updatedAt: "2025-02-14T21:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-roi-jang-hu",
  dialectWord: "หรอยจังหู้",
  standardWord: "อร่อยมากๆ/เด็ดสุดๆ",
  pronunciation: "หรอย-จัง-หู้",
  meaning: "อร่อยมากๆ รสชาติเลิศเลอ ถึงพริกถึงขิงสะใจ",
  region: "south",
  province: "นครศรีธรรมราช",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "แกงไตปลาถ้วยนี้ หรอยจังหู้ ได้แรงอกแท้",
      standardTranslation: "แกงไตปลาถ้วยนี้ อร่อยมากๆ ชื่นใจสะใจจริงๆ"
    }
  ],
  relatedWordIds: [
    "south-roi",
    "south-dai-raeng-ok",
    "south-roi-nad"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9",
      note: "หมวดภาษาและอาหารพื้นถิ่นใต้"
    },
    {
      title: "คลังภาษาถิ่นใต้ Sanook Campus",
      url: "https://www.sanook.com/campus/1390689/"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "เป็นการรวมคำว่า 'หรอย' (อร่อย) กับ 'จังหู' (มาก) เพื่อเน้นย้ำความอร่อยอย่างถึงที่สุด",
  viewCount: 4620,
  favoritesCount: 1250,
  createdAt: "2025-02-15T09:00:00Z",
  updatedAt: "2025-02-15T09:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-chan",
  dialectWord: "ฉาน",
  standardWord: "ฉัน/ข้าพเจ้า",
  pronunciation: "ฉาน (เสียงจัตวา)",
  meaning: "สรรพนามบุรุษที่ 1 ใช้แทนตัวเองของคนใต้ด้วยความเป็นกันเอง",
  region: "south",
  province: "สงขลา",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "ฉานจะไปตลาดหัวเช้าตอเช้า ใครจะฝากซื้อไหร้มั่ง",
      standardTranslation: "ฉันจะไปตลาดเช้าพรุ่งนี้ ใครจะฝากซื้ออะไรบ้าง"
    }
  ],
  relatedWordIds: [
    "south-bao",
    "south-nui"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    }
  ],
  verificationStatus: "verified",
  viewCount: 3180,
  favoritesCount: 670,
  createdAt: "2025-02-15T09:30:00Z",
  updatedAt: "2025-02-15T09:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-tor-chao",
  dialectWord: "ตอเช้า",
  standardWord: "พรุ่งนี้",
  pronunciation: "ตอ-เช้า",
  meaning: "วันพรุ่งนี้ วันถัดไปจากวันนี้",
  region: "south",
  province: "สุราษฎร์ธานี",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "ตอเช้าค่อยนัดเจอกันใหม่ที่หลาดนัด",
      standardTranslation: "วันพรุ่งนี้ค่อยนัดเจอกันใหม่ที่ตลาดนัด"
    }
  ],
  relatedWordIds: [
    "south-tor-diao",
    "south-tor-dai"
  ],
  sources: [
    {
      title: "คลังภาษาถิ่นใต้ Sanook Campus",
      url: "https://www.sanook.com/campus/1390689/"
    },
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    }
  ],
  verificationStatus: "verified",
  viewCount: 3510,
  favoritesCount: 780,
  createdAt: "2025-02-15T10:00:00Z",
  updatedAt: "2025-02-15T10:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-tor-diao",
  dialectWord: "ต่อเดียว",
  standardWord: "เดี๋ยวเดียว/อีกสักครู่",
  pronunciation: "ต่อ-เดียว",
  meaning: "ชั่วครู่เดียว ประเดี๋ยวนึง ชั่วอึดใจเดียว",
  region: "south",
  province: "พัทลุง",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "คอยฉานต่อเดียว ฉานกำลังรีบไป",
      standardTranslation: "รอฉันประเดี๋ยวเดียว ฉันกำลังรีบไป"
    }
  ],
  relatedWordIds: [
    "south-tor-chao"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2420,
  favoritesCount: 510,
  createdAt: "2025-02-15T10:30:00Z",
  updatedAt: "2025-02-15T10:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-tor-dai",
  dialectWord: "ตอใด",
  standardWord: "เมื่อไหร่/เวลาใด",
  pronunciation: "ตอ-ใด",
  meaning: "เมื่อไหร่ เมื่อเวลาใด เมื่อใด",
  region: "south",
  province: "ตรัง",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "พี่บ่าวจะหลบบ้านตอใด พ่อแม่คิดถึงจังหู",
      standardTranslation: "พี่ชายจะกลับบ้านเมื่อไหร่ พ่อแม่คิดถึงมากนะ"
    }
  ],
  relatedWordIds: [
    "south-lop-ban"
  ],
  sources: [
    {
      title: "คลังภาษาถิ่นใต้ Sanook Campus",
      url: "https://www.sanook.com/campus/1390689/"
    },
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    }
  ],
  verificationStatus: "verified",
  viewCount: 3040,
  favoritesCount: 690,
  createdAt: "2025-02-15T11:00:00Z",
  updatedAt: "2025-02-15T11:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-whib",
  dialectWord: "หวิบ",
  standardWord: "โกรธมาก/โมโหจัด",
  pronunciation: "หวิบ (เสียงเอกสั้น)",
  meaning: "เกิดอารมณ์โกรธ โมโห ฟิวส์ขาด ไม่พอใจอย่างยิ่ง",
  region: "south",
  province: "สงขลา",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "อย่ามาล้อเล่นแรง หวิบขึ้นมาไม่คุยด้วยนะ",
      standardTranslation: "อย่ามาล้อเล่นแรงนะ โมโหขึ้นมาจะไม่คุยด้วยเลย"
    }
  ],
  relatedWordIds: [
    "north-khod",
    "isan-soon"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    },
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า 'หวิบ' สื่อถึงอาการอารมณ์ขึ้นฉับพลัน เป็นคำที่คนใต้ใช้บ่อยมากเมื่อมีคนแหย่",
  viewCount: 4210,
  favoritesCount: 1110,
  createdAt: "2025-02-15T11:30:00Z",
  updatedAt: "2025-02-15T11:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-han-nee",
  dialectWord: "ฮันนี่",
  standardWord: "อันนี้/ชิ้นนี้",
  pronunciation: "ฮัน-นี่",
  meaning: "สิ่งนี้ อันนี้ สิ่งที่อยู่ใกล้ตรงหน้า",
  region: "south",
  province: "ภูเก็ต",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "ฮันนี่ราคาเท่าใด ขายแพงหม้าย",
      standardTranslation: "อันนี้ราคาเท่าไหร่ ขายแพงไหม"
    }
  ],
  relatedWordIds: [
    "south-mai"
  ],
  sources: [
    {
      title: "คลังภาษาถิ่นใต้ Sanook Campus",
      url: "https://www.sanook.com/campus/1390689/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2670,
  favoritesCount: 540,
  createdAt: "2025-02-15T12:00:00Z",
  updatedAt: "2025-02-15T12:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-yik",
  dialectWord: "ยิก",
  standardWord: "ไล่/วิ่งไล่กวด",
  pronunciation: "ยิก (เสียงเอกสั้น)",
  meaning: "วิ่งไล่ตาม กวดตาม หรือไล่ให้ออกไป",
  region: "south",
  province: "สตูล",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "วิ่งเร็วเข้า หมาบ้านนั้นวิ่งยิกตามหลังมาแล้ว",
      standardTranslation: "วิ่งเร็วเข้า สุนัขบ้านนั้นวิ่งไล่ตามหลังมาแล้ว"
    }
  ],
  relatedWordIds: [
    "south-plam"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาถิ่นใต้และสตูล",
      url: "https://satun12345.blogspot.com/p/blog-page_11.html"
    },
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2890,
  favoritesCount: 590,
  createdAt: "2025-02-15T12:30:00Z",
  updatedAt: "2025-02-15T12:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-node",
  dialectWord: "โหนด",
  standardWord: "ต้นตาล/ตาลโตนด",
  pronunciation: "โหนด (เสียงเอก)",
  meaning: "ต้นตาลโตนด และผลตาล รวมถึงผลิตภัณฑ์น้ำตาลจากตาลโตนด",
  region: "south",
  province: "สงขลา",
  category: "ธรรมชาติและสิ่งแวดล้อม",
  examples: [
    {
      dialectSentence: "น้ำตาลโหนดแท้เมืองสะทิงพระ หวานหอมกลมกล่อม",
      standardTranslation: "น้ำตาลโตนดแท้เมืองสทิงพระ รสหวานหอมกลมกล่อม"
    }
  ],
  relatedWordIds: [
    "south-phak-noh"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "วิถีตาลโตนดเป็นเอกลักษณ์อันโดดเด่นของชาวคาบสมุทรสทิงพระ จังหวัดสงขลา",
  viewCount: 2150,
  favoritesCount: 420,
  createdAt: "2025-02-15T13:00:00Z",
  updatedAt: "2025-02-15T13:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-khong-jai",
  dialectWord: "ข้องใจ",
  standardWord: "คิดถึง/เป็นห่วงด้วยความรัก",
  pronunciation: "ข้อง-ใจ",
  meaning: "คิดถึง ห่วงใย ผูกพันกังวลถึงคนที่รัก (ภาษาใต้แท้ไม่ได้แปลว่าหาเรื่อง!)",
  region: "south",
  province: "นครศรีธรรมราช",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "จากบ้านมาไกล ฉานข้องใจแม่เหลือเกิน",
      standardTranslation: "จากบ้านมาแดนไกล ฉันคิดถึงและเป็นห่วงแม่เหลือเกิน"
    }
  ],
  relatedWordIds: [
    "south-khuay-jai"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    },
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คนต่างถิ่นมักเข้าใจผิดว่า 'ข้องใจ' คือการหาเรื่อง แต่สำหรับคนใต้ดั้งเดิมคือความห่วงหาอาทรอย่างที่สุด",
  viewCount: 4890,
  favoritesCount: 1390,
  createdAt: "2025-02-15T13:30:00Z",
  updatedAt: "2025-02-15T13:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-pan-prue",
  dialectWord: "พันพรือ",
  standardWord: "เป็นอย่างไร/อย่างไร",
  pronunciation: "พัน-พรือ",
  meaning: "เป็นอย่างไร สบายดีไหม มีเหตุการณ์อย่างไร",
  region: "south",
  province: "กระบี่",
  category: "คำถามและสรรพนาม",
  examples: [
    {
      dialectSentence: "อยู่ทางนั้นพันพรือมั่ง สบายดีม้าย",
      standardTranslation: "อยู่ทางโน้นเป็นอย่างไรบ้าง สบายดีหรือเปล่า"
    }
  ],
  relatedWordIds: [
    "south-sai",
    "north-ja-dai",
    "isan-jang-dai"
  ],
  sources: [
    {
      title: "คลังภาษาถิ่นใต้ Sanook Campus",
      url: "https://www.sanook.com/campus/1390689/"
    },
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "'พันพรือมั่ง' เป็นคำทักทายแรกที่คนใต้ทุกคนใช้เปิดบทสนทนาด้วยไมตรีจิต",
  viewCount: 4320,
  favoritesCount: 1050,
  createdAt: "2025-02-15T14:00:00Z",
  updatedAt: "2025-02-15T14:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-hai",
  dialectWord: "ฮาย",
  standardWord: "คำอุทานเหนื่อยใจ/ระบายลมหายใจ",
  pronunciation: "ฮาย (เสียงโทลากยาว)",
  meaning: "คำอุทานเปล่งออกมาเมื่อรู้สึกเหน็ดเหนื่อย ระอา หรือถอนหายใจ",
  region: "south",
  province: "ชุมพร",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "ฮาย... ร้อนจังหู้ ทำงานทั้งวันเหนื่อยได้แรง",
      standardTranslation: "เฮ้อ... ร้อนเหลือเกิน ทำงานมาทั้งวันเหนื่อยจริงๆ"
    }
  ],
  relatedWordIds: [
    "south-jang-hu"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2950,
  favoritesCount: 610,
  createdAt: "2025-02-15T14:30:00Z",
  updatedAt: "2025-02-15T14:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-jang-sia",
  dialectWord: "จังเสีย",
  standardWord: "น่าเสียดายจัง/เสียดายเหลือเกิน",
  pronunciation: "จัง-เสีย",
  meaning: "รู้สึกเสียดายอย่างยิ่ง พลาดโอกาสอันดีหรือสิ่งดีงามไป",
  region: "south",
  province: "พัทลุง",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "ไม่ได้ไปแลงานมโนราห์คืนนี้ จังเสียจริง",
      standardTranslation: "ไม่ได้ไปดูการแสดงมโนราห์คืนนี้ น่าเสียดายจริงๆ"
    }
  ],
  relatedWordIds: [
    "south-lae"
  ],
  sources: [
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2180,
  favoritesCount: 430,
  createdAt: "2025-02-15T15:00:00Z",
  updatedAt: "2025-02-15T15:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-roi-mai",
  dialectWord: "หรอยหม้าย",
  standardWord: "อร่อยไหม",
  pronunciation: "หรอย-หม้าย",
  meaning: "คำถามว่าอาหารมีรสชาติเอร็ดอร่อยถูกปากหรือไม่",
  region: "south",
  province: "สุราษฎร์ธานี",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "ข้าวยำปักษ์ใต้จานนี้ หรอยหม้ายน้องบ่าว",
      standardTranslation: "ข้าวยำปักษ์ใต้จานนี้ อร่อยไหมน้องชาย"
    }
  ],
  relatedWordIds: [
    "south-roi",
    "south-mai"
  ],
  sources: [
    {
      title: "คลังภาษาถิ่นใต้ Sanook Campus",
      url: "https://www.sanook.com/campus/1390689/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 3670,
  favoritesCount: 820,
  createdAt: "2025-02-15T15:30:00Z",
  updatedAt: "2025-02-15T15:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-yok",
  dialectWord: "ยอก",
  standardWord: "กิน/สวาปาม/ซัดให้หมด",
  pronunciation: "ยอก (เสียงเอกสั้น)",
  meaning: "กิริยากินอาหารอย่างเอร็ดอร่อย เต็มเหนี่ยว เต็มคราบ",
  region: "south",
  province: "สงขลา",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "หิวข้าวจัด ขอยอกแกงส้มกับปลาทอดให้หมดจาน",
      standardTranslation: "หิวข้าวมาก ขอกินแกงส้มกับปลาทอดให้เกลี้ยงจานเลย"
    }
  ],
  relatedWordIds: [
    "south-roi"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2740,
  favoritesCount: 570,
  createdAt: "2025-02-15T16:00:00Z",
  updatedAt: "2025-02-15T16:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-chad",
  dialectWord: "ชาด",
  standardWord: "จริงๆ/แท้ๆ/เหลือเกิน",
  pronunciation: "ชาด (เสียงโท)",
  meaning: "เน้นย้ำความจริงแท้ อย่างยิ่ง จริงๆ เชียว",
  region: "south",
  province: "นครศรีธรรมราช",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "ฝนตกไม่หยุดเลยวันนี้ ชาดลำบากแท้",
      standardTranslation: "ฝนตกไม่หยุดเลยวันนี้ ลำบากจริงๆ เชียว"
    }
  ],
  relatedWordIds: [
    "south-chad-niao"
  ],
  sources: [
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2350,
  favoritesCount: 480,
  createdAt: "2025-02-15T16:30:00Z",
  updatedAt: "2025-02-15T16:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-glueak",
  dialectWord: "เกลือก",
  standardWord: "เดี๋ยวจะ/เกรงว่าจะ",
  pronunciation: "เกลือก",
  meaning: "เกรงว่า เดี๋ยวจะ คาดว่าจะเกิดเหตุการณ์นั้นขึ้น",
  region: "south",
  province: "สตูล",
  category: "กิริยาและบทสนทนา",
  examples: [
    {
      dialectSentence: "รีบเก็บผ้าเร็ว เกลือกฝนจะตกลงมาเปียกหมด",
      standardTranslation: "รีบเก็บผ้าเร็วเข้า เดี๋ยวฝนจะตกลงมาเปียกหมด"
    }
  ],
  relatedWordIds: [
    "south-tor-chao"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาถิ่นใต้และสตูล",
      url: "https://satun12345.blogspot.com/p/blog-page_11.html"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2020,
  favoritesCount: 390,
  createdAt: "2025-02-15T17:00:00Z",
  updatedAt: "2025-02-15T17:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-thim",
  dialectWord: "ทิ่ม",
  standardWord: "ตำ/บดในครก",
  pronunciation: "ทิ่ม (เสียงโท)",
  meaning: "กิริยาตำหรือโขลกน้ำพริก เครื่องแกง ด้วยสากในครก",
  region: "south",
  province: "ตรัง",
  category: "การเดินทางและกิจกรรม",
  examples: [
    {
      dialectSentence: "แม่กำลังทิ่มเครื่องแกงคั่วกลิ้ง กลิ่นหอมฟุ้งทั้งครัว",
      standardTranslation: "คุณแม่กำลังตำพริกแกงคั่วกลิ้ง กลิ่นหอมฟุ้งทั่วทั้งครัว"
    }
  ],
  relatedWordIds: [
    "south-roi"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "'ทิ่มน้ำพริก' คือคำที่ชาวใต้ใช้เรียกการตำน้ำพริกเป็นสำนวนติดปาก",
  viewCount: 3200,
  favoritesCount: 650,
  createdAt: "2025-02-15T17:30:00Z",
  updatedAt: "2025-02-15T17:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-chad-niao",
  dialectWord: "ชาดเหนียว",
  standardWord: "ขี้เหนียวมาก/ตระหนี่ถี่เหนียว",
  pronunciation: "ชาด-เหนียว",
  meaning: "ขี้เหนียวมาก ไม่ยอมออกเงิน ไม่เอื้อเฟื้อเผื่อแผ่",
  region: "south",
  province: "พัทลุง",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "อย่าทำตัวชาดเหนียวเกิน เลี้ยงน้ำเพื่อนบ้างต๊ะ",
      standardTranslation: "อย่าทำตัวขี้เหนียวมากเกินไป เลี้ยงน้ำเพื่อนบ้างสิ"
    }
  ],
  relatedWordIds: [
    "south-khee-chit"
  ],
  sources: [
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2280,
  favoritesCount: 460,
  createdAt: "2025-02-15T18:00:00Z",
  updatedAt: "2025-02-15T18:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-roi-nad",
  dialectWord: "หรอยหนัด",
  standardWord: "อร่อยอย่างยิ่ง/รสชาติถึงใจ",
  pronunciation: "หรอย-หนัด",
  meaning: "อร่อยมากเป็นพิเศษ รสชาติเข้มข้นถึงเครื่อง",
  region: "south",
  province: "ภูเก็ต",
  category: "อาหารและรสชาติ",
  examples: [
    {
      dialectSentence: "หมูฮ้องกับน้ำพริกกุ้งเสียบมื้อนี้ หรอยหนัดเลย",
      standardTranslation: "หมูฮ้องกับน้ำพริกกุ้งเสียบมื้อนี้ อร่อยมากๆ รสชาติถึงใจ"
    }
  ],
  relatedWordIds: [
    "south-roi-jang-hu"
  ],
  sources: [
    {
      title: "คลังภาษาถิ่นใต้ Sanook Campus",
      url: "https://www.sanook.com/campus/1390689/"
    }
  ],
  verificationStatus: "verified",
  viewCount: 3110,
  favoritesCount: 710,
  createdAt: "2025-02-15T18:30:00Z",
  updatedAt: "2025-02-15T18:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-lao",
  dialectWord: "หล่าว",
  standardWord: "อีกแล้ว/เอาอีกแล้ว",
  pronunciation: "หล่าว (เสียงเอก)",
  meaning: "อีกครั้ง ซ้ำรอยเดิม เกิดขึ้นอีกแล้ว",
  region: "south",
  province: "ระนอง",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "หาเรื่องทะเลาะกันหล่าวแล้ว คุยกันดีๆ ต๊ะ",
      standardTranslation: "หาเรื่องทะเลาะกันอีกแล้ว ค่อยๆ พูดจากันดีๆ สิ"
    }
  ],
  relatedWordIds: [
    "south-whib"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2630,
  favoritesCount: 520,
  createdAt: "2025-02-15T19:00:00Z",
  updatedAt: "2025-02-15T19:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-hwan-mung-ming",
  dialectWord: "หวันมุ้งมิ้ง",
  standardWord: "เวลาโพล้เพล้/ยามพลบค่ำ",
  pronunciation: "หวัน-มุ้ง-มิ้ง",
  meaning: "ช่วงเวลาที่พระอาทิตย์กำลังจะตก แสงสลัว โพล้เพล้ ยามสนธยา",
  region: "south",
  province: "สุราษฎร์ธานี",
  category: "ธรรมชาติและสิ่งแวดล้อม",
  examples: [
    {
      dialectSentence: "หวันมุ้งมิ้งแล้ว รีบกลับบ้าน อย่ามัวเดินเที่ยวเตร่",
      standardTranslation: "เวลาโพล้เพล้ใกล้ค่ำแล้ว รีบกลับบ้าน อย่ามัวเดินเที่ยวเตร่"
    }
  ],
  relatedWordIds: [
    "south-hwan-yen"
  ],
  sources: [
    {
      title: "คลังภาษาถิ่นใต้ Sanook Campus",
      url: "https://www.sanook.com/campus/1390689/"
    },
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    }
  ],
  verificationStatus: "verified",
  culturalNote: "คำว่า 'หวัน' ในภาษาใต้หมายถึง พระอาทิตย์หรือเวลาของวัน",
  viewCount: 3410,
  favoritesCount: 830,
  createdAt: "2025-02-15T19:30:00Z",
  updatedAt: "2025-02-15T19:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-jang-kaeng",
  dialectWord: "จังแกง",
  standardWord: "เกะกะ/ขวางหูขวางตา",
  pronunciation: "จัง-แกง",
  meaning: "เกะกะ วางไม่เป็นระเบียบ ขวางทาง ขวางหูขวางตา",
  region: "south",
  province: "สงขลา",
  category: "ความรู้สึกและอารมณ์",
  examples: [
    {
      dialectSentence: "เก็บของให้เรียบร้อยต๊ะ วางจังแกงเต็มห้องไปหมด",
      standardTranslation: "เก็บของให้เรียบร้อยหน่อย วางเกะกะเต็มห้องไปหมด"
    }
  ],
  relatedWordIds: [
    "south-plam"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2210,
  favoritesCount: 440,
  createdAt: "2025-02-15T20:00:00Z",
  updatedAt: "2025-02-15T20:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-khai-chong",
  dialectWord: "ไขช่อง",
  standardWord: "เปิดหน้าต่าง",
  pronunciation: "ไข-ช่อง",
  meaning: "เปิดหน้าต่างระบายลม (ช่อง = หน้าต่าง)",
  region: "south",
  province: "สตูล",
  category: "ของใช้และสิ่งของ",
  examples: [
    {
      dialectSentence: "อากาศร้อนอบอ้าว ช่วยไขช่องรับลมทะเลทีตะ",
      standardTranslation: "อากาศร้อนอบอ้าว ช่วยเปิดหน้าต่างรับลมทะเลหน่อยสิ"
    }
  ],
  relatedWordIds: [
    "south-lop-ban"
  ],
  sources: [
    {
      title: "พจนานุกรมภาษาถิ่นใต้และสตูล",
      url: "https://satun12345.blogspot.com/p/blog-page_11.html"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2540,
  favoritesCount: 520,
  createdAt: "2025-02-15T20:30:00Z",
  updatedAt: "2025-02-15T20:30:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-nok-krot",
  dialectWord: "นกกรด",
  standardWord: "นกกระเต็น",
  pronunciation: "นก-กรด",
  meaning: "นกกระเต็น นกกินปลาปากยาวสีสวยงามริมลำคลองป่าชายเลน",
  region: "south",
  province: "พังงา",
  category: "ธรรมชาติและสิ่งแวดล้อม",
  examples: [
    {
      dialectSentence: "นกกรดเกาะอยู่บนกิ่งโกงกาง คอยโฉบกินปลา",
      standardTranslation: "นกกระเต็นเกาะอยู่บนกิ่งต้นโกงกาง คอยโฉบกินปลา"
    }
  ],
  relatedWordIds: [
    "south-node"
  ],
  sources: [
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    }
  ],
  verificationStatus: "verified",
  viewCount: 1980,
  favoritesCount: 380,
  createdAt: "2025-02-15T21:00:00Z",
  updatedAt: "2025-02-15T21:00:00Z"
},
  // ================= NEW SOUTH (PSU / Sanook / Thaksin Study / Satun) ================
{
  id: "south-prak",
  dialectWord: "พรัก",
  standardWord: "มาก/เต็มไปหมด/ชุกชุม",
  pronunciation: "พรัก (เสียงตรีสั้น)",
  meaning: "มากมาย ดกดื่น เต็มไปหมด มีอยู่เป็นจำนวนมาก",
  region: "south",
  province: "ยะลา",
  category: "คำวิเศษณ์และปริมาณ",
  examples: [
    {
      dialectSentence: "ฤดูนี้ผลไม้ในสวนสุกพรักเต็มต้นไปหมด",
      standardTranslation: "ฤดูกาลนี้ผลไม้ในสวนสุกดกเต็มต้นไปหมด"
    }
  ],
  relatedWordIds: [
    "south-jang-hu"
  ],
  sources: [
    {
      title: "สถาบันทักษิณคดีศึกษา - การชำระพจนานุกรมภาษาถิ่นใต้",
      url: "https://pubhtml5.com/neifa/rotk/การชำระพจนานุกรมภาษาถิ่นใต้/114"
    },
    {
      title: "ฐานข้อมูลสารสนเทศภาคใต้ หอสมุดคุณหญิงหลง ม.อ.",
      url: "https://clib.psu.ac.th/southerninfo/content/3/0f0431f9"
    }
  ],
  verificationStatus: "verified",
  viewCount: 2170,
  favoritesCount: 430,
  createdAt: "2025-02-15T21:30:00Z",
  updatedAt: "2025-02-15T21:30:00Z"
}
];

// Helper to get deterministic daily word based on date
export function getDailyWord(date: Date = new Date()): DictionaryEntry {
  const verifiedWords = DICTIONARY_DATA.filter((w) => w.verificationStatus === 'verified');
  const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = (hash << 5) - hash + dateString.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % verifiedWords.length;
  return verifiedWords[index] || verifiedWords[0];
}

// Region metadata for styling & labels
export const REGION_CONFIG: Record<
  string,
  {
    nameThai: string;
    english: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
    badgeBg: string;
    description: string;
    greeting: string;
    highlightColor: string;
  }
> = {
  north: {
    nameThai: 'ภาคเหนือ',
    english: 'Northern',
    bgColor: 'bg-[#DCD2FF]/25',
    textColor: 'text-[#6C5CE7]',
    borderColor: 'border-[#DCD2FF]',
    badgeBg: 'bg-[#DCD2FF]',
    description: 'คำเมืองล้านนา สำเนียงอ่อนหวาน ต๊ะต่อนยอน รุ่มรวยวัฒนธรรม',
    greeting: 'ยินดีต้อนฮับเจ้า',
    highlightColor: '#DCD2FF',
  },
  northeast: {
    nameThai: 'ภาคอีสาน',
    english: 'Northeastern (Isan)',
    bgColor: 'bg-[#FFD6C2]/30',
    textColor: 'text-[#E15B28]',
    borderColor: 'border-[#FFD6C2]',
    badgeBg: 'bg-[#FFD6C2]',
    description: 'เว้าอีสานม่วนซื่น แซ่บนัว จริงใจ มีชีวิตชีวาและพลังแห่งความผูกพัน',
    greeting: 'ยินดีต้อนรับเด้อจ้า',
    highlightColor: '#FFD6C2',
  },
  central: {
    nameThai: 'ภาคกลาง',
    english: 'Central',
    bgColor: 'bg-[#B8EBD0]/30',
    textColor: 'text-[#1E824C]',
    borderColor: 'border-[#B8EBD0]',
    badgeBg: 'bg-[#B8EBD0]',
    description: 'ภาษากลางมาตรฐาน พร้อมเสน่ห์สำเนียงถิ่นสุพรรณ ระยอง เพชรบุรี',
    greeting: 'ยินดีต้อนรับครับ/ค่ะ',
    highlightColor: '#B8EBD0',
  },
  south: {
    nameThai: 'ภาคใต้',
    english: 'Southern',
    bgColor: 'bg-[#FFF0A8]/40',
    textColor: 'text-[#B8860B]',
    borderColor: 'border-[#FFF0A8]',
    badgeBg: 'bg-[#FFF0A8]',
    description: 'ภาษาถิ่นใต้แหลงสั้นกระชับ จริงใจ หรอยแรง ถึงพริกถึงขิง',
    greeting: 'ยินดีต้อนรับพี่น้องชาวใต้',
    highlightColor: '#FFF0A8',
  },
};

// Cross-region comparison predefined standards
export interface CrossRegionComparison {
  standardWord: string;
  meaning: string;
  regions: {
    north: { word: string; pronunciation: string; example: string };
    northeast: { word: string; pronunciation: string; example: string };
    central: { word: string; pronunciation: string; example: string };
    south: { word: string; pronunciation: string; example: string };
  };
}

export const CROSS_REGION_COMPARISONS: CrossRegionComparison[] = [
  {
    standardWord: 'อร่อย',
    meaning: 'รสชาติดี ถูกปาก มีความเอร็ดอร่อย',
    regions: {
      north: { word: 'ลำ', pronunciation: 'ลำ', example: 'น้ำพริกอ่องถ้วยนี้ลำขนาดเน้อ' },
      northeast: { word: 'แซ่บ', pronunciation: 'แซ่บ', example: 'ส้มตำปลาร้าแซ่บอีหลีเด้อ' },
      central: { word: 'อร่อย', pronunciation: 'อะ-หร่อย', example: 'กับข้าวแม่ทำอร่อยทุกมื้อ' },
      south: { word: 'หรอย', pronunciation: 'หรอย', example: 'แกงส้มปลากะพงหรอยแรงได้แรงอก' },
    },
  },
  {
    standardWord: 'พูด',
    meaning: 'เปล่งเสียงบอกเล่า สื่อสารความหมาย',
    regions: {
      north: { word: 'อู้', pronunciation: 'อู้', example: 'อู้คำเมืองเป็นก่เจ้า' },
      northeast: { word: 'เว้า', pronunciation: 'เว้า', example: 'เว้าอีสานม่วนหลาย' },
      central: { word: 'พูด', pronunciation: 'พูด', example: 'พูดความจริงกันดีกว่า' },
      south: { word: 'แหลง', pronunciation: 'แหลง', example: 'แหลงใต้ชัดเจนจังหู' },
    },
  },
  {
    standardWord: 'ดู',
    meaning: 'มองดู ชำเลืองสายตา สังเกตการณ์',
    regions: {
      north: { word: 'ผ่อ', pronunciation: 'ผ่อ', example: 'ลองมาผ่อตางเพ้แล' },
      northeast: { word: 'เบิ่ง', pronunciation: 'เบิ่ง', example: 'มาเบิ่งหมอลำนำกันบ่' },
      central: { word: 'ดู', pronunciation: 'ดู', example: 'ดูท้องฟ้าวันนี้โปร่งใสจัง' },
      south: { word: 'แล', pronunciation: 'แล', example: 'แลต๊ะ นกบินมาเต็มต้นไม้' },
    },
  },
  {
    standardWord: 'คิดถึง',
    meaning: 'ระลึกถึงด้วยความผูกพันและห่วงหา',
    regions: {
      north: { word: 'กึ๊ดเติง', pronunciation: 'กึ๊ด-เติง', example: 'กึ๊ดเติงหาเปิ้นขนาด บ่ปะกั๋นเมิน' },
      northeast: { word: 'คิดฮอด', pronunciation: 'คิด-ฮอด', example: 'คิดฮอดบ้านเฮาหลายเด้อ' },
      central: { word: 'คิดถึง', pronunciation: 'คิด-ถึง', example: 'คิดถึงเพื่อนๆ สมัยเรียนจัง' },
      south: { word: 'คิดถึง (นึกถึง)', pronunciation: 'คิด-ถึง', example: 'นึกถึงแม่ที่หลบบ้านจัง' },
    },
  },
  {
    standardWord: 'กลับบ้าน',
    meaning: 'เดินทางหวนคืนสู่ถิ่นฐานที่อยู่อาศัย',
    regions: {
      north: { word: 'ปิ๊กบ้าน', pronunciation: 'ปิ๊ก-บ้าน', example: 'แลงนี้เปิ้นจะปิ๊กบ้านแล้วเน้อ' },
      northeast: { word: 'เมือบ้าน', pronunciation: 'เมือ-บ้าน', example: 'ปีใหม่นี้สิได้เมือบ้านแล้ว' },
      central: { word: 'กลับบ้าน', pronunciation: 'กลับ-บ้าน', example: 'เลิกงานแล้วรีบกลับบ้านพักผ่อน' },
      south: { word: 'หลบบ้าน', pronunciation: 'หลบ-บ้าน', example: 'หวันเย็นแล้ว รีบหลบบ้านต๊ะ' },
    },
  },
  {
    standardWord: 'โกหก',
    meaning: 'พูดเท็จ หลอกลวง ไม่ตรงกับความเป็นจริง',
    regions: {
      north: { word: 'ขี้จุ๊', pronunciation: 'ขี้-จุ๊', example: 'เปิ้นบ่ได้ขี้จุ๊เน้อ เชื่อเต๊อะ' },
      northeast: { word: 'ขี้ตั๋ว', pronunciation: 'ขี้-ตั๋ว', example: 'อย่ามาขี้ตั๋วข้อยเด้อ' },
      central: { word: 'โกหก', pronunciation: 'โก-หก', example: 'อย่าโกหกกันเลยนะ' },
      south: { word: 'ขี้ฮก', pronunciation: 'ขี้-ฮก', example: 'คนขี้ฮกเบเบ ไม่มีใครเชื่อแล้ว' },
    },
  },
  {
    standardWord: 'เยอะมาก',
    meaning: 'ปริมาณมากมาย จำนวนมหาศาล',
    regions: {
      north: { word: 'จ๊าดนัก', pronunciation: 'จ๊าด-นัก', example: 'คนมาแอ่วงานจ๊าดนักเลย' },
      northeast: { word: 'กะด้อ (หลายคัก)', pronunciation: 'กะ-ด้อ', example: 'งามกะด้อกะเดี้ย คนหลายคัก' },
      central: { word: 'เยอะมาก', pronunciation: 'เยอะ-มาก', example: 'มีของกินให้เลือกเยอะมาก' },
      south: { word: 'จังหู', pronunciation: 'จัง-หู', example: 'ปลาในทะเลชุมจังหู' },
    },
  },
  {
    standardWord: 'ช่วย/ช่วยเหลือ',
    meaning: 'ให้ความช่วยเหลือ เกื้อกูล บรรเทาภาระ',
    regions: {
      north: { word: 'จ้วย / ซ่อย', pronunciation: 'จ้วย', example: 'จ้วยเปิ้นยกของหน้อยเน้อเจ้า' },
      northeast: { word: 'ซ่อย', pronunciation: 'ซ่อย', example: 'ซ่อยข้อยแนเด้อพี่น้อง' },
      central: { word: 'ช่วย', pronunciation: 'ช่วย', example: 'ช่วยเปิดประตูให้หน่อยได้ไหม' },
      south: { word: 'ช่วย (สงเคราะห์)', pronunciation: 'ช่วย', example: 'ช่วยหยิบของให้ทีตะน้องบ่าว' },
    },
  },
  {
    standardWord: 'ทำไม',
    meaning: 'ด้วยเหตุใด เพราะเหตุผลกลใด',
    regions: {
      north: { word: 'ย่ะหยัง', pronunciation: 'ย่ะ-หยัง', example: 'ย่ะหยังถึงบ่มาตามนัด' },
      northeast: { word: 'เป็นหยัง (อีหยัง)', pronunciation: 'เป็น-หยัง', example: 'เป็นหยังคือบ่บอกความจริง' },
      central: { word: 'ทำไม', pronunciation: 'ทำ-ไม', example: 'ทำไมวันนี้รถติดจังเลย' },
      south: { word: 'ไซร', pronunciation: 'ไซร', example: 'ไซรถึงไม่มากินข้าวด้วยกัน' },
    },
  },
  {
    standardWord: 'ตอนเช้า',
    meaning: 'ช่วงเวลาเช้าตรู่ เริ่มต้นวันใหม่',
    regions: {
      north: { word: 'เมื่อเจ๊า', pronunciation: 'เมื่อ-เจ๊า', example: 'เมื่อเจ๊าอากาศเย็นสบายขนาด' },
      northeast: { word: 'ยามเช้า', pronunciation: 'ยาม-เช้า', example: 'ตื่นยามเช้ามาสูดอากาศสดชื่น' },
      central: { word: 'ตอนเช้า', pronunciation: 'ตอน-เช้า', example: 'ตอนเช้าพระอาทิตย์ขึ้นสวยงาม' },
      south: { word: 'หัวเช้า', pronunciation: 'หัว-เช้า', example: 'ตื่นแต่หัวเช้าไปตลาดน้ำกัน' },
    },
  },
  {
    standardWord: 'รองเท้า',
    meaning: 'เครื่องสวมใส่เท้าเพื่อความปลอดภัยและสุขอนามัย',
    regions: {
      north: { word: 'เกือก', pronunciation: 'เกือก', example: 'เกือกแตะคู่นี้ใส่สบายขนาด' },
      northeast: { word: 'เกิบ', pronunciation: 'เกิบ', example: 'ถอดเกิบไว้ใต้ตะล่างเฮือนเด้อ' },
      central: { word: 'รองเท้า', pronunciation: 'รอง-เท้า', example: 'สวมรองเท้าผ้าใบไปวิ่งออกกำลังกาย' },
      south: { word: 'เกือก', pronunciation: 'เกือก', example: 'ถอดเกือกไว้ข้างบันไดต๊ะ' },
    },
  },
  {
    standardWord: 'โกรธ/โมโห',
    meaning: 'มีอารมณ์ขุ่นเคือง ไม่พอใจอย่างรุนแรง',
    regions: {
      north: { word: 'โขด', pronunciation: 'โขด', example: 'เปิ้นบ่ได้โขดเน้อ สูผ่องใจ๋เย็นๆ' },
      northeast: { word: 'สูน / เคียด', pronunciation: 'สูน', example: 'อย่ามาเว้ากวน กำลังสูนเด้อนี่' },
      central: { word: 'โกรธ', pronunciation: 'โกรธ', example: 'อย่าโกรธกันเลยนะ ค่อยๆ พูดจากัน' },
      south: { word: 'หวิบ', pronunciation: 'หวิบ', example: 'อย่าชวนทะเลาะ หวิบแล้วนะ' },
    },
  },
  {
    standardWord: 'รีบ/เร่งรีบ',
    meaning: 'กระทำอย่างรวดเร็ว แข่งกับเวลา',
    regions: {
      north: { word: 'ขะใจ๋ / ฟั่ง', pronunciation: 'ขะ-ใจ๋', example: 'ขะใจ๋หน้อย รถเมล์จะออกแล้ว' },
      northeast: { word: 'ฟ่าว', pronunciation: 'ฟ่าว', example: 'ฟ่าวไปเด้อ เดี๋ยวบ่ทันรถ' },
      central: { word: 'รีบ', pronunciation: 'รีบ', example: 'รีบเดินหน่อย เดี๋ยวไปสายนะ' },
      south: { word: 'ด่วน / เร็วๆ', pronunciation: 'ด่วน', example: 'เร็วๆ ตะน้องบ่าว แดดออกแรงแล้ว' },
    },
  },
  {
    standardWord: 'สบายดีไหม',
    meaning: 'คำถามไถ่สารทุกข์สุกดิบ แสดงความห่วงใย',
    regions: {
      north: { word: 'สบายดีก่', pronunciation: 'สะ-บาย-ดี-ก่', example: 'อยู่ตางปู้น สบายดีก่เจ้า' },
      northeast: { word: 'สำบายดีบ่', pronunciation: 'สำ-บาย-ดี-บ่', example: 'พ่อใหญ่แม่ใหญ่ สำบายดีบ่จ้า' },
      central: { word: 'สบายดีไหม', pronunciation: 'สะ-บาย-ดี-ไหม', example: 'ไม่ได้เจอกันนาน สบายดีไหมครับ' },
      south: { word: 'สบายดีม้าย', pronunciation: 'สะ-บาย-ดี-ม้าย', example: 'ลุงป้า สบายดีม้ายครับ' },
    },
  },
];
