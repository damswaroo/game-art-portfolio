import React from 'react';
import { Trophy } from 'lucide-react';
import { Project, ProjectThumbnailBadge } from '../types/portfolio';

interface Props {
  project: Project;
}

const BADGE_CONTAINER_CLASS =
  'absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex flex-col items-start gap-1.5 max-w-[calc(100%-1.5rem)] sm:max-w-[calc(100%-2rem)] pointer-events-none';

const BADGE_BASE_CLASS =
  'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border bg-[#101114]/88 backdrop-blur-md shadow-md w-fit max-w-full text-[11px] leading-snug font-sans font-semibold tracking-tight break-keep';

const BADGE_VARIANT_CLASS = {
  award: 'border-[#C5FA59]/75 text-[#C5FA59]',
  activity: 'border-[#F5F4F0]/40 text-[#F5F4F0]',
} as const;

const inferAwardRank = (label: string, explicitRank?: number): number => {
  if (typeof explicitRank === 'number') return explicitRank;
  if (/대상|grand\s*prize/i.test(label)) return 6;
  if (/최우수상|금상|1위|1등/i.test(label)) return 5;
  if (/우수상|은상|2위|2등/i.test(label)) return 4;
  if (/동상|장려상|특별상|3위|3등/i.test(label)) return 3;
  if (/입선|본선\s*수상/i.test(label)) return 2;
  return 1;
};

const parseBadgeDateScore = (dateStr?: string, label = ''): number => {
  if (dateStr) {
    const digits = dateStr.replace(/\D/g, '');
    if (digits.length >= 8) return Number(digits.slice(0, 8));
    if (digits.length >= 6) return Number(digits.slice(0, 6)) * 100;
    if (digits.length >= 4) return Number(digits.slice(0, 4)) * 10000;
  }
  const yearMatch = label.match(/20\d{2}/);
  return yearMatch ? Number(yearMatch[0]) * 10000 : 0;
};

const resolveProjectBadges = (project: Project): ProjectThumbnailBadge[] => {
  const sourceBadges: ProjectThumbnailBadge[] =
    project.thumbnailBadges && project.thumbnailBadges.length > 0
      ? project.thumbnailBadges
      : (project.projectAchievements || []).map((ach) => {
          const isAward =
            ach.badgeType === 'AWARDED' ||
            ach.badgeType === 'award' ||
            /수상|대상|최우수상|우수상|동상|은상|금상|장려상/.test(ach.badge);
          return {
            label: `${ach.title}${ach.badge ? ` · ${ach.badge}` : ''}`,
            type: isAward ? 'award' : 'activity',
            date: ach.date,
          };
        });

  return [...sourceBadges].sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 'award' ? -1 : 1;
    }

    if (a.type === 'award' && b.type === 'award') {
      const rankDiff =
        inferAwardRank(b.label, b.awardRank) - inferAwardRank(a.label, a.awardRank);
      if (rankDiff !== 0) return rankDiff;

      return parseBadgeDateScore(b.date, b.label) - parseBadgeDateScore(a.date, a.label);
    }

    return 0;
  });
};

export const ProjectThumbnailBadges: React.FC<Props> = ({ project }) => {
  const badges = resolveProjectBadges(project);
  if (badges.length === 0) return null;

  return (
    <div className={BADGE_CONTAINER_CLASS}>
      {badges.map((badge) => (
        <div
          key={`${badge.type}-${badge.label}`}
          className={`${BADGE_BASE_CLASS} ${BADGE_VARIANT_CLASS[badge.type]}`}
        >
          {badge.type === 'award' ? (
            <Trophy className="w-3 h-3 text-[#C5FA59] shrink-0" aria-hidden="true" />
          ) : (
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#F5F4F0]/90 shrink-0"
              aria-hidden="true"
            />
          )}
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
};
