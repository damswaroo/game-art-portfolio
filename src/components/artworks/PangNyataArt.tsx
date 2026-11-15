import React, { useState } from 'react';

interface Props {
  className?: string;
  variant?: 'card' | 'detailed';
}

export const PangNyataArt: React.FC<Props> = ({ className = '', variant = 'card' }) => {
  const [tapCount, setTapCount] = useState(0);
  const [isBurst, setIsBurst] = useState(false);
  const [activeMood, setActiveMood] = useState<'ANGER' | 'SAD' | 'ANXIETY' | 'JOY'>('ANGER');

  const moodConfig = {
    ANGER: { name: '불꽃냐타', color: '#F87171', tag: '월요병 & 업무 스트레스', reward: '열정 캔디 +3' },
    SAD: { name: '비구름냐타', color: '#60A5FA', tag: '공허함 & 위로 필요', reward: '온기 캔디 +3' },
    ANXIETY: { name: '가시냐타', color: '#FBBF24', tag: '취업 걱정 & 조급함', reward: '평온 캔디 +3' },
    JOY: { name: '무지개냐타', color: '#C5FA59', tag: '작은 성취 축하', reward: '축제 캔디 +5' },
  };

  const current = moodConfig[activeMood];

  const handleTap = () => {
    if (isBurst) {
      setIsBurst(false);
      setTapCount(0);
      return;
    }
    const next = tapCount + 1;
    if (next >= 5) {
      setIsBurst(true);
      setTapCount(5);
    } else {
      setTapCount(next);
    }
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none bg-[#0E1015] flex flex-col items-center justify-between p-4 ${className}`}
      style={{ minHeight: variant === 'detailed' ? '460px' : '280px' }}
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1C1A29] via-[#101117] to-[#0A0B0E]" />

      {/* Top Mobile Status Header */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs font-mono text-[#A7AAB0] border-b border-[#252834] pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: current.color }} />
          <span className="text-[#F5F4F0] font-semibold">PANG!ÑATA // WELLNESS APP</span>
          <span className="text-[#475569]">·</span>
          <span>{current.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#A7AAB0]">BURST COMBO:</span>
          <span className="font-mono font-bold text-[#C5FA59]">{tapCount} / 5</span>
        </div>
      </div>

      {/* Center Interactive Character Stage */}
      <div className="relative z-10 w-full flex-1 my-3 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Adorable Vector Piñata Mascot */}
        <div
          onClick={handleTap}
          className="relative w-44 h-44 md:w-52 md:h-52 flex items-center justify-center cursor-pointer group"
          title="클릭하여 감정 피냐타를 터뜨려보세요!"
        >
          {/* Confetti Explosion Burst */}
          {isBurst && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="absolute -top-4 left-4 w-3 h-3 rounded-full bg-[#C5FA59] animate-ping" />
              <span className="absolute top-2 -right-4 w-3 h-3 rounded-full bg-pink-400 animate-ping" />
              <span className="absolute -bottom-2 left-6 w-3 h-3 rounded-full bg-amber-300 animate-ping" />
              <span className="absolute bottom-4 -right-2 w-4 h-4 rounded-full bg-purple-400 animate-ping" />
              <div className="px-3 py-1 rounded-full bg-[#C5FA59] text-[#101114] font-bold text-xs tracking-wider shadow-lg animate-bounce">
                🎉 PANG! HEALED!
              </div>
            </div>
          )}

          {/* Scalable SVG Piñata Mascot */}
          <svg
            viewBox="0 0 200 200"
            className={`w-full h-full transition-transform duration-150 ${
              isBurst ? 'scale-75 opacity-20' : 'group-hover:scale-105 active:scale-95'
            }`}
            fill="none"
          >
            {/* Hanging String */}
            <line x1="100" y1="0" x2="100" y2="45" stroke="#64748B" strokeWidth="2" strokeDasharray="3 2" />

            {/* Piñata Body Layered Fringes */}
            <g transform="translate(100, 115)">
              {/* Legs */}
              <rect x="-30" y="30" width="14" height="26" rx="4" fill="#E2E8F0" />
              <rect x="16" y="30" width="14" height="26" rx="4" fill="#E2E8F0" />
              <rect x="-28" y="46" width="10" height="10" fill={current.color} />
              <rect x="18" y="46" width="10" height="10" fill={current.color} />

              {/* Main Body Oval */}
              <ellipse cx="0" cy="15" rx="48" ry="32" fill="#F8FAFC" stroke="#334155" strokeWidth="2" />
              {/* Paper Ribbon Fringe Stripes (피냐타 술 디테일) */}
              <path d="M -44 10 Q 0 22 44 10" stroke={current.color} strokeWidth="6" strokeLinecap="round" />
              <path d="M -40 22 Q 0 34 40 22" stroke="#A78BFA" strokeWidth="5" strokeLinecap="round" />
              <path d="M -34 32 Q 0 42 34 32" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />

              {/* Neck & Head */}
              <rect x="-22" y="-35" width="24" height="35" rx="6" fill="#F8FAFC" stroke="#334155" strokeWidth="2" />
              <circle cx="-10" cy="-35" r="22" fill="#F8FAFC" stroke="#334155" strokeWidth="2" />

              {/* Cute Piñata Horns / Ears */}
              <polygon points="-22,-52 -16,-68 -10,-52" fill={current.color} stroke="#334155" strokeWidth="1.5" />
              <polygon points="-4,-52 2,-68 8,-52" fill="#A78BFA" stroke="#334155" strokeWidth="1.5" />

              {/* Snout & Expressive Face */}
              <ellipse cx="-20" cy="-32" rx="10" ry="8" fill="#F1F5F9" />
              <circle cx="-16" cy="-40" r="3" fill="#1E293B" />
              <circle cx="-18" cy="-42" r="1" fill="#FFFFFF" />
              <circle cx="-24" cy="-32" r="2" fill={current.color} opacity="0.6" />

              {/* Cute Smiling Mouth */}
              <path d="M -22 -28 Q -19 -24 -16 -28" stroke="#1E293B" strokeWidth="1.5" fill="none" />

              {/* Hanging Tassel Tail */}
              <g transform="translate(42, 10)">
                <path d="M 0 0 Q 15 15 10 30" stroke="#F43F5E" strokeWidth="4" fill="none" />
                <path d="M 4 2 Q 18 17 14 32" stroke="#FBBF24" strokeWidth="3" fill="none" />
              </g>
            </g>
          </svg>

          {/* Interactive Hint */}
          <div className="absolute -bottom-3 text-[10px] font-mono text-[#A7AAB0] bg-[#161B24] px-2 py-0.5 rounded border border-[#2D3748]">
            {isBurst ? '터치하여 리셋하기' : `탭하여 터뜨리기 (${tapCount}/5)`}
          </div>
        </div>

        {/* Mobile App UI Card Mockup */}
        <div className="w-full md:w-60 p-3.5 rounded-xl bg-[#141822]/90 border border-[#2B3547] space-y-2.5">
          <div className="text-[11px] font-mono text-[#A7AAB0]">DAILY EMOTION QUEST</div>
          <div className="text-sm font-semibold text-[#F5F4F0] flex items-center justify-between">
            <span>{current.tag}</span>
            <span className="text-xs font-mono text-[#C5FA59]">{current.reward}</span>
          </div>
          <p className="text-xs text-[#A7AAB0] leading-relaxed">
            마음속 답답한 감정을 피냐타에 담아 터뜨려보세요. 스트레스 호르몬 수치가 낮아집니다.
          </p>

          <div className="space-y-1.5 pt-2 border-t border-[#252D3D]">
            <div className="flex justify-between text-[11px] text-[#A7AAB0]">
              <span>정서 회복률</span>
              <span className="font-mono text-[#C5FA59]">{isBurst ? '100% COMPLETED' : `${tapCount * 20}%`}</span>
            </div>
            <div className="w-full h-1.5 bg-[#1F2633] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C5FA59] transition-all duration-300"
                style={{ width: `${isBurst ? 100 : tapCount * 20}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mood Selector Switcher */}
      <div className="relative z-10 w-full pt-2 border-t border-[#232836] flex flex-wrap items-center justify-between gap-2">
        <span className="text-[11px] font-mono text-[#A7AAB0]">CHARACTER MOOD:</span>
        <div className="flex items-center gap-1.5">
          {(['ANGER', 'SAD', 'ANXIETY', 'JOY'] as const).map((m) => (
            <button
              key={m}
              onClick={() => {
                setActiveMood(m);
                setIsBurst(false);
                setTapCount(0);
              }}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                activeMood === m
                  ? 'bg-[#C5FA59] text-[#101114] font-bold'
                  : 'bg-[#181D26] text-[#A7AAB0] hover:text-[#F5F4F0] border border-[#2B3342]'
              }`}
            >
              {moodConfig[m].name}
            </button>
          ))}
        </div>
      </div>

      {/* Frame Border */}
      <div className="absolute inset-0 pointer-events-none border border-[#33363F]/50" />
    </div>
  );
};
