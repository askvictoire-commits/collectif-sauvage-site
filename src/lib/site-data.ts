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
  /** substring of `title` rendered in the pink accent color on the home page grid */
  titleHighlight: string;
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
    titleHighlight: "égie",
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
    titleHighlight: "Créa",
    heroTitle: "La création est au cœur de ce qu'on fait.",
    heroSubtitle:
      "On accompagne les marques et les projets à poser des bases solides, des messages clairs, et des visuels qui ont du sens.",
    banner: "La création c'est des risques mesurés, pas des décisions molles.",
    sections: [
      {
        title: "Illustration",
        body: "Nos illustrateurs traduisent les idées en images fortes, au service d'une narration ou d'une identité. Qu'il s'agisse de croquis éditoriaux, d'illustration vectorielle, ou de créations originales, l'image devient ici un langage à part entière, capable d'émotion, de clarté ou d'impact.",
      },
      {
        title: "Motion Design",
        body: "Le mouvement donne du relief aux messages. Animation de logo, vidéos explicatives, storytelling animé… Notre motion designer conçoit des contenus dynamiques, lisibles et élégants, capables d'attirer l'attention sans la surcharger.",
      },
      {
        title: "UX & Webdesign",
        body: "Nos designers conçoivent des interfaces fluides, ergonomiques et engageantes. Chaque projet est pensé pour offrir une expérience intuitive, claire, avec une esthétique soignée. Responsive, évolutif et connecté aux enjeux du produit, du contenu et de l'image de marque.",
      },
      {
        title: "Vidéo",
        body: "Nous concevons et réalisons des contenus vidéos adaptés aux formats, aux usages et aux publics. Écriture, réalisation, tournage et post-prod sont assurés par des vidéastes qui allient regard sensible et rigueur technique, avec une attention portée au fond autant qu'à la forme.",
      },
      {
        title: "Identité & Branding",
        body: "Nom, ton, logo, territoire graphique, manifeste… Nous accompagnons les marques dans la structuration de leur identité, avec exigence et finesse. L'objectif : faire émerger une posture claire, singulière, et cohérente sur tous les supports.",
      },
      {
        title: "Photographie",
        body: "Nos photographes travaillent l'image au plus près du sujet : justesse du regard, maîtrise technique, narration par l'image. Reportages, portraits, shootings produit, lifestyle ou en environnement naturel, chaque projet bénéficie d'un traitement sur-mesure.",
      },
      {
        title: "Contenu",
        body: "Trouver le bon ton, poser les bons mots, capter l'attention ou installer une voix de marque : nos rédacteurs et notre réalisateur de podcasts conçoivent des contenus éditoriaux ou audio avec précision et sens. De la réflexion a la réalisation on écrit et on réalise des podcasts qui racontent, qui ancrent, et qui marquent.",
      },
      {
        title: "Graphisme",
        body: "Pensé pour convaincre, structuré pour durer. Le graphisme façonne l'esthétique mais aussi la lisibilité et la hiérarchie des messages. Nous concevons des supports (print ou digitaux) au service du contenu, porteurs d'une intention et fidèles à votre identité.",
      },
      {
        title: "Graphisme & Direction Artistique IA",
        body: "Créer avec l'intelligence artificielle, c'est ouvrir de nouveaux champs visuels tout en gardant le cap créatif. Nous intégrons des outils génératifs dans des démarches encadrées par un regard de direction artistique. Ici, l'IA ne remplace pas le regard humain, elle l'augmente — à condition de savoir la diriger.",
      },
    ],
    team: [
      {
        name: "Jeanne Beuvin",
        role: "Illustration et graphisme",
        href: "https://lesfillesdusurf.com/",
        photo: "/team/jeanne-beuvin.png",
      },
      {
        name: "Victoire Ecoiffier",
        role: "Identité / Webdesign / Graphiste IA",
        href: "https://www.linkedin.com/in/victoireecoiffier/",
        photo: "/team/victoire-ecoiffier.png",
      },
      {
        name: "Zoé Zadouroff",
        role: "Design / Webdesign",
        href: "https://www.salty-event.com/",
        photo: "/team/zoe-zadouroff.png",
      },
      {
        name: "Emilie Geney",
        role: "Design",
        href: "https://www.linkedin.com/in/emiliengeney/",
        photo: "/team/emilien-geney.png",
      },
      {
        name: "Pierre Frechou",
        role: "Filmaker / Photographe / Drône",
        href: "https://www.pierrefrechou.com/",
        photo: "/team/pierre-frechou.png",
      },
      {
        name: "Frederic Lebrault",
        role: "Motion design / Design",
        href: "https://g-3.studio/",
        photo: "/team/frederic-lebrault.png",
      },
      {
        name: "Nicolas Bouriette",
        role: "Photographe",
        href: "https://www.nicolas-bouriette.com/",
        photo: "/team/nicolas-bouriette.png",
      },
      {
        name: "Romain Ferrand",
        role: "Rédacteur / Réalisateur de podcasts",
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
    slug: "seo-ia-acquisition",
    icon: "/pictos/seo.svg",
    title: "SEO, IA & Acquisition",
    titleHighlight: "IA",
    heroTitle:
      "Faire de la pub en ligne, c'est facile. En faire qui sert vraiment vos objectifs, c'est un peu plus subtil.",
    heroSubtitle:
      "On pilote vos campagnes pour qu'elles fassent autre chose que tourner en boucle dans le vide. Et on mets en place les outils nécessaires pour que vous puissiez enfin refaire “juste” votre métier.",
    banner: "Investir oui, gaspiller non.",
    sections: [
      {
        title: "Acquisition web & marketing digital",
        body: "Des campagnes publicitaires qui servent vos objectifs réels. Nous concevons et pilotons des dispositifs d'acquisition multicanaux avec un œil sur les métriques qui comptent : coût d'acquisition, taux de conversion, rétention. Cela inclut la création de landing pages efficaces, la mise en place de tunnels de conversion, la configuration du tracking, l'analyse des parcours utilisateurs et des recommandations d'optimisation. Notre approche est centrée sur l'efficacité, sans négliger la cohérence éditoriale et la clarté de l'expérience pour l'utilisateur final.",
      },
      {
        title: "Campagnes Ads (Google, Meta, Pinterest)",
        body: "Nous concevons, structurons et optimisons vos campagnes publicitaires sur les principales plateformes : Google Ads (réseau de recherche, display, YouTube), Meta Ads (Facebook, Instagram) et Pinterest Ads. Objectif : générer du trafic qualifié, capter l'attention au bon moment, et maximiser les conversions. Nous travaillons sur tout le cycle : définition des audiences, structuration des comptes et des campagnes, création des visuels et des textes, paramétrage du tracking (via Google Tag Manager, Pixel Meta ou Pinterest Tag), A/B testing, analyse des performances et ajustements réguliers. Chaque plateforme a ses spécificités, et on les utilise à bon escient — avec une approche ROIste, mais jamais au détriment de la cohérence de marque.",
      },
      {
        title: "Automation & optimisation e-commerce",
        body: "Automatiser intelligemment, pour mieux personnaliser. Nous mettons en place des scénarios automatisés qui renforcent la relation client : envoi de mails déclenchés (bienvenue, panier abandonné, relance inactive), segmentation de vos bases, scoring comportemental, synchronisation entre outils (CMS, CRM, analytics). Sur la partie e-commerce, nous intervenons sur l'optimisation des fiches produit (titre, description, médias, SEO), des tunnels d'achat (UX, rapidité, clarté), et de la conversion (test A/B, codes promo, fonctionnalités adaptées). Le tout avec une logique d'amélioration continue, alimentée par des données concrètes et une vraie attention portée à l'expérience client.",
      },
      {
        title: "IA et automatisations",
        body: "Arrêtez de perdre du temps à répéter des tâches sans valeur ajoutée. L'automatisation IA, c'est un outil intelligent qui prend en charge le travail rébarbatif pendant que vous vous concentrez sur l'essentiel. Plus besoin de copier-coller des données à l'infini, de gérer des mails qui s'empilent ou des process qui tournent en boucle : on met en place des workflows efficaces et intelligents qui fluidifient votre quotidien. Résultat ? Plus d'énergie pour créer, communiquer, vendre ou simplement souffler. L'IA n'efface pas l'humain, elle lui redonne de la place.",
      },
      {
        title: "Référencement naturel (SEO)",
        body: "Être visible au bon endroit, au bon moment, et pour les bonnes requêtes. Nos experts SEO interviennent sur trois piliers : le contenu (rédaction optimisée, structure des pages, sémantique), la technique (performance du site, indexation, balisage, Core Web Vitals) et le maillage (liens internes, backlinks, stratégie de netlinking). Nous réalisons audits SEO, recommandations concrètes, accompagnement éditorial et suivi des positions, pour améliorer votre visibilité de façon durable — sans black hat, sans miracle, mais avec méthode et précision.",
      },
    ],
    team: [
      {
        name: "Marie Lainé",
        role: "Consultant SEO et Pinterest manager",
        href: "https://www.linkedin.com/in/marie-lain%C3%A9/",
        photo: "/team/marie-laine.png",
      },
      {
        name: "Arnaud Poullin",
        role: "SEA / Acquisition / Marketing automation",
        href: "https://e-flow.io/",
        photo: "/team/arnaud-poullin.png",
      },
      {
        name: "Thomas Escot",
        role: "Consultant SEO",
        href: "https://thomas-escot.fr/",
        photo: "/team/thomas-escot.png",
      },
      {
        name: "Kathleen Van den Bril",
        role: "Social Media Manager",
        href: "https://www.linkedin.com/in/kathleen-van-den-bril-4a395115/",
        photo: "/team/kathleen-van-den-bril.png",
      },
      {
        name: "Lionel Rocques",
        role: "Consultant IA & Automatisation",
        href: "https://mister-anderson.ai/",
        photo: "/team/lionel-rocques.png",
      },
    ],
  },
  {
    slug: "social-media",
    icon: "/pictos/social.svg",
    title: "Social Media",
    titleHighlight: "Media",
    heroTitle:
      "Les bons contenus trouvent leur place. Les grandes idées trouvent leur public.",
    heroSubtitle:
      "Et nous sommes là pour écrire les règles, orchestrer les temps forts et faire vibrer votre communauté.",
    banner: "Des réseaux qui font du lien, pas juste du bruit.",
    sections: [
      {
        title: "Création de contenu",
        body: "Pas de stratégie sans bonnes munitions. Chez Sauvage, on produit en interne des contenus créatifs et originaux : shootings photo, vidéos, illustrations, interviews, motion, textes, reels, podcasts… On capte l'émotion, l'intention, et on donne à voir ce que tu fais de mieux, avec un œil esthétique et une vraie direction artistique. Studio intégré, équipe sauvage, effet waouh garanti.",
      },
      {
        title: "Community management",
        body: "Être présent, c'est bien. Être pertinent et vivant, c'est mieux. On t'accompagne dans l'animation quotidienne de tes réseaux : création des posts, réponse aux commentaires, modération, planification, storytelling en live ou en story. On prend soin de ta communauté, on lui parle vrai, et on crée un lien humain, durable, engagé. Pas de robot, pas de bullshit.",
      },
      {
        title: "Multi-plateformes, multi-formats",
        body: "Un bon contenu, c'est bien. Le bon contenu, au bon endroit, au bon moment, c'est encore mieux. On t'aide à naviguer entre Instagram, LinkedIn, Facebook, Pinterest, TikTok ou autre terrain d'expression – selon les cibles, les usages et les formats qui marchent. Pas de copier-coller : chaque plateforme a ses codes, on adapte à chaque fois. Le fond reste cohérent, la forme devient intelligente.",
      },
      {
        title: "Stratégie de contenu",
        body: "Avant de poster, on pense. On identifie les bons sujets, on clarifie les prises de parole, on structure les piliers éditoriaux qui vont raconter ta marque avec cohérence et envie. On aligne ta stratégie social media avec tes objectifs business, ta personnalité de marque et les attentes de tes audiences. C'est du fond, mais avec de la forme. Et surtout, une vraie direction.",
      },
    ],
    team: [
      {
        name: "Kathleen Van den Bril",
        role: "Social Media Manager",
        href: "https://www.linkedin.com/in/kathleen-van-den-bril-4a395115/",
        photo: "/team/kathleen-van-den-bril.png",
      },
      {
        name: "Romain Ferrand",
        role: "Rédacteur / Réalisateur de podcasts",
        href: "https://www.linkedin.com/in/romainferrand/",
        photo: "/team/romain-ferrand.png",
      },
    ],
  },
  {
    slug: "ux-webdesign",
    icon: "/pictos/ux.svg",
    title: "UX / Webdesign",
    titleHighlight: "UX / Web",
    heroTitle:
      "L'UX pour guider, le design pour exprimer. Le site, pour convaincre.",
    heroSubtitle:
      "On ne fait pas “juste un joli site”. On pense l'expérience de A à Z, pour que ça marche, que ce soit beau, et que ça serve vraiment.",
    banner:
      "Pensé pour l'utilisateur, nourri par ta marque, designé pour performer",
    sections: [
      {
        title: "UI",
        body: "L'interface, c'est le terrain de jeu où l'on rend tout ça visible, lisible, agréable. On travaille les grilles, les composants, les interactions, les animations — pour que tout s'emboîte naturellement, sans forcer. Pas de surdesign, pas de pixel inutile. Juste un système visuel cohérent, vivant, et parfaitement aligné avec les usages.",
      },
      {
        title: "UX Writing",
        body: "Parce que chaque mot compte. Une bonne expérience passe aussi par les bons mots, aux bons endroits. On structure l'information, on clarifie les messages, on rédige des micro-textes qui orientent sans assommer. Moins de jargon, plus d'impact. L'UX writing, c'est ce qui transforme un “formulaire ennuyeux” en “formulaire qui convertit”. Et ça change tout.",
      },
      {
        title: "Webdesign",
        body: "Ici, le design ne s'arrête pas à votre charte graphique. On déploie votre univers graphique sur l'ensemble du site, on fait respirer votre identité, on enrichit vos codes visuels à travers chaque page. C'est un terrain d'expression, de cohérence et de puissance. Un site, c'est souvent le premier contact avec votre marque : autant qu'il dise clairement qui vous êtes, avec force. On ajuste, on étire, on densifie — toujours au service de votre message.",
      },
      {
        title: "Stratégie UX",
        body: "Avant de poser un bouton ou de choisir une typo, on pense usage. Navigation fluide, hiérarchie claire, parcours utilisateur optimisé : on creuse, on observe, on teste. Qu'il s'agisse d'un site vitrine, d'une plateforme ou d'un e-commerce, l'objectif reste le même : réduire les frictions, guider les actions, et transformer les visiteurs en utilisateurs satisfaits. On vous simplifie la vie (et celle de vos clients) avec des interfaces qui répondent à des besoins concrets et réfléchis.",
      },
    ],
    team: [
      {
        name: "Apolline Rouzé",
        role: "UX Writer",
        href: "https://www.linkedin.com/in/apolline-rouz%C3%A9-6050b873/",
        photo: "/team/apolline-rouze.png",
      },
      {
        name: "Zoë Zadouroff",
        role: "UI / Webdesign",
        href: "https://www.salty-event.com/",
        photo: "/team/zoe-zadouroff.png",
      },
      {
        name: "Victoire Ecoiffier",
        role: "UI / Webdesign",
        href: "https://www.linkedin.com/in/victoireecoiffier/",
        photo: "/team/victoire-ecoiffier.png",
      },
      {
        name: "Sylvain Nascimento",
        role: "UX / UI",
        href: "https://www.linkedin.com/in/sylvainnascimento/",
        photo: "/team/sylvain-nascimento.png",
      },
      {
        name: "Quentin Roussel",
        role: "UX / UI",
        href: "https://quentinroussel.fr/",
        photo: "/team/quentin-roussel.png",
      },
      {
        name: "Nicolas Farolfi",
        role: "UX / UI",
        href: "https://www.nico-pro.com/",
        photo: "/team/nicolas-farolfi.png",
      },
    ],
  },
  {
    slug: "developpementweb",
    icon: "/pictos/webdev.svg",
    title: "Développement Web",
    titleHighlight: "Dév",
    heroTitle: "On ne développe pas pour faire joli, on développe pour faire sens.",
    heroSubtitle:
      "Ton site doit être utile, maniable, performant. Le reste, c'est du vernis.",
    banner: "Quand ça marche bien, ça ne se voit pas.",
    sections: [
      {
        title: "Développement WordPress custom",
        body: "Pas question d'empiler des plugins à l'aveugle. Les thèmes WordPress sont développés sur mesure, propres et optimisés, pensés pour l'identité de chaque marque et les usages concrets. Des fondations techniques solides, évolutives et calibrées pour durer.",
      },
      {
        title: "Tous les langages, une seule équipe",
        body: "Chaque langage a ses spécialistes. Du HTML/CSS/JS aux frameworks modernes (Angular, Typescript), en passant par le backend (Node.js, Python/Django, Flask, PHP, MongoDB, MySQL), les profils adaptés interviennent pour parler la langue technique nécessaire à chaque projet.",
      },
      {
        title: "E-commerce",
        body: "Les boutiques en ligne ne sont pas seulement là pour exister, elles sont faites pour vendre. Avec WooCommerce ou Shopify, chaque projet e-commerce est pensé pour la conversion : tunnel d'achat fluide, paiements sécurisés, intégrations CRM/ERP. Tout est construit pour soutenir la croissance d'un business, sans frictions.",
      },
      {
        title: "Développement mobile",
        body: "La présence digitale ne s'arrête pas au web. Des applications mobiles iOS et Android sont développées avec Ionic, Capacitor ou Cordova, connectées aux sites, APIs et back-offices existants. Une extension naturelle de l'écosystème digital, directement dans la poche des utilisateurs.",
      },
      {
        title: "Sites vitrines",
        body: "Faciles à prendre en main. Un site vitrine doit vivre par ceux qui le portent, pas uniquement par des développeurs. Les sites sont conçus pour être élégants, performants et surtout simples à administrer. L'autonomie est totale pour gérer le contenu sans dépendre d'une assistance technique constante.",
      },
      {
        title: "No-code & plateformes agiles",
        body: "La rapidité d'exécution compte parfois plus que la complexité technique. Avec des solutions comme Webflow, Shopify ou Bubble.io, il est possible de lancer rapidement des sites et plateformes no-code ou low-code, fiables et évolutives. Une approche idéale pour tester, accélérer ou ajuster un projet digital.",
      },
    ],
    team: [
      {
        name: "Sylvain Nascimento",
        role: "Web Dev / UI / UX",
        href: "https://www.linkedin.com/in/sylvainnascimento/",
        photo: "/team/sylvain-nascimento.png",
      },
      {
        name: "Quentin Roussel",
        role: "Web Dev / UI / UX",
        href: "https://quentinroussel.fr/",
        photo: "/team/quentin-roussel.png",
      },
      {
        name: "Nicolas Farolfi",
        role: "Web Dev / UI / UX",
        href: "https://www.nico-pro.com/",
        photo: "/team/nicolas-farolfi.png",
      },
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
  { name: "Victoire Ecoiffier", role: "Stratégie / Identité / Webdesign", href: "https://www.linkedin.com/in/victoireecoiffier/", photo: "/team/victoire-ecoiffier.png" },
  { name: "Sylvain Nascimento", role: "Développeur web", href: "https://www.linkedin.com/in/sylvainnascimento/", photo: "/team/sylvain-nascimento.png" },
  { name: "Pierre Frechou", role: "Filmmaker / Photographe / Drone", href: "https://www.pierrefrechou.com/", photo: "/team/pierre-frechou.png" },
  { name: "Thomas Escot", role: "Consultant SEO", href: "https://thomas-escot.fr/", photo: "/team/thomas-escot.png" },
  { name: "Jeanne Beuvin", role: "Illustration / Design", href: "https://lesfillesdusurf.com/", photo: "/team/jeanne-beuvin.png" },
  { name: "Romain Ferrand", role: "Journaliste / Stratégie contenu / Podcasts", href: "https://www.linkedin.com/in/romainferrand/", photo: "/team/romain-ferrand.png" },
  { name: "Quentin Roussel", role: "Développeur web", href: "https://quentinroussel.fr/", photo: "/team/quentin-roussel.png" },
  { name: "Nicolas Bouriette", role: "Photographe", href: "https://www.nicolas-bouriette.com/", photo: "/team/nicolas-bouriette.png" },
  { name: "Kathleen Van den Bril", role: "Social Media Manager", href: "https://www.linkedin.com/in/kathleen-van-den-bril-4a395115/", photo: "/team/kathleen-van-den-bril.png" },
  { name: "Lionel Rocques", role: "Consultant IA & Automatisations", href: "https://mister-anderson.ai/", photo: "/team/lionel-rocques.png" },
  { name: "Arnaud Poullin", role: "SEA / Acquisition / Marketing automation", href: "https://e-flow.io/", photo: "/team/arnaud-poullin.png" },
  { name: "Frédéric Lebrault", role: "Motion design / Design", href: "https://g-3.studio/", photo: "/team/frederic-lebrault.png" },
  { name: "Marie Lainé", role: "Consultant SEO et Pinterest manager", href: "https://www.laminuteseo.fr/", photo: "/team/marie-laine.png" },
  { name: "Emilien Geney", role: "Event manager / Design", href: "https://www.linkedin.com/in/emiliengeney/", photo: "/team/emilien-geney.png" },
  { name: "Apolline Rouzé", role: "UX Writer", href: "https://www.linkedin.com/in/apolline-rouz%C3%A9-6050b873/", photo: "/team/apolline-rouze.png" },
  { name: "Nicolas Farolfi", role: "Développeur web", href: "https://www.nico-pro.com/", photo: "/team/nicolas-farolfi.png" },
  { name: "Valentine Rolaz", role: "Cheffe de projets", href: "https://valentinerolaz.squarespace.com/", photo: undefined },
  { name: "Cécile Lehoux", role: "Développeuse web et co-fondatrice", href: "https://www.linkedin.com/in/c%C3%A9cile-lehoux-363a6094/", photo: "/team/cecile-lehoux.png" },
  { name: "Google", role: "RH / Chief Happiness", photo: "/team/google.png" },
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
