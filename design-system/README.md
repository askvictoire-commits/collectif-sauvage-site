# Design System Collectif Sauvage — export

Ce dossier est une copie complète et autonome du design system vivant du projet, exporté depuis son artifact Claude :
**https://claude.ai/artifact/QCNdUg5NvZDkKFX1eN8Bxd**

C'est la source de vérité pour tout ce qui est visuel (couleurs, typo, espacements, composants, images réelles) : que ce soit pour continuer le développement du site avec Claude Code, pour briefer une nouvelle personne, ou pour repartir de zéro si besoin, tout ce qu'il faut est ici — pas besoin d'aller récupérer quoi que ce soit ailleurs (Squarespace, Drive) pour la partie déjà validée.

## Ce que contient `project/`

- `README.md` — le brand book complet : ton éditorial, palette (5 couleurs + 10 thèmes de section Squarespace), typographie (Anton + Epilogue), formes/rayons, espacement/conteneur, imagerie, mise en page image+texte (5 gabarits), animations, iconographie, composants.
- `tokens.json` — tous les tokens (couleur, typo, spacing, radius, layout) au format structuré, prêt à être consommé par un script (voir plus bas).
- `components/Button/` — le composant bouton documenté (README + `preview.html` avec l'état survolé réel).
- `components/Cover/` — la couverture du système.
- `fonts/Anton-Regular.ttf` — le vrai fichier de police, à ne pas remplacer par un chargement Google Fonts.
- `assets/` — tous les visuels réels du site source, groupés et documentés :
  - `Pictos/` — 6 pictogrammes Expertises (SVG)
  - `Ellipses/` — 4 ellipses décoratives réelles (PNG)
  - `Equipe/` — 19 photos de l'équipe Freelances (PNG couleur, à traiter en N&B/rond en CSS)
  - `Marque/` — les 2 visuels de la section Brand Collaborations
  - `Projets/` — 23 visuels de cas clients (composites photo+logo+accroche)
  - `Logos/` — 22 logos clients individuels en N&B (matière première, pas utilisés isolément sur le site actuel)
  - Chaque sous-dossier a son propre `README.md` avec les règles d'usage spécifiques — à lire avant de réutiliser un asset.
- `design-system.json` — l'index technique du système (mapping nom → fichier), généré par l'artifact ; ne pas éditer à la main, c'est un export.

## Comment ça reste synchronisé

Ce dossier est un **export figé** à la date du `git commit` qui l'a ajouté — pas un lien live vers l'artifact. Si le design system évolue côté artifact (nouveaux assets, tokens ajustés), il faut relancer un export complet et l'ajouter comme nouveau commit ici, pour que le repo git reste la trace fidèle de ce qui a été utilisé à chaque étape du site.

L'artifact lui-même (le lien ci-dessus) reste l'endroit où on continue à l'enrichir de façon interactive (nouveaux composants, nouveaux tokens) avec Claude en Cowork — ce dossier est la version "gelée" qu'on committe pour que le code du site ait toujours une référence stable et versionnée à côté de lui.

## Pour repartir de zéro / dupliquer le projet

Si ce repo doit être reproduit ailleurs (nouveau Mac, nouvelle personne, nouveau projet) :
1. Cloner ce repo GitHub — le design system est déjà dedans, dans ce dossier.
2. Ouvrir `project/README.md` en premier : c'est le brand book qui explique toutes les règles.
3. Pour un nouveau site/landing page, utiliser directement `project/tokens.json` et les visuels de `project/assets/` — ne jamais redessiner un asset qui existe déjà ici.
4. Voir `WORKFLOW.md` à la racine du repo pour le processus complet de développement (Claude Code → build → GitHub → Vercel).
