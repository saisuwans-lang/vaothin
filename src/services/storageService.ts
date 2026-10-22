import {
  Badge,
  CommunityPost,
  DictionaryEntry,
  SubmittedWordDraft,
  UserProgress,
} from '../types';
import { INITIAL_COMMUNITY_POSTS } from '../data/communityData';

const PROGRESS_KEY = 'vaothin_user_progress_v1';
const COMMUNITY_KEY = 'vaothin_community_posts_v1';
const SUBMITTED_WORDS_KEY = 'vaothin_submitted_words_v1';

export const ALL_BADGES: Badge[] = [
  {
    id: 'badge-starter',
    name: 'นักเริ่มเว้า',
    description: 'เริ่มต้นเรียนรู้และสำรวจคำศัพท์ภาษาถิ่นแรกของคุณ',
    icon: '🌱',
    bgGradient: 'from-emerald-400 to-teal-500',
    unlocked: true,
  },
  {
    id: 'badge-collector',
    name: 'นักสะสมคำ',
    description: 'บันทึกคำศัพท์ในรายการโปรดครบอย่างน้อย 5 คำ',
    icon: '📚',
    bgGradient: 'from-blue-400 to-indigo-500',
    unlocked: false,
    progress: 0,
    maxProgress: 5,
  },
  {
    id: 'badge-learner',
    name: 'เจ้าถิ่นมือใหม่',
    description: 'เรียนจบบทเรียนแรกในห้องเรียนเว้าถิ่นอย่างสมบูรณ์',
    icon: '🎓',
    bgGradient: 'from-amber-400 to-orange-500',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
  },
  {
    id: 'badge-gamer',
    name: 'เซียนสำนวน',
    description: 'เล่นเกมทายคำศัพท์และได้คะแนนเต็ม 100% ในเซสชันใดก็ได้',
    icon: '🏆',
    bgGradient: 'from-purple-400 to-pink-500',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
  },
  {
    id: 'badge-explorer',
    name: 'นักสำรวจสี่ภาค',
    description: 'เปิดดูรายละเอียดคำศัพท์ครบทั้ง 4 ภูมิภาค (เหนือ อีสาน กลาง ใต้)',
    icon: '🧭',
    bgGradient: 'from-rose-400 to-red-500',
    unlocked: false,
    progress: 0,
    maxProgress: 4,
  },
  {
    id: 'badge-contributor',
    name: 'ผู้สืบสานภาษา',
    description: 'มีส่วนร่วมส่งคำศัพท์หรือโพสต์แลกเปลี่ยนในลานเว้าถิ่น',
    icon: '💖',
    bgGradient: 'from-fuchsia-400 to-pink-600',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
  },
];

const DEFAULT_USER_PROGRESS: UserProgress = {
  name: 'คนชอบเว้า',
  avatar: '🐱',
  interestedRegion: 'all',
  xp: 35,
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  completedLessonIds: [],
  savedWordIds: ['north-lam', 'isan-wao', 'south-roi'],
  savedPostIds: [],
  searchHistory: ['คิดฮอด', 'แอ่ว', 'หรอย', 'แซ่บ'],
  unlockedBadgeIds: ['badge-starter'],
  likedPostIds: ['post-1'],
};

export const StorageService = {
  getUserProgress(): UserProgress {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      if (!raw) {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(DEFAULT_USER_PROGRESS));
        return DEFAULT_USER_PROGRESS;
      }
      return { ...DEFAULT_USER_PROGRESS, ...JSON.parse(raw) };
    } catch {
      return DEFAULT_USER_PROGRESS;
    }
  },

  saveUserProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('LocalStorage error saving user progress:', e);
    }
  },

  addXP(amount: number, reason?: string): { newXP: number; level: number; leveledUp: boolean } {
    const progress = this.getUserProgress();
    const oldLevel = Math.floor(progress.xp / 50) + 1;
    const newXP = progress.xp + amount;
    const newLevel = Math.floor(newXP / 50) + 1;
    progress.xp = newXP;
    this.saveUserProgress(progress);
    return {
      newXP,
      level: newLevel,
      leveledUp: newLevel > oldLevel,
    };
  },

  updateStreak(): number {
    const progress = this.getUserProgress();
    const today = new Date().toISOString().split('T')[0];
    if (progress.lastActiveDate === today) {
      return progress.streak;
    }

    const last = new Date(progress.lastActiveDate);
    const curr = new Date(today);
    const diffDays = Math.round((curr.getTime() - last.getTime()) / (1000 * 3600 * 24));

    if (diffDays === 1) {
      progress.streak += 1;
    } else if (diffDays > 1) {
      progress.streak = 1;
    }
    progress.lastActiveDate = today;
    this.saveUserProgress(progress);
    return progress.streak;
  },

  toggleFavoriteWord(wordId: string): boolean {
    const progress = this.getUserProgress();
    const index = progress.savedWordIds.indexOf(wordId);
    let isSaved = false;

    if (index >= 0) {
      progress.savedWordIds.splice(index, 1);
      isSaved = false;
    } else {
      progress.savedWordIds.push(wordId);
      isSaved = true;
      // Check collector badge
      if (progress.savedWordIds.length >= 5 && !progress.unlockedBadgeIds.includes('badge-collector')) {
        progress.unlockedBadgeIds.push('badge-collector');
      }
    }

    this.saveUserProgress(progress);
    return isSaved;
  },

  isWordSaved(wordId: string): boolean {
    const progress = this.getUserProgress();
    return progress.savedWordIds.includes(wordId);
  },

  addSearchHistory(term: string): void {
    const clean = term.trim();
    if (!clean) return;
    const progress = this.getUserProgress();
    const filtered = progress.searchHistory.filter((t) => t.toLowerCase() !== clean.toLowerCase());
    filtered.unshift(clean);
    progress.searchHistory = filtered.slice(0, 10);
    this.saveUserProgress(progress);
  },

  clearSearchHistory(): void {
    const progress = this.getUserProgress();
    progress.searchHistory = [];
    this.saveUserProgress(progress);
  },

  removeSearchHistoryItem(term: string): void {
    const progress = this.getUserProgress();
    progress.searchHistory = progress.searchHistory.filter((t) => t !== term);
    this.saveUserProgress(progress);
  },

  completeLesson(lessonId: string, xpReward: number = 20): boolean {
    const progress = this.getUserProgress();
    const isFirstTime = !progress.completedLessonIds.includes(lessonId);
    if (isFirstTime) {
      progress.completedLessonIds.push(lessonId);
      progress.xp += xpReward;
      if (!progress.unlockedBadgeIds.includes('badge-learner')) {
        progress.unlockedBadgeIds.push('badge-learner');
      }
      this.updateStreak();
      this.saveUserProgress(progress);
    }
    return isFirstTime;
  },

  unlockBadge(badgeId: string): void {
    const progress = this.getUserProgress();
    if (!progress.unlockedBadgeIds.includes(badgeId)) {
      progress.unlockedBadgeIds.push(badgeId);
      progress.xp += 30; // bonus for unlocking badge
      this.saveUserProgress(progress);
    }
  },

  // Community posts in storage
  getCommunityPosts(): CommunityPost[] {
    try {
      const raw = localStorage.getItem(COMMUNITY_KEY);
      if (!raw) {
        localStorage.setItem(COMMUNITY_KEY, JSON.stringify(INITIAL_COMMUNITY_POSTS));
        return INITIAL_COMMUNITY_POSTS;
      }
      return JSON.parse(raw);
    } catch {
      return INITIAL_COMMUNITY_POSTS;
    }
  },

  saveCommunityPosts(posts: CommunityPost[]): void {
    try {
      localStorage.setItem(COMMUNITY_KEY, JSON.stringify(posts));
    } catch (e) {
      console.warn('LocalStorage error saving community posts:', e);
    }
  },

  addCommunityPost(post: CommunityPost): void {
    const posts = this.getCommunityPosts();
    posts.unshift(post);
    this.saveCommunityPosts(posts);

    // Contributor badge & XP
    const progress = this.getUserProgress();
    progress.xp += 15;
    if (!progress.unlockedBadgeIds.includes('badge-contributor')) {
      progress.unlockedBadgeIds.push('badge-contributor');
    }
    this.saveUserProgress(progress);
  },

  toggleLikePost(postId: string): { likes: number; liked: boolean } {
    const posts = this.getCommunityPosts();
    const progress = this.getUserProgress();
    const post = posts.find((p) => p.id === postId);
    if (!post) return { likes: 0, liked: false };

    const likedIndex = progress.likedPostIds.indexOf(postId);
    let liked = false;
    if (likedIndex >= 0) {
      progress.likedPostIds.splice(likedIndex, 1);
      post.likes = Math.max(0, post.likes - 1);
      liked = false;
    } else {
      progress.likedPostIds.push(postId);
      post.likes += 1;
      liked = true;
    }

    this.saveCommunityPosts(posts);
    this.saveUserProgress(progress);
    return { likes: post.likes, liked };
  },

  addCommentToPost(postId: string, content: string): CommunityPost | null {
    const posts = this.getCommunityPosts();
    const progress = this.getUserProgress();
    const post = posts.find((p) => p.id === postId);
    if (!post) return null;

    post.comments.push({
      id: `c_${Date.now()}`,
      authorName: progress.name,
      authorAvatar: progress.avatar,
      content,
      createdAt: new Date().toISOString(),
      likes: 0,
    });

    this.saveCommunityPosts(posts);
    this.addXP(5);
    return post;
  },

  // Submitted words by users
  getSubmittedWords(): SubmittedWordDraft[] {
    try {
      const raw = localStorage.getItem(SUBMITTED_WORDS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  saveSubmittedWord(word: SubmittedWordDraft): void {
    try {
      const list = this.getSubmittedWords();
      list.unshift(word);
      localStorage.setItem(SUBMITTED_WORDS_KEY, JSON.stringify(list));

      const progress = this.getUserProgress();
      progress.xp += 20;
      if (!progress.unlockedBadgeIds.includes('badge-contributor')) {
        progress.unlockedBadgeIds.push('badge-contributor');
      }
      this.saveUserProgress(progress);
    } catch (e) {
      console.warn('LocalStorage error saving submitted word:', e);
    }
  },
};
