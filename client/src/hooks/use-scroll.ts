import { useState, useEffect } from 'react';

interface UseScrollOptions {
  threshold?: number;
  throttleMs?: number;
}

export function useScroll({ threshold = 50, throttleMs = 16 }: UseScrollOptions = {}) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    // Throttle scroll events
    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, throttleMs);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initialize values
    updateScrollPosition();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [threshold, throttleMs]);

  return { scrollY, isScrolled };
}

// Utility function for smooth scrolling to sections
export function scrollToSection(sectionId: string, offset = 80) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - offset;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
} 