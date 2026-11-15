import React from 'react';

interface Props {
  className?: string;
  variant?: 'hero' | 'card' | 'detailed';
}

export const OffTheRecordArt: React.FC<Props> = ({ className = '', variant = 'card' }) => {
  // WORKS 카드 대표 썸네일: 사용자가 업로드한 실제 타이틀 화면 이미지 표시
  if (variant === 'card') {
    return (
      <div
        className={`relative w-full h-full overflow-hidden select-none bg-[#090A0D] flex items-center justify-center ${className}`}
      >
        {/* 왜곡 없이 16:10 카드 비율을 꽉 채우는 앰비언트 블러 배경 */}
        <img
          src="/images/오프더레코드_썸네일2.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-105 pointer-events-none"
        />

        {/* 핵심 화면(캐릭터 및 타이틀 아트)이 잘리거나 왜곡되지 않도록 선명한 전경 썸네일 표시 */}
        <img
          src="/images/오프더레코드_썸네일2.png"
          alt="OFF THE RECORD 메인 썸네일"
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
      className={`relative w-full h-full overflow-hidden select-none bg-[#090A0D] flex items-center justify-center ${className}`}
      style={{ minHeight: variant === 'hero' ? '460px' : '280px' }}
    >
      {/* Deep Space Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1C2030] via-[#0E1017] to-[#08090C]" />

      {/* Nebula Dust */}
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-cyan-900/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-emerald-950/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-lime-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* SVG Canvas for Planet, Ring Station & Astronaut */}
      <svg
        viewBox="0 0 800 500"
        className="relative z-10 w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Planet Gradient */}
          <radialGradient id="planetGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#89A5C0" />
            <stop offset="35%" stopColor="#3A485A" />
            <stop offset="70%" stopColor="#1B222C" />
            <stop offset="100%" stopColor="#0A0D12" />
          </radialGradient>

          {/* Planet Atmospheric Glow */}
          <radialGradient id="atmoGlow" cx="45%" cy="40%" r="55%">
            <stop offset="70%" stopColor="transparent" />
            <stop offset="92%" stopColor="#C5FA59" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C5FA59" stopOpacity="0" />
          </radialGradient>

          {/* Planetary Ring Gradient */}
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5FA59" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#88A0B5" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#2D3B48" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0A0D12" stopOpacity="0" />
          </linearGradient>

          {/* Visor Reflection Gradient */}
          <linearGradient id="visorGrad" x1="20%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#C5FA59" />
            <stop offset="50%" stopColor="#4DEEEA" />
            <stop offset="100%" stopColor="#152B35" />
          </linearGradient>

          {/* Cosmic Grid Pattern */}
          <pattern id="celestialGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#252A36" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
        </defs>

        {/* Coordinate Grid Background */}
        <rect width="800" height="500" fill="url(#celestialGrid)" />

        {/* Distant Stars */}
        <g opacity="0.8">
          <circle cx="95" cy="80" r="1" fill="#FFFFFF" />
          <circle cx="140" cy="180" r="1.5" fill="#C5FA59" opacity="0.7" />
          <circle cx="210" cy="60" r="1" fill="#FFFFFF" />
          <circle cx="340" cy="120" r="0.8" fill="#FFFFFF" />
          <circle cx="680" cy="70" r="1.2" fill="#FFFFFF" />
          <circle cx="720" cy="190" r="1" fill="#C5FA59" />
          <circle cx="610" cy="140" r="1.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="80" cy="310" r="1" fill="#FFFFFF" />
          <circle cx="290" cy="240" r="0.7" fill="#FFFFFF" />
        </g>

        {/* Colossal Gas Giant Planet */}
        <g transform="translate(560, 180)">
          {/* Planet Body */}
          <circle cx="0" cy="0" r="150" fill="url(#planetGrad)" />
          {/* Atmosphere rim glow */}
          <circle cx="0" cy="0" r="152" fill="url(#atmoGlow)" />
          
          {/* Planetary Cloud Belts */}
          <path d="M -145 -30 Q -50 -10 145 -40" stroke="#4B5A6E" strokeWidth="6" opacity="0.3" strokeDasharray="6 3" />
          <path d="M -149 10 Q -20 30 149 -10" stroke="#6C8299" strokeWidth="8" opacity="0.25" />
          <path d="M -142 50 Q 10 70 142 30" stroke="#252E38" strokeWidth="12" opacity="0.4" />

          {/* Planetary Ring (back) */}
          <ellipse cx="0" cy="10" rx="260" ry="42" fill="none" stroke="url(#ringGrad)" strokeWidth="12" transform="rotate(-18)" opacity="0.8" />
        </g>

        {/* Orbital Space Station Archetype */}
        <g transform="translate(420, 140)">
          {/* Central Hub */}
          <circle cx="0" cy="0" r="10" fill="#1C232E" stroke="#C5FA59" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="4" fill="#C5FA59" />
          {/* Solar Panels & Truss */}
          <line x1="-50" y1="0" x2="50" y2="0" stroke="#7E8FA2" strokeWidth="1.5" />
          <line x1="0" y1="-30" x2="0" y2="30" stroke="#7E8FA2" strokeWidth="1.5" />
          {/* Rotating Habitat Ring */}
          <ellipse cx="0" cy="0" rx="36" ry="14" fill="none" stroke="#65768A" strokeWidth="2" strokeDasharray="5 3" />
          {/* Signal beacon */}
          <circle cx="0" cy="-32" r="2" fill="#C5FA59" className="animate-pulse" />
        </g>

        {/* Foreground Rocky Alien Ridge Silhouette */}
        <path
          d="M 0 500 L 0 380 Q 90 350 180 390 T 360 370 T 520 410 T 680 365 T 800 400 L 800 500 Z"
          fill="#0D0F14"
        />
        <path
          d="M 0 500 L 0 420 Q 120 390 220 430 T 440 410 T 650 440 T 800 420 L 800 500 Z"
          fill="#08090C"
        />

        {/* Astronaut Explorer Hero Silhouette with Illuminated Gear */}
        <g transform="translate(180, 270)">
          {/* Shadow */}
          <ellipse cx="25" cy="145" rx="45" ry="8" fill="#000000" opacity="0.6" />

          {/* Backpack & Life Support Module */}
          <rect x="-18" y="24" width="30" height="60" rx="8" fill="#1B2029" stroke="#373F4D" strokeWidth="1.5" />
          <circle cx="-5" cy="38" r="4" fill="#C5FA59" opacity="0.8" />
          <line x1="-10" y1="52" x2="4" y2="52" stroke="#5A6678" strokeWidth="2" />
          <line x1="-10" y1="62" x2="4" y2="62" stroke="#5A6678" strokeWidth="2" />

          {/* Heavy Space Suit Legs */}
          <path d="M 12 90 L 8 140 L -2 144 L -2 148 L 18 148 L 22 90 Z" fill="#202530" stroke="#363E4D" strokeWidth="1" />
          <path d="M 32 90 L 38 140 L 28 144 L 28 148 L 48 148 L 42 90 Z" fill="#1A1F28" stroke="#363E4D" strokeWidth="1" />

          {/* Torso & Armor Plates */}
          <path d="M 0 25 L 45 25 L 40 92 L 6 92 Z" fill="#272D3B" stroke="#3F4858" strokeWidth="1.5" />
          <rect x="8" y="38" width="28" height="26" rx="4" fill="#1E232E" />
          <line x1="12" y1="44" x2="32" y2="44" stroke="#C5FA59" strokeWidth="1" strokeOpacity="0.7" />

          {/* Helmet & Golden Visor Reflection */}
          <ellipse cx="22" cy="12" rx="20" ry="21" fill="#1E232E" stroke="#485365" strokeWidth="1.5" />
          {/* Glowing Visor */}
          <path
            d="M 14 0 Q 38 4 34 22 Q 22 26 12 18 Q 8 8 14 0 Z"
            fill="url(#visorGrad)"
            opacity="0.95"
            stroke="#C5FA59"
            strokeWidth="0.8"
          />

          {/* High-tech Handheld Scanner emitting scan cone */}
          <g transform="translate(48, 62)">
            <path d="M 0 0 L 14 8 L 8 14 Z" fill="#3A4454" />
            <line x1="12" y1="10" x2="90" y2="-10" stroke="#C5FA59" strokeWidth="0.7" strokeDasharray="4 2" opacity="0.6" />
            <line x1="12" y1="10" x2="110" y2="25" stroke="#C5FA59" strokeWidth="0.7" strokeDasharray="4 2" opacity="0.6" />
            <polygon points="12,10 90,-10 110,25" fill="#C5FA59" fillOpacity="0.06" />
          </g>

          {/* Telemetry Tag */}
          <g transform="translate(50, -10)">
            <line x1="0" y1="0" x2="25" y2="-15" stroke="#C5FA59" strokeWidth="1" strokeOpacity="0.8" />
            <line x1="25" y1="-15" x2="95" y2="-15" stroke="#C5FA59" strokeWidth="1" strokeOpacity="0.8" />
            <text x="30" y="-19" fill="#C5FA59" fontSize="9" fontFamily="monospace" letterSpacing="0.05em">
              SCOUT-EVA // 01
            </text>
            <text x="30" y="-8" fill="#8896A8" fontSize="8" fontFamily="monospace">
              O2: 98% · PRESS: 1.02 ATM
            </text>
          </g>
        </g>

        {/* Hard SF Reticle & HUD Elements */}
        <g opacity="0.85">
          {/* Top Left Compass */}
          <g transform="translate(40, 45)">
            <circle cx="16" cy="16" r="16" stroke="#2E3747" strokeWidth="1" fill="none" />
            <line x1="16" y1="0" x2="16" y2="32" stroke="#2E3747" strokeWidth="0.7" />
            <line x1="0" y1="16" x2="32" y2="16" stroke="#2E3747" strokeWidth="0.7" />
            <line x1="16" y1="16" x2="24" y2="8" stroke="#C5FA59" strokeWidth="1.5" />
            <text x="40" y="14" fill="#C5FA59" fontSize="10" fontFamily="monospace" fontWeight="600">
              ORBITAL SECTOR 07
            </text>
            <text x="40" y="26" fill="#758396" fontSize="8" fontFamily="monospace">
              LAT: 42°18'N · LNG: 114°02'E
            </text>
          </g>

          {/* Target Reticle on Planet Station */}
          <g transform="translate(420, 140)">
            <circle cx="0" cy="0" r="18" stroke="#C5FA59" strokeWidth="0.8" strokeDasharray="3 3" fill="none" opacity="0.6" />
            <line x1="-24" y1="0" x2="-18" y2="0" stroke="#C5FA59" strokeWidth="1" />
            <line x1="18" y1="0" x2="24" y2="0" stroke="#C5FA59" strokeWidth="1" />
            <line x1="0" y1="-24" x2="0" y2="-18" stroke="#C5FA59" strokeWidth="1" />
            <line x1="0" y1="18" x2="0" y2="24" stroke="#C5FA59" strokeWidth="1" />
            <text x="24" y="18" fill="#C5FA59" fontSize="8" fontFamily="monospace">
              STATION-AEGIS [ACTIVE]
            </text>
          </g>

          {/* Bottom Right Frame Accent */}
          <g transform="translate(710, 440)">
            <path d="M 0 40 L 45 40 L 45 0" stroke="#C5FA59" strokeWidth="1.5" fill="none" strokeOpacity="0.8" />
            <text x="-48" y="36" fill="#8896A8" fontSize="8" fontFamily="monospace" textAnchor="end">
              UNREAL 5.4 ENGINE RENDER
            </text>
          </g>
        </g>
      </svg>

      {/* Aesthetic Border Glow */}
      <div className="absolute inset-0 pointer-events-none border border-[#33363F]/50" />
    </div>
  );
};
