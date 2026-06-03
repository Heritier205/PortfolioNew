'use client';

import { useState, useEffect, useRef } from 'react';

// Theme Hook
export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
}

// Scroll Hook
export function useScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowBackToTop(window.scrollY > 400);
      const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolled, scrollProgress, showBackToTop };
}

// Mobile Menu Hook
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return { isOpen, openMenu, closeMenu };
}

// Typewriter Hook
export function useTypewriter(words: string[], wait = 2800) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index % words.length];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), wait);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      } else {
        setText(isDeleting ? currentWord.slice(0, text.length - 1) : currentWord.slice(0, text.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, wait]);

  return text;
}

// Cursor Hook
export function useCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return { mousePosition, cursorPosition: mousePosition, isHovering, isVisible, handleMouseEnter, handleMouseLeave };
}

// Reveal Hook
export function useReveal() {
  const elementsRef = useRef<Set<HTMLElement>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
              const fill = entry.target.querySelector('.skill-fill') as HTMLElement | null;
              if (fill && fill.dataset) {
                fill.style.width = fill.dataset.w + '%';
              }
            }, Number((entry.target as HTMLElement).dataset.delay || 0));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;

    return () => observer.disconnect();
  }, []);

  const registerElement = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.has(el)) {
      elementsRef.current.add(el);
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    }
  };

  return registerElement;
}

// Counter Hook
export function useCounter(target: number) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const setRef = (node: HTMLSpanElement | null) => {
    elementRef.current = node;
  };

  useEffect(() => {
    if (!elementRef.current || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            const step = target / (1400 / 16);
            let current = 0;
            const interval = setInterval(() => {
              current = Math.min(current + step, target);
              setCount(Math.floor(current));
              if (current >= target) clearInterval(interval);
            }, 16);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, hasStarted]);

  return { count, setRef };
}

// Active Section Hook
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
