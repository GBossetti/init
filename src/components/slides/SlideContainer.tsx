'use client';

import type { ReactNode } from 'react';
import { SlideProvider } from '@/context/SlideContext';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { DotNavigation } from '@/components/navigation/DotNavigation';

function SlideNavigationHandler() {
  useSlideNavigation();
  return null;
}

interface SlideContainerProps {
  children: ReactNode;
}

export function SlideContainer({ children }: SlideContainerProps) {
  return (
    <SlideProvider>
      <SlideNavigationHandler />
      <div className="slide-container">
        {children}
        <DotNavigation />
      </div>
    </SlideProvider>
  );
}
