import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { FadeUp } from './animations/ScrollReveal';

interface Props {
  onExploreClick: () => void;
  onOpenFeaturedProject: () => void;
}

export const HeroSection: React.FC<Props> = ({ onExploreClick, onOpenFeaturedProject }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:py-32 flex flex-col justify-between overflow-hidden bg-[#101114]">
      {/* Layer 1: Ambient Green Light Halo (Soft illumination spreading from right to center) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_55%,_rgba(197,250,89,0.16)_0%,_rgba(74,222,128,0.10)_30%,_transparent_65%)]"
        aria-hidden="true"
      />

      {/* Layer 2: Ambient Unsplash Background Image (Philipp Hubert - uqWRXjbDplg) at 60% opacity */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-no-repeat bg-[center_right] md:bg-[85%_50%] opacity-60 brightness-125 contrast-120 saturate-160 transition-opacity duration-700"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
        aria-hidden="true"
      />

      {/* Layer 3: Streamlined Black Overlay (~25% base tint with leftward text protection & seamless edges) */}
      <div
        className="absolute inset-0 pointer-events-none bg-black/25 bg-gradient-to-r from-[#101114] via-[#101114]/80 via-40% to-transparent"
        aria-hidden="true"
      />

      {/* Layer 4: Top & Bottom Seamless Edge Blending */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#101114]/80 via-transparent via-15% to-[#101114]"
        aria-hidden="true"
      />

      {/* Main Content Container (Max width 1200px) */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        {/* Top Discipline Kicker with FadeUp */}
        <FadeUp delay={0.05} distance={20}>
          <div className="mb-6 md:mb-8 flex flex-wrap items-center gap-2 text-xs md:text-sm font-mono text-[#A7AAB0] tracking-wider uppercase">
            <span className="text-[#C5FA59] font-bold">권유담 KWON YUDAM</span>
            <span className="text-[#3E434E]" aria-hidden="true">·</span>
            <span>VISUAL DESIGN</span>
            <span className="text-[#3E434E]" aria-hidden="true">/</span>
            <span>AI-ASSISTED CREATION</span>
            <span className="text-[#3E434E]" aria-hidden="true">/</span>
            <span>GAME GRAPHICS</span>
          </div>
        </FadeUp>

        {/* Hero Content Area */}
        <div className="max-w-4xl space-y-8">
          <FadeUp delay={0.15} distance={30} duration={0.85}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px] xl:text-[104px] font-extrabold tracking-[-0.04em] leading-[0.95] text-[#F5F4F0] font-['Space_Grotesk']">
              <span className="block whitespace-nowrap">IMAGINED</span>
              <span className="block whitespace-nowrap">WORLDS,</span>
              <span className="block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#F5F4F0] via-[#F5F4F0] to-[#C5FA59]">
                MADE VISIBLE.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.25} distance={25} duration={0.8}>
            <div className="space-y-4 pt-2 max-w-2xl">
              <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-[#F5F4F0] font-medium leading-[1.65] md:leading-[1.7] break-keep">
                <span className="inline-block">상상 속 게임의 세계를 시각적으로 구현하는</span>{' '}
                <span className="inline-block">비주얼 디자이너 <span className="text-[#C5FA59] font-bold">권유담</span>입니다.</span>
                <br className="hidden sm:inline" />{' '}
                <span className="inline-block">생성형 AI와 그래픽 디자인을 활용해</span>{' '}
                <span className="inline-block">게임의 세계관과 분위기를 담아내는</span>{' '}
                <span className="inline-block">비주얼 콘텐츠를 제작합니다.</span>
              </p>
              <p className="text-sm sm:text-base text-[#A7AAB0] font-normal leading-relaxed break-keep">
                <span className="inline-block">상상을 시각화하고,</span>{' '}
                <span className="inline-block">세계관에 생명력을 더합니다.</span>
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.35} distance={20} duration={0.75}>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenFeaturedProject}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5FA59] text-[#101114] text-sm font-semibold rounded-lg hover:bg-[#b4ea47] active:scale-95 transition-all font-['Space_Grotesk']"
              >
                <span>FEATURED: OFF THE RECORD</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#24262B] text-[#F5F4F0] text-sm font-medium rounded-lg hover:bg-[#2D3036] border border-[#33363F] transition-all"
              >
                <span>전체 프로젝트 보기</span>
              </button>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Bottom Scroll Indicator Strip */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-12 pt-12 flex items-center justify-between text-xs font-mono text-[#A7AAB0]">
        <FadeUp delay={0.4} distance={15}>
          <button
            onClick={onExploreClick}
            className="flex items-center gap-2.5 hover:text-[#C5FA59] transition-colors py-2 group"
          >
            <span className="tracking-widest uppercase">SCROLL TO EXPLORE</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-[#C5FA59]" />
          </button>
        </FadeUp>
      </div>
    </section>
  );
};
