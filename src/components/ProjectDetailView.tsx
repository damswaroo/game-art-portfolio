import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Image as ImageIcon,
  ExternalLink,
  FileText,
} from 'lucide-react';
import { Project, VisualGalleryCategory } from '../types/portfolio';
import { FadeUp } from './animations/ScrollReveal';
import { ProjectVideoPlayer } from './ProjectVideoPlayer';
import { ProjectContributionCard } from './ProjectContributionCard';

interface Props {
  project: Project;
  allProjects: Project[];
  onBackToWorks: () => void;
  onSelectProject: (project: Project) => void;
  onQuickView: (project: Project) => void;
}

const isGifSource = (src?: string): boolean => {
  if (!src) return false;
  const clean = src.split('?')[0].split('#')[0].toLowerCase().trim();
  return clean.endsWith('.gif') || clean.startsWith('data:image/gif');
};

const getBadgeStyles = (badgeType?: string) => {
  switch (badgeType) {
    case 'AWARDED':
    case 'award':
      return 'bg-[#C5FA59]/10 text-[#C5FA59] border border-[#C5FA59]/30';
    case 'SELECTED':
      return 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/30';
    case 'CONFIRMED':
      return 'bg-purple-400/10 text-purple-300 border border-purple-400/30';
    case 'ONGOING':
    case 'ongoing':
      return 'bg-amber-400/10 text-amber-300 border border-amber-400/30';
    case 'PLANNED':
    case 'upcoming':
      return 'bg-slate-400/10 text-slate-300 border border-slate-400/30';
    default:
      return 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/30';
  }
};

export const ProjectDetailView: React.FC<Props> = ({
  project,
  allProjects,
  onBackToWorks,
  onSelectProject,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const isOffTheRecord = project.id === 'off-the-record';
  const isFeelSoGut = project.id === 'feel-so-gut';
  const isKoongya = project.id === 'koongya-roblox';
  const isGrowTheBall = project.id === 'grow-the-ball';
  const isTalesUnwritten = project.id === 'tales-unwritten';

  const shouldRenderVideo =
    project.category === 'Game Art' ||
    Boolean(project.video?.src?.trim() || project.video?.youtubeUrl?.trim());

  // Visual Works Categories
  const visualCategories: VisualGalleryCategory[] = project.visualGallery || [];

  // Render only categories where real images are registered
  const visibleCategories = visualCategories.filter(
    (cat) => cat.images && cat.images.length > 0
  );

  // Selected Category ID for Interactive Visual Works Gallery (fallback for other projects)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  // Expanded Categories state for OFF THE RECORD "더 보기" toggle
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Reset selected / expanded category state when switching projects
    setSelectedCategoryId(null);
    setExpandedCategories({});
  }, [project.id]);

  const toggleCategoryExpand = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // Lightbox Modal State
  const [activeModal, setActiveModal] = useState<{
    categoryId: string;
    imageIndex: number;
  } | null>(null);

  const getCategoryImages = (category?: VisualGalleryCategory) => {
    if (!category) return [];
    if (category.subcategories && category.subcategories.length > 0) {
      return category.subcategories.flatMap((sub) => sub.images || []);
    }
    return category.images || [];
  };

  const activeCategory = visualCategories.find((c) => c.id === activeModal?.categoryId);
  const activeImages = getCategoryImages(activeCategory);
  const currentImage = activeImages[activeModal?.imageIndex ?? 0];
  const hasMultipleItems = activeImages.length > 1;

  const handlePrevImage = () => {
    if (!activeModal || activeImages.length <= 1) return;
    setActiveModal({
      ...activeModal,
      imageIndex: (activeModal.imageIndex - 1 + activeImages.length) % activeImages.length,
    });
  };

  const handleNextImage = () => {
    if (!activeModal || activeImages.length <= 1) return;
    setActiveModal({
      ...activeModal,
      imageIndex: (activeModal.imageIndex + 1) % activeImages.length,
    });
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeModal, activeImages.length]);

  return (
    <article className="min-h-screen pt-24 pb-32 bg-[#101114] text-[#F5F4F0]">
      {/* Top Breadcrumb & Back Bar */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-center justify-between py-4 border-b border-[#24262B]">
          <button
            onClick={onBackToWorks}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-[#A7AAB0] hover:text-[#C5FA59] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO ALL WORKS</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-[#A7AAB0]">
            <span className="text-[#C5FA59] font-bold">PROJECT {currentIndex + 1}</span>
            <span>/</span>
            <span>{allProjects.length}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-20 md:space-y-28">
        {/* ========================================================================= */}
        {/* UNIFIED 3-SECTION ARCHITECTURE (OVERVIEW, VISUAL WORKS, RESULTS)           */}
        {/* ========================================================================= */}

        {/* 01. PROJECT OVERVIEW */}
        <section className="space-y-10 max-w-4xl mx-auto w-full">
          {/* Game Intro & Title */}
          <div className="space-y-4">
            <FadeUp distance={15} duration={0.6}>
              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-mono text-[#A7AAB0] uppercase">
                <span className="text-[#C5FA59] font-bold">PROJECT OVERVIEW</span>
                {project.previousTitle && (
                  <>
                    <span className="text-[#3E434E]" aria-hidden="true">/</span>
                    <span className="text-[#8E929E] font-sans">
                      (구 '{project.previousTitle}')
                    </span>
                  </>
                )}
              </div>
            </FadeUp>

            <FadeUp delay={0.1} distance={25} duration={0.8}>
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F5F4F0] font-['Space_Grotesk']">
                  {project.title}
                </h1>
                {project.status && (
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[#C5FA59]/10 text-[#C5FA59] border border-[#C5FA59]/30">
                    {project.status}
                  </span>
                )}
              </div>
            </FadeUp>

            {/* 게임 소개 문장 (1~2줄 간결하게, 단어 끊김 방지) */}
            <FadeUp delay={0.15} distance={20} duration={0.75}>
              <p className="text-lg md:text-xl text-[#A7AAB0] font-normal leading-relaxed break-keep max-w-3xl">
                "{project.summary || project.subtitle}"
              </p>
            </FadeUp>

            {/* KEY THEMES */}
            {project.overview.keyThemes && project.overview.keyThemes.length > 0 && (
              <FadeUp delay={0.2} distance={15} duration={0.7}>
                <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-[#A7AAB0]">
                  <span className="text-[#C5FA59] font-semibold">KEY THEMES:</span>
                  {project.overview.keyThemes.map((theme, i) => (
                    <React.Fragment key={theme}>
                      <span className="text-[#F5F4F0] font-medium">{theme}</span>
                      {i < project.overview.keyThemes.length - 1 && (
                        <span className="text-[#3E434E]" aria-hidden="true">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </FadeUp>
            )}

            {/* GENRE, PROGRAM & PLATFORM (등록된 경우) */}
            {(project.genre || project.program || project.platform) && (
              <FadeUp delay={0.22} distance={15} duration={0.7}>
                <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
                  {project.genre && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#C5FA59] font-bold">GENRE:</span>
                      <span className="text-[#F5F4F0] font-sans">{project.genre}</span>
                    </div>
                  )}
                  {project.program && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#C5FA59] font-bold">PROGRAM:</span>
                      <span className="text-[#F5F4F0]">{project.program}</span>
                    </div>
                  )}
                  {project.platform && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#C5FA59] font-bold">PLATFORM:</span>
                      <span className="text-[#F5F4F0]">{project.platform}</span>
                    </div>
                  )}
                </div>
              </FadeUp>
            )}

            {/* EXTERNAL LINKS (등록된 경우) */}
            {project.externalLinks && project.externalLinks.length > 0 && (
              <FadeUp delay={0.23} distance={15} duration={0.7}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {project.externalLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#17191E] hover:bg-[#C5FA59] text-[#C5FA59] hover:text-[#101114] text-xs sm:text-sm font-sans font-semibold border border-[#C5FA59]/40 hover:border-[#C5FA59] transition-all duration-200 shadow-sm w-full sm:w-auto group"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </FadeUp>
            )}
          </div>

          {/* 게임플레이 / 트레일러 영상 (모든 게임 프로젝트에 공통 16:9 플레이어 & 영구 등록 UI 적용) */}
          {shouldRenderVideo && (
            <FadeUp delay={0.24} distance={20} duration={0.8}>
              <div className="pt-2">
                <ProjectVideoPlayer
                  video={project.video}
                  projectId={project.id}
                  projectTitle={project.title}
                />
              </div>
            </FadeUp>
          )}

          {/* 프로젝트 정보 카드 (2열 × 2행: 진행 기간, 팀 구성, 담당 역할, 도구/공모전) */}
          <div className="pt-2">
            <FadeUp delay={0.28} distance={20} duration={0.8}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: PERIOD */}
                <div className="p-5 rounded-xl bg-[#17191E] border border-[#272B33] flex flex-col justify-between space-y-2">
                  <span className="text-xs font-mono text-[#C5FA59] uppercase tracking-wider font-semibold">
                    진행 기간
                  </span>
                  <div className="text-base sm:text-lg font-semibold text-[#F5F4F0] font-sans">
                    {project.period}
                  </div>
                </div>

                {/* Card 2: TEAM OR PLATFORM/GENRE */}
                <div className="p-5 rounded-xl bg-[#17191E] border border-[#272B33] flex flex-col justify-between space-y-2">
                  <span className="text-xs font-mono text-[#C5FA59] uppercase tracking-wider font-semibold">
                    {isKoongya ? '플랫폼 / 장르' : '팀 구성'}
                  </span>
                  {isKoongya ? (
                    <div className="text-base sm:text-lg font-semibold text-[#F5F4F0] font-sans">
                      Roblox · 비대칭 술래잡기
                    </div>
                  ) : project.team ? (
                    <div className="text-base sm:text-lg font-semibold text-[#F5F4F0] font-sans">
                      {project.team}
                    </div>
                  ) : (
                    <div className="text-base sm:text-lg font-bold text-[#6E7380] font-sans">
                      미입력
                    </div>
                  )}
                </div>

                {/* Card 3: MY ROLE */}
                <div className="p-5 rounded-xl bg-[#17191E] border border-[#272B33] flex flex-col justify-between space-y-2">
                  <span className="text-xs font-mono text-[#C5FA59] uppercase tracking-wider font-semibold">
                    담당 역할
                  </span>
                  <div className="text-base sm:text-lg font-semibold text-[#F5F4F0] font-sans break-keep">
                    {isKoongya
                      ? 'Game UI / Icon / 3D Modeling'
                      : project.roleScope || project.myRole?.roleTitle || '게임 아트 & UI/UX'}
                  </div>
                </div>

                {/* Card 4: MY TOOLS OR CONTEST INFO */}
                <div className="p-5 rounded-xl bg-[#17191E] border border-[#272B33] flex flex-col justify-between space-y-2">
                  <span className="text-xs font-mono text-[#C5FA59] uppercase tracking-wider font-semibold">
                    {project.tools && project.tools.length > 0
                      ? '제작 도구'
                      : isKoongya
                      ? '관련 공모전'
                      : '진행 상태'}
                  </span>
                  <div className="text-base sm:text-lg font-semibold text-[#F5F4F0] font-sans">
                    {project.tools && project.tools.length > 0
                      ? project.tools.join(' · ')
                      : isKoongya
                      ? '넷마블 쿵야 IP 로블록스 공모전'
                      : project.status || '—'}
                  </div>
                </div>

                {/* Card 5 (Full Width): OVERALL PROJECT CONTRIBUTION (Game Projects Only) */}
                {project.category === 'Game Art' && (
                  <ProjectContributionCard contributionRate={project.contributionRate} />
                )}
              </div>
            </FadeUp>
          </div>

          {/* Koongya Dedicated Scope Panel */}
          {isKoongya && (
            <FadeUp delay={0.32} distance={20} duration={0.8}>
              <div className="p-6 rounded-xl bg-[#17191E] border border-[#272B33] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5FA59] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FA59]" />
                  <span>MY ROLE: Game UI Design / Icon Design / 3D Modeling</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-4 rounded-lg bg-[#12141A] border border-[#222630] space-y-1">
                    <div className="text-sm font-semibold text-[#F5F4F0] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59]" />
                      <span>게임 UI 디자인</span>
                    </div>
                    <p className="text-xs text-[#8E939E] leading-relaxed">
                      로블록스 인게임 HUD 및 사용자 인터페이스 설계
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#12141A] border border-[#222630] space-y-1">
                    <div className="text-sm font-semibold text-[#F5F4F0] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59]" />
                      <span>게임 내 아이콘 제작</span>
                    </div>
                    <p className="text-xs text-[#8E939E] leading-relaxed">
                      게임 시스템 및 상호작용 그래픽 아이콘 리소스 제작
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#12141A] border border-[#222630] space-y-1">
                    <div className="text-sm font-semibold text-[#F5F4F0] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59]" />
                      <span>3D 모델링</span>
                    </div>
                    <p className="text-xs text-[#8E939E] leading-relaxed">
                      게임에 사용되는 소품 및 환경 3D 오브젝트 모델링
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          )}
        </section>

        {/* 02. VISUAL WORKS — 비주얼 작업물 갤러리 */}
        <section className="space-y-8 border-t border-[#24262B] pt-16">
          <FadeUp distance={20} duration={0.7}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#C5FA59] font-bold">02</span>
                <span className="text-xs font-mono text-[#A7AAB0] uppercase tracking-widest">VISUAL WORKS</span>
                <span className="text-xs font-mono text-[#3E434E]" aria-hidden="true">/</span>
                <span className="text-xs text-[#A7AAB0] font-sans">비주얼 작업물 갤러리</span>
              </div>
            </div>
          </FadeUp>

          {isTalesUnwritten && visibleCategories.length > 0 ? (
            /* TALES UNWRITTEN: 2개의 큰 섹션 (오두막 / 오브젝트들) 중심 간결 갤러리 */
            <div className="space-y-12 pt-2">
              {visibleCategories.map((section, sIdx) => (
                <div key={section.id} className="space-y-5">
                  {/* 섹션 헤더: 섹션 제목 + 짧은 설명 (복잡한 텍스트 카드 제거) */}
                  <FadeUp delay={sIdx * 0.1} distance={15} duration={0.6}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#24262B]">
                      <div className="flex flex-wrap items-baseline gap-2.5">
                        <span className="text-xs font-mono font-bold text-[#C5FA59] tracking-wider">
                          {String(sIdx + 1).padStart(2, '0')}.
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4F0] font-sans tracking-tight">
                          {section.title}
                        </h3>
                        <span className="hidden sm:inline text-[#3E434E]" aria-hidden="true">/</span>
                        <p className="text-xs sm:text-sm text-[#A7AAB0] font-sans">
                          {section.description}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-[#6E7380] shrink-0">
                        {section.images.length} ASSETS
                      </span>
                    </div>
                  </FadeUp>

                  {/* 이미지 썸네일 그리드 (개별 텍스트 카드 없이 이미지 중심 배치) */}
                  {section.id === 'objects' ? (
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-5 items-stretch">
                      {section.images.map((img, imgIdx) => (
                        <FadeUp
                          key={img.src || imgIdx}
                          delay={0.04 * imgIdx}
                          distance={15}
                          duration={0.6}
                          className="w-[calc((100%_-_1rem)_/_2_-_0.5px)] sm:w-[calc((100%_-_2.5rem)_/_3_-_0.5px)] lg:w-[calc((100%_-_3.75rem)_/_4_-_0.5px)] flex"
                        >
                          <div
                            onClick={() => setActiveModal({ categoryId: section.id, imageIndex: imgIdx })}
                            className="group relative rounded-xl bg-[#17191E] border border-[#272B33] overflow-hidden hover:border-[#C5FA59]/70 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[#C5FA59]/10 flex flex-col w-full"
                          >
                            {/* 썸네일 컨테이너 (다크 배경 + 원본 비율 유지 object-contain) */}
                            <div className="relative w-full aspect-[4/3] bg-[#0E1015] overflow-hidden flex items-center justify-center p-3">
                              <img
                                src={img.src}
                                alt={img.alt || `${section.title} ${imgIdx + 1}`}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                loading={isGifSource(img.src) ? 'eager' : 'lazy'}
                              />

                              {/* 은은한 앰비언트 호버 효과 */}
                              <div className="absolute inset-0 bg-[#C5FA59]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                              {/* 확대 아이콘 */}
                              <div className="absolute bottom-2.5 right-2.5 z-10 p-1.5 rounded-lg bg-[#101114]/85 text-[#C5FA59] border border-[#2D313B] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 shadow-md">
                                <Maximize2 className="w-3.5 h-3.5" />
                              </div>
                            </div>

                            {/* 오브젝트 섹션: 이미지 아래에 오브젝트 이름만 간결하게 표시 */}
                            {img.caption && (
                              <div className="px-3 py-2.5 bg-[#17191E] border-t border-[#242833] text-center flex-1 flex items-center justify-center">
                                <p className="text-xs sm:text-[13px] font-medium text-[#F5F4F0] font-sans group-hover:text-[#C5FA59] transition-colors break-keep">
                                  {img.caption.split(' — ')[0].trim()}
                                </p>
                              </div>
                            )}
                          </div>
                        </FadeUp>
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {section.images.map((img, imgIdx) => (
                        <FadeUp
                          key={img.src || imgIdx}
                          delay={0.04 * imgIdx}
                          distance={15}
                          duration={0.6}
                        >
                          <div
                            onClick={() => setActiveModal({ categoryId: section.id, imageIndex: imgIdx })}
                            className="group relative rounded-xl bg-[#17191E] border border-[#272B33] overflow-hidden hover:border-[#C5FA59]/70 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[#C5FA59]/10 flex flex-col"
                          >
                            {/* 썸네일 컨테이너 (다크 배경 + 원본 비율 유지 object-contain) */}
                            <div className="relative w-full aspect-[4/3] bg-[#0E1015] overflow-hidden flex items-center justify-center p-3">
                              <img
                                src={img.src}
                                alt={img.alt || `${section.title} ${imgIdx + 1}`}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                loading={isGifSource(img.src) ? 'eager' : 'lazy'}
                              />

                              {/* 은은한 앰비언트 호버 효과 */}
                              <div className="absolute inset-0 bg-[#C5FA59]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                              {/* 확대 아이콘 */}
                              <div className="absolute bottom-2.5 right-2.5 z-10 p-1.5 rounded-lg bg-[#101114]/85 text-[#C5FA59] border border-[#2D313B] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 shadow-md">
                                <Maximize2 className="w-3.5 h-3.5" />
                              </div>
                            </div>
                          </div>
                        </FadeUp>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : isOffTheRecord && visualCategories.length > 0 ? (
            /* OFF THE RECORD: 스크롤로 바로 감상하는 4개 카테고리 오픈 비주얼 갤러리 */
            <div className="space-y-12 pt-2">
              {visualCategories.map((cat, idx) => {
                const subcategories = cat.subcategories || [];
                const hasSubcategories = subcategories.length > 0;
                const images = getCategoryImages(cat);
                const categoryNumber = String(idx + 1).padStart(2, '0');
                const categoryTag = cat.categoryCode.includes('/')
                  ? cat.categoryCode.split('/')[1].trim()
                  : cat.categoryCode;

                const initialLimit =
                  cat.id === 'graphics'
                    ? 6
                    : cat.id === 'key-visual'
                    ? 4
                    : cat.id === 'character' || cat.id === 'environment'
                    ? 5
                    : 3;

                const isExpanded = Boolean(expandedCategories[cat.id]);
                const hasMoreImages = !hasSubcategories && images.length > initialLimit;
                const displayedImages =
                  hasMoreImages && !isExpanded ? images.slice(0, initialLimit) : images;

                const gridClasses =
                  cat.id === 'key-visual'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start'
                    : cat.id === 'environment'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start'
                    : cat.id === 'graphics'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch'
                    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-start';

                const unitCardGridClasses =
                  'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch';

                const getFrameClasses = (
                  imgIdx: number,
                  subId?: string,
                  cardVariant?: 'default' | 'unit-card' | 'ship-card'
                ) => {
                  if (cardVariant === 'unit-card') {
                    return 'relative w-full aspect-[16/9] bg-[#0E1015] overflow-hidden flex items-center justify-center p-1.5 sm:p-2';
                  }
                  if (cardVariant === 'ship-card') {
                    return 'relative w-full aspect-[16/9] bg-[#0E1015] overflow-hidden flex items-center justify-center p-1 sm:p-1.5';
                  }
                  if (cat.id === 'key-visual') {
                    return imgIdx < 2
                      ? 'relative w-full aspect-[5906/8350] bg-[#0E1015] overflow-hidden flex items-center justify-center p-2.5 sm:p-3'
                      : 'relative w-full aspect-[16/9] bg-[#0E1015] overflow-hidden flex items-center justify-center p-2.5 sm:p-3';
                  }
                  if (cat.id === 'character') {
                    return imgIdx < 3
                      ? 'relative w-full aspect-[9/16] bg-[#0E1015] overflow-hidden flex items-center justify-center p-2.5 sm:p-3'
                      : 'relative w-full aspect-[16/9] bg-[#0E1015] overflow-hidden flex items-center justify-center p-2.5 sm:p-3';
                  }
                  if (cat.id === 'environment') {
                    if (subId === 'spaceship-design') {
                      return 'relative w-full aspect-[16/9] bg-[#0E1015] overflow-hidden flex items-center justify-center p-1 sm:p-1.5';
                    }
                    if (subId === 'enemy-design') {
                      return 'relative w-full aspect-[16/9] bg-[#0E1015] overflow-hidden flex items-center justify-center p-1.5 sm:p-2';
                    }
                    return 'relative w-full aspect-[16/9] bg-[#0E1015] overflow-hidden flex items-center justify-center p-2.5 sm:p-3';
                  }
                  if (cat.id === 'graphics') {
                    return 'relative w-full aspect-[16/9] bg-[#0E1015] overflow-hidden flex items-center justify-center p-1.5 sm:p-2';
                  }
                  return 'relative w-full aspect-[4/3] bg-[#0E1015] overflow-hidden flex items-center justify-center p-3';
                };

                const renderGalleryCard = (
                  img: (typeof images)[number],
                  imgIdx: number,
                  subId?: string,
                  cardVariant: 'default' | 'unit-card' | 'ship-card' = 'default'
                ) => {
                  const hasCenteredLabelFooter =
                    cardVariant === 'unit-card' ||
                    cardVariant === 'ship-card' ||
                    (cat.id === 'character' && imgIdx >= 3);
                  const stretchCardHeight = hasCenteredLabelFooter;
                  return (
                    <FadeUp
                      key={img.id || img.src || imgIdx}
                      delay={0.04 * (imgIdx % 6)}
                      distance={15}
                      duration={0.6}
                      className={stretchCardHeight ? 'h-full' : ''}
                    >
                      <div
                        onClick={() => setActiveModal({ categoryId: cat.id, imageIndex: imgIdx })}
                        className={`group relative rounded-xl bg-[#17191E] border border-[#272B33] overflow-hidden hover:border-[#C5FA59]/70 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[#C5FA59]/10 flex flex-col w-full ${
                          stretchCardHeight ? 'h-full' : ''
                        }`}
                      >
                        <div className={getFrameClasses(imgIdx, subId, cardVariant)}>
                          <img
                            src={img.src}
                            alt={img.alt || img.title || `${cat.title} ${imgIdx + 1}`}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                            loading={isGifSource(img.src) ? 'eager' : 'lazy'}
                          />
                          <div className="absolute inset-0 bg-[#C5FA59]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                          <div className="absolute bottom-3 right-3 z-10 p-1.5 rounded-lg bg-[#101114]/85 text-[#C5FA59] border border-[#2D313B] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 shadow-md">
                            <Maximize2 className="w-4 h-4" />
                          </div>
                        </div>

                        {(img.title || img.description || img.caption) && (
                          <div
                            className={`${
                              hasCenteredLabelFooter
                                ? 'p-3 sm:p-3.5 flex-1 flex items-center justify-center text-center'
                                : 'p-4 space-y-1'
                            } bg-[#17191E] border-t border-[#242833]`}
                          >
                            {img.title && (
                              <h4
                                className={`${
                                  hasCenteredLabelFooter
                                    ? 'text-xs sm:text-[13px] leading-snug'
                                    : 'text-sm sm:text-base'
                                } font-bold text-[#F5F4F0] font-sans group-hover:text-[#C5FA59] transition-colors break-keep [overflow-wrap:anywhere]`}
                              >
                                {img.title}
                              </h4>
                            )}
                            {(img.description || img.caption) && (
                              <p className="text-xs sm:text-[13px] text-[#8E939E] leading-relaxed break-keep">
                                {img.description || img.caption}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </FadeUp>
                  );
                };

                return (
                  <div
                    key={cat.id}
                    className={`space-y-6 ${idx > 0 ? 'pt-10 border-t border-[#24262B]' : ''}`}
                  >
                    {/* 카테고리 헤더: 번호(01~04), 제목, 카테고리 태그, 설명 */}
                    <FadeUp delay={idx * 0.05} distance={15} duration={0.6}>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <div className="flex flex-wrap items-baseline gap-2.5">
                            <span className="text-sm font-mono font-bold text-[#C5FA59] tracking-wider">
                              {categoryNumber}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4F0] font-['Space_Grotesk'] tracking-tight">
                              {cat.title}
                            </h3>
                            <span className="text-xs font-mono text-[#8E939E] uppercase tracking-widest">
                              / {categoryTag}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-[#6E7380] shrink-0">
                            {images.length} {images.length === 1 ? 'ITEM' : 'ITEMS'}
                          </span>
                        </div>
                        <p className="text-sm text-[#A7AAB0] font-sans leading-relaxed break-keep">
                          {cat.description}
                        </p>
                      </div>
                    </FadeUp>

                    {/* 이미지 갤러리 또는 간결한 미등록 안내 */}
                    {images.length > 0 ? (
                      <div className="space-y-5 md:space-y-6">
                        {hasSubcategories ? (
                          <div className="space-y-8">
                            {subcategories.map((sub, subIdx) => {
                              const subImages = sub.images || [];
                              if (subImages.length === 0) return null;

                              const startIndex = subcategories
                                .slice(0, subIdx)
                                .reduce((sum, prev) => sum + (prev.images?.length || 0), 0);

                              const subGridClasses =
                                sub.columns === 2
                                  ? 'grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start'
                                  : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-start';

                              if (sub.id === 'spaceship-design') {
                                const shipImages = subImages.slice(0, 3);
                                const partImages = subImages.slice(3);

                                return (
                                  <div key={sub.id} className="space-y-5">
                                    <h4 className="text-xs font-mono font-bold text-[#C5FA59] tracking-wider uppercase">
                                      {sub.code}
                                    </h4>

                                    <div className="space-y-3">
                                      <p className="text-[11px] font-mono text-[#8E939E] tracking-wider uppercase">
                                        Base &amp; Upgrade Ships
                                      </p>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
                                        {shipImages.map((img, shipIdx) =>
                                          renderGalleryCard(
                                            img,
                                            startIndex + shipIdx,
                                            sub.id,
                                            'ship-card'
                                          )
                                        )}
                                      </div>
                                    </div>

                                    {partImages.length > 0 && (
                                      <div className="space-y-3 pt-1">
                                        <p className="text-[11px] font-mono text-[#8E939E] tracking-wider uppercase">
                                          Ship Parts / Modules
                                        </p>
                                        <div className={unitCardGridClasses}>
                                          {partImages.map((img, partIdx) =>
                                            renderGalleryCard(
                                              img,
                                              startIndex + shipImages.length + partIdx,
                                              sub.id,
                                              'unit-card'
                                            )
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              }

                              if (sub.id === 'enemy-design') {
                                return (
                                  <div key={sub.id} className="space-y-3.5">
                                    <div className="flex items-baseline justify-between gap-3">
                                      <h4 className="text-xs font-mono font-bold text-[#C5FA59] tracking-wider uppercase">
                                        {sub.code}
                                      </h4>
                                      <span className="text-[11px] font-mono text-[#6E7380] shrink-0">
                                        {subImages.length} {subImages.length === 1 ? 'ITEM' : 'ITEMS'}
                                      </span>
                                    </div>
                                    <p className="text-[11px] font-mono text-[#8E939E] tracking-wider uppercase">
                                      Boss &amp; Enemy Units
                                    </p>
                                    <div className={unitCardGridClasses}>
                                      {subImages.map((img, subImgIdx) =>
                                        renderGalleryCard(img, startIndex + subImgIdx, sub.id, 'unit-card')
                                      )}
                                    </div>
                                  </div>
                                );
                              }

                              return (
                                <div key={sub.id} className="space-y-3.5">
                                  <h4 className="text-xs font-mono font-bold text-[#C5FA59] tracking-wider uppercase">
                                    {sub.code}
                                  </h4>
                                  <div className={subGridClasses}>
                                    {subImages.map((img, subImgIdx) =>
                                      renderGalleryCard(img, startIndex + subImgIdx, sub.id)
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : cat.id === 'character' ? (
                          <>
                            {/* 첫 번째 행: 세로형 캐릭터 비주얼 3장 (3열) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-start">
                              {displayedImages.slice(0, 3).map((img, imgIdx) =>
                                renderGalleryCard(img, imgIdx)
                              )}
                            </div>

                            {/* 두 번째 행: 가로형 캐릭터 시트 2장 (2열) */}
                            {displayedImages.length > 3 && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-stretch">
                                {displayedImages.slice(3).map((img, sheetIdx) =>
                                  renderGalleryCard(img, 3 + sheetIdx)
                                )}
                              </div>
                            )}
                          </>
                        ) : cat.id === 'environment' ? (
                          <>
                            {/* 첫 번째 행: 배경 아트 2장 (2열) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start">
                              {displayedImages.slice(0, 2).map((img, imgIdx) =>
                                renderGalleryCard(img, imgIdx)
                              )}
                            </div>

                            {/* 두 번째 행: 환경 오브젝트 3장 (3열) */}
                            {displayedImages.length > 2 && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-start">
                                {displayedImages.slice(2).map((img, objIdx) =>
                                  renderGalleryCard(img, 2 + objIdx)
                                )}
                              </div>
                            )}
                          </>
                        ) : cat.id === 'graphics' ? (
                          <div className="space-y-5 md:space-y-6">
                            {/* 1행: 시작화면 (가로 전체 너비 대표 이미지) */}
                            {displayedImages[0] && (
                              <div className="grid grid-cols-1">
                                {renderGalleryCard(displayedImages[0], 0, undefined, 'unit-card')}
                              </div>
                            )}

                            {/* 2행: 로딩창 / 결과창 (2열 균등 배치) */}
                            {displayedImages.slice(1, 3).length > 0 && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-stretch">
                                {displayedImages.slice(1, 3).map((img, row2Idx) =>
                                  renderGalleryCard(img, 1 + row2Idx, undefined, 'unit-card')
                                )}
                              </div>
                            )}

                            {/* 3행: HUD1 / HUD2 / HUD3 (3열 균등 배치) */}
                            {displayedImages.slice(3, 6).length > 0 && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
                                {displayedImages.slice(3, 6).map((img, row3Idx) =>
                                  renderGalleryCard(img, 3 + row3Idx, undefined, 'unit-card')
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className={gridClasses}>
                            {displayedImages.map((img, imgIdx) =>
                              renderGalleryCard(img, imgIdx)
                            )}
                          </div>
                        )}

                        {hasMoreImages && (
                          <div className="pt-1 flex justify-center">
                            <button
                              type="button"
                              onClick={() => toggleCategoryExpand(cat.id)}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#17191E] hover:bg-[#1E222A] text-xs font-mono font-semibold text-[#C5FA59] border border-[#2D313B] hover:border-[#C5FA59]/60 transition-colors cursor-pointer"
                            >
                              <span>
                                {isExpanded
                                  ? '접기'
                                  : `더 보기 (+${images.length - initialLimit})`}
                              </span>
                              <ChevronRight
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                  isExpanded ? '-rotate-90' : 'rotate-90'
                                }`}
                              />
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="px-5 py-4 rounded-xl bg-[#14161C] border border-[#242833] flex items-center gap-3 text-xs sm:text-sm text-[#8E939E] font-sans">
                        <ImageIcon className="w-4 h-4 text-[#C5FA59]/80 shrink-0" />
                        <span>현재 {cat.title} 카테고리에 등록된 작업물이 없습니다.</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : isFeelSoGut && visualCategories.length > 0 ? (
            /* FEEL SO GUT!: 스크롤로 바로 감상하는 오픈 비주얼 갤러리 (OFF THE RECORD 동일 디자인 시스템) */
            <div className="space-y-12 pt-2">
              {visualCategories.map((cat, idx) => {
                const subcategories = cat.subcategories || [];
                const hasSubcategories = subcategories.length > 0;
                const images = getCategoryImages(cat);
                const categoryNumber = String(idx + 1).padStart(2, '0');
                const categoryTag = cat.categoryCode.includes('/')
                  ? cat.categoryCode.split('/')[1].trim()
                  : cat.categoryCode;

                const renderFeelSoGutCard = (
                  img: (typeof images)[number],
                  imgIdx: number,
                  useWideScreenFrame: boolean,
                  wrapperClassName = 'w-full',
                  customFrameClass?: string
                ) => {
                  const isCenteredTitleOnly =
                    (useWideScreenFrame ||
                      cat.id === 'logo-key-visual' ||
                      cat.id === 'character-design') &&
                    !(img.description || img.caption);

                  return (
                    <FadeUp
                      key={img.id || img.src || imgIdx}
                      delay={0.04 * (imgIdx % 6)}
                      distance={15}
                      duration={0.6}
                      className={`${wrapperClassName} flex`}
                    >
                      <div
                        onClick={() =>
                          setActiveModal({ categoryId: cat.id, imageIndex: imgIdx })
                        }
                        className="group relative rounded-xl bg-[#17191E] border border-[#272B33] overflow-hidden hover:border-[#C5FA59]/70 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[#C5FA59]/10 flex flex-col w-full"
                      >
                        <div
                          className={`relative w-full ${
                            customFrameClass
                              ? customFrameClass
                              : useWideScreenFrame
                              ? 'aspect-[16/9] p-1.5 sm:p-2'
                              : 'aspect-[4/3] p-2.5 sm:p-3'
                          } bg-[#0E1015] overflow-hidden flex items-center justify-center`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt || img.title || `${cat.title} ${imgIdx + 1}`}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                            loading={isGifSource(img.src) ? 'eager' : 'lazy'}
                          />
                          <div className="absolute inset-0 bg-[#C5FA59]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                          <div className="absolute bottom-3 right-3 z-10 p-1.5 rounded-lg bg-[#101114]/85 text-[#C5FA59] border border-[#2D313B] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 shadow-md">
                            <Maximize2 className="w-4 h-4" />
                          </div>
                        </div>

                        {(img.title || img.description || img.caption) && (
                          <div
                            className={`${
                              isCenteredTitleOnly
                                ? 'p-3 sm:p-3.5 flex-1 flex items-center justify-center text-center'
                                : 'p-4 space-y-1 flex-1'
                            } bg-[#17191E] border-t border-[#242833]`}
                          >
                            {img.title && (
                              <h4
                                className={`${
                                  isCenteredTitleOnly
                                    ? 'text-xs sm:text-[13px] leading-snug'
                                    : 'text-sm sm:text-base'
                                } font-bold text-[#F5F4F0] font-sans group-hover:text-[#C5FA59] transition-colors break-keep [overflow-wrap:anywhere]`}
                              >
                                {img.title}
                              </h4>
                            )}
                            {(img.description || img.caption) && (
                              <p className="text-xs sm:text-[13px] text-[#8E939E] leading-relaxed break-keep">
                                {img.description || img.caption}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </FadeUp>
                  );
                };

                return (
                  <div
                    key={cat.id}
                    className={`space-y-6 ${idx > 0 ? 'pt-10 border-t border-[#24262B]' : ''}`}
                  >
                    {/* 카테고리 헤더: 번호(01~03), 제목, 카테고리 태그, 설명 */}
                    <FadeUp delay={idx * 0.05} distance={15} duration={0.6}>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <div className="flex flex-wrap items-baseline gap-2.5">
                            <span className="text-sm font-mono font-bold text-[#C5FA59] tracking-wider">
                              {categoryNumber}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4F0] font-['Space_Grotesk'] tracking-tight">
                              {cat.title}
                            </h3>
                            <span className="text-xs font-mono text-[#8E939E] uppercase tracking-widest">
                              / {categoryTag}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-[#6E7380] shrink-0">
                            {images.length} {images.length === 1 ? 'ITEM' : 'ITEMS'}
                          </span>
                        </div>
                        <p className="text-sm text-[#A7AAB0] font-sans leading-relaxed break-keep">
                          {cat.description}
                        </p>
                      </div>
                    </FadeUp>

                    {/* 등록된 이미지가 있으면 서브카테고리 또는 반응형 그리드 렌더링 */}
                    {images.length > 0 ? (
                      hasSubcategories ? (
                        <div className="space-y-8">
                          {subcategories.map((sub, subIdx) => {
                            const subImages = sub.images || [];

                            const startIndex = subcategories
                              .slice(0, subIdx)
                              .reduce((sum, prev) => sum + (prev.images?.length || 0), 0);

                            const isSingleFullWidth = sub.columns === 1;
                            const isTwoColumn = sub.columns === 2;

                            const subContainerClasses = isSingleFullWidth
                              ? 'grid grid-cols-1 gap-5 md:gap-6'
                              : 'flex flex-wrap justify-center gap-5 md:gap-6 items-stretch';

                            const subCardWidthClass = isSingleFullWidth
                              ? 'w-full'
                              : isTwoColumn
                              ? 'w-full md:w-[calc((100%-1.5rem)/2)]'
                              : 'w-full sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]';

                            return (
                              <div key={sub.id} className="space-y-3.5">
                                <div className="flex items-baseline justify-between gap-3">
                                  <h4 className="text-xs font-mono font-bold text-[#C5FA59] tracking-wider uppercase">
                                    {sub.code}
                                  </h4>
                                  <span className="text-[11px] font-mono text-[#6E7380] shrink-0">
                                    {subImages.length}{' '}
                                    {subImages.length === 1 ? 'ITEM' : 'ITEMS'}
                                  </span>
                                </div>
                                {subImages.length > 0 ? (
                                  <div className={subContainerClasses}>
                                    {subImages.map((img, subImgIdx) =>
                                      renderFeelSoGutCard(
                                        img,
                                        startIndex + subImgIdx,
                                        cat.id === 'game-screens',
                                        subCardWidthClass
                                      )
                                    )}
                                  </div>
                                ) : (
                                  <div className="px-5 py-4 rounded-xl bg-[#14161C] border border-[#242833] flex items-center gap-3 text-xs sm:text-sm text-[#8E939E] font-sans">
                                    <ImageIcon className="w-4 h-4 text-[#C5FA59]/80 shrink-0" />
                                    <span>
                                      현재 {sub.title || sub.code} 카테고리에 등록된 작업물이 없습니다.
                                    </span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ) : cat.id === 'logo-key-visual' ? (
                        <div className="space-y-5 md:space-y-6">
                          {/* 01. 대표 이미지 — 갤러리 전체 가로 너비 대형 카드 */}
                          {images[0] && (
                            <div className="grid grid-cols-1">
                              {renderFeelSoGutCard(
                                images[0],
                                0,
                                false,
                                'w-full',
                                'aspect-[2752/1536] p-1.5 sm:p-2'
                              )}
                            </div>
                          )}

                          {/* 02. 로고 — 대표 이미지 하단 별도 중앙 정렬 카드 */}
                          {images[1] && (
                            <div className="flex justify-center">
                              {renderFeelSoGutCard(
                                images[1],
                                1,
                                false,
                                'w-full sm:w-4/5 md:w-[calc((100%-1.5rem)/2)]',
                                'aspect-[3/2] p-4 sm:p-6'
                              )}
                            </div>
                          )}

                          {/* 추후 추가 이미지 지원 */}
                          {images.length > 2 && (
                            <div className="flex flex-wrap justify-center gap-5 md:gap-6 items-stretch">
                              {images.slice(2).map((img, extraIdx) =>
                                renderFeelSoGutCard(
                                  img,
                                  2 + extraIdx,
                                  false,
                                  'w-full sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]'
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ) : cat.id === 'character-design' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 items-stretch">
                          {images.map((img, imgIdx) =>
                            renderFeelSoGutCard(
                              img,
                              imgIdx,
                              false,
                              'w-full',
                              'aspect-[16/9] p-2.5 sm:p-3.5'
                            )
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-wrap justify-center gap-5 md:gap-6 items-stretch">
                          {images.map((img, imgIdx) =>
                            renderFeelSoGutCard(
                              img,
                              imgIdx,
                              cat.id === 'game-screens',
                              'w-full sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]'
                            )
                          )}
                        </div>
                      )
                    ) : (
                      <div className="px-5 py-4 rounded-xl bg-[#14161C] border border-[#242833] flex items-center gap-3 text-xs sm:text-sm text-[#8E939E] font-sans">
                        <ImageIcon className="w-4 h-4 text-[#C5FA59]/80 shrink-0" />
                        <span>현재 {cat.title} 카테고리에 등록된 작업물이 없습니다.</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : isGrowTheBall && visualCategories.length > 0 ? (
            /* 공 좀 키워오게: 스크롤로 바로 감상하는 오픈 비주얼 갤러리 (OFF THE RECORD 디자인 시스템 + 중앙 정렬 카드 그리드) */
            <div className="space-y-12 pt-2">
              {visualCategories.map((cat, idx) => {
                const images = getCategoryImages(cat);
                const categoryNumber = String(idx + 1).padStart(2, '0');
                const categoryTag = cat.categoryCode.includes('/')
                  ? cat.categoryCode.split('/')[1].trim()
                  : cat.categoryCode;

                const useTwoColDesktop =
                  images.length === 1 || images.length === 2 || images.length === 4;
                const cardWidthClass = useTwoColDesktop
                  ? 'w-full sm:w-[calc((100%_-_1.25rem)_/_2_-_0.5px)] md:w-[calc((100%_-_1.5rem)_/_2_-_0.5px)]'
                  : 'w-full sm:w-[calc((100%_-_1.25rem)_/_2_-_0.5px)] md:w-[calc((100%_-_1.5rem)_/_2_-_0.5px)] lg:w-[calc((100%_-_3rem)_/_3_-_0.5px)]';

                const renderGrowTheBallCard = (
                  img: (typeof images)[number],
                  imgIdx: number,
                  wrapperWidthClass: string,
                  isFullWidthCard = false
                ) => {
                  const isCenteredTitleOnly = !(img.description || img.caption);
                  return (
                    <FadeUp
                      key={img.id || img.src || imgIdx}
                      delay={0.04 * (imgIdx % 6)}
                      distance={15}
                      duration={0.6}
                      className={`${wrapperWidthClass} flex`}
                    >
                      <div
                        onClick={() =>
                          setActiveModal({ categoryId: cat.id, imageIndex: imgIdx })
                        }
                        className="group relative rounded-xl bg-[#17191E] border border-[#272B33] overflow-hidden hover:border-[#C5FA59]/70 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[#C5FA59]/10 flex flex-col w-full"
                      >
                        <div
                          className={`relative w-full aspect-[16/9] ${
                            isFullWidthCard ? 'p-2 sm:p-3' : 'p-1.5 sm:p-2'
                          } bg-[#0E1015] overflow-hidden flex items-center justify-center`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt || img.title || `${cat.title} ${imgIdx + 1}`}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-[#C5FA59]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                          <div className="absolute bottom-3 right-3 z-10 p-1.5 rounded-lg bg-[#101114]/85 text-[#C5FA59] border border-[#2D313B] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 shadow-md">
                            <Maximize2 className="w-4 h-4" />
                          </div>
                        </div>

                        {(img.title || img.description || img.caption) && (
                          <div
                            className={`${
                              isCenteredTitleOnly
                                ? 'p-3 sm:p-3.5 flex-1 flex items-center justify-center text-center'
                                : 'p-4 space-y-1 flex-1'
                            } bg-[#17191E] border-t border-[#242833]`}
                          >
                            {img.title && (
                              <h4
                                className={`${
                                  isCenteredTitleOnly
                                    ? isFullWidthCard
                                      ? 'text-sm sm:text-base leading-snug'
                                      : 'text-xs sm:text-[13px] leading-snug'
                                    : 'text-sm sm:text-base'
                                } font-bold text-[#F5F4F0] font-sans group-hover:text-[#C5FA59] transition-colors break-keep [overflow-wrap:anywhere]`}
                              >
                                {img.title}
                              </h4>
                            )}
                            {(img.description || img.caption) && (
                              <p className="text-xs sm:text-[13px] text-[#8E939E] leading-relaxed break-keep">
                                {img.description || img.caption}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </FadeUp>
                  );
                };

                const startScreensThreeColClass =
                  'w-full sm:w-[calc((100%_-_1.25rem)_/_2_-_0.5px)] md:w-[calc((100%_-_1.5rem)_/_2_-_0.5px)] lg:w-[calc((100%_-_3rem)_/_3_-_0.5px)]';

                return (
                  <div
                    key={cat.id}
                    className={`space-y-6 ${idx > 0 ? 'pt-10 border-t border-[#24262B]' : ''}`}
                  >
                    {/* 카테고리 헤더: 번호(01~03), 제목, 영문 태그, 설명 (왼쪽 정렬 유지) */}
                    <FadeUp delay={idx * 0.05} distance={15} duration={0.6}>
                      <div className="space-y-2 text-left">
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <div className="flex flex-wrap items-baseline gap-2.5">
                            <span className="text-sm font-mono font-bold text-[#C5FA59] tracking-wider">
                              {categoryNumber}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4F0] font-['Space_Grotesk'] tracking-tight">
                              {cat.title}
                            </h3>
                            <span className="text-xs font-mono text-[#8E939E] uppercase tracking-widest">
                              / {categoryTag}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-[#6E7380] shrink-0">
                            {images.length} {images.length === 1 ? 'ITEM' : 'ITEMS'}
                          </span>
                        </div>
                        <p className="text-sm text-[#A7AAB0] font-sans leading-relaxed break-keep">
                          {cat.description}
                        </p>
                      </div>
                    </FadeUp>

                    {/* 등록된 이미지가 있으면 중앙 정렬 Flexbox 갤러리, 없으면 빈 상태 안내 */}
                    {images.length > 0 ? (
                      cat.id === 'start-intro-cutscenes' && images.length > 3 ? (
                        <div className="space-y-5 md:space-y-6">
                          {/* 첫 번째 줄: 시작 화면 3개 (가로 3열 유지) */}
                          <div className="flex flex-wrap justify-center gap-5 md:gap-6 items-stretch">
                            {images
                              .slice(0, 3)
                              .map((img, imgIdx) =>
                                renderGrowTheBallCard(img, imgIdx, startScreensThreeColClass)
                              )}
                          </div>

                          {/* 두 번째 줄: 인트로 컷씬 GIF (갤러리 전체 너비 대형 카드) */}
                          <div className="space-y-5 md:space-y-6">
                            {images
                              .slice(3)
                              .map((img, extraIdx) =>
                                renderGrowTheBallCard(img, 3 + extraIdx, 'w-full', true)
                              )}
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-wrap justify-center gap-5 md:gap-6 items-stretch">
                          {images.map((img, imgIdx) =>
                            renderGrowTheBallCard(img, imgIdx, cardWidthClass)
                          )}
                        </div>
                      )
                    ) : (
                      <div className="px-5 py-4 rounded-xl bg-[#14161C] border border-[#242833] flex items-center gap-3 text-xs sm:text-sm text-[#8E939E] font-sans">
                        <ImageIcon className="w-4 h-4 text-[#C5FA59]/80 shrink-0" />
                        <span>현재 {cat.title} 카테고리에 등록된 작업물이 없습니다.</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : visualCategories.length > 0 ? (
            /* INTERACTIVE CATEGORY GALLERY (기타 프로젝트 폴백) */
            <div className="space-y-6 pt-2">
              {/* 4개 카테고리 카드 그리드 (항상 표시, 클릭 시 갤러리 열림) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                {visualCategories.map((cat, idx) => {
                  const isSelected = selectedCategoryId === cat.id;
                  const imageCount = cat.images?.length || 0;
                  return (
                    <FadeUp key={cat.id} delay={idx * 0.08} distance={20} duration={0.6}>
                      <div
                        onClick={() => setSelectedCategoryId(isSelected ? null : cat.id)}
                        className={`group relative p-5 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 h-full ${
                          isSelected
                            ? 'bg-[#181D14] border-[#C5FA59] ring-1 ring-[#C5FA59] shadow-[0_0_24px_rgba(197,250,89,0.12)] -translate-y-0.5'
                            : 'bg-[#17191E] border-[#272B33] hover:border-[#C5FA59]/50 hover:bg-[#1B1E25]'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-[#C5FA59] font-bold tracking-wider">
                              {cat.categoryCode}
                            </span>
                            <span
                              className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                                isSelected
                                  ? 'bg-[#C5FA59] text-[#101114] font-bold'
                                  : 'bg-[#101114] text-[#8E939E] border border-[#262A34]'
                              }`}
                            >
                              {imageCount} {imageCount === 1 ? 'ITEM' : 'ITEMS'}
                            </span>
                          </div>

                          <h3
                            className={`text-base sm:text-lg font-bold font-['Space_Grotesk'] tracking-tight transition-colors ${
                              isSelected ? 'text-[#C5FA59]' : 'text-[#F5F4F0] group-hover:text-[#C5FA59]'
                            }`}
                          >
                            {cat.title}
                          </h3>

                          <p className="text-xs sm:text-[13px] text-[#A7AAB0] leading-relaxed break-keep">
                            {cat.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#242833] flex items-center justify-between text-[11px] font-mono text-[#8E939E]">
                          <span className="group-hover:text-[#C5FA59] transition-colors">
                            {isSelected ? '갤러리 접기' : '갤러리 열기'}
                          </span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isSelected ? 'rotate-90 text-[#C5FA59]' : 'group-hover:translate-x-0.5 group-hover:text-[#C5FA59]'
                            }`}
                          />
                        </div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>

              {/* 선택된 카테고리의 펼쳐진 이미지 갤러리 */}
              {selectedCategoryId && (() => {
                const activeCategory = visualCategories.find((c) => c.id === selectedCategoryId);
                if (!activeCategory) return null;
                const images = activeCategory.images || [];

                return (
                  <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#14161C] border border-[#262B36] space-y-6">
                    {/* 갤러리 상단: 카테고리 제목 및 닫기 버튼 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#242833]">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono font-bold text-[#C5FA59] tracking-wider">
                            {activeCategory.categoryCode}
                          </span>
                          <span className="text-[#3E434E]" aria-hidden="true">·</span>
                          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4F0] font-['Space_Grotesk'] tracking-tight">
                            {activeCategory.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A7AAB0] font-sans">
                          {activeCategory.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center">
                        <span className="text-xs font-mono text-[#8E939E] px-2.5 py-1 rounded bg-[#101216] border border-[#222630]">
                          {images.length} {images.length === 1 ? 'ITEM' : 'ITEMS'}
                        </span>
                        <button
                          onClick={() => setSelectedCategoryId(null)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-[#A7AAB0] hover:text-[#C5FA59] bg-[#101216] hover:bg-[#1C2028] border border-[#272B35] hover:border-[#C5FA59]/40 transition-colors cursor-pointer"
                          aria-label="갤러리 닫기"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>닫기</span>
                        </button>
                      </div>
                    </div>

                    {/* 이미지 목록 or 빈 갤러리 안내 */}
                    {images.length > 0 ? (
                      /* PC 3열, 태블릿 2열, 모바일 1열 반응형 그리드 */
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((img, imgIdx) => (
                          <div
                            key={img.src || imgIdx}
                            onClick={() => setActiveModal({ categoryId: activeCategory.id, imageIndex: imgIdx })}
                            className="group relative rounded-xl bg-[#17191E] border border-[#272B33] overflow-hidden hover:border-[#C5FA59]/70 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[#C5FA59]/10 flex flex-col"
                          >
                            {/* 썸네일 컨테이너: 원본 비율 왜곡 방지 (object-contain) & 부드러운 호버 확대 */}
                            <div className="relative w-full aspect-[4/3] bg-[#0E1015] overflow-hidden flex items-center justify-center p-3">
                              <img
                                src={img.src}
                                alt={img.alt || img.title || `${activeCategory.title} ${imgIdx + 1}`}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                loading={isGifSource(img.src) ? 'eager' : 'lazy'}
                              />
                              <div className="absolute inset-0 bg-[#C5FA59]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                              <div className="absolute bottom-2.5 right-2.5 z-10 p-1.5 rounded-lg bg-[#101114]/85 text-[#C5FA59] border border-[#2D313B] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 shadow-md">
                                <Maximize2 className="w-3.5 h-3.5" />
                              </div>
                            </div>

                            {/* 이미지 정보 (제목, 설명) */}
                            {(img.title || img.description || img.caption) && (
                              <div className="p-4 bg-[#17191E] border-t border-[#242833] space-y-1">
                                {img.title && (
                                  <h4 className="text-sm font-bold text-[#F5F4F0] font-sans group-hover:text-[#C5FA59] transition-colors break-keep">
                                    {img.title}
                                  </h4>
                                )}
                                {(img.description || img.caption) && (
                                  <p className="text-xs text-[#8E939E] leading-relaxed break-keep">
                                    {img.description || img.caption}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* 빈 갤러리 안내 문구 */
                      <div className="py-12 px-6 rounded-xl bg-[#0E1015] border border-dashed border-[#282C36] text-center space-y-3">
                        <div className="w-10 h-10 mx-auto rounded-full bg-[#17191E] border border-[#262A34] flex items-center justify-center text-[#8E939E]">
                          <ImageIcon className="w-5 h-5 text-[#C5FA59]" />
                        </div>
                        <div className="space-y-1.5 max-w-md mx-auto">
                          <p className="text-sm font-semibold text-[#F5F4F0] font-sans">
                            등록된 작업물이 없습니다
                          </p>
                          <p className="text-xs text-[#8E939E] leading-relaxed break-keep font-sans">
                            현재 <span className="text-[#E6E8EC] font-medium">{activeCategory.title}</span> 카테고리에 등록된 이미지가 없습니다.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {!selectedCategoryId && (
                <p className="text-center text-xs font-mono text-[#6E7380] pt-1">
                  ↑ 카테고리 카드를 클릭하면 등록된 비주얼 작업물 갤러리가 펼쳐집니다.
                </p>
              )}
            </div>
          ) : null}
        </section>

        {/* 03. RESULTS — 수상 및 공모전 성과 */}
        <section className="space-y-8 border-t border-[#24262B] pt-16">
          <FadeUp distance={20} duration={0.7}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#C5FA59] font-bold">03</span>
              <span className="text-xs font-mono text-[#A7AAB0] uppercase tracking-widest">RESULTS</span>
              <span className="text-xs font-mono text-[#3E434E]" aria-hidden="true">/</span>
              <span className="text-xs text-[#A7AAB0] font-sans">
                {isKoongya ? '공모전 및 게임 개발 현황' : '수상 및 공모전 선정 성과'}
              </span>
            </div>
          </FadeUp>

          <div
            className={`grid gap-6 ${
              project.projectAchievements?.length === 1
                ? 'grid-cols-1 max-w-lg'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
            }`}
          >
            {project.projectAchievements?.map((ach, idx) => (
              <FadeUp key={idx} delay={idx * 0.1} distance={25} duration={0.8}>
                <div className="h-full p-6 rounded-xl bg-[#17191E] border border-[#282C36] space-y-4 flex flex-col justify-between hover:border-[#C5FA59]/40 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-md font-semibold ${getBadgeStyles(
                          ach.badgeType
                        )}`}
                      >
                        {ach.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F5F4F0] font-['Space_Grotesk']">
                      {ach.title}
                    </h3>

                    {ach.researchTitle && (
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-[#8E939E]">연구명 :</span>
                        <span className="text-[#C5FA59] font-medium">{ach.researchTitle}</span>
                      </div>
                    )}

                    <p className="text-sm text-[#A7AAB0] leading-relaxed">
                      {ach.description}
                    </p>

                    {/* 학술대회 포스터 열람 영역 (실제 PDF 경로가 등록된 경우 렌더링) */}
                    {ach.posterPdfUrl && (
                      <div className="pt-2 space-y-3">
                        {ach.posterThumbnail && (
                          <a
                            href={ach.posterPdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/poster block relative rounded-lg overflow-hidden border border-[#282C36] hover:border-[#C5FA59]/70 bg-[#0E1015] aspect-[3/4] max-h-60 flex items-center justify-center transition-all duration-300 shadow-inner cursor-pointer"
                            title="학술대회 포스터 새 탭에서 열기"
                          >
                            <img
                              src={ach.posterThumbnail}
                              alt={`${ach.researchTitle || ach.title} 포스터 미리보기`}
                              className="w-full h-full object-contain transition-transform duration-300 group-hover/poster:scale-[1.02]"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-[#0E1015]/40 opacity-0 group-hover/poster:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-md bg-[#17191E]/95 text-[#C5FA59] border border-[#C5FA59]/50 text-xs font-mono font-medium flex items-center gap-1.5 shadow-lg">
                                <Maximize2 className="w-3.5 h-3.5" />
                                <span>포스터 새 탭에서 열기</span>
                              </span>
                            </div>
                          </a>
                        )}
                        <a
                          href={ach.posterPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#20242D] hover:bg-[#C5FA59] text-[#C5FA59] hover:text-[#0E1015] text-xs font-mono font-semibold border border-[#2D313B] hover:border-[#C5FA59] transition-all duration-200 shadow-sm"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>포스터 보기</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {ach.footer && (
                    <div className="pt-3 border-t border-[#282C36] text-xs font-mono text-[#8E939E]">
                      {ach.footer}
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Prev / Next Project Navigation Bar */}
        <FadeUp distance={20} duration={0.7}>
          <section className="border-t border-[#24262B] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="w-full sm:w-auto p-4 rounded-xl bg-[#14161C] border border-[#242833] hover:border-[#C5FA59] transition-all text-left group flex items-center gap-4"
            >
              <ArrowLeft className="w-5 h-5 text-[#C5FA59] transition-transform group-hover:-translate-x-1" />
              <div>
                <span className="text-[10px] font-mono text-[#A7AAB0] block uppercase">PREVIOUS PROJECT</span>
                <span className="text-sm font-bold text-[#F5F4F0] font-['Space_Grotesk']">{prevProject.title}</span>
              </div>
            </button>

            <button
              onClick={onBackToWorks}
              className="px-6 py-3 rounded-lg bg-[#24262B] hover:bg-[#2D3036] text-xs font-mono text-[#F5F4F0] border border-[#33363F] transition-colors"
            >
              전체 목록으로 돌아가기
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="w-full sm:w-auto p-4 rounded-xl bg-[#14161C] border border-[#242833] hover:border-[#C5FA59] transition-all text-right group flex items-center justify-end gap-4"
            >
              <div>
                <span className="text-[10px] font-mono text-[#A7AAB0] block uppercase">NEXT PROJECT</span>
                <span className="text-sm font-bold text-[#F5F4F0] font-['Space_Grotesk']">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#C5FA59] transition-transform group-hover:translate-x-1" />
            </button>
          </section>
        </FadeUp>
      </div>

      {/* Lightbox Modal Popup for Visual Works */}
      {activeModal && currentImage && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 bg-[#0A0B0E]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fadeIn select-none"
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Header */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl mx-auto flex items-center justify-between py-2 border-b border-[#24262B]"
          >
            <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
              <span className="text-[#C5FA59] font-bold">{activeCategory?.categoryCode}</span>
              <span className="text-[#3E434E]" aria-hidden="true">/</span>
              <span className="text-[#F5F4F0] font-sans font-semibold text-sm">
                {activeCategory?.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {hasMultipleItems && (
                <span className="text-xs font-mono text-[#A7AAB0] px-2.5 py-1 rounded bg-[#17191E] border border-[#272B33]">
                  {(activeModal.imageIndex ?? 0) + 1} / {activeImages.length}
                </span>
              )}
              <button
                onClick={handleCloseModal}
                aria-label="모달 닫기"
                className="p-2 rounded-lg bg-[#17191E] hover:bg-[#20242D] text-[#A7AAB0] hover:text-[#C5FA59] border border-[#272B33] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Center Image Container (object-fit: contain) */}
          <div className="relative flex-1 flex items-center justify-center min-h-0 py-4">
            {/* Prev Button */}
            {hasMultipleItems && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                aria-label="이전 이미지"
                className="absolute left-2 sm:left-4 z-20 p-2.5 rounded-full bg-[#17191E]/85 hover:bg-[#C5FA59] text-[#F5F4F0] hover:text-[#101114] border border-[#2D313B] transition-colors backdrop-blur-sm cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-5xl flex flex-col items-center justify-center px-4"
            >
              <img
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt || currentImage.title || activeCategory?.title}
                className={`${
                  currentImage.id === 'gtb-intro-cutscene'
                    ? 'w-[min(85vw,56rem)] h-auto max-h-[75vh]'
                    : 'max-h-[75vh] max-w-full'
                } object-contain rounded-lg shadow-2xl border border-[#282C36]`}
              />
              {(currentImage.title || currentImage.caption || currentImage.description) && (
                <div className="mt-3 text-center space-y-1">
                  {currentImage.title && (
                    <h4 className="text-sm md:text-base font-bold text-[#F5F4F0] font-sans">
                      {currentImage.title}
                    </h4>
                  )}
                  {(currentImage.caption || currentImage.description) && (
                    <p className="text-xs md:text-sm text-[#A7AAB0] font-sans max-w-2xl mx-auto break-keep">
                      {currentImage.caption || currentImage.description}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Next Button */}
            {hasMultipleItems && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                aria-label="다음 이미지"
                className="absolute right-2 sm:right-4 z-20 p-2.5 rounded-full bg-[#17191E]/85 hover:bg-[#C5FA59] text-[#F5F4F0] hover:text-[#101114] border border-[#2D313B] transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Modal Footer */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl mx-auto flex items-center justify-between text-xs text-[#A7AAB0] pt-2 border-t border-[#24262B]"
          >
            <p className="line-clamp-1">{activeCategory?.description}</p>
            <span className="hidden sm:inline font-mono text-[11px] text-[#6E7787]">
              ESC 키로 닫기 {hasMultipleItems ? '· 방향키(←/→)로 이동' : ''}
            </span>
          </div>
        </div>
      )}
    </article>
  );
};
