// src/components/CursorGlow.jsx
import { useEffect, useRef } from 'react';

// A soft glow that follows the pointer, desktop only — purely ambient,
// never blocks interaction (pointer-events: none) and respects reduced motion.
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) return;

    const glow = glowRef.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let frame;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      if (glow) {
        glow.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
        willChange: 'transform',
      }}
      className="cursor-glow-hide-mobile"
    />
  );
}
