import Link from "next/link";
import Image from "next/image";
import { expertises, brandNames } from "@/lib/site-data";
import LookingForAccordion from "@/components/LookingForAccordion";
import Marquee from "@/components/Marquee";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/10 px-6 py-24 md:py-36">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
            We do tout ce dont vous avez besoin pour communiquer, activer et
            développer votre marque
          </h1>
          <div className="relative flex aspect-4/3 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-300 via-sky-300 to-emerald-200 p-8 text-center">
            <h2 className="font-display text-3xl uppercase leading-tight text-white drop-shadow md:text-4xl">
              Plusieurs styles, un seul esprit
            </h2>
            <Link
              href="/about"
              className="mt-8 inline-block bg-white px-6 py-3 text-sm font-medium uppercase text-black hover:opacity-80"
            >
              Découvrir nos frees
            </Link>
          </div>
        </div>
      </section>

      {/* Bandeau déroulant */}
      <Marquee
        text="Comme une agence mais en mieux."
        className="border-b border-black/10 py-8 text-4xl md:text-6xl"
      />

      {/* Vous cherchez... + Collectivement indépendants (colonne) */}
      <section className="border-b border-black/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="font-display text-3xl uppercase md:text-5xl">
              Vous cherchez…
            </h2>
            <LookingForAccordion />
          </div>

          <div className="lg:pt-16">
            <h2 className="font-display text-2xl uppercase md:text-3xl">
              Collectivement indépendants !
            </h2>
            <div className="mt-6 space-y-4 text-black/70">
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
              className="mt-8 inline-block bg-black px-6 py-3 text-sm font-medium uppercase text-white hover:opacity-80"
            >
              Découvrez tous nos talents →
            </Link>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="border-b border-black/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl uppercase md:text-5xl">
            Nos expertises
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {expertises.map((exp) => (
              <Link
                key={exp.slug}
                href={`/${exp.slug}`}
                className="group flex flex-col items-center gap-4 border border-black/10 p-6 text-center hover:border-black"
              >
                <Image
                  src={exp.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <h3 className="font-display text-base uppercase leading-tight md:text-lg">
                  {exp.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau déroulant Projets */}
      <Marquee
        text="Nos Projets *"
        className="border-b border-black/10 bg-black py-8 text-4xl text-white md:text-6xl"
      />

      {/* Projets */}
      <section className="border-b border-black/10 py-16">
        <ProjectsCarousel />
      </section>

      {/* Brand collaborations */}
      <section className="border-b border-black/10 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-black/50">
            Brand collaborations
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-black/40">
            {brandNames.map((name) => (
              <span key={name} className="font-display text-lg uppercase">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-black px-6 py-24 text-center text-white">
        <h2 className="font-display text-3xl uppercase md:text-5xl">
          Prêts à se lancer ?
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white px-6 py-3 text-sm font-medium uppercase text-black hover:opacity-80"
          >
            Parlons-en ensemble
          </Link>
          <Link
            href="/about"
            className="border border-white px-6 py-3 text-sm font-medium uppercase hover:bg-white hover:text-black"
          >
            Découvrir l&apos;équipe
          </Link>
        </div>
      </section>
    </>
  );
}
