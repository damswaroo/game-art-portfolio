import React, { useState, useEffect } from 'react';
import { resolveAssetUrl } from '../../utils/assetPath';

interface Props {
  className?: string;
  variant?: 'card' | 'detailed';
}

export const FeelSoGutArt: React.FC<Props> = ({ className = '', variant = 'card' }) => {
  const [isPlayingBeat, setIsPlayingBeat] = useState(false);
  const [comboCount, setComboCount] = useState(48);
  const [beatPhase, setBeatPhase] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingBeat) {
      interval = setInterval(() => {
        setBeatPhase((prev) => (prev + 1) % 4);
        setComboCount((prev) => prev + 1);
      }, 450);
    }
    return () => clearInterval(interval);
  }, [isPlayingBeat]);

  const handleHitNote = () => {
    setComboCount((c) => c + 1);
  };

  // WORKS 카드 대표 썸네일: 사용자가 업로드한 실제 게임 썸네일 이미지 표시
  if (variant === 'card') {
    const thumbSrc = resolveAssetUrl('/images/필쏘굿_썸네일.png');
    return (
      <div
        className={`relative w-full h-full overflow-hidden select-none bg-[#0D0B12] flex items-center justify-center ${className}`}
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

        {/* 캐릭터와 Feel So Gut! 타이틀 로고가 잘리거나 왜곡되지 않도록 선명한 전경 썸네일 표시 */}
        <img
          src={thumbSrc}
          alt="FEEL SO GUT! 메인 썸네일"
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

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none bg-[#0D0B12] flex items-center justify-center ${className}`}
      style={{ minHeight: variant === 'detailed' ? '440px' : '280px' }}
    >
      {/* Dynamic Cyber Shamanic Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#24132B] via-[#120D1A] to-[#0A0710]" />
      
      {/* Neon Lighting Waves */}
      <div className="absolute -top-12 left-1/4 w-72 h-72 bg-lime-400/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-[90px] pointer-events-none" />

      {/* SVG Canvas for Cyber Shaman & Talismans */}
      <svg
        viewBox="0 0 700 460"
        className="relative z-10 w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Talisman Neon Gradient */}
          <linearGradient id="talismanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5FA59" />
            <stop offset="50%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          {/* Shaman Robe Gradient */}
          <linearGradient id="robeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1C1826" />
            <stop offset="100%" stopColor="#0B0910" />
          </linearGradient>

          {/* Fan Radial Gradient */}
          <radialGradient id="fanGrad" cx="50%" cy="100%" r="90%">
            <stop offset="0%" stopColor="#C5FA59" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#A855F7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1E1B2E" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Cyber Temple Geometric Lattice (창살 무늬 회로) */}
        <g opacity="0.25" stroke="#4C3D61" strokeWidth="1">
          <line x1="50" y1="0" x2="50" y2="460" strokeDasharray="6 4" />
          <line x1="150" y1="0" x2="150" y2="460" />
          <line x1="550" y1="0" x2="550" y2="460" />
          <line x1="650" y1="0" x2="650" y2="460" strokeDasharray="6 4" />
          <line x1="0" y1="120" x2="700" y2="120" />
          <line x1="0" y1="360" x2="700" y2="360" />
          {/* Korean Traditional Octagon Symbols in corners */}
          <polygon points="100,50 120,30 150,30 170,50 170,80 150,100 120,100 100,80" fill="none" />
          <polygon points="530,50 550,30 580,30 600,50 600,80 580,100 550,100 530,80" fill="none" />
        </g>

        {/* 4-Lane Rhythm Game Highway Perspective */}
        <g opacity="0.6">
          <line x1="350" y1="60" x2="160" y2="460" stroke="#37274F" strokeWidth="2" />
          <line x1="350" y1="60" x2="280" y2="460" stroke="#37274F" strokeWidth="1.5" />
          <line x1="350" y1="60" x2="420" y2="460" stroke="#37274F" strokeWidth="1.5" />
          <line x1="350" y1="60" x2="540" y2="460" stroke="#37274F" strokeWidth="2" />

          {/* Judgment Line (판정선) */}
          <line x1="180" y1="410" x2="520" y2="410" stroke="#C5FA59" strokeWidth="2.5" strokeOpacity="0.85" />
          <line x1="180" y1="414" x2="520" y2="414" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.4" />
        </g>

        {/* Falling Neon Talisman Notes (디지털 부적 노트) */}
        {/* Lane 1 */}
        <g transform="translate(240, 260) rotate(-4)">
          <rect x="-14" y="-22" width="28" height="44" rx="2" fill="#171221" stroke="#C5FA59" strokeWidth="2" />
          <text x="0" y="-8" fill="#C5FA59" fontSize="10" textAnchor="middle" fontWeight="bold">氣</text>
          <path d="M -8 2 L 8 2 L 0 16 Z" fill="#C5FA59" />
          <circle cx="0" cy="0" r="18" stroke="#C5FA59" strokeWidth="0.8" strokeDasharray="3 2" fill="none" opacity="0.5" />
        </g>

        {/* Lane 2 Hit Note with Burst Effect */}
        <g transform="translate(350, 410)">
          {/* Target Note */}
          <rect x="-16" y="-24" width="32" height="48" rx="3" fill="#C5FA59" stroke="#FFFFFF" strokeWidth="2" />
          <text x="0" y="-4" fill="#101114" fontSize="12" textAnchor="middle" fontWeight="bold">靈</text>
          <path d="M -8 8 L 8 8 L 0 20 Z" fill="#101114" />
          {/* Explosion / Shockwave */}
          <circle cx="0" cy="0" r={isPlayingBeat && beatPhase % 2 === 0 ? "38" : "28"} stroke="#C5FA59" strokeWidth="1.5" fill="none" opacity="0.8" />
          <circle cx="0" cy="0" r={isPlayingBeat && beatPhase % 2 === 0 ? "54" : "40"} stroke="#D946EF" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.5" />
        </g>

        {/* Lane 3 */}
        <g transform="translate(400, 200) rotate(6)">
          <rect x="-12" y="-18" width="24" height="36" rx="2" fill="#171221" stroke="#D946EF" strokeWidth="1.8" />
          <text x="0" y="-5" fill="#D946EF" fontSize="9" textAnchor="middle" fontWeight="bold">魂</text>
          <circle cx="0" cy="6" r="3" fill="#D946EF" />
        </g>

        {/* Stylized Cyber Mudang (무녀 전사 아랑) Silhouette & Key Visual */}
        <g transform="translate(180, 160)">
          {/* Hologram Shaman Fan (오방색 부채 홀로그램) */}
          <path
            d="M 50 160 Q 0 80 80 40 Q 150 10 200 70 Z"
            fill="url(#fanGrad)"
            stroke="#C5FA59"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />
          <line x1="50" y1="160" x2="80" y2="40" stroke="#C5FA59" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="160" x2="140" y2="45" stroke="#C5FA59" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="160" x2="200" y2="70" stroke="#C5FA59" strokeWidth="1" opacity="0.6" />
          
          {/* Shaman Priestess Torso & Neon Robes (철릭/도포 라인) */}
          <path
            d="M 80 140 L 130 135 L 145 260 L 55 260 Z"
            fill="url(#robeGrad)"
            stroke="#5B457B"
            strokeWidth="1.5"
          />
          {/* Glowing Optical Fiber Sash (고름/띠) */}
          <path d="M 90 170 Q 130 195 110 250" stroke="#C5FA59" strokeWidth="3" fill="none" />
          <path d="M 105 170 Q 150 205 140 255" stroke="#D946EF" strokeWidth="2" fill="none" />

          {/* Cyber Visor & Hair Tassel */}
          <circle cx="108" cy="105" r="22" fill="#1C1826" stroke="#483B5E" strokeWidth="1.5" />
          {/* Headset Antenna */}
          <line x1="90" y1="105" x2="75" y2="90" stroke="#C5FA59" strokeWidth="2" />
          <circle cx="74" cy="89" r="3" fill="#C5FA59" />
          {/* Traditional Hair Ribbon (댕기머리) with Fiberoptic Glow */}
          <path d="M 125 115 Q 160 145 150 210" stroke="#A855F7" strokeWidth="4" fill="none" />

          {/* Digital Shaman Bell (신방울) cluster floating */}
          <g transform="translate(150, 150)">
            <circle cx="0" cy="0" r="8" fill="#1E1929" stroke="#C5FA59" strokeWidth="1.5" />
            <circle cx="12" cy="10" r="7" fill="#1E1929" stroke="#C5FA59" strokeWidth="1.5" />
            <circle cx="-5" cy="14" r="6" fill="#1E1929" stroke="#D946EF" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="12" y2="10" stroke="#C5FA59" strokeWidth="1" />
            {/* Sound rings */}
            <circle cx="6" cy="6" r="24" stroke="#C5FA59" strokeWidth="0.8" strokeDasharray="3 3" fill="none" opacity="0.4" />
          </g>
        </g>

        {/* Judgement Text & Combo Display */}
        <g transform="translate(350, 340)">
          <text
            x="0"
            y="-10"
            fill="#C5FA59"
            fontSize="18"
            fontWeight="bold"
            fontFamily="monospace"
            textAnchor="middle"
            letterSpacing="0.1em"
          >
            PERFECT GUT!
          </text>
          <text
            x="0"
            y="14"
            fill="#F5F4F0"
            fontSize="28"
            fontWeight="900"
            fontFamily="'Space Grotesk', sans-serif"
            textAnchor="middle"
          >
            {comboCount} <tspan fontSize="12" fill="#C5FA59">COMBO</tspan>
          </text>
        </g>

        {/* BPM & Audio Wave Ticker */}
        <g transform="translate(520, 50)">
          <rect x="0" y="0" width="130" height="34" rx="4" fill="#171221" stroke="#3A2D4E" strokeWidth="1" />
          <text x="14" y="21" fill="#C5FA59" fontSize="11" fontFamily="monospace" fontWeight="bold">
            BPM 174
          </text>
          <text x="68" y="21" fill="#A7AAB0" fontSize="9" fontFamily="monospace">
            STAGE 03
          </text>
        </g>
      </svg>

      {/* Interactive Controls Overlay for Detailed View */}
      {variant === 'detailed' && (
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-2.5 bg-[#101114]/85 backdrop-blur-md rounded-lg border border-[#33363F]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlayingBeat(!isPlayingBeat)}
              className="px-3 py-1.5 text-xs font-mono font-medium rounded bg-[#C5FA59] text-[#101114] hover:bg-[#b4ea47] transition-colors"
            >
              {isPlayingBeat ? 'PAUSE RHYTHM' : 'PLAY RHYTHM BEAT'}
            </button>
            <button
              onClick={handleHitNote}
              className="px-3 py-1.5 text-xs font-mono font-medium rounded bg-[#24262B] text-[#F5F4F0] hover:bg-[#33363F] border border-[#3E434E] transition-colors"
            >
              TAP NOTE (HIT!)
            </button>
          </div>
          <span className="text-xs font-mono text-[#A7AAB0] hidden sm:inline">
            NEO-TRADITIONAL KOREAN CYBERPUNK
          </span>
        </div>
      )}

      {/* Frame Border */}
      <div className="absolute inset-0 pointer-events-none border border-[#33363F]/50" />
    </div>
  );
};
