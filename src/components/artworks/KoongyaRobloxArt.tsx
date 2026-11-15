import React from 'react';

interface Props {
  className?: string;
  variant?: 'card' | 'detailed' | 'hero';
}

export const KoongyaRobloxArt: React.FC<Props> = ({ className = '', variant = 'card' }) => {
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
          <span className="w-2 h-2 rounded-full bg-[#C5FA59] animate-pulse" />
          <span className="text-[#C5FA59] font-bold tracking-wider">ROBLOX × KOONGYA IP</span>
        </div>
        <span className="text-[11px] text-[#A7AAB0] bg-[#161922] px-2.5 py-0.5 rounded border border-[#272B35]">
          2026 · ONGOING
        </span>
      </div>

      {/* Center Visual: Geometric 3D Wireframe & UI Grid Silhouette */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-4 text-center">
        {/* Isometric 3D Wireframe Icon */}
        <div className="relative w-24 h-24 mb-3 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#C5FA59]" fill="none">
            {/* Isometric Cube (3D Modeling representation) */}
            <polygon
              points="50,15 85,35 50,55 15,35"
              stroke="#C5FA59"
              strokeWidth="2"
              fill="rgba(197, 250, 89, 0.08)"
            />
            <polygon
              points="15,35 50,55 50,90 15,70"
              stroke="#C5FA59"
              strokeWidth="2"
              strokeOpacity="0.8"
              fill="rgba(197, 250, 89, 0.04)"
            />
            <polygon
              points="85,35 50,55 50,90 85,70"
              stroke="#C5FA59"
              strokeWidth="2"
              strokeOpacity="0.8"
              fill="rgba(197, 250, 89, 0.12)"
            />
            {/* UI Coordinate Crosshairs */}
            <line x1="50" y1="5" x2="50" y2="15" stroke="#C5FA59" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="50" cy="55" r="3" fill="#C5FA59" />
          </svg>
        </div>

        {/* Title & Core Genre Statement */}
        <div className="space-y-1">
          <h4 className="text-lg md:text-xl font-bold font-['Space_Grotesk'] text-[#F5F4F0] tracking-tight">
            KOONGYA RESTAURANTZ
          </h4>
          <p className="text-xs font-mono text-[#A7AAB0]">
            ASYMMETRIC MULTIPLAYER TAG GAME
          </p>
        </div>
      </div>

      {/* Bottom Role Pillars */}
      <div className="relative z-10 pt-3 border-t border-[#232730] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-[#C5FA59]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59]" />
          <span>GAME UI</span>
          <span className="text-[#3E434E]">·</span>
          <span>ICON DESIGN</span>
          <span className="text-[#3E434E]">·</span>
          <span>3D MODELING</span>
        </div>
        <span className="text-[#6E7380] text-[10px]">NETMARBLE CONTEST</span>
      </div>
    </div>
  );
};
