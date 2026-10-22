export type Region = 'central' | 'north' | 'northeast' | 'south';

export type VerificationStatus = 'unverified' | 'pending' | 'verified' | 'disputed';

export interface WordExample {
  dialectSentence: string;
  standardTranslation: string;
}

export interface WordSource {
  title: string;
  url?: string;
  note?: string;
}

export interface DictionaryEntry {
  id: string;
  standardWord: string;
  dialectWord: string;
  pronunciation?: string;
  meaning: string;
  region: Region;
  province?: string;
  district?: string;
  category: string;
  examples: WordExample[];
  relatedWordIds: string[];
  spellingVariants?: string[];
  audioUrl?: string;
  audioType?: 'human' | 'synthetic';
  sources: WordSource[];
  verificationStatus: VerificationStatus;
  culturalNote?: string;
  viewCount?: number;
  favoritesCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface SubmittedWordDraft {
  id: string;
  dialectWord: string;
  standardWord: string;
  pronunciation?: string;
  meaning: string;
  region: Region;
  province?: string;
  district?: string;
  category: string;
  examples: WordExample[];
  sourceNote?: string;
  status: 'draft' | 'pending';
  submittedAt: string;
}

export type CommunityCategory =
  | 'word_share'
  | 'question'
  | 'idiom'
  | 'story'
  | 'translation_help';

export interface CommunityComment {
  id: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
  likes: number;
}

export interface CommunityPost {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    badge?: string;
  };
  region: Region | 'all';
  category: CommunityCategory;
  title: string;
  content: string;
  relatedWord?: string;
  likes: number;
  comments: CommunityComment[];
  createdAt: string;
  isReported?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  dialectWord: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  region: Region;
  category?: string;
}

export interface LessonSlide {
  id: string;
  title: string;
  type: 'concept' | 'vocab' | 'dialogue' | 'quiz_check';
  content: string;
  dialectWord?: string;
  standardWord?: string;
  pronunciation?: string;
  exampleSentence?: string;
  exampleTranslation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  region: Region | 'all';
  category: string;
  iconName: string;
  description: string;
  wordsCount: number;
  xpReward: number;
  slides: LessonSlide[];
  quickQuiz: QuizQuestion[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  bgGradient: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress?: number;
  maxProgress?: number;
}

export interface UserProgress {
  name: string;
  avatar: string;
  interestedRegion: Region | 'all';
  xp: number;
  streak: number;
  lastActiveDate: string;
  completedLessonIds: string[];
  savedWordIds: string[];
  savedPostIds: string[];
  searchHistory: string[];
  unlockedBadgeIds: string[];
  likedPostIds: string[];
}
