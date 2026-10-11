/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { NavigationHeader } from './components/NavigationHeader';
import { WelcomeCard } from './components/WelcomeCard';
import { PersonalInfoCard } from './components/PersonalInfoCard';
import { MyStyleCard } from './components/MyStyleCard';
import { CategoriesCard } from './components/CategoriesCard';
import { ImageLightbox } from './components/ImageLightbox';
import { ORIGINAL_PROFILE_DATA } from './data/profileData';

type StepType = 'welcome' | 'intro' | 'style' | 'categories';

const STEP_ORDER: StepType[] = [
  'welcome',
  'intro',
  'style',
  'categories',
];

export default function App() {
  const [currentStep, setCurrentStep] = useState<StepType>('welcome');
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('sky_profile_theme_mode');
      if (saved) return saved === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false; // Default to the clean stone/white tone from the user's reference images
    }
  });

  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    url: string;
    caption: string;
  }>({
    isOpen: false,
    url: '',
    caption: '',
  });

  // Touch and drag swipe state
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('sky_profile_theme_mode', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('sky_profile_theme_mode', 'light');
      }
    } catch {
      // ignore
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const goToStep = (target: StepType, dir?: 'left' | 'right') => {
    if (dir) {
      setSlideDirection(dir);
    } else {
      const curIndex = STEP_ORDER.indexOf(currentStep as any);
      const targetIndex = STEP_ORDER.indexOf(target as any);
      if (curIndex !== -1 && targetIndex !== -1) {
        setSlideDirection(targetIndex >= curIndex ? 'right' : 'left');
      }
    }
    setCurrentStep(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentStep === 'welcome') goToStep('intro', 'right');
    else if (currentStep === 'intro') goToStep('style', 'right');
    else if (currentStep === 'style') goToStep('categories', 'right');
  };

  const handlePrev = () => {
    if (currentStep === 'intro') goToStep('welcome', 'left');
    else if (currentStep === 'style') goToStep('intro', 'left');
    else if (currentStep === 'categories') goToStep('style', 'left');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightbox.isOpen) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, lightbox.isOpen]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Ensure horizontal gesture is dominant
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        // Swiped left -> proceed to next
        handleNext();
      } else {
        // Swiped right -> proceed to prev
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Mouse drag handling (supports desktop gesture swipe)
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseStartX.current === null) return;
    const deltaX = e.clientX - mouseStartX.current;
    if (Math.abs(deltaX) > 75) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    mouseStartX.current = null;
  };

  const openLightbox = (url: string, caption: string) => {
    setLightbox({ isOpen: true, url, caption });
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 select-none bg-ppt-texture ${
        isDarkMode
          ? 'dark bg-[#0f1012] text-neutral-100 selection:bg-neutral-200 selection:text-neutral-900'
          : 'bg-[#f7f7f5] text-neutral-900 selection:bg-neutral-800 selection:text-white'
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Top Navigation Bar with Page Counter */}
      <NavigationHeader
        currentStep={currentStep}
        onNavigate={step => goToStep(step)}
        siteTitle={ORIGINAL_PROFILE_DATA.siteTitle}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Slide Presentation View */}
      <main
        key={currentStep}
        className={`flex-1 pb-12 ${
          slideDirection === 'right' ? 'animate-slide-right' : 'animate-slide-left'
        }`}
      >
        {currentStep === 'welcome' && (
          <WelcomeCard
            onStart={() => goToStep('intro', 'right')}
            onImageClick={openLightbox}
          />
        )}

        {currentStep === 'intro' && (
          <PersonalInfoCard
            onNext={() => goToStep('style', 'right')}
            onPrev={() => goToStep('welcome', 'left')}
            onImageClick={openLightbox}
          />
        )}

        {currentStep === 'style' && (
          <MyStyleCard
            onNext={() => goToStep('categories', 'right')}
            onPrev={() => goToStep('intro', 'left')}
          />
        )}

        {currentStep === 'categories' && (
          <CategoriesCard
            onPrev={() => goToStep('style', 'left')}
            onRestart={() => goToStep('welcome', 'left')}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <footer className="mt-auto py-6 border-t border-neutral-300/60 dark:border-neutral-800/80 bg-white/70 dark:bg-[#121316]/70 backdrop-blur-xs text-xs text-neutral-400 dark:text-neutral-500 font-mono transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white transition-colors"></span>
            <span className="text-neutral-700 dark:text-neutral-300">
              {ORIGINAL_PROFILE_DATA.siteTitle} · ARCHIVE
            </span>
          </div>
          <div className="text-[11px] text-neutral-400 dark:text-neutral-500 tracking-wider uppercase">
            BEFORE RESPIRATORY ARREST · PERSONAL PORTFOLIO
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.url}
        caption={lightbox.caption}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
