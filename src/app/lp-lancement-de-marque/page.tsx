import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lancement de Marque — Collectif Sauvage",
  description:
    "Stratégie, identité visuelle et site web. Nous bâtissons les fondations de votre marque en 45 jours avec un commando d'experts seniors. Comme une agence, mais en mieux.",
};

const BOOKING_URL = "#appel";

const profiles = [
  {
    num: "01",
    label: "Vous partez d'une page blanche",
    desc: "Vous avez l'idée, le produit ou le service. Tout est dans votre tête, mais rien n'est encore « réel ».",
    ctx: "Vous avez besoin d'exister officiellement pour convaincre vos premiers clients, partenaires ou investisseurs.",
    declic:
      "Le déclic : Vous refusez de bricoler un logo sur Canva ou un site sur un coin de table. Vous voulez une identité qui impose le respect dès le jour 1.",
  },
  {
    num: "02",
    label: "Le Pivot : votre marque ne vous ressemble plus",
    desc: "Votre entreprise a grandi, vos services ont évolué, mais votre image est restée bloquée en 2018.",
    ctx: "Il y a un décalage entre la qualité de ce que vous délivrez et l'image que renvoie votre site. Vous perdez des opportunités.",
    declic:
      "Le déclic : Vous voulez un repositionnement stratégique qui remette votre expertise au centre du jeu et attire enfin des clients premium.",
  },
  {
    num: "03",
    label: "Le Solopreneur qui passe à l'échelle",
    desc: "Vous avez validé votre concept, vous faites du chiffre, mais vous stagnez parce que votre image de « freelance seul dans son coin » plafonne vos tarifs.",
    ctx: "Pour passer à l'étape supérieure, vous devez devenir une Marque.",
    declic:
      "Le déclic : Vous voulez déléguer toute la partie « branding & tech » à des experts pour vous concentrer sur votre zone de génie : la croissance de votre business.",
  },
];

const obstacles = [
  {
    tag: "Obstacle 01",
    title: "Payez pour l'expertise, pas pour les bureaux.",
    body: "Les agences traditionnelles facturent leur structure et leurs intermédiaires. Chez Sauvage, 100 % de votre budget finance directement les experts qui font le travail. L'agilité sans le gras.",
    caption: "budget direct · zéro structure · agilité maximale",
    img: "/lp-lancement/obstacle1.png",
    reverse: false,
  },
  {
    tag: "Obstacle 02",
    title: "Un collectif, pas une addition d'egos.",
    body: "Piloter des indépendants isolés est un métier à plein temps (incohérences, délais, briefing multiple). Nous sommes déjà synchronisés : un seul point de contact, une vision unique, zéro friction.",
    caption: "un interlocuteur · vision commune · zéro friction",
    img: "/lp-lancement/obstacle2.png",
    reverse: true,
  },
  {
    tag: "Obstacle 03",
    title: "Une âme ne se génère pas en un prompt.",
    body: "L'IA lisse tout et manque d'audace. Elle régurgite le passé, nous créons votre futur. On utilise l'outil pour la vitesse, mais l'humain pour la stratégie et l'émotion qui vous feront sortir du lot.",
    caption: "vitesse IA · âme humaine · singularité réelle",
    img: "/lp-lancement/obstacle3.png",
    reverse: false,
  },
];

const pack = [
  {
    num: "01",
    title: "Le Radar",
    sub: "Stratégie",
    body: "On ne dessine rien avant d'avoir trouvé votre faille dans le marché.",
    impact: "Sortir de la comparaison par les prix en devenant « le seul qui… »",
    livrables:
      "Plateforme de marque, promesse forte, et guide de tonalité (pour ne plus jamais hésiter sur quoi écrire).",
  },
  {
    num: "02",
    title: "L'ADN",
    sub: "Identité Visuelle",
    body: "Le design n'est pas une décoration, c'est votre premier argument de vente.",
    impact:
      "Inspirer une confiance immédiate. Vos prospects savent en 3 secondes que vous êtes sérieux.",
    livrables:
      "Logo modulable, univers chromatique, typographies, charte graphique complète.",
  },
  {
    num: "03",
    title: "Le Kit de Déploiement",
    sub: "Communication",
    body: "Ne perdez plus de temps à bricoler sur Canva.",
    impact:
      "Une cohérence totale sur tous vos points de contact, du premier email à la dernière story.",
    livrables:
      "Templates réseaux sociaux, signatures email, pitch deck, supports de présentation.",
  },
  {
    num: "04",
    title: "Le Vaisseau Amiral",
    sub: "Web",
    body: "Un site conçu pour convertir, pas pour faire joli.",
    impact:
      "Transformer votre trafic en clients qualifiés grâce à une UX pensée pour l'action.",
    livrables:
      "Site optimisé (SEO & Vitesse), UX fluide, copywriting converti, déploiement clés en main.",
  },
];

const pricing = [
  {
    name: "Pack Starter",
    price: "À partir de 3 500 €",
    sub: "Pour poser les bases",
    items: [
      "Stratégie de positionnement",
      "Logo modulable",
      "Charte graphique de base",
      "Guide de tonalité",
    ],
    note: "Un expert stratégie + design.",
    featured: false,
  },
  {
    name: "Pack Complet",
    price: "À partir de 7 500 €",
    sub: "Pour passer un cap",
    items: [
      "Stratégie + Identité visuelle",
      "Kit de déploiement complet",
      "Templates réseaux sociaux",
      "Pitch Deck + supports de com",
      "Site web conversion-ready",
    ],
    note: "Deux à trois experts mobilisés.",
    featured: true,
  },
  {
    name: "Pack Premium",
    price: "Sur devis",
    sub: "Lancement ou refonte totale",
    items: [
      "Stratégie complète",
      "Identité visuelle premium",
      "Kit de déploiement",
      "Site web sur-mesure",
      "Tous supports nécessaires",
      "Suivi post-lancement",
    ],
    note: "Tous les profils à votre disposition.",
    featured: false,
  },
];

const brands = [
  "Oxbow",
  "Décathlon",
  "Eurosima",
  "FFSurf",
  "RVCA",
  "Patagonia",
  "ISA Surf",
  "Zodiac Nautic",
  "Anglet Côte Basque",
];

const testimonials = [
  {
    quote:
      "« Sauvage nous a permis de passer de “freelance qu’on ne prend pas au sérieux” à une marque que les clients veulent vraiment s’offrir. En 6 semaines. »",
    name: "Marie D.",
    title: "Fondatrice, Atelier Nord",
  },
  {
    quote:
      "« Leur méthode est redoutable d'efficacité. Stratégie, identité, site : tout livré en moins de 2 mois. Je recommande sans hésitation. »",
    name: "Thomas R.",
    title: "CEO, Vague Labs",
  },
  {
    quote:
      "« Enfin une équipe qui comprend que le design est un outil de business, pas une note de frais. ROI visible dès le premier mois. »",
    name: "Claire M.",
    title: "Co-fondatrice, Forma Studio",
  },
];

const timeline = [
  {
    num: "01.",
    step: "L'ADN",
    period: "J1 à J15",
    desc: "Immersion, stratégie de positionnement et création de l'identité visuelle complète.",
  },
  {
    num: "02.",
    step: "L'Architecture",
    period: "J15 à J40",
    desc: "Design de l'interface, développement du site et déploiement de tous les supports de communication.",
  },
  {
    num: "03.",
    step: "L'Envol",
    period: "J45",
    desc: "Tests finaux, mise en ligne et passation des clés. Votre lancement est prêt.",
  },
];

const reasons = [
  {
    title: "Zéro intermédiaire",
    body: "Vous parlez directement aux créateurs. Pas de chef de projet qui traduit votre brief, pas de déformation du message entre la vision et l'exécution.",
  },
  {
    title: "Cohérence totale",
    body: "La personne qui définit votre stratégie est celle qui supervise votre design et valide votre site. Une vision unique du début à la fin.",
  },
  {
    title: "Expertise Senior",
    body: "Pas de stagiaires sur votre dossier. Uniquement des professionnels qui ont déjà livré pour des marques que vous connaissez.",
  },
];

const faq = [
  {
    q: "C'est quoi la différence avec une agence ?",
    a: "Une agence a des frais fixes (locaux, comptes, stagiaires). Nous sommes un collectif de seniors : 100 % de votre budget va au travail réel. Même niveau de qualité, sans la marge sur la structure.",
  },
  {
    q: "Combien de temps ça prend ?",
    a: "45 jours pour un lancement complet (stratégie, identité, site). Nous ne promettons pas la perfection infinie — nous promettons un résultat opérationnel en temps record.",
  },
  {
    q: "Et si j'ai déjà un logo ?",
    a: "On part de ce qui existe. Si votre identité actuelle est viable, on la fait évoluer. Sinon, on vous le dit franchement avant de commencer.",
  },
];

export default function LpLancementDeMarque() {
  return (
    <div className="bg-ink-900 text-white">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/lp-lancement/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-ink-900/20" />
        <div className="container-ds relative z-10 flex min-h-screen flex-col items-center justify-center py-36 text-center">
          <p className="text-xs uppercase tracking-[3px] text-pink">
            Pack Lancement de Marque
          </p>
          <h1 className="font-display mt-6 max-w-2xl text-[clamp(3rem,5.5vw,4.75rem)] uppercase leading-none text-pink">
            Ne passez pas à côté d&apos;un bon lancement.
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-white">
            Stratégie, identité visuelle et site web. Nous bâtissons les
            fondations de votre marque en un temps record avec un commando
            d&apos;experts seniors. Comme une agence, mais en mieux.
          </p>
          <div className="mt-10">
            <a
              href={BOOKING_URL}
              className="inline-block rounded-full border-2 border-pink px-10 py-4 text-sm font-bold uppercase tracking-[2px] text-pink transition-colors hover:bg-pink hover:text-ink-900"
            >
              Réserver un appel découverte
            </a>
          </div>
          <p className="mt-8 text-sm text-white/60">↓ Voir l&apos;offre</p>
        </div>
      </section>

      {/* ── SI VOUS VOUS RECONNAISSEZ ────────────────────────────────────── */}
      <section className="py-32">
        <div className="container-ds">
          <h2 className="font-display text-center text-[clamp(2rem,3.5vw,2.75rem)] uppercase text-pink">
            Si vous vous reconnaissez, c&apos;est fait pour vous
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {profiles.map((p) => (
              <div
                key={p.num}
                className="border-t border-pink/30 pt-px flex flex-col gap-4"
              >
                <p className="font-display text-7xl leading-none text-white/30">
                  {p.num}
                </p>
                <p className="text-xs font-bold uppercase tracking-[3px] text-pink">
                  {p.label}
                </p>
                <p className="text-sm leading-relaxed text-white">{p.desc}</p>
                <p className="text-sm leading-relaxed text-white/70">{p.ctx}</p>
                <p className="text-sm font-bold leading-relaxed text-pink">
                  {p.declic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBSTACLES ────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-ds">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] uppercase leading-tight text-pink">
              Lancer un nouveau projet est un sport de haut niveau. Ne partez
              pas avec les mauvais crampons.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              Lancer un projet ne doit pas être un combat logistique. Nous
              levons les 3 principaux obstacles qui font échouer les meilleurs
              projets avant même leur démarrage.
            </p>
          </div>

          <div className="mt-20 flex flex-col gap-20">
            {obstacles.map((obs) => (
              <div
                key={obs.tag}
                className={`flex flex-col items-center gap-12 md:flex-row ${obs.reverse ? "md:flex-row-reverse" : ""}`}
              >
                <div className="relative w-full md:w-[47%] shrink-0">
                  <div className="relative aspect-[570/320] overflow-hidden rounded-2xl">
                    <Image
                      src={obs.img}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-center font-display text-[11px] uppercase tracking-[1px] text-pink">
                    {obs.caption}
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <p className="text-xs uppercase tracking-[3px] text-pink">
                    {obs.tag}
                  </p>
                  <p className="text-2xl font-bold leading-tight text-white">
                    {obs.title}
                  </p>
                  <p className="text-lg leading-relaxed text-white/90">
                    {obs.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE PACK : QU'EST-CE QU'IL Y A DEDANS ? ──────────────────────── */}
      <section className="py-32">
        <div className="container-ds">
          <h2 className="font-display text-center text-[clamp(2rem,3.5vw,2.75rem)] uppercase text-pink">
            Le pack « Lancement de marque » : qu&apos;est-ce qu&apos;il y a
            dedans ?
          </h2>
          <p className="mt-4 text-center italic text-lg text-white/80">
            Une méthode en 4 étapes pour passer de l&apos;idée à une marque qui
            impose son autorité.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pack.map((item) => (
              <div key={item.num} className="flex flex-col gap-3">
                <p className="font-display text-7xl leading-none text-white/30">
                  {item.num}
                </p>
                <p className="font-display text-2xl uppercase text-pink">
                  {item.title}
                </p>
                <p className="text-xs font-bold uppercase tracking-[3px] text-pink">
                  {item.sub}
                </p>
                <p className="text-sm leading-relaxed text-white">{item.body}</p>
                <p className="text-xs leading-relaxed text-white/70">
                  <span className="font-bold text-white/70">Impact : </span>
                  {item.impact}
                </p>
                <p className="text-xs leading-relaxed text-white/70">
                  <span className="font-bold text-white/70">Livrables : </span>
                  {item.livrables}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-ds">
          <h2 className="font-display text-center text-[clamp(2rem,3.5vw,2.75rem)] uppercase text-pink">
            Le pack lancement : c&apos;est combien ?
          </h2>
          <p className="mt-4 text-center italic text-lg text-white/80">
            Chaque projet est différent. Un appel de vingt minutes suffit à
            cadrer votre besoin et vous donner une estimation honnête.
          </p>
          <div className="mt-16 grid gap-0 md:grid-cols-3">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`p-10 ${
                  tier.featured
                    ? "border-2 border-periwinkle bg-[#2a3154] md:-my-2"
                    : "border border-pink/30 bg-[#2a3154]"
                }`}
              >
                <h3 className="font-display text-2xl uppercase text-pink">
                  {tier.name}
                </h3>
                <p className="mt-4 text-[22px] font-bold">{tier.price}</p>
                <p className="mt-4 text-xs uppercase tracking-[3px] text-pink">
                  {tier.sub}
                </p>
                <ul className="mt-6 list-disc space-y-1 pl-5 text-sm leading-relaxed text-white/90">
                  {tier.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-bold text-pink">{tier.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a
              href={BOOKING_URL}
              className="inline-block rounded-full border-2 border-pink px-10 py-4 text-sm font-bold uppercase tracking-[2px] text-pink transition-colors hover:bg-pink hover:text-ink-900"
            >
              Réserver un appel découverte
            </a>
          </div>
        </div>
      </section>

      {/* ── ON L'A DÉJÀ FAIT POUR EUX ────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-ds">
          <h2 className="font-display text-center text-[clamp(2rem,3.5vw,2.75rem)] uppercase text-pink">
            On l&apos;a déjà fait pour eux
          </h2>
          <div className="mt-16 grid grid-cols-3 gap-1">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="relative aspect-video overflow-hidden">
                <Image
                  src={`/lp-lancement/portfolio-${n}.png`}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 opacity-45">
            {brands.map((b) => (
              <span
                key={b}
                className="text-[13px] font-semibold uppercase tracking-[2px] text-white"
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-pink/20 bg-[#2a3154] p-8"
              >
                <p className="text-sm leading-relaxed text-white/90">{t.quote}</p>
                <p className="mt-6 font-bold text-white">{t.name}</p>
                <p className="mt-1 text-xs text-white/60">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 45 JOURS POUR CHANGER DE DIMENSION ───────────────────────────── */}
      <section className="py-24">
        <div className="container-ds">
          <h2 className="font-display text-center text-[clamp(2rem,3.5vw,2.75rem)] uppercase text-pink">
            45 jours pour changer de dimension
          </h2>
          <p className="mt-4 text-center italic text-lg text-white/80">
            Pas de tunnels de validation infinis. Un timing serré, tenu.
          </p>
          <div className="mt-16 divide-y divide-white/10">
            {timeline.map((t) => (
              <div
                key={t.num}
                className="flex flex-wrap items-center gap-4 py-8 md:flex-nowrap"
              >
                <p className="font-display w-16 shrink-0 text-[2.5rem] leading-none text-pink">
                  {t.num}
                </p>
                <p className="font-display w-40 shrink-0 text-xl uppercase text-white">
                  {t.step}
                </p>
                <p className="w-24 shrink-0 text-sm text-white/50">{t.period}</p>
                <p className="flex-1 text-lg leading-relaxed text-white/90">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS CONFIER VOTRE LANCEMENT ? ──────────────────────── */}
      <section className="py-24">
        <div className="container-ds grid items-start gap-16 md:grid-cols-2">
          <div>
            <Image
              src="/lp-lancement/shape.svg"
              alt=""
              width={69}
              height={69}
            />
            <h2 className="font-display mt-8 text-[clamp(2rem,4vw,3.25rem)] uppercase leading-tight text-pink">
              Pourquoi nous confier votre lancement ?
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            {reasons.map((r) => (
              <div key={r.title} className="border-l border-pink/30 pl-8">
                <p className="font-bold text-lg text-white">{r.title}</p>
                <p className="mt-2 leading-relaxed text-white/80">{r.body}</p>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pl-8">
              {["Web", "Print", "Réseaux sociaux", "Publicité"].map((t) => (
                <span
                  key={t}
                  className="border border-pink px-4 py-2 text-xs uppercase tracking-[3px] text-pink"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-ds">
          <h2 className="font-display text-center text-[clamp(2rem,3.5vw,2.75rem)] uppercase text-pink">
            Les questions souvent posées
          </h2>
          <div className="mx-auto mt-16 max-w-2xl divide-y divide-white/10">
            {faq.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-white list-none">
                  {item.q}
                  <span className="ml-4 shrink-0 text-2xl font-light text-pink transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMME UNE AGENCE / MAIS EN MIEUX ────────────────────────────── */}
      <section className="overflow-hidden py-24">
        <div className="container-ds grid items-center gap-16 md:grid-cols-2">
          {/* Left — outlined text + body */}
          <div className="flex flex-col gap-6 py-12">
            <Image src="/lp/shape.svg" alt="" width={69} height={69} />
            <p
              className="font-display text-[clamp(3rem,7vw,6rem)] uppercase leading-none"
              style={{ color: "transparent", WebkitTextStroke: "2px #f598ff" }}
            >
              Comme une agence
            </p>
            <p className="max-w-lg capitalize text-lg leading-relaxed">
              Tout ce dont vous avez besoin pour communiquer, activer et développer votre
              marque. Un expert par discipline, disponible selon vos besoins, coordonné
              par un référent qui connaît votre dossier.
            </p>
          </div>

          {/* Right — card with background + "mais en mieux" */}
          <div className="relative overflow-hidden rounded-[51px]" style={{ aspectRatio: "488/420" }}>
            <Image
              src="/lp/card-bg.png"
              alt=""
              fill
              className="rounded-[51px] object-cover"
            />
            <div
              className="absolute left-[22%] top-[44%] md:left-[26%] md:top-[54%] pointer-events-none"
              style={{ transform: "translate(-50%, -50%) rotate(-40.37deg) skewX(-6.13deg) scaleY(0.99)" }}
            >
              <Image src="/lp/ellipse.svg" alt="" width={240} height={144} className="opacity-90" />
            </div>
            <div className="absolute left-6 top-[20%]">
              <p className="font-display text-[clamp(3rem,11vw,6.5rem)] uppercase leading-[1.05] text-white">
                MAIS EN<br />MIEUX !
              </p>
            </div>
            <div className="absolute bottom-6 right-6">
              <a
                href={BOOKING_URL}
                className="inline-block rounded-full border-2 border-pink bg-white/60 px-6 py-3 text-xs font-bold uppercase tracking-[2px] text-pink transition-colors hover:bg-pink hover:text-ink-900"
              >
                Réserver un appel découverte
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section
        id="appel"
        className="relative flex items-center overflow-hidden"
        style={{ height: "clamp(500px, 56.9vw, 820px)" }}
      >
        <Image src="/lp-lancement/cta-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "#171D3A", opacity: 0.3 }} />
        <div
          className="relative z-10 w-full py-24"
          style={{ paddingLeft: "clamp(1.5rem, 43.75vw, 630px)", paddingRight: "4vw" }}
        >
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] uppercase text-pink">
            On commence par parler.
          </h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-white">
            Vingt minutes. Votre projet, vos contraintes, ce que vous voulez
            transmettre. On vous dit ce qu&apos;on peut faire et comment on
            travaille.
          </p>
          <a
            href={BOOKING_URL}
            className="mt-10 inline-block rounded-full border-2 border-pink px-10 py-4 text-sm font-bold uppercase tracking-[2px] text-pink transition-colors hover:bg-pink hover:text-ink-900"
          >
            Réserver un appel découverte
          </a>
          <p className="mt-6 text-sm text-white/60">
            Pas de formulaire. Pas de pitch commercial. Une conversation.
          </p>
        </div>
      </section>
    </div>
  );
}
