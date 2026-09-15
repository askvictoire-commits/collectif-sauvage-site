import Link from "next/link";
import { expertises } from "@/lib/site-data";
import LookingForAccordion from "@/components/LookingForAccordion";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/10 px-6 py-24 md:py-36">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-7xl">
            We do tout ce dont vous avez besoin pour communiquer, activer et
            développer votre marque
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="bg-black px-6 py-3 text-sm font-medium uppercase text-white hover:opacity-80"
            >
              Découvrir nos frees
            </Link>
            <Link
              href="/contact"
              className="border border-black px-6 py-3 text-sm font-medium uppercase hover:bg-black hover:text-white"
            >
              Parlons-en ensemble
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="border-b border-black/10 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl uppercase md:text-5xl">
            Comme une agence, mais en mieux
          </h2>
          <p className="mt-6 text-lg text-black/70">
            Une proposition de valeur basée sur des collaborateurs seniors et
            indépendants : l&apos;expertise d&apos;une agence, l&apos;agilité
            et l&apos;implication de freelances qui choisissent leurs
            missions.
          </p>
        </div>
      </section>

      {/* Vous cherchez... */}
      <section className="border-b border-black/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl uppercase md:text-5xl">
            Vous cherchez…
          </h2>
          <LookingForAccordion />
        </div>
      </section>

      {/* Philosophie */}
      <section className="border-b border-black/10 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl uppercase md:text-5xl">
            Collectivement indépendants
          </h2>
          <p className="mt-6 text-lg text-black/70">
            Une association créant un cadre d&apos;entraide pour les
            freelances : agilité, respect mutuel et exigence partagée, pour
            des projets menés avec autant de liberté que de sérieux.
          </p>
        </div>
      </section>

      {/* Expertises */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl uppercase md:text-5xl">
            Nos expertises
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertises.map((exp) => (
              <Link
                key={exp.slug}
                href={`/${exp.slug}`}
                className="group border border-black/10 p-6 hover:border-black"
              >
                <h3 className="font-display text-xl uppercase">{exp.title}</h3>
                <p className="mt-2 text-sm text-black/60">{exp.tagline}</p>
                <span className="mt-4 inline-block text-sm font-medium transition-transform group-hover:translate-x-1">
                  Découvrir →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-black/10 bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl uppercase md:text-5xl">
            Une idée derrière la tête ?
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Un projet qui mérite mieux qu&apos;un devis Excel ? Décrivez-nous
            vos besoins, vos délais et votre budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white px-6 py-3 text-sm font-medium uppercase text-black hover:opacity-80"
          >
            Découvrir l&apos;équipe
          </Link>
        </div>
      </section>
    </>
  );
}
