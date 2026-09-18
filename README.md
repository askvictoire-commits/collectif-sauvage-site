# Collectif Sauvage — site (Next.js)

Duplication/migration du site [collectifsauvage.com](https://www.collectifsauvage.com/) (Squarespace) vers Next.js, déployé sur Vercel. Fidélité visuelle pixel-perfect au site source, contenu inclus. Ce repo sert aussi de base pour ajouter de nouvelles landing pages dans le même système visuel.

## Structure du repo

- `src/` — le code du site Next.js (pages, composants, données).
- `public/` — assets publics servis par Next.js.
- `design-system/` — **export complet et versionné du design system** (brand book, tokens, composants documentés, tous les visuels réels : équipe, projets, logos, pictogrammes, ellipses). C'est la référence pour tout ajout ou modification visuelle — voir `design-system/README.md`.
- `WORKFLOW.md` — le processus complet de développement et déploiement (HITL), à lire avant de reprendre le projet.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Avant tout commit : `npx tsc --noEmit` puis `npm run build` (voir `WORKFLOW.md` pour le processus complet).

## Déploiement

Déployé automatiquement sur Vercel à chaque push sur `main`. Voir `WORKFLOW.md` pour le détail du pipeline (sandbox Claude Code → build/vérification → push GitHub → déploiement Vercel → vérification visuelle).
