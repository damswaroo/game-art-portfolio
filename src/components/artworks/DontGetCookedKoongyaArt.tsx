import React, { useState } from 'react';
import { resolveAssetUrl } from '../../utils/assetPath';

interface Props {
  className?: string;
  variant?: 'card' | 'detailed' | 'hero';
}

/**
 * 대표 썸네일 이미지 경로
 */
const THUMBNAIL_IMAGE_SRC = '/images/Koongya/쿵야_썸네일.png';

export const DontGetCookedKoongyaArt: React.FC<Props> = ({
  className = '',
  variant = 'card',
}) => {
  const [imgError, setImgError] = useState(false);
  const resolvedThumbnailSrc = THUMBNAIL_IMAGE_SRC
    ? resolveAssetUrl(THUMBNAIL_IMAGE_SRC)
    : '';

  if (resolvedThumbnailSrc && !imgError) {
    return (
      <div
        className={`relative w-full h-full overflow-hidden select-none bg-[#090A0D] flex items-center justify-center ${className}`}
      >
        {/* 왜곡 없이 16:10 카드 비율을 꽉 채우는 앰비언트 블러 배경 */}
        <img
          src={resolvedThumbnailSrc}
          alt=""
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
          className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-105 pointer-events-none"
        />

        {/* 핵심 UI와 캐릭터가 잘리거나 왜곡되지 않도록 선명한 전경 썸네일 표시 */}
        <img
          src={resolvedThumbnailSrc}
          alt="Don't get cooked, Koongya! 대표 썸네일"
          className="relative z-10 w-full h-full object-contain"
          loading="lazy"
          onError={() => setImgError(true)}
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
      style={{ minHeight: isDetailed ? '340px' : '220px' }}
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5FA59_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07]" />

      {/* Subtle Ambient Accent Glow */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#C5FA59]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#2A3B18]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top-Right Platform Tag (Leaves top-left completely clear for ProjectThumbnailBadges) */}
      <div className="relative z-10 flex items-center justify-end text-[11px] font-mono text-[#A7AAB0]">
        <span className="bg-[#161922]/90 px-2.5 py-1 rounded border border-[#272B35] tracking-wider">
          ROBLOX · 1:5 SURVIVAL
        </span>
      </div>

      {/* Center Minimal Geometric Placeholder Visual */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-3 text-center space-y-3">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" aria-hidden="true">
            <polygon
              points="50,14 84,33 50,52 16,33"
              stroke="#C5FA59"
              strokeWidth="1.75"
              fill="rgba(197, 250, 89, 0.08)"
            />
            <polygon
              points="16,33 50,52 50,86 16,67"
              stroke="#C5FA59"
              strokeWidth="1.75"
              strokeOpacity="0.75"
              fill="rgba(197, 250, 89, 0.04)"
            />
            <polygon
              points="84,33 50,52 50,86 84,67"
              stroke="#C5FA59"
              strokeWidth="1.75"
              strokeOpacity="0.75"
              fill="rgba(197, 250, 89, 0.12)"
            />
            <circle cx="50" cy="52" r="3" fill="#C5FA59" />
          </svg>
        </div>

        <div className="space-y-1">
          <p className="text-[11px] font-mono text-[#C5FA59] tracking-widest uppercase">
            REPRESENTATIVE IMAGE COMING SOON
          </p>
          <h4 className="text-base sm:text-lg font-bold font-['Space_Grotesk'] text-[#F5F4F0] tracking-tight">
            Don&apos;t get cooked, Koongya!
          </h4>
          <p className="text-[11px] font-mono text-[#8E939E]">
            쿵야 레스토랑즈 IP · 프로토타입 개발 진행 중
          </p>
        </div>
      </div>

      {/* Bottom Minimal Metadata Strip */}
      <div className="relative z-10 pt-3 border-t border-[#232730] flex items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-[#8E939E]">
        <span className="text-[#C5FA59]/90">GAME UI · ICON · 3D ASSET</span>
        <span>PROTOTYPE BUILD</span>
      </div>
    </div>
  );
};
