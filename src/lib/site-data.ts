export const nav = [
  { label: "Freelances", href: "/about" },
  {
    label: "Expertises",
    href: "/expertises",
    children: [
      { label: "Stratégie", href: "/strategie" },
      { label: "Création", href: "/creation" },
      { label: "SEO, IA & Acquisition", href: "/seo-ia-acquisition" },
      { label: "Social Media", href: "/social-media" },
      { label: "UX / Webdesign", href: "/ux-webdesign" },
      { label: "Développement Web", href: "/developpementweb" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  email: "hello@collectifsauvage.fr",
  phone: "+33 6 77 93 67 85",
  address: "Olatu, 100 avenue de l'Adour, 64600 Anglet",
};

export type Expertise = {
  slug: string;
  title: string;
  tagline: string;
  leitmotiv: string;
  sections: { title: string; body: string }[];
  team: { name: string; role: string }[];
};

export const expertises: Expertise[] = [
  {
    slug: "strategie",
    title: "Stratégie",
    tagline: "On cadre l'idée avant de la shooter",
    leitmotiv: "On cadre l'idée avant de la shooter",
    sections: [
      {
        title: "Workshops",
        body: "Des ateliers participatifs où on aligne les cerveaux, on décloisonne les idées, basés sur le design thinking.",
      },
      {
        title: "Stratégie de marque",
        body: "Clarification du positionnement et des valeurs de votre marque.",
      },
      {
        title: "Stratégie d'acquisition",
        body: "Optimisation des leviers (SEO, SEA, réseaux sociaux) pour la conversion.",
      },
      {
        title: "Stratégie de contenu",
        body: "Définition des sujets, formats et canaux de communication.",
      },
      {
        title: "Stratégie de communication",
        body: "Structuration des messages et du calendrier éditorial.",
      },
      {
        title: "Stratégie UX",
        body: "Conception de parcours utilisateurs, testés sur le terrain.",
      },
    ],
    team: [
      { name: "Victoire Ecoiffier", role: "Stratégie de marque" },
      { name: "Kathleen Van den Bril", role: "Stratégie social media" },
      { name: "Zoë Zadouroff", role: "Stratégie & branding" },
      { name: "Romain Ferrand", role: "Stratégie de contenu" },
      { name: "Apolline Rouzé", role: "Stratégie UX" },
    ],
  },
  {
    slug: "creation",
    title: "Création",
    tagline: "La création est au cœur de ce qu'on fait",
    leitmotiv: "La création c'est des risques mesurés, pas des décisions molles",
    sections: [
      { title: "Illustration", body: "Traduction d'idées en images fortes : croquis, vectoriel, créations originales." },
      { title: "Motion Design", body: "Animations de logos, vidéos explicatives, storytelling animé." },
      { title: "UX & Webdesign", body: "Interfaces ergonomiques, responsive et soignées." },
      { title: "Vidéo", body: "Conception et réalisation adaptées aux formats et aux publics." },
      { title: "Identité & Branding", body: "Structuration de nom, ton, logo, territoire graphique." },
      { title: "Photographie", body: "Reportages, portraits, shootings produit avec une approche sur-mesure." },
      { title: "Contenu", body: "Rédaction éditoriale et podcasts avec précision narrative." },
      { title: "Graphisme", body: "Supports print et digitaux au service du message et de l'identité." },
      { title: "Graphisme & DA IA", body: "Intégration d'outils génératifs avec un regard humain." },
    ],
    team: [
      { name: "Cécile Lehoux", role: "Illustration" },
      { name: "Nicolas Bouriette", role: "Motion Design" },
      { name: "Marie Lainé", role: "Identité & branding" },
      { name: "Frédéric Lebrault", role: "Photographie" },
      { name: "Jeanne Beuvin", role: "Contenu" },
      { name: "Emilien Geney", role: "Graphisme" },
    ],
  },
  {
    slug: "seo-ia-acquisition",
    title: "SEO, IA & Acquisition",
    tagline: "Faire de la pub en ligne, c'est facile. En faire qui sert vraiment vos objectifs, c'est un peu plus subtil.",
    leitmotiv: "Investir oui, gaspiller non",
    sections: [
      { title: "Acquisition web & marketing digital", body: "Campagnes multicanaux centrées sur les métriques pertinentes (coût d'acquisition, conversion, rétention), landing pages optimisées et tracking utilisateur." },
      { title: "Campagnes Ads", body: "Google Ads, Meta Ads et Pinterest Ads : structuration, création, tracking et tests A/B." },
      { title: "Automation & E-commerce", body: "Scénarios automatisés, segmentation, optimisation des fiches produits et tunnels d'achat." },
      { title: "IA et Automatisations", body: "L'IA pour éliminer les tâches répétitives et libérer du temps pour la valeur ajoutée." },
      { title: "Référencement Naturel (SEO)", body: "Contenu optimisé, technique (performance, Core Web Vitals) et maillage." },
    ],
    team: [
      { name: "Marie Lainé", role: "SEO / Pinterest" },
      { name: "Arnaud Poullin", role: "SEA / Acquisition / Marketing automation" },
      { name: "Thomas Escot", role: "SEO" },
      { name: "Kathleen Van den Bril", role: "Social Media Manager" },
      { name: "Lionel Rocques", role: "IA & Automatisation" },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media",
    tagline: "Les bons contenus trouvent leur place. Les grandes idées trouvent leur public.",
    leitmotiv: "Des réseaux qui font du lien, pas juste du bruit.",
    sections: [
      { title: "Création de contenu", body: "Shootings photo, vidéos, illustrations, motion et podcasts avec une direction artistique affirmée." },
      { title: "Community management", body: "Animation quotidienne : posts, réponses aux commentaires, modération, storytelling live." },
      { title: "Multi-plateformes, multi-formats", body: "Adaptation du contenu selon Instagram, LinkedIn, TikTok, Pinterest et les autres canaux." },
      { title: "Stratégie de contenu", body: "Structuration des piliers éditoriaux alignés avec vos objectifs business et votre personnalité de marque." },
    ],
    team: [
      { name: "Kathleen Van den Bril", role: "Social Media Manager" },
      { name: "Romain Ferrand", role: "Rédacteur / Podcasts" },
    ],
  },
  {
    slug: "ux-webdesign",
    title: "UX / Webdesign",
    tagline: "L'UX pour guider, le design pour exprimer. Le site, pour convaincre.",
    leitmotiv: "Pensé pour l'utilisateur, nourri par ta marque, designé pour performer",
    sections: [
      { title: "UI", body: "Une interface cohérente et des interactions naturelles, sans surcharge visuelle." },
      { title: "UX Writing", body: "Chaque mot compte : transformer un formulaire ennuyeux en convertisseur efficace." },
      { title: "Webdesign", body: "Déployer votre univers graphique sur l'ensemble du site, premier contact avec la marque." },
      { title: "Stratégie UX", body: "Usage, navigation fluide et hiérarchie claire pour réduire les frictions." },
    ],
    team: [
      { name: "Apolline Rouzé", role: "UX Writer" },
      { name: "Nicolas Farolfi", role: "UI / Webdesign" },
      { name: "Sylvain Nascimento", role: "UX / UI" },
    ],
  },
  {
    slug: "developpementweb",
    title: "Développement Web",
    tagline: "On ne développe pas pour faire joli, on développe pour faire sens",
    leitmotiv: "Quand ça marche bien, ça ne se voit pas",
    sections: [
      { title: "WordPress personnalisé", body: "Développement sur mesure, sans accumulation de plugins." },
      { title: "Polyvalence technique", body: "HTML/CSS/JS, frameworks modernes, backend Python / Node.js / PHP." },
      { title: "E-commerce", body: "WooCommerce et Shopify optimisés pour la conversion commerciale." },
      { title: "Applications mobiles", body: "iOS / Android via Ionic, Capacitor, Cordova." },
      { title: "Sites vitrines", body: "Des plateformes gérables en autonomie, sans dépendance technique." },
      { title: "Solutions no-code", body: "Webflow, Bubble.io pour lancer rapidement." },
    ],
    team: [
      { name: "Sylvain Nascimento", role: "Web Dev / UI / UX" },
      { name: "Quentin Roussel", role: "Développement Web" },
      { name: "Nicolas Farolfi", role: "Développement Web" },
    ],
  },
];
