# Workflow de développement (HITL)

Ce document décrit le processus complet pour continuer le développement du site Collectif Sauvage, de l'édition du code jusqu'au déploiement en production. Il est écrit pour que n'importe qui (ou n'importe quelle session Claude) puisse reprendre le projet en repartant de zéro à tout moment.

## Vue d'ensemble

Squarespace (site source, contenu/design de référence) → Claude Code (édition du code Next.js) → GitHub (`askvictoire-commits/collectif-sauvage-site`) → Vercel (déploiement automatique sur push).

Le processus est HITL (Human In The Loop) à chaque étape : Claude ne pousse jamais directement sur GitHub depuis le sandbox cloud (pas d'accès), et Victoire valide chaque changement visuellement sur le site déployé avant de passer à la suite.

## Étapes

1. **Édition du code** — dans un sandbox cloud Claude Code, sur une copie locale du repo (`git clone` du dépôt GitHub).
2. **Vérification locale** — avant tout envoi : `npx tsc --noEmit` (typecheck) puis `npm run build` (build complet). Ne jamais envoyer du code qui ne build pas.
3. **Commit local** dans le sandbox, puis export en archive (`git archive` en `.tar.gz` numéroté, ex. `v26.tar.gz`).
4. **Transfert vers le Mac** — l'archive est envoyée à Victoire (via la conversation), puis extraite dans ce dossier (`~/Desktop/Site Collectif sauvage/`) qui est le clone git de référence sur son ordinateur.
5. **Push GitHub** — depuis le Mac (le sandbox cloud n'a pas d'accès direct à GitHub/Vercel) :
   ```bash
   git add -A
   git commit -m "..."
   git push
   ```
6. **Déploiement automatique** — le push déclenche un déploiement Vercel (plan gratuit) sur le dépôt lié.
7. **Vérification en production** — Victoire inspecte elle-même le rendu sur l'URL de déploiement (elle ne partage pas cette URL avec Claude — ne pas la redemander) et donne son feedback : texte, capture d'écran, ou valeurs CSS exactes copiées depuis l'inspecteur du navigateur (`Family / Style / Weight / Color / Size / Line Height`).

## Méthodologie de vérification visuelle

Fidélité pixel-perfect au site Squarespace source (https://www.collectifsauvage.com/), jamais une réinterprétation. Deux méthodes, dans l'ordre de préférence de Victoire :
- **Inspection directe par Victoire** du site live Squarespace (valeurs copiées depuis l'inspecteur du navigateur).
- **Mesure live par Claude** via un outil de navigateur (`getBoundingClientRect` + `getComputedStyle`) quand une capture d'écran ne suffit pas — cibler précisément un élément (par `alt` ou `textContent`), jamais un sélecteur générique qui risquerait de matcher un élément caché ou dupliqué.

Il n'existe pas de maquette Figma du layout global (le site est maquetté directement dans le template Squarespace).

## Assets et design system

Les visuels réels (photos, logos, ellipses décoratives, pictogrammes) ne sont jamais reconstruits à la main : ils viennent du design system versionné dans `design-system/` à la racine de ce repo (voir `design-system/README.md`), lui-même exporté depuis le Drive partagé "Collectif Sauvage DRIVE / 11_Website + Insta". Avant de créer un nouvel asset, toujours vérifier s'il n'existe pas déjà dans `design-system/project/assets/`.

## Pour repartir de zéro

Si ce projet doit être repris par quelqu'un d'autre ou recommencé proprement :
1. Ce repo GitHub (`askvictoire-commits/collectif-sauvage-site`) est la seule source de vérité : code + design system versionné ensemble.
2. `git clone` le repo → tout est dedans (code Next.js dans `src/`, design system dans `design-system/`).
3. Lire `design-system/project/README.md` (le brand book) avant de toucher au style.
4. Reprendre ce fichier (`WORKFLOW.md`) pour le processus de développement/déploiement.
