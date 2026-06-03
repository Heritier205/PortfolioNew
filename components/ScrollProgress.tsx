'use client';

import { useScroll } from './hooks';

export default function ScrollProgress() {
  const { scrollProgress } = useScroll();

  return (
    <div
      id="scroll-progress"
      style={{
        width: `${scrollProgress}%`,
      }}
    />
  );
}
