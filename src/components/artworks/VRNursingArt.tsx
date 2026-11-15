import React, { useState } from 'react';

interface Props {
  className?: string;
  variant?: 'card' | 'detailed';
}

export const VRNursingArt: React.FC<Props> = ({ className = '', variant = 'card' }) => {
  const [selectedTool, setSelectedTool] = useState<'SYRINGE' | 'SWAB' | 'TOURNIQUET'>('SYRINGE');
  const [angle, setAngle] = useState(25); // Vein insertion angle: optimal 15-30 deg

  const isAngleOptimal = angle >= 15 && angle <= 30;

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none bg-[#090C10] flex flex-col items-center justify-between p-4 ${className}`}
      style={{ minHeight: variant === 'detailed' ? '460px' : '280px' }}
    >
      {/* 3D Clinical Virtual Reality Grid Horizon */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#112028] via-[#091118] to-[#060A0D]" />

      {/* Perspective Grid Floor */}
      <svg
        viewBox="0 0 600 300"
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
      >
        <line x1="300" y1="120" x2="0" y2="300" stroke="#2DD4BF" strokeWidth="1" />
        <line x1="300" y1="120" x2="150" y2="300" stroke="#2DD4BF" strokeWidth="0.8" />
        <line x1="300" y1="120" x2="300" y2="300" stroke="#2DD4BF" strokeWidth="1" />
        <line x1="300" y1="120" x2="450" y2="300" stroke="#2DD4BF" strokeWidth="0.8" />
        <line x1="300" y1="120" x2="600" y2="300" stroke="#2DD4BF" strokeWidth="1" />
        <line x1="120" y1="180" x2="480" y2="180" stroke="#2DD4BF" strokeWidth="0.8" />
        <line x1="60" y1="230" x2="540" y2="230" stroke="#2DD4BF" strokeWidth="1" />
        <line x1="0" y1="280" x2="600" y2="280" stroke="#2DD4BF" strokeWidth="1.2" />
      </svg>

      {/* Top VR Field of View (FOV) Bar */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs font-mono text-[#A7AAB0] border-b border-[#1E293B] pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-teal-400" />
          <span className="text-[#F5F4F0] font-semibold">META QUEST 3 // SPATIAL HUD</span>
          <span className="text-[#475569]">·</span>
          <span>6-DOF TRACKING: OPTIMAL</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#A7AAB0]">FOV: 110°</span>
          <span className="text-teal-400 font-bold">PROCEDURE: IV INJECTION</span>
        </div>
      </div>

      {/* Main Simulation Viewport: Patient Arm + Hologram Guidance + 6DOF Hand Reticle */}
      <div className="relative z-10 w-full flex-1 my-3 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Floating Holographic Procedure Card */}
        <div className="w-full md:w-56 p-3 rounded-lg bg-[#0E1720]/80 border border-teal-500/30 backdrop-blur-md space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-teal-300">
            <span>STEP 03 / 05</span>
            <span className="bg-teal-950 px-1.5 py-0.5 rounded border border-teal-700/50">ACTIVE</span>
          </div>
          <div className="text-xs text-[#F5F4F0] font-medium">정맥 내 주사바늘 진입각 유지</div>
          <div className="text-[11px] text-[#A7AAB0] leading-snug">
            적정 각도(15°~30°)를 유지하여 진입하고 혈관 내 역혈(Flashback)을 확인하십시오.
          </div>
          <div className="pt-1 border-t border-[#1E2A38] flex items-center justify-between text-xs">
            <span className="font-mono text-[#A7AAB0]">ANGLE:</span>
            <span className={`font-mono font-bold ${isAngleOptimal ? 'text-[#C5FA59]' : 'text-red-400'}`}>
              {angle}° {isAngleOptimal ? '(OPTIMAL)' : '(ADJUST)'}
            </span>
          </div>
        </div>

        {/* 3D Interactive Target Area & Virtual Controller Reticle */}
        <div className="relative w-64 h-48 md:w-72 md:h-52 flex items-center justify-center">
          <svg viewBox="0 0 280 200" className="w-full h-full" fill="none">
            {/* Patient Forearm Outline */}
            <path
              d="M 20 120 Q 90 90 260 100 L 260 160 Q 90 150 20 170 Z"
              fill="#1A242F"
              stroke="#2E3C4E"
              strokeWidth="1.5"
            />
            {/* Target Vein (혈관 라인) */}
            <path
              d="M 50 135 Q 120 115 240 125"
              stroke={isAngleOptimal ? '#2DD4BF' : '#475569'}
              strokeWidth="4"
              strokeDasharray="4 2"
              opacity="0.8"
            />

            {/* Insertion Target Zone Reticle */}
            <g transform="translate(130, 122)">
              <circle cx="0" cy="0" r="14" stroke="#C5FA59" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
              <circle cx="0" cy="0" r="4" fill="#C5FA59" />
              <line x1="-20" y1="0" x2="-8" y2="0" stroke="#C5FA59" strokeWidth="1" />
              <line x1="8" y1="0" x2="20" y2="0" stroke="#C5FA59" strokeWidth="1" />
              <line x1="0" y1="-20" x2="0" y2="-8" stroke="#C5FA59" strokeWidth="1" />
              <line x1="0" y1="8" x2="0" y2="20" stroke="#C5FA59" strokeWidth="1" />
            </g>

            {/* Virtual Syringe & Hand Reticle Angle Guide */}
            <g transform={`translate(130, 122) rotate(-${angle})`}>
              {/* Syringe Body */}
              <rect x="-6" y="-55" width="12" height="40" rx="2" fill="#243447" stroke="#486581" strokeWidth="1.2" />
              {/* Fluid Plunger */}
              <rect x="-4" y="-70" width="8" height="18" fill="#17222F" stroke="#334E68" strokeWidth="1" />
              {/* Needle */}
              <line x1="0" y1="-15" x2="0" y2="0" stroke="#E2E8F0" strokeWidth="1.5" />
              {/* Angle Arc Indicator */}
              <path d="M 30 0 A 30 30 0 0 0 25 -16" stroke="#C5FA59" strokeWidth="1" fill="none" />
            </g>

            {/* Holographic Vitals Monitor */}
            <g transform="translate(190, 30)">
              <rect x="0" y="0" width="75" height="42" rx="4" fill="#0C141E" stroke="#1D3042" strokeWidth="1" />
              <text x="8" y="16" fill="#2DD4BF" fontSize="9" fontFamily="monospace">HR: 76 BPM</text>
              <text x="8" y="28" fill="#A7AAB0" fontSize="8" fontFamily="monospace">BP: 120/80</text>
              <text x="8" y="38" fill="#C5FA59" fontSize="7" fontFamily="monospace">STABILITY: 99%</text>
            </g>
          </svg>
        </div>
      </div>

      {/* Interactive Tool Tray & Angle Slider */}
      <div className="relative z-10 w-full pt-2 border-t border-[#1C2633] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-mono text-[#A7AAB0]">6-DOF TOOL:</span>
          {(['SYRINGE', 'SWAB', 'TOURNIQUET'] as const).map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                selectedTool === tool
                  ? 'bg-teal-400 text-[#090C10] font-bold'
                  : 'bg-[#151F2B] text-[#A7AAB0] hover:text-[#F5F4F0] border border-[#233346]'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>

        {/* Real-time Angle Adjuster for Recruiter Interaction */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-[#A7AAB0]">INSERTION ANGLE:</span>
          <input
            type="range"
            min="5"
            max="45"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="w-24 accent-teal-400 cursor-pointer"
          />
          <span className="text-xs font-mono font-bold text-[#F5F4F0] w-7">{angle}°</span>
        </div>
      </div>

      {/* Frame Border */}
      <div className="absolute inset-0 pointer-events-none border border-[#33363F]/50" />
    </div>
  );
};
