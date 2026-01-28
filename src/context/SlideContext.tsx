'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import { type SlideId, SLIDES } from '@/types/slides';

interface SlideContextValue {
  currentSlide: SlideId;
  setCurrentSlide: (slide: SlideId) => void;
  goToSlide: (slide: SlideId) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  slideIndex: number;
  totalSlides: number;
}

const SlideContext = createContext<SlideContextValue | null>(null);

export function SlideProvider({ children }: { children: ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState<SlideId>('hero');

  const slideIndex = SLIDES.findIndex((s) => s.id === currentSlide);
  const totalSlides = SLIDES.length;

  const goToSlide = useCallback((slide: SlideId) => {
    setCurrentSlide(slide);
    const element = document.getElementById(slide);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Update URL hash without triggering scroll
    window.history.replaceState(null, '', `#${slide}`);
  }, []);

  const goToNext = useCallback(() => {
    const nextIndex = Math.min(slideIndex + 1, totalSlides - 1);
    const nextSlide = SLIDES[nextIndex];
    if (nextSlide) {
      goToSlide(nextSlide.id);
    }
  }, [slideIndex, totalSlides, goToSlide]);

  const goToPrevious = useCallback(() => {
    const prevIndex = Math.max(slideIndex - 1, 0);
    const prevSlide = SLIDES[prevIndex];
    if (prevSlide) {
      goToSlide(prevSlide.id);
    }
  }, [slideIndex, goToSlide]);

  // Handle initial hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1) as SlideId;
    const validSlide = SLIDES.find((s) => s.id === hash);
    if (validSlide) {
      setCurrentSlide(validSlide.id);
      // Scroll to the slide after a short delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(validSlide.id);
        if (element) {
          element.scrollIntoView({ behavior: 'instant' });
        }
      }, 0);
    }
  }, []);

  return (
    <SlideContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
        goToSlide,
        goToNext,
        goToPrevious,
        slideIndex,
        totalSlides,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
}

export function useSlideContext() {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error('useSlideContext must be used within a SlideProvider');
  }
  return context;
}
