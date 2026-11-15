import React from 'react';
import { ArrowUpRight, Trophy, Award } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ArtworkRenderer } from './artworks/ArtworkRenderer';

interface Props {
  project: Project;
  onSelect: (project: Project) => void;
  onQuickView?: (project: Project) => void;
  isLarge?: boolean;
}

export const ProjectCard: React.FC<Props> = ({
  project,
  onSelect,
  isLarge = false,
}) => {
  const isOffTheRecord = project.id === 'off-the-record';

  return (
    <div
      className={`group relative w-full h-full rounded-2xl overflow-hidden bg-[#24262B]/30 border transition-all duration-300 flex flex-col justify-between ${
        project.isFeatured
          ? 'border-[#C5FA59]/40 hover:border-[#C5FA59] shadow-[0_0_24px_rgba(197,250,89,0.06)]'
          : 'border-[#2B2F38] hover:border-[#C5FA59]/40'
      }`}
    >
      {/* Visual Artwork Container */}
      <div
        onClick={() => onSelect(project)}
        className="relative w-full cursor-pointer overflow-hidden bg-[#0A0C10] aspect-[16/10]"
      >
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
          <ArtworkRenderer projectId={project.id} variant={isLarge ? 'hero' : 'card'} className="w-full h-full" />
        </div>

        {/* Featured / Exhibition & Recognition Badges */}
        {project.isFeatured && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex flex-col gap-1.5 max-w-[calc(100%-4.5rem)] pointer-events-none">
            {/* Primary G-STAR Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-[#101114]/90 border border-[#C5FA59]/40 backdrop-blur-md shadow-md w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-[#C5FA59] uppercase">
                G-STAR 2026 EXHIBITION
              </span>
            </div>

            {/* Badges for OFF THE RECORD */}
            {isOffTheRecord && (
              <>
                {/* 배지 01 — 수상 경력 */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#101114]/85 border border-[#2B2F38] backdrop-blur-md w-fit">
                  <Trophy className="w-3 h-3 text-[#C5FA59] shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-tight text-[#E6E8EC]">
                    2026 미래 게임잼 최우수상
                  </span>
                </div>

                {/* 배지 02 — 공모전 수상 */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#101114]/85 border border-[#2B2F38] backdrop-blur-md w-fit">
                  <Award className="w-3 h-3 text-[#C5FA59] shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-tight text-[#E6E8EC]">
                    INDIE-U 2026 · 대학부 우수상
                  </span>
                </div>
              </>
            )}
          </div>
        )}

        {/* Badges for FEEL SO GUT! */}
        {project.id === 'feel-so-gut' && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex flex-col gap-1.5 max-w-[calc(100%-1.5rem)] sm:max-w-[calc(100%-2rem)] pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-[#101114]/90 border border-[#C5FA59]/40 backdrop-blur-md shadow-md w-fit max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59] animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-[#C5FA59] uppercase">
                STOVE INDIE BOOST LAB 등록 완료
              </span>
            </div>
          </div>
        )}

        {/* Badges for KOONGYA ROBLOX */}
        {project.id === 'koongya-roblox' && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex flex-col gap-1.5 max-w-[calc(100%-4.5rem)] pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-[#101114]/90 border border-[#C5FA59]/40 backdrop-blur-md shadow-md w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59]/80" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-[#C5FA59]">
                넷마블 쿵야 공모전 출품작
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#101114]/85 border border-[#2B2F38] backdrop-blur-md w-fit">
              <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-tight text-[#E6E8EC]">
                참가 신청 완료 · 게임 제작 중
              </span>
            </div>
          </div>
        )}

        {/* Badges for GROW THE BALL (공 좀 키워오게) */}
        {project.id === 'grow-the-ball' && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex flex-col gap-1.5 max-w-[calc(100%-1.5rem)] sm:max-w-[calc(100%-2rem)] pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-[#101114]/90 border border-[#C5FA59]/40 backdrop-blur-md shadow-md w-fit max-w-full">
              <Award className="w-3.5 h-3.5 text-[#C5FA59] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-tight text-[#C5FA59]">
                2026 SW융합대학 게임개발 경진대회 우수상
              </span>
            </div>
          </div>
        )}

        {/* Subtle Bottom Scrim for Visual Continuity */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#101114]/90 to-transparent pointer-events-none" />
      </div>

      {/* Card Metadata & Description (Zero-Pill Discipline) */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-4">
        <div>
          {/* Unboxed Metadata with Typographic Separator */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#A7AAB0] mb-2 uppercase">
            <span className="text-[#C5FA59] font-semibold">{project.category}</span>
            <span className="text-[#3E434E]" aria-hidden="true">·</span>
            <span>{project.subCategory}</span>
            <span className="text-[#3E434E]" aria-hidden="true">·</span>
            <span>{project.period}</span>
          </div>

          {/* Project Title & Unified Action Button */}
          <div className="flex items-start justify-between gap-4">
            <h3
              onClick={() => onSelect(project)}
              className="text-2xl md:text-3xl font-bold text-[#F5F4F0] font-['Space_Grotesk'] group-hover:text-[#C5FA59] transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
              className="p-2.5 rounded-full bg-[#C5FA59] text-[#101114] hover:bg-[#d8fc82] hover:scale-105 active:scale-95 shadow-[0_0_16px_rgba(197,250,89,0.3)] transition-all shrink-0 cursor-pointer"
              title="프로젝트 상세 보기"
              aria-label="프로젝트 상세 보기"
            >
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Subtitle / Core Statement */}
          <p className="text-sm md:text-base text-[#A7AAB0] mt-2 line-clamp-2 leading-relaxed min-h-[2.5rem] md:min-h-[3rem]">
            {project.subtitle}
          </p>
        </div>

        {/* Card Footer: Tools or Role Scope */}
        <div className="pt-4 border-t border-[#2B2F38] flex items-center justify-between text-xs text-[#A7AAB0] mt-auto">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-mono text-[#6C7380]">{project.tools.length > 0 ? 'TOOLS:' : 'SCOPE:'}</span>
            <span className="text-[#F5F4F0] font-medium">
              {project.tools.length > 0
                ? (project.id === 'grow-the-ball'
                    ? project.tools
                    : project.tools.slice(0, 3)
                  ).join(' · ')
                : 'UI Design · Icon Design · 3D Modeling'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
