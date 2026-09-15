import Image from "next/image";
import { team } from "@/lib/site-data";
import Marquee from "@/components/Marquee";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Freelances — Collectif Sauvage" };

export default function About() {
  return (
    <div className="bg-[#171d3a] text-white">
      <Marquee
        text="Plusieurs styles, un seul esprit."
        duration={40}
        className="py-8 text-4xl text-[#a9b3f2] md:text-6xl"
      />

      {/* Grille des freelances */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-4">
            {team.map((member) => {
              const photoBlock = (
                <div className="relative aspect-square w-full overflow-hidden rounded-full bg-white/10">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover grayscale"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-3xl text-white/30">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
              );
              const content = (
                <>
                  {photoBlock}
                  <p className="font-display mt-4 uppercase leading-tight">
                    {member.name}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{member.role}</p>
                </>
              );
              return member.href ? (
                <a
                  key={member.name}
                  href={member.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  {content}
                </a>
              ) : (
                <div key={member.name} className="group">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to be Sauvage */}
      <section className="relative overflow-hidden px-6 py-20 text-[#171d3a] md:py-28">
        <Image
          src="/images/hero-clouds.webp"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="shrink-0">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              className="text-[#a9b3f2]"
              aria-hidden
            >
              <path
                d="M28 2v52M6 12l44 32M50 12 6 44M2 28h52"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="mt-5 text-lg font-bold uppercase tracking-wide">
              How to be
            </p>
            <p className="font-display text-6xl uppercase leading-[0.85] text-transparent [-webkit-text-stroke:2px_#a9b3f2] md:text-7xl">
              Sauvage
            </p>
          </div>

          <div className="max-w-xl space-y-4 text-center text-lg md:text-left">
            <p>
              Nous sommes Freelances, indépendants, mais ne nous voyons pas
              comme seuls et isolés.
            </p>
            <p>
              Notre réseau est une force, une faune, un écosystème qui agrège
              toutes sortes de compétences, qui se répondent et se
              nourrissent les unes des autres.
            </p>
            <p>
              Nous croyons en l&apos;échange et en l&apos;ouverture, car nous
              sommes convaincus que les opportunités naissent dans le
              partage.
            </p>
            <p>
              Aujourd&apos;hui, plus que jamais, notre instinct nous rappelle
              combien il nous tient à cœur de partager et de créer ensemble,
              tout en protégeant et valorisant notre indépendance.
            </p>
          </div>

          <a
            href="mailto:hello@collectifsauvage.fr"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#a9b3f2] px-8 py-4 text-sm font-normal uppercase tracking-wide text-[#a9b3f2] hover:bg-[#a9b3f2] hover:text-[#171d3a]"
          >
            Nous rejoindre
          </a>
        </div>
      </section>

      {/* Nous contacter */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-4xl uppercase text-[#f598ff] md:text-6xl">
              Nous contacter
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Vous avez envie de travailler avec nous ? Remplissez le
              formulaire et nous vous contacterons rapidement.
            </p>
          </div>
          <ContactForm theme="sauvage" />
        </div>
      </section>
    </div>
  );
}
