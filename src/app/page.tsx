import Link from "next/link";
import Image from "next/image";
import { expertises } from "@/lib/site-data";
import LookingForAccordion from "@/components/LookingForAccordion";
import Marquee from "@/components/Marquee";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import HighlightedTitle from "@/components/HighlightedTitle";
import Button from "@/components/Button";
import ParallaxIcon from "@/components/ParallaxIcon";

export default function Home() {
  return (
    <div className="bg-[#171d3a] text-white">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container-ds flex flex-col gap-8 md:flex-row md:items-center md:gap-8">
          {/* Colonne gauche : visuel "WE DO..." — volontairement plus petite que l'encart nuages */}
          <div
            className="relative aspect-[657/542] w-full md:flex-1"
          >
            <Image
              src="/images/hero-headline.webp"
              alt="Texte blanc sur fond noir avec un astérisque. Texte: “WE DO” suivi de “TOUT CE DONT VOUS AVEZ BESOIN POUR COMMUNIQUER, ACTIVER ET DÉVELOPPER VOTRE MARQUE.”"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Colonne droite : encart visuel nuages, nettement plus large que la colonne gauche */}
          <div
            className="cloud-card relative aspect-[657/542] w-full overflow-hidden rounded-2xl md:flex-1"
          >
            <svg
              aria-hidden="true"
              style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
            >
              <defs>
                <filter id="hero-liquid" x="-5%" y="-5%" width="110%" height="110%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.012"
                    numOctaves="4"
                    result="noise"
                    seed="5"
                  >
                    <animate
                      attributeName="baseFrequency"
                      dur="16s"
                      values="0.008;0.02;0.008"
                      repeatCount="indefinite"
                    />
                  </feTurbulence>
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="6"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>
            </svg>
            <Image
              src="/images/hero-clouds.webp"
              alt="Nuages colorés dans un ciel rose et bleu, effet artistique."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="cloud-liquid-img object-cover"
            />
            {/* Ellipse décorative : doit rester derrière le mot "seul", donc z-index inférieur au texte */}
            <Image
              src="/images/ellipse-blue.png"
              alt=""
              aria-hidden
              width={1907}
              height={1901}
              className="pointer-events-none absolute z-0 opacity-90"
              style={{ left: "49%", top: "28%", width: "23.7%", height: "24%" }}
            />
            <h2
              className="font-display absolute z-10 font-normal uppercase text-white drop-shadow text-3xl leading-9 md:text-[66px] md:leading-[70px]"
              style={{ left: "9%", top: "20%", width: "72%" }}
            >
              Plusieurs
              <br />
              styles,un seul
              <br />
              esprit
            </h2>
            <Button
              href="/about"
              variant="primary"
              className="absolute z-10"
              style={{ left: "50.8%", top: "70.8%" }}
            >
              Découvrir nos frees
            </Button>
          </div>
        </div>
      </section>

      {/* Bandeau déroulant */}
      <div className="mt-6 md:mt-12">
        <Marquee
          text="Comme une agence mais en mieux."
          duration={40}
          className="py-8 text-4xl text-periwinkle md:text-6xl"
        />
      </div>

      {/* Vous cherchez... + Collectivement indépendants (colonne) */}
      <section className="py-24">
        <div className="container-ds grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-x-16">
          <div>
            <h2 className="font-display text-[clamp(2rem,4.61vw,4.15rem)] font-bold uppercase leading-[1.056] text-[#f598ff]">
              Vous cherchez…
            </h2>
            <LookingForAccordion />
          </div>

          <div>
            <h2 className="font-display text-[clamp(2rem,4.61vw,4.15rem)] font-bold uppercase leading-[1.056] text-[#f598ff]">
              Collectivement indépendants !
            </h2>
            <div className="mt-6 space-y-4 text-white/70">
              <p>
                Le Collectif Sauvage propose une méthode innovante de
                travail, basée sur les collaborations, l&apos;agilité, le
                conseil, la pertinence et le respect afin de fournir une
                réponse sur mesure à des problématiques de communication
                360°.
              </p>
              <p>
                Nous sommes convaincus que nous sommes plus efficaces dans
                notre travail lorsqu&apos;il est respecté à sa juste valeur
                et que nous nous y épanouissons.
              </p>
              <p>
                Le Collectif Sauvage est avant tout une association qui a
                pour vocation de créer un cadre d&apos;entraide et de
                collaboration pour les freelances qui la constituent.
              </p>
              <p>
                Fort de ce réseau aux ressources et aux compétences
                partagées, nous proposons aux clients qui contactent nos
                freelances une approche du travail agile, pertinente et
                respectueuse d&apos;engagements professionnels et humains.
              </p>
            </div>
            <Button href="/about" variant="secondary-pink" className="mt-8">
              Découvrez tous nos talents
            </Button>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="py-24">
        <div className="container-ds">
          <h2 className="font-display text-3xl uppercase md:text-5xl">
            Nos expertises
          </h2>
          <div className="expertise-grid mt-10 mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {expertises.map((exp, i) => (
              <Link
                key={exp.slug}
                href={`/${exp.slug}`}
                className="group flex aspect-square flex-col items-center justify-center gap-4 overflow-hidden bg-white p-4 text-center hover:opacity-90 sm:p-6"
              >
                <div className="relative aspect-square w-[42%]">
                  <ParallaxIcon index={i}>
                    <Image src={exp.icon} alt="" fill className="object-contain" />
                  </ParallaxIcon>
                </div>
                <h3 className="relative z-10 font-display text-[clamp(0.75rem,1.4vw,18px)] font-normal uppercase leading-tight text-[#f598ff]">
                  <HighlightedTitle
                    title={exp.title}
                    highlight={exp.titleHighlight}
                    highlightClassName="text-black"
                  />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau déroulant Projets */}
      <Marquee
        text="Nos Projets *"
        duration={40}
        className="py-8 text-4xl text-periwinkle md:text-6xl"
      />

      {/* Projets */}
      <section className="py-16">
        <ProjectsCarousel />
      </section>

      {/* Brand collaborations */}
      <section className="relative w-full overflow-hidden py-10">
        {/* Background nuages */}
        <Image
          src="/images/fond-nuages-mid.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="container-ds relative z-10 flex items-center gap-8 md:gap-12">
          {/* Colonne gauche : visuel SVG Brand Collaborations */}
          <div className="flex w-[22%] shrink-0 items-center">
            <Image
              src="/images/brand-collaborations-title.svg"
              alt="Brand Collaborations"
              width={320}
              height={380}
              className="h-auto w-full"
            />
          </div>
          {/* Colonne droite : grille logos */}
          <div className="flex-1">
            <Image
              src="/images/brand-collaborations-logos.png"
              alt="Brand Collaborations : logos des marques partenaires du Collectif Sauvage (EuroSIMA, Oxbow, Baiona Marine, fulllife, Anglet Côte Basque, Red Bull, Decathlon, Quiksilver…)"
              width={1440}
              height={330}
              sizes="(max-width: 768px) 100vw, 78vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-24 md:py-36">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-card bg-[#94abf9] px-10 py-10 text-white md:px-14 md:py-12">
          {/* Double ellipse decoration — fully visible, behind text */}
          <Image
            src="/images/double-ellipse.webp"
            alt=""
            aria-hidden
            width={600}
            height={500}
            className="pointer-events-none absolute left-[50%] top-[8%] w-[44%] opacity-95"
          />
          <h2 className="font-display relative z-10 whitespace-nowrap text-[clamp(2.8rem,5.8vw,5.2rem)] uppercase leading-[1] text-white">
            Prêts à se lancer&nbsp;?
          </h2>
          <div className="relative z-10 mt-12 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary">
              Parlons en ensemble
            </Button>
            <Button href="/about" variant="primary">
              Découvrir l&apos;équipe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
