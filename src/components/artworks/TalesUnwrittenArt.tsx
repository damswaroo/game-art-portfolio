import React, { useState } from 'react';
import { resolveAssetUrl } from '../../utils/assetPath';

interface Props {
  className?: string;
  variant?: 'card' | 'detailed';
}

export const TalesUnwrittenArt: React.FC<Props> = ({ className = '', variant = 'card' }) => {
  const [currentEmotion, setCurrentEmotion] = useState<'CALM' | 'TENSE' | 'EMPATHY' | 'DOUBT'>('CALM');

  // WORKS 카드 대표 썸네일: 사용자가 업로드한 실제 게임 스크린샷 이미지 표시
  if (variant === 'card') {
    const primaryThumb = resolveAssetUrl('/images/tales-unwritten-thumbnail.png');
    const fallbackThumb = resolveAssetUrl('/images/projects/tales-unwritten/tales-unwritten-thumbnail.png');
    return (
      <div
        className={`relative w-full h-full overflow-hidden select-none bg-[#090A0D] flex items-center justify-center ${className}`}
      >
        {/* 왜곡 없이 16:10 카드 비율을 꽉 채우는 앰비언트 블러 배경 */}
        <img
          src={primaryThumb}
          alt=""
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
          className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-105 pointer-events-none"
        />

        {/* 주요 피사체와 지시문 텍스트가 잘리지 않는 선명한 전경 썸네일 */}
        <img
          src={primaryThumb}
          alt="TALES UNWRITTEN 메인 썸네일"
          className="relative z-10 w-full h-full object-contain"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.dataset.fallbackApplied) {
              target.style.opacity = '0';
              return;
            }
            target.dataset.fallbackApplied = 'true';
            target.src = fallbackThumb;
          }}
          loading="lazy"
        />

        {/* 다크 테마 비네팅 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101114]/50 via-transparent to-transparent pointer-events-none z-20" />
      </div>
    );
  }

  const emotionData = {
    CALM: {
      color: '#60A5FA',
      accent: '#93C5FD',
      dialogue: '"차분히 귀를 기울인다. 당신의 침착함이 상대의 경계심을 낮춥니다."',
      choice1: '1. "그 기록은 아직 온전한가요?" (논리적 설득)',
      choice2: '2. 침묵하며 단서의 위치를 주시한다.',
      syncRate: '94%',
    },
    TENSE: {
      color: '#F87171',
      accent: '#FCA5A5',
      dialogue: '"미세한 동공 확장 감지. 긴장된 호흡이 대화의 주도권을 흔듭니다."',
      choice1: '1. "시간이 없어요, 당장 넘겨줘요!" (돌발 압박)',
      choice2: '2. 숨을 고르고 뒤로 반 걸음 물러선다.',
      syncRate: '88%',
    },
    EMPATHY: {
      color: '#C5FA59',
      accent: '#D9F99D',
      dialogue: '"부드러운 미소와 눈맞춤. 상대가 닫혀 있던 진실을 털어놓기 시작합니다."',
      choice1: '1. "당신이 겪었던 고통, 이해할 수 있어요." (정서적 공명)',
      choice2: '2. 가만히 손을 뻗어 안심시킨다.',
      syncRate: '97%',
    },
    DOUBT: {
      color: '#FBBF24',
      accent: '#FDE68A',
      dialogue: '"찌푸린 눈썹과 시선 회피 감지. 상대가 거짓말의 징후를 알아챕니다."',
      choice1: '1. "정말 그날 밤 혼자였나요?" (모순 지적)',
      choice2: '2. 품 속에 숨긴 문서로 시선을 옮긴다.',
      syncRate: '82%',
    },
  };

  const active = emotionData[currentEmotion];

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none bg-[#0B0D11] flex flex-col items-center justify-between p-4 ${className}`}
      style={{ minHeight: variant === 'detailed' ? '460px' : '280px' }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#17202A] via-[#0E1217] to-[#07090C]" />

      {/* Top HUD: Biometric Sensor Status */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs font-mono text-[#A7AAB0] border-b border-[#252A36] pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: active.color }} />
          <span className="text-[#F5F4F0] font-semibold">TALES UNWRITTEN // EMOTION-HUD</span>
          <span className="text-[#64748B]">·</span>
          <span>CV TRACKING: 60 FPS</span>
        </div>
        <div className="flex items-center gap-3">
          <span>SYNC: <strong className="text-[#F5F4F0]">{active.syncRate}</strong></span>
          <span className="text-[#C5FA59] font-bold">STATE: {currentEmotion}</span>
        </div>
      </div>

      {/* Center Visual: Cinematic Face Mesh & Emotion Vector Graph */}
      <div className="relative z-10 w-full flex-1 my-3 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* SVG Facial Biometric Wireframe */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            {/* Outer Tracker Ring */}
            <circle cx="100" cy="100" r="90" stroke="#252A36" strokeWidth="1" />
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke={active.color}
              strokeWidth="1.5"
              strokeDasharray="8 4"
              strokeOpacity="0.8"
            />

            {/* Face Oval Contour */}
            <ellipse cx="100" cy="100" rx="48" ry="64" stroke="#475569" strokeWidth="1.2" />

            {/* Facial Landmark Tracking Points (MediaPipe style) */}
            <g stroke={active.color} strokeWidth="0.8" opacity="0.85">
              {/* Forehead & Brows */}
              <line x1="75" y1="70" x2="90" y2="68" />
              <line x1="110" y1="68" x2="125" y2="70" />
              {/* Eye Contours */}
              <ellipse cx="80" cy="85" rx="10" ry="5" />
              <circle cx="80" cy="85" r="2.5" fill={active.color} />
              <ellipse cx="120" cy="85" rx="10" ry="5" />
              <circle cx="120" cy="85" r="2.5" fill={active.color} />
              {/* Nose Bridge & Base */}
              <line x1="100" y1="80" x2="100" y2="108" />
              <line x1="93" y1="110" x2="107" y2="110" />
              {/* Mouth & Smile Curve */}
              {currentEmotion === 'EMPATHY' ? (
                <path d="M 85 130 Q 100 144 115 130" strokeWidth="1.8" />
              ) : currentEmotion === 'TENSE' ? (
                <line x1="88" y1="134" x2="112" y2="134" strokeWidth="1.8" />
              ) : currentEmotion === 'DOUBT' ? (
                <path d="M 86 135 Q 100 128 114 133" strokeWidth="1.8" />
              ) : (
                <path d="M 86 132 Q 100 136 114 132" strokeWidth="1.5" />
              )}
              {/* Jawline Landmark Nodes */}
              <circle cx="65" cy="120" r="1.5" fill="#64748B" />
              <circle cx="135" cy="120" r="1.5" fill="#64748B" />
              <circle cx="100" cy="162" r="2" fill={active.color} />
            </g>

            {/* Scanning Laser Horizon */}
            <line x1="20" y1="100" x2="180" y2="100" stroke={active.color} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
          </svg>

          {/* Central Emotion Label */}
          <div className="absolute -bottom-2 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1A1F29] border border-[#2D3748]" style={{ color: active.color }}>
            {currentEmotion} DETECTED
          </div>
        </div>

        {/* Emotion-Driven Dynamic Game Dialogue Box */}
        <div className="flex-1 w-full flex flex-col justify-center space-y-2.5 bg-[#141822]/90 border border-[#273040] p-3.5 rounded-lg">
          <div className="flex items-center justify-between text-xs text-[#A7AAB0]">
            <span className="font-semibold text-[#F5F4F0]">NPC ARCHIVIST // LILIAN</span>
            <span className="font-mono text-[11px]" style={{ color: active.color }}>AFFINITY +15</span>
          </div>
          
          <p className="text-xs sm:text-sm text-[#F5F4F0] leading-relaxed italic border-l-2 pl-2.5" style={{ borderColor: active.color }}>
            {active.dialogue}
          </p>

          <div className="pt-2 border-t border-[#252C3B] space-y-1.5">
            <div className="text-[11px] font-mono text-[#A7AAB0]">ADAPTIVE RESPONSES:</div>
            <div className="text-xs p-2 rounded bg-[#1B2230] text-[#F5F4F0] border border-[#2D3748] flex items-center justify-between cursor-pointer hover:border-[#C5FA59] transition-colors">
              <span>{active.choice1}</span>
              <span className="text-[10px] font-mono text-[#C5FA59]">SELECT</span>
            </div>
            <div className="text-xs p-2 rounded bg-[#131924] text-[#A7AAB0] border border-[#202736] flex items-center justify-between">
              <span>{active.choice2}</span>
              <span className="text-[10px] font-mono text-[#64748B]">ALT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Emotion Switcher (Allows recruiter/viewer to experience interactive UX) */}
      <div className="relative z-10 w-full pt-2 border-t border-[#222733] flex flex-wrap items-center justify-between gap-2">
        <span className="text-[11px] font-mono text-[#A7AAB0]">
          SIMULATE FACIAL INPUT:
        </span>
        <div className="flex items-center gap-1.5">
          {(['CALM', 'EMPATHY', 'TENSE', 'DOUBT'] as const).map((emo) => (
            <button
              key={emo}
              onClick={() => setCurrentEmotion(emo)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                currentEmotion === emo
                  ? 'bg-[#C5FA59] text-[#101114] font-bold shadow-sm'
                  : 'bg-[#1A1F29] text-[#A7AAB0] hover:text-[#F5F4F0] border border-[#2A3444]'
              }`}
            >
              {emo}
            </button>
          ))}
        </div>
      </div>

      {/* Frame Border */}
      <div className="absolute inset-0 pointer-events-none border border-[#33363F]/50" />
    </div>
  );
};
