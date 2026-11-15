import React from 'react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { FadeUp, StaggerContainer, StaggerItem } from './animations/ScrollReveal';

interface Props {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onQuickView: (project: Project) => void;
}

export const SelectedWorksSection: React.FC<Props> = ({
  projects,
  onSelectProject,
  onQuickView,
}) => {
  return (
    <section id="works" className="py-24 md:py-36 border-t border-[#24262B] bg-[#101114]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <FadeUp distance={20} duration={0.7}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono text-[#C5FA59] font-bold">02</span>
              <span className="text-xs font-mono text-[#A7AAB0] uppercase tracking-widest">
                PORTFOLIO SHOWCASE
              </span>
              <span className="text-xs font-mono text-[#3E434E]" aria-hidden="true">·</span>
              <span className="text-xs font-mono text-[#8E939E]">{projects.length} PROJECTS</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} distance={30} duration={0.8}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F4F0] font-['Space_Grotesk']">
              SELECTED WORKS
            </h2>
          </FadeUp>
        </div>

        {/* 4-Project Symmetrical 2x2 Layout Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {projects.map((project) => (
            <StaggerItem
              key={project.id}
              distance={30}
              className="col-span-1 h-full"
            >
              <ProjectCard
                project={project}
                isLarge={false}
                onSelect={onSelectProject}
                onQuickView={onQuickView}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
