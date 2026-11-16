import React from 'react';
import { motion } from 'motion/react';

interface ProjectContributionCardProps {
  contributionRate?: number | null;
  emptyLabel?: string;
}

export const normalizeContributionRate = (
  contributionRate?: number | null
): number | null => {
  if (typeof contributionRate !== 'number' || !Number.isFinite(contributionRate)) {
    return null;
  }
  return Math.min(100, Math.max(0, Math.round(contributionRate)));
};

export const ProjectContributionCard: React.FC<ProjectContributionCardProps> = ({
  contributionRate,
  emptyLabel = '미입력',
}) => {
  const normalizedRate = normalizeContributionRate(contributionRate);
  const hasValue = normalizedRate !== null;
  const clampedRate = normalizedRate ?? 0;

  return (
    <div className="p-5 rounded-xl bg-[#17191E] border border-[#272B33] flex flex-col justify-between space-y-3.5 sm:col-span-2">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-xs font-mono text-[#C5FA59] uppercase tracking-wider font-semibold">
          전체 프로젝트 기여도
        </span>
        {hasValue ? (
          <span className="text-2xl sm:text-3xl font-extrabold text-[#F5F4F0] font-['Space_Grotesk'] tracking-tight tabular-nums">
            {clampedRate}%
          </span>
        ) : (
          <span className="text-lg sm:text-xl font-bold text-[#6E7380] font-sans">
            {emptyLabel}
          </span>
        )}
      </div>

      <div
        role="progressbar"
        aria-label="전체 프로젝트 기여도"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={hasValue ? clampedRate : undefined}
        aria-disabled={!hasValue}
        className={`w-full h-2.5 rounded-full overflow-hidden border ${
          hasValue
            ? 'bg-[#101114] border-[#242833]'
            : 'bg-[#101114]/60 border-[#22252D] opacity-50'
        }`}
      >
        {hasValue && (
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${clampedRate}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-[#C5FA59] shadow-[0_0_12px_rgba(197,250,89,0.35)]"
          />
        )}
      </div>
    </div>
  );
};
