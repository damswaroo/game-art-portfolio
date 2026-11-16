import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ArtworkRenderer } from './artworks/ArtworkRenderer';
import { ProjectThumbnailBadges } from './ProjectThumbnailBadges';
import { getProjectIntro } from '../data/projectIntrosData';
import { normalizeContributionRate } from './ProjectContributionCard';

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
  const contributionRate = normalizeContributionRate(project.contributionRate);

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

        {/* Unified Thumbnail Badges (Awards priority + Activity badges) */}
        <ProjectThumbnailBadges project={project} />

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

          {/* Contribution (Simple text-only line below title, above intro) */}
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
            <span className="text-[#A7AAB0] font-medium">CONTRIBUTION</span>
            <span className="text-[#C5FA59] font-bold tabular-nums">
              {contributionRate !== null ? `${contributionRate}%` : '—'}
            </span>
          </div>

          {/* Subtitle / Core Statement */}
          <p className="text-sm md:text-base text-[#A7AAB0] mt-2.5 line-clamp-2 leading-relaxed min-h-[2.5rem] md:min-h-[3rem]">
            {getProjectIntro(project)}
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
                : project.roleScope || 'UI Design · Icon Design · 3D Modeling'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
