import React from 'react';

interface MascotNongVaoProps {
  emotion?: 'happy' | 'thinking' | 'cheering' | 'waving';
  speechBubbleText?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const MascotNongVao: React.FC<MascotNongVaoProps> = ({
  emotion = 'happy',
  speechBubbleText,
  size = 'md',
  className = '',
  onClick,
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className} ${
        onClick ? 'cursor-pointer group' : ''
      }`}
      onClick={onClick}
    >
      {/* Speech Bubble */}
      {speechBubbleText && (
        <div className="mb-2 max-w-xs animate-bounce-subtle bg-white/95 backdrop-blur-sm border-2 border-[#DCD2FF] px-3.5 py-1.5 rounded-2xl shadow-sm text-xs sm:text-sm font-medium text-[#29323D] text-center relative z-10 transition-transform duration-200 group-hover:scale-105">
          <span>{speechBubbleText}</span>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r-2 border-b-2 border-[#DCD2FF] rotate-45" />
        </div>
      )}

      {/* Mascot Cloud-Cat SVG */}
      <div
        className={`${sizeMap[size]} transition-transform duration-300 group-hover:scale-110 relative flex items-center justify-center`}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
          {/* Cloud Body with soft gradient */}
          <defs>
            <linearGradient id="cloudGrad" x1="10" y1="20" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFDF8" />
              <stop offset="0.6" stopColor="#F2EDFF" />
              <stop offset="1" stopColor="#B8EBD0" />
            </linearGradient>
            <linearGradient id="earGrad" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#FFD9E5" />
              <stop offset="1" stopColor="#FFCCD9" />
            </linearGradient>
          </defs>

          {/* Ears */}
          <path d="M24 35 L33 15 L43 28 Z" fill="#DCD2FF" stroke="#A794FF" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M28 32 L34 19 L40 28 Z" fill="url(#earGrad)" />

          <path d="M76 35 L67 15 L57 28 Z" fill="#DCD2FF" stroke="#A794FF" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M72 32 L66 19 L60 28 Z" fill="url(#earGrad)" />

          {/* Cloud Body Shape */}
          <path
            d="M25 65 C18 65 12 59 12 52 C12 45 17 40 23 39 C23 38 23 37 23 36 C23 25 32 16 43 16 C51 16 58 21 61 28 C64 26 68 25 72 25 C82 25 90 33 90 43 C90 44 90 45 89 46 C94 48 98 53 98 59 C98 67 91 73 83 73 C81 73 80 73 78 72 C75 79 67 84 58 84 C50 84 43 80 39 74 C35 77 30 79 25 79 C18 79 12 73 12 66 C12 65.5 12.1 65 12.3 64.5 C15.5 64.9 20 65 25 65 Z"
            fill="url(#cloudGrad)"
            stroke="#A794FF"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Cheeks Blushing */}
          <ellipse cx="32" cy="56" rx="6" ry="3.5" fill="#FFCCD9" />
          <ellipse cx="68" cy="56" rx="6" ry="3.5" fill="#FFCCD9" />

          {/* Eyes based on emotion */}
          {emotion === 'happy' && (
            <>
              {/* Crescent smiling eyes */}
              <path d="M35 48 C37 44 43 44 45 48" stroke="#29323D" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M55 48 C57 44 63 44 65 48" stroke="#29323D" strokeWidth="3.5" strokeLinecap="round" />
            </>
          )}

          {emotion === 'cheering' && (
            <>
              {/* Sparkle eyes */}
              <circle cx="40" cy="48" r="4.5" fill="#29323D" />
              <circle cx="42" cy="46" r="1.5" fill="#FFF" />
              <circle cx="60" cy="48" r="4.5" fill="#29323D" />
              <circle cx="62" cy="46" r="1.5" fill="#FFF" />
            </>
          )}

          {emotion === 'thinking' && (
            <>
              <circle cx="40" cy="48" r="4" fill="#29323D" />
              <circle cx="60" cy="45" r="4.5" fill="#29323D" />
              <path d="M57 39 Q62 38 65 40" stroke="#29323D" strokeWidth="2.5" strokeLinecap="round" />
            </>
          )}

          {emotion === 'waving' && (
            <>
              <circle cx="40" cy="48" r="4" fill="#29323D" />
              <circle cx="42" cy="46" r="1.5" fill="#FFF" />
              <path d="M56 48 C58 44 64 44 66 48" stroke="#29323D" strokeWidth="3.5" strokeLinecap="round" />
            </>
          )}

          {/* Cute Nose and Mouth */}
          <polygon points="50,53 48,51 52,51" fill="#FF8BA7" />
          <path d="M47 54 C48.5 56 49.5 56 50 55 C50.5 56 51.5 56 53 54" stroke="#29323D" strokeWidth="2" strokeLinecap="round" />

          {/* Whiskers */}
          <path d="M22 53 L14 51" stroke="#A794FF" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 57 L13 58" stroke="#A794FF" strokeWidth="2" strokeLinecap="round" />
          <path d="M78 53 L86 51" stroke="#A794FF" strokeWidth="2" strokeLinecap="round" />
          <path d="M78 57 L87 58" stroke="#A794FF" strokeWidth="2" strokeLinecap="round" />

          {/* Cheerful waving paw when waving */}
          {emotion === 'waving' && (
            <path
              d="M78 68 C84 62 90 60 92 65 C94 70 87 75 80 74 Z"
              fill="#DCD2FF"
              stroke="#A794FF"
              strokeWidth="2"
            />
          )}
        </svg>
      </div>

      <span className="text-[11px] font-semibold text-[#6C5CE7] tracking-wide mt-0.5">
        น้องเว้า
      </span>
    </div>
  );
};
