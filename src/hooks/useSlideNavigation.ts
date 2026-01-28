'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useSlideContext } from '@/context/SlideContext';
import { SLIDES, type SlideId } from '@/types/slides';

export function useSlideNavigation() {
  const { goToNext, goToPrevious, setCurrentSlide } = useSlideContext();
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't navigate if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          goToNext();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          goToPrevious();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlide('hero');
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlide('contact');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious, setCurrentSlide]);

  // Touch/swipe navigation
  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    if (touch) {
      touchStartY.current = touch.clientY;
    }
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (isScrolling.current) return;

      const touch = e.changedTouches[0];
      if (!touch) return;

      const touchEndY = touch.clientY;
      const diff = touchStartY.current - touchEndY;
      const threshold = 50; // Minimum swipe distance

      if (Math.abs(diff) > threshold) {
        isScrolling.current = true;
        if (diff > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    },
    [goToNext, goToPrevious]
  );

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);

  // Intersection Observer for tracking current slide
  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const slideId = entry.target.id as SlideId;
          if (SLIDES.some((s) => s.id === slideId)) {
            setCurrentSlide(slideId);
            window.history.replaceState(null, '', `#${slideId}`);
          }
        }
      });
    },
    [setCurrentSlide]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    SLIDES.forEach((slide) => {
      const element = document.getElementById(slide.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [observerCallback]);

  return null;
}
