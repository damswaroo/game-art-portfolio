import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ArtworkRenderer } from './artworks/ArtworkRenderer';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ArtworkViewerModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Container */}
      <div className="relative w-full max-w-5xl bg-[#101114] border border-[#33363F] rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#24262B] bg-[#14161B]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#C5FA59] uppercase tracking-wider">{project.category}</span>
            <span className="text-sm font-semibold text-[#F5F4F0]">{project.title}</span>
            <span className="text-xs text-[#A7AAB0] hidden sm:inline">· {project.subCategory}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#A7AAB0] hidden md:inline">PRESS ESC TO CLOSE</span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A7AAB0] hover:text-[#F5F4F0] hover:bg-[#24262B] transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Artwork Body */}
        <div className="flex-1 overflow-auto p-4 md:p-6 bg-[#0B0C0E] flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl h-[420px] md:h-[520px] rounded-lg overflow-hidden border border-[#272A33] shadow-inner">
            <ArtworkRenderer projectId={project.id} variant="detailed" className="w-full h-full" />
          </div>

          {/* Artwork Info & Credits */}
          <div className="w-full max-w-4xl mt-4 px-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#A7AAB0] gap-2">
            <div>
              <span className="font-semibold text-[#F5F4F0]">{project.deliverables[0]?.title || project.title}</span>
              <p className="text-[13px] text-[#A7AAB0] mt-0.5">{project.deliverables[0]?.caption || project.summary}</p>
            </div>
            <div className="text-right shrink-0 font-mono text-[11px]">
              <div>TOOLS: {project.tools.slice(0, 3).join(', ')}</div>
              <div>PERIOD: {project.period}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
