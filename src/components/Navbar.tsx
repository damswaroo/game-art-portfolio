import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface Props {
  activeView: 'home' | 'project';
  onNavigateHome: (sectionId?: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeView,
  onNavigateHome,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateHome(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101114]/90 backdrop-blur-md border-b border-[#24262B] py-3.5 shadow-lg'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-lg md:text-xl font-bold tracking-tight text-[#F5F4F0] hover:text-[#C5FA59] transition-colors whitespace-nowrap shrink-0 font-['Space_Grotesk'] text-left"
        >
          KWON YUDAM
        </button>

        {/* Zone 2: Perfectly horizontally centered 3-link navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A7AAB0] absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => handleLinkClick('hero')}
            className="hover:text-[#F5F4F0] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C5FA59] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className="hover:text-[#F5F4F0] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C5FA59] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('works')}
            className="hover:text-[#F5F4F0] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C5FA59] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Works
          </button>
        </nav>

        {/* Zone 3: Primary action (GET IN TOUCH) */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider text-[#101114] bg-[#C5FA59] rounded-md hover:bg-[#b4ea47] active:scale-95 transition-all whitespace-nowrap shrink-0 uppercase font-['Space_Grotesk']"
          >
            Get in Touch
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#A7AAB0] hover:text-[#F5F4F0] hover:bg-[#24262B] transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101114]/98 border-b border-[#24262B] px-6 py-6 space-y-4 backdrop-blur-xl">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#A7AAB0]">
            <button
              onClick={() => handleLinkClick('hero')}
              className="text-left py-2 hover:text-[#F5F4F0] transition-colors border-b border-[#24262B]/50"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className="text-left py-2 hover:text-[#F5F4F0] transition-colors border-b border-[#24262B]/50"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick('works')}
              className="text-left py-2 hover:text-[#F5F4F0] transition-colors border-b border-[#24262B]/50"
            >
              Works
            </button>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#101114] bg-[#C5FA59] rounded-md hover:bg-[#b4ea47] transition-colors font-['Space_Grotesk']"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
};
