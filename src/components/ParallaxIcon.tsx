'use client';
import { useEffect, useRef } from 'react';

const SPEEDS = [
  { y: 0.04,  x: 0.02  },
  { y: -0.03, x: -0.025 },
  { y: 0.05,  x: -0.015 },
  { y: -0.035, x: 0.025 },
  { y: 0.025, x: 0.03  },
  { y: -0.045, x: -0.02 },
];

interface Props { index?: number; children: React.ReactNode; }

export default function ParallaxIcon({ index = 0, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const i = typeof index === 'number' && isFinite(index) ? index : 0;
  const speed = SPEEDS[i % SPEEDS.length] ?? SPEEDS[0];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId: number;

    const sy = speed.y;
    const sx = speed.x;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const centerInView = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate(${centerInView * sx}px, ${centerInView * sy}px)`;
    };

    const onScroll = () => { rafId = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: 'absolute', top: '-10%', left: '-10%', right: '-10%', bottom: '-10%' }}
    >
      {children}
    </div>
  );
}
