// src/components/ParticleField.jsx
import { useEffect, useRef } from 'react';

// Lightweight canvas particle field — connects nearby dots with faint lines,
// drifting slowly. Kept subtle so it reads as atmosphere, not noise.
export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, particles;
    let animationId;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const DENSITY = 9000; // px^2 per particle
    const MAX_DIST = 130;

    function resize() {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      const count = Math.min(90, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / DENSITY));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25 * window.devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * window.devicePixelRatio,
        r: Math.random() * 1.4 + 0.6,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const dist = MAX_DIST * window.devicePixelRatio;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < dist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.18 * (1 - d / dist)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    }

    resize();
    if (!prefersReduced) {
      draw();
    } else {
      // Draw a single static frame for reduced-motion users.
      draw();
      cancelAnimationFrame(animationId);
    }

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
