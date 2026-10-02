'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Reveal on scroll appliqué à tout le site (monté une fois dans layout.tsx).
 * Les blocs de contenu (titres, textes, images, listes, formulaires, boutons…) apparaissent
 * en fondu + légère montée quand ils entrent dans l'écran, avec un petit décalage entre voisins.
 *
 * - Utilise la propriété CSS `translate` (pas `transform`) pour ne pas écraser les transformations existantes.
 * - Ce qui est déjà visible au chargement n'est pas masqué (pas de clignotement du hero).
 * - Ignorés : header, éléments en position absolute/fixed (décors, ellipses, images `fill`),
 *   marquees, carrousels, et tout ce qui est dans [data-no-reveal].
 * - Forcer un bloc précis : ajouter `data-reveal` dessus.
 * - Désactivé si « réduire les animations ».
 */
const SELECTOR = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote',
  'ul', 'ol', 'dl', 'form', 'figure', 'picture', 'img', 'video', 'iframe',
  'a[class*="rounded-full"]', 'button', '[data-reveal]',
].join(',');

const EXCLUDE = 'header, [data-no-reveal], .animate-marquee, .overflow-x-auto';
const STAGGER_MS = 90;
const MAX_STAGGER = 5;

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const scope = document.querySelectorAll<HTMLElement>('main, footer');
    const picked: HTMLElement[] = [];
    const vh = window.innerHeight;

    scope.forEach((root) => {
      root.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.closest(EXCLUDE)) return;
        if (el.hasAttribute('data-sr')) return;
        // un seul niveau d'animation : on saute si un parent est déjà animé
        if (picked.some((p) => p.contains(el))) return;
        const cs = getComputedStyle(el);
        if (cs.position === 'absolute' || cs.position === 'fixed') return;
        if (cs.display === 'none' || cs.visibility === 'hidden') return;
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return;
        if (r.top < vh * 0.9 && r.bottom > 0) return; // déjà visible au chargement
        picked.push(el);
      });
    });

    if (!picked.length) return;
    picked.forEach((el) => el.setAttribute('data-sr', ''));

    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement)
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top || a.getBoundingClientRect().left - b.getBoundingClientRect().left);
        entering.forEach((el, i) => {
          el.style.transitionDelay = `${Math.min(i, MAX_STAGGER) * STAGGER_MS}ms`;
          el.setAttribute('data-sr', 'in');
          io.unobserve(el);
          // on rend la main aux transitions propres de l'élément une fois l'apparition finie
          window.setTimeout(() => {
            el.removeAttribute('data-sr');
            el.style.transitionDelay = '';
          }, 1200 + Math.min(i, MAX_STAGGER) * STAGGER_MS);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    picked.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      picked.forEach((el) => {
        el.removeAttribute('data-sr');
        el.style.transitionDelay = '';
      });
    };
  }, [pathname]);

  return null;
}
