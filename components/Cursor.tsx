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
      {/* Dot */}
      <div
        id="cursor-dot"
        style={{
          position: 'fixed',
          width: 6, height: 6,
          background: 'var(--accent)',
          borderRadius: '50%',
          zIndex: 9998,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          left: mousePosition.x,
          top: mousePosition.y,
          transition: 'opacity .3s',
        }}
      />
      {/* Outline ring */}
      <div
        id="cursor-outline"
        style={{
          position: 'fixed',
          borderRadius: '50%',
          zIndex: 9997,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          width: isHovering ? 52 : 36,
          height: isHovering ? 52 : 36,
          border: `1.5px solid ${isHovering ? 'var(--accent)' : 'rgba(99,102,241,0.5)'}`,
          background: isHovering ? 'rgba(99,102,241,0.08)' : 'transparent',
          opacity: isVisible ? 1 : 0,
          left: cursorPosition.x,
          top: cursorPosition.y,
          transition: 'width .15s, height .15s, border-color .15s, background .15s, opacity .3s',
        }}
      />
    </>
  );
}
