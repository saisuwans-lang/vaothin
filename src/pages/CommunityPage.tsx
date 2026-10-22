import React, { useState } from 'react';
import {
  Users,
  PlusCircle,
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
  AlertTriangle,
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  Send,
  X,
} from 'lucide-react';
import { CommunityCategory, CommunityPost, Region, UserProgress } from '../types';
import { StorageService } from '../services/storageService';
import { REGION_CONFIG } from '../data/dictionaryData';
import { MascotNongVao } from '../components/common/MascotNongVao';

interface CommunityPageProps {
  userProgress: UserProgress;
  onSelectWord: (wordId: string) => void;
  onOpenAIChat: (prompt?: string) => void;
}

const CATEGORY_LABELS: Record<CommunityCategory, { label: string; icon: string }> = {
  word_share: { label: 'คำศัพท์จากบ้านฉัน', icon: '🗣️' },
  question: { label: 'คำถามเกี่ยวกับภาษา', icon: '❓' },
  idiom: { label: 'สำนวนท้องถิ่น', icon: '📜' },
  story: { label: 'เรื่องเล่าจากบ้านเกิด', icon: '📖' },
  translation_help: { label: 'ช่วยแปลคำศัพท์', icon: '🤝' },
};

export const CommunityPage: React.FC<CommunityPageProps> = ({
  userProgress,
  onSelectWord,
  onOpenAIChat,
}) => {
  const [posts, setPosts] = useState<CommunityPost[]>(() =>
    StorageService.getCommunityPosts()
  );
  const [selectedRegion, setSelectedRegion] = useState<Region | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<CommunityCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Post Creation State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newRegion, setNewRegion] = useState<Region | 'all'>('all');
  const [newCategory, setNewCategory] = useState<CommunityCategory>('word_share');
  const [newRelatedWord, setNewRelatedWord] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState('');

  // Active Comment Input
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState('');

  // Handle Like
  const handleToggleLike = (postId: string) => {
    const res = StorageService.toggleLikePost(postId);
    setPosts(StorageService.getCommunityPosts());
  };

  // Handle Add Comment
  const handleAddComment = (postId: string) => {
    if (!commentInput.trim()) return;
    StorageService.addCommentToPost(postId, commentInput.trim());
    setPosts(StorageService.getCommunityPosts());
    setCommentInput('');
    setSuccessToast('เพิ่มความคิดเห็นเรียบร้อยแล้ว (+5 XP)');
    setTimeout(() => setSuccessToast(''), 2500);
  };

  // Handle Create Post
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    setIsSubmitting(true);
    const newPost: CommunityPost = {
      id: `post_${Date.now()}`,
      author: {
        id: `user_${Date.now()}`,
        name: userProgress.name || 'ผู้ร่วมแบ่งปัน',
        avatar: userProgress.avatar || '🐱',
        badge: 'ผู้สืบสานภาษา',
      },
      region: newRegion,
      category: newCategory,
      title: newTitle.trim(),
      content: newContent.trim(),
      relatedWord: newRelatedWord.trim() || undefined,
      likes: 1,
      comments: [],
      createdAt: new Date().toISOString(),
    };

    StorageService.addCommunityPost(newPost);
    setPosts(StorageService.getCommunityPosts());
    setIsSubmitting(false);
    setIsCreateModalOpen(false);
    setNewTitle('');
    setNewContent('');
    setNewRelatedWord('');
    setSuccessToast('โพสต์ของคุณถูกเผยแพร่ในลานเว้าถิ่นแล้ว! (+15 XP)');
    setTimeout(() => setSuccessToast(''), 3000);
  };

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    if (selectedRegion !== 'all' && post.region !== selectedRegion) return false;
    if (selectedCategory !== 'all' && post.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchContent = post.content.toLowerCase().includes(q);
      const matchWord = post.relatedWord?.toLowerCase().includes(q);
      return matchTitle || matchContent || matchWord;
    }
    return true;
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-20 right-6 z-50 bg-[#29323D] text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 animate-in slide-in-from-top">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Hero Community Header */}
      <div className="bg-gradient-to-r from-[#FFD6C2]/40 via-[#FFFDF8] to-[#DCD2FF]/40 rounded-3xl border border-[#FFD6C2]/70 p-6 sm:p-10 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFD6C2] text-[#E15B28]">
                ลานเว้าถิ่น
              </span>
              <span className="text-xs text-gray-500">
                พื้นที่แลกเปลี่ยนภาษาและวัฒนธรรม
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#29323D]">
              ลานเสวนา & แบ่งปันคำเว้า
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#6B7280] max-w-xl leading-relaxed">
              ร่วมตั้งคำถาม แชร์คำศัพท์แปลกใหม่จากบ้านเกิด หรือแลกเปลี่ยนเรื่องเล่าท้องถิ่น
              ด้วยบรรยากาศที่อบอุ่นและสร้างสรรค์
            </p>
          </div>

          <div className="flex flex-col items-end gap-3">
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#29323D] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-[#B8EBD0]" />
              <span>สร้างโพสต์ใหม่</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาโพสต์ คำศัพท์ หรือหัวข้อสนทนา..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-[#FFFDF8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD6C2]"
            />
          </div>

          {/* Region filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedRegion === 'all'
                  ? 'bg-[#29323D] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              ทุกภูมิภาค
            </button>
            {(['north', 'northeast', 'central', 'south'] as Region[]).map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedRegion === reg
                    ? `${REGION_CONFIG[reg].badgeBg} ${REGION_CONFIG[reg].textColor} font-bold`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {REGION_CONFIG[reg].nameThai}
              </button>
            ))}
          </div>
        </div>

        {/* Category chips */}
        <div className="pt-3 border-t border-gray-100 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="font-bold text-gray-400 shrink-0">หมวดหมู่:</span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-gray-800 text-white font-bold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            ทั้งหมด
          </button>
          {(Object.keys(CATEGORY_LABELS) as CommunityCategory[]).map((catKey) => {
            const item = CATEGORY_LABELS[catKey];
            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-2.5 py-1 rounded-lg shrink-0 flex items-center gap-1 transition-colors ${
                  selectedCategory === catKey
                    ? 'bg-[#FFD6C2] text-[#E15B28] font-bold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Post List */}
      <div className="space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => {
            const isLiked = userProgress.likedPostIds.includes(post.id);
            const regConfig = post.region !== 'all' ? REGION_CONFIG[post.region] : null;
            const isCommentsOpen = activeCommentPostId === post.id;

            return (
              <div
                key={post.id}
                className="bg-white rounded-3xl border border-gray-200/80 p-5 sm:p-6 shadow-xs space-y-3.5 hover:border-[#DCD2FF] transition-all"
              >
                {/* Author & Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#DCD2FF] to-[#FFD9E5] flex items-center justify-center text-xl shadow-xs border border-white">
                      {post.author.avatar || '🐱'}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-[#29323D] text-sm">
                          {post.author.name}
                        </span>
                        {post.author.badge && (
                          <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                            {post.author.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        {new Date(post.createdAt).toLocaleDateString('th-TH', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {regConfig && (
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${regConfig.badgeBg} ${regConfig.textColor}`}
                      >
                        {regConfig.nameThai}
                      </span>
                    )}
                    <span className="text-[10px] bg-[#FFF0A8] text-[#8C6D00] px-2.5 py-0.5 rounded-full font-semibold">
                      {CATEGORY_LABELS[post.category]?.label || post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#29323D]">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#29323D]/80 leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>
                </div>

                {/* Related Word Tag */}
                {post.relatedWord && (
                  <div className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-xl bg-[#F6F1FF] text-[#6C5CE7]">
                    <span>คำศัพท์ที่เกี่ยวข้อง:</span>
                    <span className="underline">{post.relatedWord}</span>
                  </div>
                )}

                {/* Actions Bar */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    {/* Like button */}
                    <button
                      onClick={() => handleToggleLike(post.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                        isLiked
                          ? 'bg-rose-50 text-rose-600 border-rose-200 font-bold'
                          : 'hover:bg-gray-50 text-gray-600 border-gray-200'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{post.likes}</span>
                    </button>

                    {/* Comments button */}
                    <button
                      onClick={() =>
                        setActiveCommentPostId(isCommentsOpen ? null : post.id)
                      }
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{post.comments.length} ความคิดเห็น</span>
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      onOpenAIChat(
                        `ช่วยให้ความเห็นหรือร่วมตอบคำถามในโพสต์นี้หน่อย: "${post.title}" - ${post.content}`
                      )
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#6C5CE7] hover:underline cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ให้น้องเว้าช่วยตอบ</span>
                  </button>
                </div>

                {/* Comment Section Thread */}
                {isCommentsOpen && (
                  <div className="mt-3 pt-3 border-t border-dashed border-gray-200 space-y-3">
                    {/* Comments List */}
                    {post.comments.length > 0 ? (
                      <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                        {post.comments.map((comment) => (
                          <div
                            key={comment.id}
                            className="p-3 rounded-2xl bg-[#FFFDF8] border border-gray-100 text-xs flex items-start gap-2.5"
                          >
                            <span className="text-base shrink-0">
                              {comment.authorAvatar || '🐱'}
                            </span>
                            <div className="flex-1">
                              <div className="font-bold text-[#29323D]">
                                {comment.authorName}
                              </div>
                              <div className="text-gray-700 mt-0.5 leading-relaxed">
                                {comment.content}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400 italic">
                        ยังไม่มีความคิดเห็น เป็นคนแรกที่ร่วมแสดงความคิดเห็นเลย!
                      </p>
                    )}

                    {/* Add Comment Input */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="text"
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                        onKeyDown={(e) =>
                          e.key === 'Enter' && handleAddComment(post.id)
                        }
                        placeholder="เขียนความคิดเห็นของคุณ..."
                        className="flex-1 px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]"
                      />
                      <button
                        onClick={() => handleAddComment(post.id)}
                        disabled={!commentInput.trim()}
                        className="p-2 rounded-xl bg-[#29323D] hover:bg-black text-white text-xs disabled:opacity-40 transition-all cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-3xl p-8 text-center text-xs text-gray-500 border border-gray-200">
            ไม่พบโพสต์ที่ตรงกับตัวกรอง ลองเปลี่ยนตัวกรองหรือสร้างโพสต์ใหม่เป็นคนแรกได้เลยจ้า!
          </div>
        )}
      </div>

      {/* Create Post Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="text-lg font-bold text-[#29323D] flex items-center gap-2">
                <span>✍️</span> สร้างโพสต์ใหม่ในลานเว้าถิ่น
              </h3>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  หัวข้อโพสต์ *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="เช่น คำว่า 'สลิด' ในภาษาเหนือแปลว่าอะไรนะ?"
                  className="w-full p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF] text-sm font-semibold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    ภูมิภาคที่เกี่ยวข้อง
                  </label>
                  <select
                    value={newRegion}
                    onChange={(e) => setNewRegion(e.target.value as any)}
                    className="w-full p-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]"
                  >
                    <option value="all">ทุกภูมิภาค</option>
                    <option value="north">ภาคเหนือ</option>
                    <option value="northeast">ภาคอีสาน</option>
                    <option value="central">ภาคกลาง</option>
                    <option value="south">ภาคใต้</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    หมวดหมู่โพสต์
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full p-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]"
                  >
                    {(Object.keys(CATEGORY_LABELS) as CommunityCategory[]).map((k) => (
                      <option key={k} value={k}>
                        {CATEGORY_LABELS[k].label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  คำศัพท์ที่เกี่ยวข้อง (ถ้ามี)
                </label>
                <input
                  type="text"
                  value={newRelatedWord}
                  onChange={(e) => setNewRelatedWord(e.target.value)}
                  placeholder="เช่น สลิด, จ๊วด, ขี้ฮก"
                  className="w-full p-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF]"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  เนื้อหาโพสต์ *
                </label>
                <textarea
                  required
                  rows={4}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="เล่าเรื่องราว ถ่ายทอดความรู้ หรือถามคำถามด้วยถ้อยคำที่สุภาพ..."
                  className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DCD2FF] leading-relaxed"
                />
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">
                  รับทันที +15 XP เมื่อร่วมแบ่งปัน
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCreateModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-100 font-semibold cursor-pointer"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !newTitle.trim() || !newContent.trim()}
                    className="px-5 py-2 rounded-xl bg-[#29323D] hover:bg-black text-white font-bold disabled:opacity-40 cursor-pointer shadow-xs"
                  >
                    {isSubmitting ? 'กำลังส่ง...' : 'เผยแพร่โพสต์'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
