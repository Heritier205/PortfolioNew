'use client';

import { useCursor } from './hooks';
import { useEffect } from 'react';

export default function Cursor() {
  const { mousePosition, cursorPosition, isHovering, isVisible, handleMouseEnter, handleMouseLeave } = useCursor();

  useEffect(() => {
    const elements = document.querySelectorAll('a, button, input, textarea, select');
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <>
      <div
        id="cursor-dot"
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-[var(--accent)] rounded-full z-[9998] pointer-events-none transition-opacity duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      <div
        id="cursor-outline"
        className="fixed top-0 left-0 rounded-full z-[9998] pointer-events-none transition-all duration-150"
        style={{
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '52px' : '36px',
          height: isHovering ? '52px' : '36px',
          border: `1.5px solid ${isHovering ? 'var(--accent)' : 'rgba(99,102,241,0.5)'}`,
          opacity: isVisible ? 1 : 0,
          background: isHovering ? 'rgba(99,102,241,0.08)' : 'transparent',
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
    </>
  );
}
