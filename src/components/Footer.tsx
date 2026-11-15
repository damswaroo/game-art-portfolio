import React from 'react';
import { ArrowUp } from 'lucide-react';

interface Props {
  onScrollToTop: () => void;
}

export const Footer: React.FC<Props> = ({ onScrollToTop }) => {
  return (
    <footer className="border-t border-[#24262B] bg-[#0E1013] py-12 text-[#A7AAB0]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-[#F5F4F0] font-semibold tracking-wider font-['Space_Grotesk']">
            KWON YUDAM · GAME DESIGN PORTFOLIO
          </div>
          <div>
            IMAGINED WORLDS, MADE VISIBLE. © {new Date().getFullYear()} ALL RIGHTS RESERVED.
          </div>
        </div>

        <button
          onClick={onScrollToTop}
          className="flex items-center gap-2 hover:text-[#C5FA59] transition-colors py-2 px-3 rounded-md hover:bg-[#1A1C22]"
          aria-label="페이지 맨 위로 이동"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
