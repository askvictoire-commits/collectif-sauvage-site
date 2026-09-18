# Button

Bouton pilule à deux états : contour au repos, rempli au survol — jamais l'inverse, et jamais rempli en permanence. Confirmé par mesure directe des styles calculés au survol sur le site source (pas une supposition).

Le consommateur fournit le libellé (toujours un verbe d'action court : "Découvrir", "Parlons en ensemble", "Envoyer") et choisit une variante de couleur selon le contexte.

## Proportions (mesure exacte sur le site source)

Un bouton autonome (pas dans une rangée de plusieurs boutons alignés) fait `51px` de haut pour du texte à 16px : padding vertical `space-2` (16px), padding horizontal `20.8px`, `radius-pill` (300px), bordure `1px`. **Ne jamais réduire ce padding vertical à 0** — une version précédente de ce système le faisait par erreur, ce qui donnait un bouton plat et trop fin par rapport au site source.

Quand plusieurs boutons sont alignés côte à côte dans la même rangée (ex. le CTA final "Parlons en ensemble" / "Découvrir l'équipe"), Squarespace les étire pour qu'ils partagent tous la hauteur du plus grand élément de la rangée — ce n'est pas une densité de bouton différente, c'est un comportement de la rangée : reproduire ça avec un conteneur flex en `align-items: stretch` plutôt qu'avec un second jeu de boutons plus petits.

## État par défaut (contour)

- **primary** — contour et texte en `white`. Choix par défaut pour la grande majorité des CTA de la home ("Découvrir nos frees", "Parlons en ensemble", "Découvrir l'équipe").
- **secondary** — contour et texte dans la couleur d'accent de la page : `pink` sur la home et les pages globales ("Découvrez tous nos talents"), `periwinkle` sur la page Freelances/`about` ("Nous rejoindre") — la couleur suit toujours l'accent déjà utilisé ailleurs sur cette page.
- **submit** — contour et texte en `pink`, mêmes proportions. Réservé aux boutons de soumission de formulaire ("Envoyer").

## État au survol (rempli) — mesuré, pas déduit

Au survol, le fond se remplit de la couleur du contour, et le texte bascule pour rester lisible :
- **primary** (contour `white`) → fond `white`, texte `pink`. Jamais texte `ink-900` : c'est bien `pink` qui sert de texte de contraste ici, y compris sur fond blanc.
- **secondary** (contour `pink` ou `periwinkle`) → fond de la couleur du contour, texte `white`.

La bordure ne change jamais de couleur, seul le fond et le texte s'inversent. Transition rapide (~0,1s), pas d'effet de zoom ni de déplacement.

## À faire / à ne pas faire

Toujours `radius-pill` (300px). Au repos, toujours transparent en fond — le remplissage n'apparaît qu'au survol, jamais par défaut. Le texte reste en `body` (Epilogue 16px, 400) — jamais en `display` (Anton). Ne jamais introduire une quatrième couleur de contour : rester sur `white` / `pink` / `periwinkle` selon la page et le rôle.
