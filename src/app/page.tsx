import Link from "next/link";
import Image from "next/image";
import { expertises } from "@/lib/site-data";
import LookingForAccordion from "@/components/LookingForAccordion";
import Marquee from "@/components/Marquee";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import HighlightedTitle from "@/components/HighlightedTitle";

export default function Home() {
  return (
    <div className="bg-[#171d3a] text-white">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <Image
            src="/images/hero-headline.webp"
            alt="Texte blanc sur fond noir avec un astérisque. Texte: “WE DO” suivi de “TOUT CE DONT VOUS AVEZ BESOIN POUR COMMUNIQUER, ACTIVER ET DÉVELOPPER VOTRE MARQUE.”"
            width={695}
            height={623}
            className="h-auto w-full"
            priority
          />
          <div className="relative flex aspect-square w-full flex-col items-start justify-center overflow-hidden rounded-2xl p-8 text-left md:p-10">
            <Image
              src="/images/hero-clouds.webp"
              alt="Nuages colorés dans un ciel rose et bleu, effet artistique."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <Image
              src="/images/ellipse-white.png"
              alt=""
              aria-hidden
              width={1907}
              height={1901}
              className="pointer-events-none absolute -right-6 bottom-4 h-40 w-40 opacity-80 md:h-56 md:w-56"
            />
            <h2 className="font-display relative text-3xl uppercase leading-[0.95] text-[#f598ff] drop-shadow md:text-5xl">
              Plusieurs styles,
              <br />
              un seul esprit
            </h2>
            <Link
              href="/about"
              className="relative mt-10 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-[#f598ff] hover:opacity-90"
            >
              Découvrir nos frees
            </Link>
          </div>
        </div>
      </section>

      {/* Bandeau déroulant */}
      <Marquee
        text="Comme une agence mais en mieux."
        duration={40}
        className="py-8 text-4xl text-[#f598ff] md:text-6xl"
      />

      {/* Vous cherchez... + Collectivement indépendants (colonne) */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="font-display text-3xl uppercase text-[#f598ff] md:text-5xl">
              Vous cherchez…
            </h2>
            <LookingForAccordion />
          </div>

          <div className="lg:pt-16">
            <h2 className="font-display text-2xl uppercase text-[#f598ff] md:text-3xl">
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
            <Link
              href="/about"
              className="mt-8 inline-block bg-[#f598ff] px-6 py-3 text-sm font-medium uppercase text-[#171d3a] hover:opacity-80"
            >
              Découvrez tous nos talents →
            </Link>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl uppercase md:text-5xl">
            Nos expertises
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {expertises.map((exp) => (
              <Link
                key={exp.slug}
                href={`/${exp.slug}`}
                className="group flex flex-col items-center justify-center gap-6 bg-white p-6 text-center aspect-square hover:opacity-90"
              >
                <Image
                  src={exp.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
                <h3 className="font-display text-base uppercase leading-tight text-black md:text-lg">
                  <HighlightedTitle title={exp.title} highlight={exp.titleHighlight} />
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
        className="py-8 text-4xl text-[#f598ff] md:text-6xl"
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
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[32px] bg-gradient-to-b from-[#a9b3f2] to-[#7b83e8] px-8 py-16 text-white md:px-14 md:py-20">
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
            <Link
              href="/contact"
              className="rounded-full border border-white px-6 py-3 text-sm font-medium uppercase hover:bg-white hover:text-[#171d3a]"
            >
              Parlons en ensemble
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white px-6 py-3 text-sm font-medium uppercase hover:bg-white hover:text-[#171d3a]"
            >
              Découvrir l&apos;équipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
