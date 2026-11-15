import React, { useState, useEffect, useRef } from 'react';
import {
  ZoomIn,
  X,
  Award,
  Gamepad2,
  GraduationCap,
  Coins,
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Newspaper,
  ExternalLink,
} from 'lucide-react';
import { Achievement, AchievementCategory } from '../types/portfolio';
import { initialAchievements } from '../data/achievementsData';
import { FadeUp } from './animations/ScrollReveal';

const AWARD_DIVISION_BADGE_CLASS =
  'text-[11px] font-mono text-[#C5FA59] bg-[#C5FA59]/10 px-2 py-0.5 rounded border border-[#C5FA59]/20 font-semibold';

const TeamAwardBadge: React.FC<{ label: string }> = ({ label }) => (
  <span className={AWARD_DIVISION_BADGE_CLASS}>{label}</span>
);

const CATEGORY_PRIORITY: Record<AchievementCategory, number> = {
  AWARDS: 1,
  COMPETITION: 2,
  'ACADEMIC EXCELLENCE': 3,
  SCHOLARSHIP: 3,
  'EDUCATION & TRAINING': 4,
  LEADERSHIP: 5,
};

export const AchievementsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalItem, setActiveModalItem] = useState<Achievement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Sorting: 1) Category priority (수상 -> 공모전 -> 학업/장학 -> 교육 수료 -> 대외활동), 2) Explicit order, 3) highlight / year
  const sortedAchievements = [...initialAchievements].sort((a, b) => {
    const priorityDiff =
      (CATEGORY_PRIORITY[a.category] ?? 99) - (CATEGORY_PRIORITY[b.category] ?? 99);
    if (priorityDiff !== 0) return priorityDiff;

    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return b.year - a.year;
  });

  const filteredAchievements =
    selectedCategory === 'ALL'
      ? sortedAchievements
      : sortedAchievements.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for modal: ESC to close, ArrowLeft / ArrowRight to flip images
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalItem) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    if (activeModalItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalItem, currentImageIndex]);

  const openModal = (item: Achievement, buttonEl: HTMLButtonElement, initialIdx = 0) => {
    if (!item.proofs || item.proofs.length === 0) return;
    triggerButtonRef.current = buttonEl;
    setActiveModalItem(item);
    setCurrentImageIndex(initialIdx);
  };

  const closeModal = () => {
    setActiveModalItem(null);
    setCurrentImageIndex(0);
    setTimeout(() => {
      triggerButtonRef.current?.focus();
    }, 50);
  };

  const handlePrevImage = () => {
    if (!activeModalItem?.proofs?.length) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? activeModalItem.proofs!.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!activeModalItem?.proofs?.length) return;
    setCurrentImageIndex((prev) =>
      prev === activeModalItem.proofs!.length - 1 ? 0 : prev + 1
    );
  };

  const getCategoryIcon = (category: AchievementCategory) => {
    switch (category) {
      case 'AWARDS':
        return <Award className="w-3.5 h-3.5 text-[#C5FA59]" />;
      case 'COMPETITION':
        return <Gamepad2 className="w-3.5 h-3.5 text-[#C5FA59]" />;
      case 'ACADEMIC EXCELLENCE':
        return <GraduationCap className="w-3.5 h-3.5 text-[#60A5FA]" />;
      case 'SCHOLARSHIP':
        return <Coins className="w-3.5 h-3.5 text-[#FBBF24]" />;
      case 'EDUCATION & TRAINING':
        return <BookOpen className="w-3.5 h-3.5 text-[#A78BFA]" />;
      case 'LEADERSHIP':
        return <Users className="w-3.5 h-3.5 text-[#34D399]" />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-24 pt-16 border-t border-[#24262B]">
      {/* Section Header: 04 / ACHIEVEMENTS */}
      <FadeUp distance={25} duration={0.75}>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59]" aria-hidden="true" />
              <span className="text-xs font-mono text-[#C5FA59] uppercase tracking-widest font-semibold">
                ACHIEVEMENTS & ACTIVITIES
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F4F0] font-['Space_Grotesk']">
              Recognition & Milestones.
            </h3>
            <p className="text-sm md:text-base text-[#A7AAB0] max-w-xl break-keep">
              프로젝트에서의 성과부터 학업과 활동의 기록까지.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {[
              { id: 'ALL', label: '전체' },
              { id: 'AWARDS', label: '수상' },
              { id: 'COMPETITION', label: '공모전' },
              { id: 'ACADEMIC EXCELLENCE', label: '학업 성취' },
              { id: 'SCHOLARSHIP', label: '장학' },
              { id: 'EDUCATION & TRAINING', label: '교육 이수' },
              { id: 'LEADERSHIP', label: '자치 활동' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#C5FA59] text-[#101114] border-[#C5FA59] font-semibold'
                    : 'bg-[#17191E] text-[#A7AAB0] border-[#2B2F38] hover:text-[#F5F4F0] hover:border-[#3E434E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Achievements List */}
      <div className="space-y-3">
        {filteredAchievements.map((item, index) => {
          const hasProofs = Boolean(item.proofs && item.proofs.length > 0);

          return (
            <FadeUp key={item.id} delay={0.04 * index} distance={20} duration={0.7}>
              <div
                className={`group relative rounded-xl p-5 md:p-6 transition-all duration-300 border ${
                  item.highlight && item.category === 'AWARDS'
                    ? 'bg-[#171A21]/80 border-[#C5FA59]/30 hover:border-[#C5FA59]/60'
                    : 'bg-[#14161B]/60 border-[#24262B] hover:border-[#333842] hover:bg-[#17191E]'
                }`}
              >
                {/* Responsive Layout (Desktop Horizontal / Mobile Vertical) */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6">
                  {/* Left Column: Date, Ongoing Indicator & Category Badge */}
                  <div className="flex items-center md:flex-col md:items-start gap-3 md:gap-2 shrink-0 md:w-36">
                    <div className="flex items-center md:flex-col md:items-start gap-1.5 md:gap-0.5">
                      <span className="text-sm font-mono text-[#C5FA59] font-bold">
                        {item.date}
                      </span>
                      {item.isOngoing && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#C5FA59] font-bold tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59] shrink-0" aria-hidden="true" />
                          ONGOING
                        </span>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#24262B] border border-[#2D313B] text-[11px] font-mono text-[#A7AAB0]">
                      {getCategoryIcon(item.category)}
                      <span>{item.categoryLabel}</span>
                    </div>
                  </div>

                  {/* Center Column: Title, Division, Status Badge, Organization, Details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base sm:text-lg font-semibold text-[#F5F4F0] group-hover:text-[#C5FA59] transition-colors break-keep">
                        {item.title}
                      </h4>
                      {item.statusBadges && item.statusBadges.length > 0 ? (
                        item.statusBadges.map((badge, idx) => (
                          <span
                            key={idx}
                            className={
                              idx === 0
                                ? "text-[11px] font-mono text-[#101114] bg-[#C5FA59] px-2 py-0.5 rounded font-bold inline-flex items-center gap-1 shadow-sm"
                                : "text-[11px] font-mono text-[#C5FA59] bg-[#C5FA59]/10 px-2 py-0.5 rounded border border-[#C5FA59]/20 font-semibold"
                            }
                          >
                            {idx === 0 && <span className="w-1.5 h-1.5 rounded-full bg-[#101114]" aria-hidden="true" />}
                            {badge}
                          </span>
                        ))
                      ) : (
                        item.statusBadge && (
                          <span className="text-[11px] font-mono text-[#101114] bg-[#C5FA59] px-2 py-0.5 rounded font-bold inline-flex items-center gap-1 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#101114]" aria-hidden="true" />
                            {item.statusBadge}
                          </span>
                        )
                      )}
                      {item.teamName && !item.awardDivision && (
                        <TeamAwardBadge
                          label={
                            item.teamName.startsWith('팀 수상')
                              ? item.teamName
                              : `팀 수상 (${item.teamName})`
                          }
                        />
                      )}
                      {item.awardDivision && (
                        item.awardDivision.includes('팀') ? (
                          <TeamAwardBadge label={item.awardDivision} />
                        ) : (
                          <span className={AWARD_DIVISION_BADGE_CLASS}>
                            {item.awardDivision}
                          </span>
                        )
                      )}
                      {item.status && (
                        <span className="text-[11px] font-mono text-[#A7AAB0] bg-[#1E2026] px-2 py-0.5 rounded border border-[#2B2F38]">
                          진행: {item.status}
                        </span>
                      )}
                      {!item.hostOrganizations && item.organization && (
                        <span className="text-xs text-[#A7AAB0] font-mono">
                          · {item.organization}
                        </span>
                      )}
                    </div>

                    {/* Detailed Organizations (주최·주관 및 운영 관련 기관 구분 표시) */}
                    {(item.hostOrganizations || item.operatingOrganizations) && (
                      <div className="flex flex-col gap-1.5 text-xs font-mono bg-[#101114]/80 p-2.5 rounded-lg border border-[#24262B] my-1 text-[#A7AAB0]">
                        {item.hostOrganizations && (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <span className="text-[#C5FA59] font-medium text-[11px] shrink-0">
                              주최·주관:
                            </span>
                            <span className="text-[#E2E4E9] break-keep">
                              {item.hostOrganizations.join(', ')}
                            </span>
                          </div>
                        )}
                        {item.operatingOrganizations && (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 pt-1 border-t border-[#1F222A]">
                            <span className="text-[#8E939E] font-medium text-[11px] shrink-0">
                              운영 관련 기관:
                            </span>
                            <span className="text-[#A7AAB0] break-keep">
                              {item.operatingOrganizations.join(', ')}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {item.paperTitle && (
                      <p className="text-xs text-[#C5FA59]/80 font-mono break-keep leading-relaxed bg-[#101114] p-2.5 rounded-lg border border-[#24262B]">
                        <strong className="text-[#A7AAB0] not-italic block mb-0.5">논문명:</strong>
                        {item.paperTitle}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#8E939E] leading-relaxed break-keep">
                      {item.description}
                    </p>

                    {/* Multi-semester or multi-year details pills */}
                    {item.details && item.details.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono text-[#A7AAB0] bg-[#1E2026] px-2.5 py-1 rounded border border-[#2B2F38]"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Evidence Preview Button / Article Link / Disabled Indicator */}
                  <div className="shrink-0 flex flex-wrap items-center md:justify-end gap-2 pt-1 md:pt-0">
                    {item.articleUrl && (
                      <a
                        href={item.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#1A1D24] hover:bg-[#252934] border border-[#2B2F38] hover:border-[#C5FA59]/60 text-xs font-mono text-[#F5F4F0] transition-all cursor-pointer shadow-sm group/article active:scale-95 h-[48px]"
                        aria-label={`${item.title} ${item.articleLabel || '관련 기사 보기'} 새 탭에서 열기`}
                      >
                        <div className="relative w-8 h-8 rounded overflow-hidden bg-black/40 border border-[#2B2F38] shrink-0 flex items-center justify-center">
                          {item.articleLabel && item.articleLabel.includes('공모전') ? (
                            <ExternalLink className="w-4 h-4 text-[#C5FA59] group-hover/article:scale-110 transition-transform" />
                          ) : (
                            <Newspaper className="w-4 h-4 text-[#C5FA59] group-hover/article:scale-110 transition-transform" />
                          )}
                        </div>
                        <div className="text-left">
                          <span className="block text-[11px] font-mono text-[#F5F4F0] font-medium group-hover/article:text-[#C5FA59] transition-colors leading-tight">
                            {item.articleLabel || '관련 기사 보기'}
                          </span>
                          <span className="block text-[10px] text-[#A7AAB0] font-mono leading-tight flex items-center gap-0.5">
                            새 창 열기 <span className="text-[#C5FA59] font-sans">↗</span>
                          </span>
                        </div>
                      </a>
                    )}

                    {hasProofs && (
                      <button
                        type="button"
                        onClick={(e) => openModal(item, e.currentTarget, 0)}
                        className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#1A1D24] hover:bg-[#252934] border border-[#2B2F38] hover:border-[#C5FA59]/60 text-xs font-mono text-[#F5F4F0] transition-all cursor-pointer shadow-sm group/btn active:scale-95 h-[48px]"
                        aria-label={`${item.title} 증빙 서류 확대 보기`}
                      >
                        <div className="relative w-8 h-8 rounded overflow-hidden bg-black/40 border border-[#2B2F38] shrink-0">
                          <img
                            src={item.proofs![0].src}
                            alt=""
                            loading="lazy"
                            className="w-full h-full object-cover group-hover/btn:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover/btn:bg-transparent transition-colors flex items-center justify-center">
                            <ZoomIn className="w-3.5 h-3.5 text-[#C5FA59]" />
                          </div>
                        </div>
                        <div className="text-left">
                          <span className="block text-[11px] font-mono text-[#F5F4F0] font-medium group-hover/btn:text-[#C5FA59] transition-colors leading-tight">
                            증빙 서류 확인
                          </span>
                          <span className="block text-[10px] text-[#A7AAB0] leading-tight">
                            {item.proofs!.length > 1 ? `${item.proofs!.length}장 제공` : '확대 보기'}
                          </span>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          );
        })}

        {filteredAchievements.length === 0 && (
          <div className="py-12 text-center text-sm font-mono text-[#A7AAB0] bg-[#17191E]/30 rounded-xl border border-[#24262B]">
            해당 카테고리의 성과 내역이 등록 준비 중입니다.
          </div>
        )}
      </div>

      {/* Modal Image Viewer for Proofs / Multi-Image Certificates */}
      {activeModalItem && activeModalItem.proofs && activeModalItem.proofs.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-achievement-title"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative max-w-3xl w-full bg-[#14161B] border border-[#2B2F38] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="shrink-0 flex items-center justify-between p-4 sm:p-6 border-b border-[#24262B] bg-[#101114] z-20">
              <div className="space-y-1 pr-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5FA59]">
                  {getCategoryIcon(activeModalItem.category)}
                  <span>
                    {activeModalItem.categoryLabel} · {activeModalItem.date}
                  </span>
                  {activeModalItem.proofs.length > 1 && (
                    <span className="px-2 py-0.5 rounded bg-[#24262B] text-[10px] text-[#F5F4F0] border border-[#333842]">
                      {currentImageIndex + 1} / {activeModalItem.proofs.length}
                    </span>
                  )}
                </div>
                <h3
                  id="modal-achievement-title"
                  className="text-base sm:text-lg font-bold text-[#F5F4F0] font-['Space_Grotesk'] break-keep"
                >
                  {activeModalItem.title}
                </h3>
                <p className="text-xs text-[#A7AAB0]">
                  발급/주최: {activeModalItem.organization}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                onClick={closeModal}
                className="p-2 rounded-lg bg-[#24262B] hover:bg-[#33363F] text-[#A7AAB0] hover:text-[#F5F4F0] transition-colors shrink-0 cursor-pointer"
                aria-label="증빙 서류 닫기 (ESC)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Carousel Body */}
            <div className="relative flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 bg-[#0C0D10] flex flex-col items-center justify-start min-h-[320px]">
              {/* Prev Button */}
              {activeModalItem.proofs.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/75 hover:bg-[#24262B] border border-white/20 text-white transition-all shadow-xl active:scale-95 cursor-pointer backdrop-blur-sm"
                  aria-label="이전 증빙 이미지"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Certificate Image Container */}
              <div className="w-full max-w-2xl mx-auto flex flex-col items-center pt-1 pb-2">
                <img
                  src={activeModalItem.proofs[currentImageIndex].src}
                  alt={
                    activeModalItem.proofs[currentImageIndex].alt ||
                    `${activeModalItem.title} 증빙 서류 ${currentImageIndex + 1}`
                  }
                  className="w-full max-w-full h-auto max-h-[66vh] rounded-lg border border-[#2B2F38] shadow-2xl block mx-auto"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'top center',
                  }}
                />
                {activeModalItem.proofs[currentImageIndex].title && (
                  <p className="text-center text-xs font-mono text-[#A7AAB0] mt-3 px-2 break-keep">
                    {activeModalItem.proofs[currentImageIndex].title}
                  </p>
                )}
              </div>

              {/* Next Button */}
              {activeModalItem.proofs.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/75 hover:bg-[#24262B] border border-white/20 text-white transition-all shadow-xl active:scale-95 cursor-pointer backdrop-blur-sm"
                  aria-label="다음 증빙 이미지"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Modal Footer with Privacy Notice */}
            <div className="shrink-0 p-4 sm:p-5 border-t border-[#24262B] bg-[#101114] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs z-20">
              <div className="flex items-start gap-2 text-[#A7AAB0]">
                <ShieldCheck className="w-4 h-4 text-[#C5FA59] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  개인정보 보호 조치: 학번, 발급번호 등 민감 개인 식별 정보는 비공개 처리되어 안전하게 게시됩니다.
                </span>
              </div>
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-[#24262B] hover:bg-[#2D313B] text-[#F5F4F0] font-mono text-xs transition-colors shrink-0 self-end sm:self-auto"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
