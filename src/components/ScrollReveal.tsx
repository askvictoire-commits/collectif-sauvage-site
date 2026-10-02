'use client';
import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Reveal on scroll appliqué à tout le site (monté une fois dans layout.tsx).
 * Les blocs de contenu (titres, textes, images, listes, formulaires, boutons…) apparaissent
 * en fondu + zoom doux (opacité + scale 0.9 → 1, sans rebond, comme sur Squarespace) quand ils entrent dans l'écran, avec un petit décalage entre voisins.
 *
 * - Utilise la propriété CSS `scale` (pas `transform`) pour ne pas écraser les transformations existantes.
 * - Le haut de page s'anime aussi au chargement (comme Squarespace) : un script dans <head>
 *   masque main/footer (classe `sr-boot`) jusqu'à ce que ce composant prenne le relais → pas de clignotement.
 * - Visuels en `fill` (image absolue qui remplit son parent, avec un alt) : c'est le cadre parent qui s'anime.
 * - Ignorés : header, éléments en position absolute/fixed (décors, ellipses, images `fill`),
 *   marquees, carrousels, titres hero déjà animés (.hero-title), et tout ce qui est dans [data-no-reveal].
 * - Forcer un bloc précis : ajouter `data-reveal` dessus (prioritaire sur les exclusions, ex. cartes du carrousel Projets).
 * - Désactivé si « réduire les animations ».
 */
const SELECTOR = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote',
  'ul', 'ol', 'dl', 'form', 'figure', 'picture', 'img', 'video', 'iframe',
  'a[class*="rounded-full"]', 'button', '[data-reveal]',
].join(',');

const EXCLUDE = 'header, [data-no-reveal], .animate-marquee, .overflow-x-auto, .hero-title';
const STAGGER_MS = 120;
const MAX_STAGGER = 5;

export default function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const unboot = () => root.classList.remove('sr-boot');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return unboot();
    if (!('IntersectionObserver' in window)) return unboot();

    const scope = document.querySelectorAll<HTMLElement>('main, footer');
    const picked: HTMLElement[] = [];

    scope.forEach((zone) => {
      zone.querySelectorAll<HTMLElement>(SELECTOR).forEach((node) => {
        let el = node;
        // image `fill` (absolue, avec alt) → on anime son cadre parent
        if (el.tagName === 'IMG' && getComputedStyle(el).position === 'absolute') {
          const alt = el.getAttribute('alt');
          const parent = el.parentElement;
          if (!alt || el.getAttribute('aria-hidden') === 'true' || !parent) return;
          const a = el.getBoundingClientRect();
          const b = parent.getBoundingClientRect();
          if (Math.abs(a.width - b.width) > 2 || Math.abs(a.height - b.height) > 2) return;
          el = parent;
        }
        if (el.closest(EXCLUDE) && !el.hasAttribute('data-reveal')) return;
        if (el.hasAttribute('data-sr')) return;
        // un seul niveau d'animation : on saute si un parent est déjà animé
        if (picked.some((p) => p.contains(el) || el.contains(p))) return;
        const cs = getComputedStyle(el);
        if (cs.position === 'absolute' || cs.position === 'fixed') return;
        if (cs.display === 'none' || cs.visibility === 'hidden') return;
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return;
        picked.push(el);
      });
    });

    picked.forEach((el) => el.setAttribute('data-sr', ''));
    unboot();
    if (!picked.length) return;

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
          }, 1500 + Math.min(i, MAX_STAGGER) * STAGGER_MS);
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
