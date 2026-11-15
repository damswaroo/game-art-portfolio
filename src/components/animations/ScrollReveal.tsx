import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useScrollDirection, ScrollDirection } from '../../context/ScrollDirectionContext';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  distance = 30,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const scrollDirection = useScrollDirection();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.18, margin: '-20px' }}
      custom={scrollDirection}
      variants={{
        hidden: (dir: ScrollDirection) => ({
          opacity: 0,
          y: dir === 'down' ? distance : -distance,
        }),
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.12,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const scrollDirection = useScrollDirection();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15, margin: '-30px' }}
      custom={scrollDirection}
      variants={{
        hidden: {},
        visible: (dir: ScrollDirection) => ({
          transition: {
            staggerChildren: staggerDelay,
            staggerDirection: dir === 'down' ? 1 : -1,
          },
        }),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  distance?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  distance = 30,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const scrollDirection = useScrollDirection();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      custom={scrollDirection}
      variants={{
        hidden: (dir: ScrollDirection) => ({
          opacity: 0,
          y: dir === 'down' ? distance : -distance,
        }),
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ImageMaskRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const ImageMaskReveal: React.FC<ImageMaskRevealProps> = ({
  children,
  className = '',
  delay = 0.1,
  duration = 0.9,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const scrollDirection = useScrollDirection();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2, margin: '-20px' }}
      custom={scrollDirection}
      variants={{
        hidden: (dir: ScrollDirection) => ({
          clipPath:
            dir === 'down'
              ? 'inset(12% 0% 0% 0% round 16px)'
              : 'inset(0% 0% 12% 0% round 16px)',
          opacity: 0,
          scale: 1.04,
        }),
        visible: {
          clipPath: 'inset(0% 0% 0% 0% round 16px)',
          opacity: 1,
          scale: 1,
          transition: {
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};
