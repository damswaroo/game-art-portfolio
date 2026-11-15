import React, { createContext, useContext, useEffect, useState, useRef, ReactNode } from 'react';

export type ScrollDirection = 'down' | 'up';

const ScrollDirectionContext = createContext<ScrollDirection>('down');

export const ScrollDirectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [direction, setDirection] = useState<ScrollDirection>('down');
  const prevScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    prevScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const diff = currentScrollY - prevScrollY.current;

          // Threshold of 6px to avoid micro-jitter or bounce effects
          if (Math.abs(diff) >= 6) {
            setDirection(diff > 0 ? 'down' : 'up');
            prevScrollY.current = currentScrollY;
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollDirectionContext.Provider value={direction}>
      {children}
    </ScrollDirectionContext.Provider>
  );
};

export const useScrollDirection = () => useContext(ScrollDirectionContext);
