'use client';
import { useEffect, useRef } from 'react';

/**
 * Fond en parallaxe au scroll : le calque déborde de la section (EXTRA en haut et en bas)
 * et glisse plus lentement que la page. Le décalage est borné à ce débordement,
 * donc les bords du visuel ne sont jamais visibles. Désactivé si « réduire les animations ».
 */
const DEFAULT_EXTRA = 0.25; // débordement haut/bas, en fraction de la hauteur de la section

interface Props { children: React.ReactNode; extra?: number; }

export default function ParallaxBackground({ children, extra = DEFAULT_EXTRA }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    const section = layer?.parentElement;
    if (!layer || !section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 quand la section entre par le bas de l'écran, +1 quand elle sort par le haut
      const range = vh / 2 + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, (vh / 2 - (rect.top + rect.height / 2)) / range));
      const shift = progress * rect.height * extra;
      layer.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
    };
    const onScroll = () => { if (!rafId) rafId = requestAnimationFrame(update); };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [extra]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 will-change-transform"
      style={{ top: `-${extra * 100}%`, bottom: `-${extra * 100}%` }}
    >
      {children}
    </div>
  );
}
