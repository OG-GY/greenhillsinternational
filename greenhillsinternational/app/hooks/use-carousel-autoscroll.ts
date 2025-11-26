// Optimized hook for carousel auto-scrolling
// Uses requestAnimationFrame and Page Visibility API for better performance

import { useEffect, useRef } from 'react';
import type { CarouselApi } from '@/app/components/ui/carousel';

interface UseCarouselAutoScrollProps {
  api: CarouselApi | undefined;
  interval?: number;
  enabled?: boolean;
}

export const useCarouselAutoScroll = ({
  api,
  interval = 3000,
  enabled = true,
}: UseCarouselAutoScrollProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isVisibleRef = useRef(true);

  // Monitor page visibility to pause animations when tab is not active
  useEffect(() => {
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
      
      // Clear timeout if page is hidden
      if (document.hidden && timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!api || !enabled || !isVisibleRef.current) return;

    const scheduleNextScroll = () => {
      timeoutRef.current = setTimeout(() => {
        if (isVisibleRef.current) {
          // Use requestAnimationFrame for smooth scrolling
          requestAnimationFrame(() => {
            api.scrollNext();
            scheduleNextScroll();
          });
        }
      }, interval);
    };

    scheduleNextScroll();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [api, interval, enabled]);
};
