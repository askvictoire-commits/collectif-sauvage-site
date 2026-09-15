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

export type LookingFor = {
  need: string;
  body: string;
  freelances: { name: string; href: string }[];
};

export const lookingFor: LookingFor[] = [
  {
    need: "Un site qui tourne pour dormir tranquille",
    body: "Un site web qui tourne : Quentin et Sylvain développent du solide, Apolline affine l'expérience et les mots justes, Zoë, Victoire et Jeanne dessinent des interfaces qui font la différence. Résultat : un site rapide, beau et pensé pour vos utilisateurs.",
    freelances: [
      { name: "Quentin", href: "https://quentinroussel.fr/" },
      { name: "Sylvain", href: "https://www.linkedin.com/in/sylvainnascimento/" },
      { name: "Apolline", href: "https://www.linkedin.com/in/apolline-rouz%C3%A9-6050b873/" },
      { name: "Zoë", href: "https://www.salty-event.com/" },
      { name: "Victoire", href: "https://www.linkedin.com/in/victoireecoiffier/" },
      { name: "Jeanne", href: "https://lesfillesdusurf.com/" },
    ],
  },
  {
    need: "Arriver en première page sur Google",
    body: "Arriver en première page sur Google, c'est bien plus que cocher des cases : c'est être trouvé au bon moment par les bonnes personnes. Thomas et Marie défrichent les terrains du SEO : Thomas, expert et formateur, vous aide à poser les bonnes fondations, pendant que Marie, experte Pinterest et SEO, booste votre visibilité jusque dans les moindres recoins du web.",
    freelances: [
      { name: "Thomas", href: "https://thomas-escot.fr/" },
      { name: "Marie", href: "https://www.linkedin.com/in/marie-lain%C3%A9/" },
    ],
  },
  {
    need: "De la réflexion avant l'action",
    body: "On réfléchit avant d'agir : Victoire, Zoë, Kathleen, Arnaud et Romain mènent la danse côté stratégie, chacun avec ses outils et ses terrains de jeu, pour coller au plus près des besoins des clients.",
    freelances: [
      { name: "Victoire", href: "https://www.linkedin.com/in/victoireecoiffier/" },
      { name: "Zoë", href: "https://www.salty-event.com/" },
      { name: "Kathleen", href: "https://www.linkedin.com/in/kathleen-van-den-bril-4a395115/" },
      { name: "Arnaud", href: "https://e-flow.io/" },
      { name: "Romain", href: "https://www.linkedin.com/in/romainferrand/" },
    ],
  },
  {
    need: "Une identité qui vous ressemble",
    body: "Une identité qui vous ressemble : du logo à l'univers graphique étendu, chacun travaille dans son style et sur son terrain. Zoë, Victoire, Jeanne et Emilien mettent leur patte personnelle sur vos projets, pour créer des identités de marque singulières et sur-mesure.",
    freelances: [
      { name: "Zoë", href: "https://www.salty-event.com/" },
      { name: "Victoire", href: "https://www.linkedin.com/in/victoireecoiffier/" },
      { name: "Jeanne", href: "https://lesfillesdusurf.com/" },
      { name: "Emilien", href: "https://www.linkedin.com/in/emiliengeney/" },
    ],
  },
  {
    need: "Un contenu photo & vidéo qui fait rêver",
    body: "Studio, outdoor, underwater, motion, lifestyle ou produit. Pierre, Nicolas et Fred couvrent tous les terrains pour créer des images qui claquent et qui marquent. Décors grandioses, détails soignés ou animations inspirantes, ils transforment vos idées en visuels percutants.",
    freelances: [
      { name: "Pierre", href: "https://www.pierrefrechou.com/" },
      { name: "Nicolas", href: "https://www.nicolas-bouriette.com/" },
      { name: "Fred", href: "https://g-3.studio/" },
    ],
  },
  {
    need: "Du Social Media qui envoie",
    body: "Du social media qui envoie : Kathleen pilote la stratégie et l'animation quotidienne de vos réseaux, alors que Romain affine la stratégie de contenu pour capter l'attention et donner du sens à chaque publication.",
    freelances: [
      { name: "Kathleen", href: "https://www.linkedin.com/in/kathleen-van-den-bril-4a395115/" },
      { name: "Romain", href: "https://www.linkedin.com/in/romainferrand/" },
    ],
  },
  {
    need: "Des pubs qui se voient",
    body: "Côté création, Jeanne, Zoë, Victoire et Emilien imaginent des visuels percutants et des messages qui accrochent. Côté achat média, Arnaud pilote vos campagnes Meta, Google et Pinterest, pendant que Kathleen affine vos ciblages et vos budgets social media. Chacun dans son domaine pour des campagnes qui claquent.",
    freelances: [
      { name: "Jeanne", href: "https://lesfillesdusurf.com/" },
      { name: "Zoë", href: "https://www.salty-event.com/" },
      { name: "Victoire", href: "https://www.linkedin.com/in/victoireecoiffier/" },
      { name: "Emilien", href: "https://www.linkedin.com/in/emiliengeney/" },
      { name: "Arnaud", href: "https://e-flow.io/" },
      { name: "Kathleen", href: "https://www.linkedin.com/in/kathleen-van-den-bril-4a395115/" },
    ],
  },
  {
    need: "Un podcast pour raconter votre histoire",
    body: "Un podcast pour raconter votre histoire : Romain capte vos récits et donne vie à vos idées au micro. Journaliste et réalisateur de podcasts, il construit des formats sur-mesure pour faire entendre votre voix et toucher votre audience.",
    freelances: [{ name: "Romain", href: "https://www.linkedin.com/in/romainferrand/" }],
  },
  {
    need: "Un événement aux petits oignons",
    body: "Zoë conçoit et pilote des événements tout terrain, aussi bien dans le sport de haut niveau que des formats B2B comme le Surf Summit. Emilien, event manager et régisseur, est spécialisé dans les univers sport et outdoor. Deux expertises complémentaires, chacun dans son élément, pour créer des expériences fortes et bien ficelées.",
    freelances: [
      { name: "Zoë", href: "https://www.salty-event.com/" },
      { name: "Emilien", href: "https://www.linkedin.com/in/emiliengeney/" },
    ],
  },
  {
    need: "IA et créativité : libérer du temps, amplifier vos idées",
    body: "Lionel met en place des automatisations IA pour fluidifier votre organisation et réduire les tâches répétitives. Victoire s'appuie sur l'IA comme levier créatif afin de donner plus de force et de cohérence aux marques. L'IA optimise et prépare le terrain, mais c'est l'humain qui éclaire, incarne et fait la différence.",
    freelances: [
      { name: "Lionel", href: "https://mister-anderson.ai/" },
      { name: "Victoire", href: "https://www.linkedin.com/in/victoireecoiffier/" },
    ],
  },
];

export type Expertise = {
  slug: string;
  icon: string;
  title: string;
  heroTitle: string;
  heroSubtitle?: string;
  banner: string;
  sections: { title: string; body: string }[];
  team: { name: string; role: string; href?: string; photo?: string }[];
};

export const expertises: Expertise[] = [
  {
    slug: "strategie",
    icon: "/pictos/strategie.svg",
    title: "Stratégie",
    heroTitle: "Pas d'offre standard ni de formules magiques chez nous.",
    heroSubtitle:
      "Chaque stratégie est le fruit d'années de pratique, d'expérimentations, et d'outils éprouvés en consulting et design thinking.",
    banner: "On cadre l'idée avant de la shooter",
    sections: [
      {
        title: "Workshops",
        body: "Des ateliers participatifs où on aligne les cerveaux, on décloisonne les idées, et on fait émerger des solutions concrètes et activables : Pensés sur mesure, nos workshops s'appuient sur des méthodologies design thinking pour combiner réflexion, créativité et efficacité. Résultat : des idées concrètes, portées par l'équipe et prêtes à passer à l'action.",
      },
      {
        title: "Stratégie de marque",
        body: "On clarifie ce que vous êtes et ce que vous voulez devenir. On définit votre positionnement, vos valeurs, votre promesse et votre personnalité de marque, pour que votre image soit cohérente et percutante à chaque point de contact.",
      },
      {
        title: "Stratégie d'acquisition",
        body: "Ici, on se concentre sur la performance. On identifie les leviers les plus efficaces (SEO, SEA, social ads, etc.), on optimise les parcours pour maximiser la conversion et on pilote vos investissements média pour booster votre visibilité et générer du trafic qualifié.",
      },
      {
        title: "Stratégie de contenu",
        body: "On pense vos prises de parole pour qu'elles résonnent avec votre audience. Quels sujets traiter ? Quels formats adopter ? Quels canaux activer ? L'objectif : créer des contenus qui nourrissent la relation avec vos clients et renforcent votre expertise.",
      },
      {
        title: "Stratégie de communication",
        body: "On structure votre communication globale pour que vos messages soient clairs, alignés et mémorables. Choix des canaux, ton de voix, calendrier éditorial : on vous aide à orchestrer vos prises de parole pour toucher juste, au bon moment.",
      },
      {
        title: "Stratégie UX",
        body: "On conçoit des parcours utilisateurs clairs et efficaces pour vos sites, apps ou plateformes. Audit des usages, wireframes, prototypes, tests terrain : on challenge les idées, on valide avec du concret, on collabore avec les devs pour que l'intention survive jusqu'en prod. Résultat : une expérience fluide, intuitive et utile — qui donne envie de cliquer, de rester, et de revenir.",
      },
    ],
    team: [
      {
        name: "Victoire Ecoiffier",
        role: "Workshop / Stratégie de marque / Stratégie de communication",
        href: "https://www.linkedin.com/in/victoireecoiffier/",
        photo: "/team/victoire-ecoiffier.png",
      },
      {
        name: "Kathleen Van den Bril",
        role: "Stratégie Social Media / Social Media Manager",
        href: "https://www.linkedin.com/in/kathleen-van-den-bril-4a395115/",
        photo: "/team/kathleen-van-den-bril.png",
      },
      {
        name: "Zoë Zadouroff",
        role: "Stratégie de communication",
        href: "https://www.salty-event.com/",
        photo: "/team/zoe-zadouroff.png",
      },
      {
        name: "Romain Ferrand",
        role: "Stratégie de contenu / Journaliste / Réalisateur de podcast",
        href: "https://www.linkedin.com/in/romainferrand/",
        photo: "/team/romain-ferrand.png",
      },
      {
        name: "Apolline Rouzé",
        role: "UX Writer",
        href: "https://www.linkedin.com/in/apolline-rouz%C3%A9-6050b873/",
        photo: "/team/apolline-rouze.png",
      },
    ],
  },
  {
    slug: "creation",
    icon: "/pictos/creation.svg",
    title: "Création",
    heroTitle: "La création est au cœur de ce qu'on fait",
    banner: "La création c'est des risques mesurés, pas des décisions molles",
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
    icon: "/pictos/seo.svg",
    title: "SEO, IA & Acquisition",
    heroTitle: "Faire de la pub en ligne, c'est facile. En faire qui sert vraiment vos objectifs, c'est un peu plus subtil.",
    banner: "Investir oui, gaspiller non",
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
    icon: "/pictos/social.svg",
    title: "Social Media",
    heroTitle: "Les bons contenus trouvent leur place. Les grandes idées trouvent leur public.",
    banner: "Des réseaux qui font du lien, pas juste du bruit.",
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
    icon: "/pictos/ux.svg",
    title: "UX / Webdesign",
    heroTitle: "L'UX pour guider, le design pour exprimer. Le site, pour convaincre.",
    banner: "Pensé pour l'utilisateur, nourri par ta marque, designé pour performer",
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
    icon: "/pictos/webdev.svg",
    title: "Développement Web",
    heroTitle: "On ne développe pas pour faire joli, on développe pour faire sens",
    banner: "Quand ça marche bien, ça ne se voit pas",
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

export type TeamMember = {
  name: string;
  role: string;
  href?: string;
  photo?: string;
};

export const team: TeamMember[] = [
  { name: "Zoë Zadouroff", role: "Event Manager / Design / Webdesign", href: "https://www.salty-event.com/", photo: "/team/zoe-zadouroff.png" },
  { name: "Thomas Escot", role: "Consultant SEO", href: "https://thomas-escot.fr/", photo: "/team/thomas-escot.png" },
  { name: "Nicolas Bouriette", role: "Photographe", href: "https://www.nicolas-bouriette.com/", photo: "/team/nicolas-bouriette.png" },
  { name: "Frédéric Lebrault", role: "Motion design / Design", href: "https://g-3.studio/", photo: "/team/frederic-lebrault.png" },
  { name: "Victoire Ecoiffier", role: "Stratégie / Identité / Webdesign", href: "https://www.linkedin.com/in/victoireecoiffier/", photo: "/team/victoire-ecoiffier.png" },
  { name: "Jeanne Beuvin", role: "Illustration / Design", href: "https://lesfillesdusurf.com/", photo: "/team/jeanne-beuvin.png" },
  { name: "Emilien Geney", role: "Event manager / Design", href: "https://www.linkedin.com/in/emiliengeney/", photo: "/team/emilien-geney.png" },
  { name: "Cécile Lehoux", role: "Développeuse web et co-fondatrice", href: "https://www.linkedin.com/in/c%C3%A9cile-lehoux-363a6094/", photo: "/team/cecile-lehoux.png" },
  { name: "Marie Lainé", role: "Consultant SEO et Pinterest manager", href: "https://www.laminuteseo.fr/", photo: "/team/marie-laine.png" },
  { name: "Sylvain Nascimento", role: "Développeur web", href: "https://www.linkedin.com/in/sylvainnascimento/", photo: "/team/sylvain-nascimento.png" },
  { name: "Romain Ferrand", role: "Journaliste / Stratégie contenu / Podcasts", href: "https://www.linkedin.com/in/romainferrand/", photo: "/team/romain-ferrand.png" },
  { name: "Lionel Rocques", role: "Consultant IA & Automatisations", href: "https://mister-anderson.ai/", photo: "/team/lionel-rocques.png" },
  { name: "Apolline Rouzé", role: "UX Writer", href: "https://www.linkedin.com/in/apolline-rouz%C3%A9-6050b873/", photo: "/team/apolline-rouze.png" },
  { name: "Nicolas Farolfi", role: "Développeur web", href: "https://www.nico-pro.com/", photo: "/team/nicolas-farolfi.png" },
  { name: "Pierre Frechou", role: "Filmmaker / Photographe / Drone", href: "https://www.pierrefrechou.com/", photo: "/team/pierre-frechou.png" },
  { name: "Quentin Roussel", role: "Développeur web", href: "https://quentinroussel.fr/", photo: "/team/quentin-roussel.png" },
  { name: "Arnaud Poullin", role: "SEA / Acquisition / Marketing automation", href: "https://e-flow.io/", photo: "/team/arnaud-poullin.png" },
  { name: "Kathleen Van den Bril", role: "Social Media Manager", href: "https://www.linkedin.com/in/kathleen-van-den-bril-4a395115/", photo: "/team/kathleen-van-den-bril.png" },
  { name: "Google", role: "RH / Chief Happiness", photo: "/team/google.png" },
  { name: "Valentine Rolaz", role: "Cheffe de projets", href: "https://valentinerolaz.squarespace.com/", photo: undefined },
];

export type Project = {
  name: string;
  tags: string;
};

export const projects: Project[] = [
  { name: "Anglet Côte Basque", tags: "Stratégie / Design / Vidéo / Edition / Rédaction" },
  { name: "Baiona Marine", tags: "Identité / Webdesign / Développement web / SEO" },
  { name: "Eurosima Surf Summit", tags: "Événementiel / Design / Gestion de projet / Création de contenu" },
  { name: "Decathlon", tags: "Photo produit et packshot" },
  { name: "FFHG", tags: "Design / Motion design" },
  { name: "Oxbow", tags: "Stratégie / Gestion de projet / Design / Management" },
  { name: "ISA Surf", tags: "Événementiel" },
  { name: "FFSurf", tags: "Stratégie / Identité" },
  { name: "La Locomotive & Le Magnéto", tags: "Stratégie / Identité / Webdesign / Développement web" },
  { name: "GIP Skate Parks de France", tags: "Identité / Webdesign / Développement web" },
];

export const brandNames = [
  "EuroSIMA",
  "Oxbow",
  "Touring Pyrénées",
  "Full Life",
  "Decathlon",
  "Red Bull",
  "Quiksilver",
  "FFHG",
  "FFSurf",
  "ISA Surf",
  "GIP Skate Parks de France",
];
