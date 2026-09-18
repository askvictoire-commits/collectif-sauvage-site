import Link from "next/link";
import Image from "next/image";
import { expertises } from "@/lib/site-data";
import LookingForAccordion from "@/components/LookingForAccordion";
import Marquee from "@/components/Marquee";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import HighlightedTitle from "@/components/HighlightedTitle";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="bg-[#171d3a] text-white">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container-ds grid grid-cols-1 gap-8 md:grid-cols-[4fr_6fr] md:gap-10">
          {/* Colonne gauche : visuel "WE DO..." (object-fit contain, même hauteur que la colonne droite) */}
          <div className="relative aspect-[657/542] w-full">
            <Image
              src="/images/hero-headline.webp"
              alt="Texte blanc sur fond noir avec un astérisque. Texte: “WE DO” suivi de “TOUT CE DONT VOUS AVEZ BESOIN POUR COMMUNIQUER, ACTIVER ET DÉVELOPPER VOTRE MARQUE.”"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Colonne droite : visuel nuages, encart agrandi par rapport à la colonne gauche */}
          <div className="relative aspect-[657/542] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-clouds.webp"
              alt="Nuages colorés dans un ciel rose et bleu, effet artistique."
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
            {/* Ellipse décorative : doit rester derrière le mot "seul", donc z-index inférieur au texte */}
            <Image
              src="/images/ellipse-blue.png"
              alt=""
              aria-hidden
              width={1907}
              height={1901}
              className="pointer-events-none absolute z-0 opacity-90"
              style={{ left: "42.3%", top: "40%", width: "23.7%", height: "24%" }}
            />
            <h2
              className="font-display absolute z-10 font-normal uppercase leading-[0.95] text-white drop-shadow sm:text-3xl md:text-[clamp(1.8rem,4.6vw,66px)] md:leading-[clamp(1.9rem,4.9vw,70px)]"
              style={{ left: "9%", top: "23%", width: "48%" }}
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
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {expertises.map((exp) => (
              <Link
                key={exp.slug}
                href={`/${exp.slug}`}
                className="group flex aspect-square flex-col items-center justify-center gap-4 bg-white p-4 text-center hover:opacity-90 sm:p-6"
              >
                <div className="relative aspect-square w-[65%]">
                  <Image src={exp.icon} alt="" fill className="object-contain" />
                </div>
                <h3 className="font-display text-[clamp(1rem,2.1vw,26px)] font-normal uppercase leading-[clamp(1.25rem,2.5vw,31px)] text-[#f598ff]">
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
      <section className="relative w-full">
        <Image
          src="/images/brand-collaborations-logos.png"
          alt="Brand Collaborations : logos des marques partenaires du Collectif Sauvage (EuroSIMA, Oxbow, Baiona Marine, fulllife, Anglet Côte Basque, Red Bull, Decathlon, Quiksilver…)"
          width={1440}
          height={330}
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      {/* CTA final */}
      <section className="px-6 py-16 md:py-24">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-card bg-gradient-to-b from-periwinkle-soft to-lavender px-8 py-16 text-white md:px-14 md:py-20">
          <Image
            src="/images/ellipse-pink.png"
            alt=""
            aria-hidden
            width={1907}
            height={1901}
            className="pointer-events-none absolute right-4 top-1/2 h-48 w-48 -translate-y-1/2 opacity-90 md:h-64 md:w-64"
          />
          <h2 className="font-display relative text-3xl uppercase leading-tight md:text-6xl">
            Prêts à se lancer ?
          </h2>
          <div className="relative mt-10 flex flex-wrap items-center gap-4">
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
