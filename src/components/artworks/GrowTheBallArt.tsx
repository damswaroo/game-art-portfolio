import React from 'react';
import { resolveAssetUrl } from '../../utils/assetPath';

interface Props {
  className?: string;
  variant?: 'card' | 'detailed' | 'hero';
}

export const GrowTheBallArt: React.FC<Props> = ({ className = '', variant = 'card' }) => {
  // WORKS 카드 대표 썸네일: '시작 화면 (메인 타이틀)' 이미지 표시
  if (variant === 'card') {
    const thumbSrc = resolveAssetUrl('/images/공좀키워오게/시작화면.png');
    return (
      <div
        className={`relative w-full h-full overflow-hidden select-none bg-[#090A0D] flex items-center justify-center ${className}`}
      >
        {/* 왜곡 없이 16:10 카드 비율을 꽉 채우는 앰비언트 블러 배경 */}
        <img
          src={thumbSrc}
          alt=""
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
          className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-105 pointer-events-none"
        />

        {/* 16:9 '시작 화면 (메인 타이틀)' 이미지가 잘리거나 왜곡되지 않도록 선명한 전경 썸네일 표시 */}
        <img
          src={thumbSrc}
          alt="공 좀 키워오게 메인 썸네일"
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
          className="relative z-10 w-full h-full object-contain"
          loading="lazy"
        />

        {/* 다크 테마 비네팅 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101114]/50 via-transparent to-transparent pointer-events-none z-20" />
      </div>
    );
  }

  const isDetailed = variant === 'detailed' || variant === 'hero';

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none bg-[#0D0F14] flex flex-col justify-between p-6 ${className}`}
      style={{ minHeight: isDetailed ? '360px' : '220px' }}
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5FA59_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07]" />

      {/* Ambient Radial Gradient Glow */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#C5FA59]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#2A3B18]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#8E939E] border-b border-[#232730] pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5FA59]" />
          <span className="text-[#C5FA59] font-bold tracking-wider">GROWTH ARCADE</span>
        </div>
        <span className="text-[11px] text-[#A7AAB0] bg-[#161922] px-2.5 py-0.5 rounded border border-[#272B35]">
          2026.10 – 2026.11
        </span>
      </div>

      {/* Center Visual: Concentric Growing Sphere & Absorbing Object Silhouettes */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-4 text-center">
        <div className="relative w-24 h-24 mb-3 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#C5FA59]" fill="none">
            {/* Outer absorption orbits */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#C5FA59"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              strokeOpacity="0.45"
            />
            <circle
              cx="50"
              cy="50"
              r="28"
              stroke="#C5FA59"
              strokeWidth="1.5"
              strokeOpacity="0.7"
              fill="rgba(197, 250, 89, 0.05)"
            />
            {/* Core sphere */}
            <circle
              cx="50"
              cy="50"
              r="16"
              stroke="#C5FA59"
              strokeWidth="2"
              fill="rgba(197, 250, 89, 0.14)"
            />
            {/* Smaller objects being absorbed */}
            <circle cx="19" cy="34" r="4" stroke="#C5FA59" strokeWidth="1.5" fill="rgba(197, 250, 89, 0.1)" />
            <rect
              x="76"
              y="26"
              width="7"
              height="7"
              rx="1.5"
              stroke="#C5FA59"
              strokeWidth="1.5"
              fill="rgba(197, 250, 89, 0.1)"
            />
            <polygon
              points="76,74 84,78 74,83"
              stroke="#C5FA59"
              strokeWidth="1.5"
              fill="rgba(197, 250, 89, 0.1)"
            />
            <circle cx="24" cy="72" r="3" fill="#C5FA59" fillOpacity="0.7" />
          </svg>
        </div>

        {/* Title & Core Genre Statement */}
        <div className="space-y-1">
          <h4 className="text-lg md:text-xl font-bold font-['Space_Grotesk'] text-[#F5F4F0] tracking-tight">
            공 좀 키워오게
          </h4>
          <p className="text-xs font-mono text-[#A7AAB0]">
            OBJECT ABSORPTION GROWTH ARCADE
          </p>
        </div>
      </div>

      {/* Bottom Pillars */}
      <div className="relative z-10 pt-3 border-t border-[#232730] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-[#C5FA59]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59]" />
          <span>GAME ART ASSETS</span>
          <span className="text-[#3E434E]">·</span>
          <span>2D / 3D VISUALS</span>
        </div>
        <span className="text-[#6E7380] text-[10px]">SCH SW AWARDED</span>
      </div>
    </div>
  );
};
