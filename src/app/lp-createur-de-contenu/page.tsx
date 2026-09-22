import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Créateur de contenu — Collectif Sauvage",
  description:
    "Des images qui font la différence. Shooting, tournage, post-production et livraison multi-formats. Un collectif de freelances pour une production de marque sans intermédiaire.",
};

const BOOKING_URL = "#appel";

const steps = [
  {
    num: "01",
    title: "Direction artistique",
    desc: "On pose la vision avant de toucher un appareil. DA assurée par Zoé, Victoire ou Jeanne selon votre univers.",
  },
  {
    num: "02",
    title: "Préparation",
    desc: "Repérage, logistique, coordination équipe. On arrive le jour J avec tout en ordre.",
  },
  {
    num: "03",
    title: "Shooting / Tournage",
    desc: "Studio, outdoor, lifestyle, underwater, drone. Le bon profil sur le bon terrain.",
  },
  {
    num: "04",
    title: "Post-production",
    desc: "Retouche, montage, colorimétrie, motion, son. On livre des contenus finis, pas des fichiers bruts.",
  },
  {
    num: "05",
    title: "Livraison multi-formats",
    desc: "Web, réseaux, print, publicité. Une production, tous vos supports.",
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

export default function LpCreateurDeContenu() {
  return (
    <div className="bg-ink-900 text-white">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/lp/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ink-900/60" />
        <div className="container-ds relative z-10 flex min-h-screen flex-col justify-end pb-20 pt-36">
          <h1 className="font-display max-w-2xl text-[clamp(3rem,5.5vw,4.75rem)] uppercase leading-none text-pink">
            Des images qui font la différence.
          </h1>
          <p className="mt-8 max-w-lg text-xl leading-relaxed">
            Certaines marques ont des visuels qu&apos;on reconnaît. D&apos;autres ont des photos.
            On s&apos;occupe des premières.
          </p>
          <div className="mt-10">
            <a
              href={BOOKING_URL}
              className="inline-block rounded-full border-2 border-pink px-10 py-4 text-sm font-bold uppercase tracking-[2px] text-pink transition-colors hover:bg-pink hover:text-ink-900"
            >
              Réserver un appel découverte
            </a>
          </div>
          <p className="mt-8 text-sm uppercase tracking-widest text-white/60">
            ↓ Voir le travail
          </p>
        </div>
      </section>

      {/* ── DE L'INTENTION À L'IMAGE ─────────────────────────────────────── */}
      <section className="py-32">
        <div className="container-ds text-center">
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] uppercase text-pink">
            De l&apos;intention à l&apos;image.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/90">
            On ne croit pas au contenu suffisant. Pas parce qu&apos;on est perfectionnistes,
            parce qu&apos;on sait ce que ça coûte une image qui ne convainc pas.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Des freelances mais pas des solitaires. On a un process, des réflexes communs,
            une façon de coordonner les compétences qui ressemble à ce qu&apos;une agence fait
            bien, sans ce qu&apos;elle fait peser. Pas d&apos;intermédiaire entre vous et les créatifs.
          </p>
        </div>
      </section>

      {/* ── DE L'INTENTION À LA LIVRAISON ────────────────────────────────── */}
      <section className="pb-32">
        <div className="container-ds">
          <h2 className="text-center font-display text-[clamp(2rem,3.5vw,3rem)] uppercase text-pink">
            De l&apos;intention à la livraison.
          </h2>
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-5">
            {steps.map((step) => (
              <div key={step.num}>
                <p className="font-display text-7xl leading-none text-white/20">{step.num}</p>
                <p className="mt-8 text-xs font-bold uppercase tracking-[3px] text-pink">
                  {step.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PIERRE FRECHOU ───────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-ds grid items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src="/lp/pierre-video-thumb.png"
              alt="Bande démo Pierre Frechou"
              fill
              className="object-cover"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[11px] uppercase tracking-[1px] text-pink">
              Réalisation — outdoor filmmaker · drone · aqua · corporate
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[3px] text-white/80">
              Filmmaker outdoor et réalisateur corporate
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/lp/pierre-avatar.png"
                alt="Pierre Frechou"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <h3 className="font-display text-[2rem] uppercase leading-none text-pink">
                Pierre Frechou
              </h3>
            </div>
            <p className="mt-8 text-lg leading-relaxed text-white/90">
              Pierre filme ce que la plupart ne savent pas atteindre. Arctique, océan,
              montagne, Pakistan. Outdoor, sport de haut niveau, corporate engagé,
              documentaire — il adapte son regard à chaque terrain, chaque intention.
              De l&apos;écriture au montage, il couvre l&apos;intégralité de la chaîne. Prises
              aériennes, aquatiques, montage, post-production. Sur les projets
              d&apos;envergure, il active une équipe élargie.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[2px] text-white/50">
              {["Oxbow", "Patagonia", "RVCA", "Picture Organic", "Zodiac Nautic"].map(
                (b) => <span key={b}>{b}</span>
              )}
            </div>
            <a
              href="#"
              className="mt-8 block text-sm text-pink underline hover:opacity-80"
            >
              Voir le portfolio →
            </a>
          </div>
        </div>
      </section>

      {/* ── FRED G-3 STUDIO ──────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-ds grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-white/80">
              Motion et image de marque
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/lp/fred-avatar.png"
                alt="Fred, G-3 Studio"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <h3 className="font-display text-[2rem] uppercase leading-none text-pink">
                Fred, G-3 Studio
              </h3>
            </div>
            <p className="mt-8 text-lg leading-relaxed text-white/90">
              Fred pense en séquences. Brand films, reels, motion design, formats
              publicitaires — chaque projet est traité comme un récit visuel avec une
              intention claire derrière chaque choix. Il intervient souvent en
              complémentarité avec Pierre sur des projets hybrides : prises de vues
              réelles et motion combinés. Le résultat : des formats qui captent
              l&apos;attention parce qu&apos;ils ont été pensés pour ça.
            </p>
            <a
              href="#"
              className="mt-8 block text-sm text-pink underline hover:opacity-80"
            >
              Voir les réalisations →
            </a>
          </div>
          <div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/lp/fred-video-thumb.png"
                alt="Bande démo Fred G-3 Studio"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center font-display text-[11px] uppercase tracking-[1px] text-pink">
              motion design · brand film · animation · formats publicitaires
            </p>
          </div>
        </div>
      </section>

      {/* ── UN CONTENU BIEN PRODUIT NE VIEILLIT PAS ─────────────────────── */}
      <section className="py-24">
        <div className="container-ds grid items-start gap-16 md:grid-cols-2">
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] uppercase leading-tight text-pink">
            Un contenu bien produit ne vieillit pas. Il voyage.
          </h2>
          <div>
            <div className="border-l border-pink/20 pl-12">
              <p className="text-lg leading-relaxed text-white/90">
                Une image pensée pour fonctionner sur tous les supports — site, réseaux,
                print, publicité — c&apos;est un investissement qui se rentabilise à chaque
                utilisation. Pas besoin de refaire une prod pour chaque campagne.
              </p>
            </div>
            <div className="mt-8 border-l border-pink/20 pl-12">
              <p className="text-lg leading-relaxed text-white/90">
                Direction artistique cohérente entre photo, vidéo et motion. Une marque
                reconnaissable quel que soit le support. Livraison haute résolution, tous
                formats, médiathèque organisée.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 pl-12">
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

      {/* ── LES POINTS DE DÉPART (pricing) ───────────────────────────────── */}
      <section className="py-24">
        <div className="container-ds">
          <h2 className="text-center font-display text-[clamp(2rem,3.5vw,3rem)] uppercase text-pink">
            Les points de départ.
          </h2>
          <p className="mt-4 text-center italic text-lg text-white/80">
            Chaque projet est différent. Un appel de vingt minutes suffit à cadrer votre
            besoin et vous donner une estimation honnête.
          </p>
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {/* Essentiel */}
            <div className="border border-pink/30 bg-[#2a3154] p-10">
              <h3 className="font-display text-2xl uppercase text-pink">
                Contenu Essentiel
              </h3>
              <p className="mt-4 text-[22px] font-bold">À partir de 1 800 €</p>
              <p className="mt-4 text-xs uppercase tracking-[3px] text-pink">
                Pour poser les bases
              </p>
              <ul className="mt-6 list-disc space-y-1 pl-5 text-sm leading-relaxed text-white/90">
                <li>Demi-journée shooting</li>
                <li>Direction artistique</li>
                <li>Post-production</li>
                <li>Livraison web et réseaux</li>
              </ul>
              <p className="mt-5 text-sm font-bold text-pink">
                Un profil photographe ou vidéaste.
              </p>
            </div>
            {/* Complet — featured */}
            <div className="border-2 border-periwinkle bg-[#2a3154] p-10 md:-my-2">
              <h3 className="font-display text-2xl uppercase text-pink">
                Contenu Complet
              </h3>
              <p className="mt-4 text-[22px] font-bold">À partir de 3 500 €</p>
              <p className="mt-4 text-xs uppercase tracking-[3px] text-pink">
                Pour passer un cap
              </p>
              <ul className="mt-6 list-disc space-y-1 pl-5 text-sm leading-relaxed text-white/90">
                <li>Journée complète</li>
                <li>Photo et vidéo</li>
                <li>Brand film court</li>
                <li>Post-prod</li>
                <li>Livrables multi-formats</li>
              </ul>
              <p className="mt-5 text-sm font-bold text-pink">Deux profils mobilisés.</p>
            </div>
            {/* Premium */}
            <div className="border border-pink/30 bg-[#2a3154] p-10">
              <h3 className="font-display text-2xl uppercase text-pink">
                Contenu Premium
              </h3>
              <p className="mt-4 text-[22px] font-bold">Sur devis</p>
              <p className="mt-4 text-xs uppercase tracking-[3px] text-pink">
                Lancement ou refonte totale
              </p>
              <ul className="mt-6 list-disc space-y-1 pl-5 text-sm leading-relaxed text-white/90">
                <li>Multi-jours</li>
                <li>Équipe complète</li>
                <li>Brand film</li>
                <li>Motion</li>
                <li>Print</li>
                <li>Publicités</li>
              </ul>
              <p className="mt-5 text-sm font-bold text-pink">
                Tous les profils nécessaires à votre disposition.
              </p>
            </div>
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

      {/* ── PORTFOLIO GRID ───────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-ds">
          <h2 className="text-center font-display text-[clamp(2rem,3.5vw,3rem)] uppercase text-pink">
            Quelques marques qui nous ont fait confiance.
          </h2>
          <div className="mt-16 grid grid-cols-3 gap-1">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="relative aspect-video overflow-hidden">
                <Image
                  src={`/lp/portfolio-${n}.png`}
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
        </div>
      </section>

      {/* ── CTA — ON COMMENCE PAR PARLER ─────────────────────────────────── */}
      <section className="relative flex h-[520px] items-center overflow-hidden md:h-[650px] xl:h-[820px]">
        <Image src="/lp/cta-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-ink-900/20" />
        <div className="container-ds relative z-10 py-24 text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] uppercase text-pink">
            On commence par parler.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed">
            Vingt minutes. Votre projet, vos contraintes, ce que vous voulez transmettre.
            On vous dit ce qu&apos;on peut faire et comment on travaille.
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

      {/* ── COMME UNE AGENCE, MAIS EN MIEUX ─────────────────────────────── */}
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
            {/* Ellipse derrière "MIEUX" — responsive */}
            <div
              className="absolute left-[22%] top-[44%] md:left-[26%] md:top-[54%] pointer-events-none"
              style={{ transform: "translate(-50%, -50%) rotate(-40.37deg) skewX(-6.13deg) scaleY(0.99)" }}
            >
              <Image src="/lp/ellipse.svg" alt="" width={240} height={144} className="opacity-90" />
            </div>
            {/* "Mais en mieux" — 2 lignes forcées */}
            <div className="absolute left-6 top-[20%]">
              <p className="font-display text-[clamp(3rem,11vw,6.5rem)] uppercase leading-[1.05] text-white">
                MAIS EN<br />MIEUX !
              </p>
            </div>
            {/* CTA — dans la card, en bas à droite */}
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
    </div>
  );
}
