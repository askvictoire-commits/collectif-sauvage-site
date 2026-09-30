import Image from "next/image";
import type { Expertise } from "@/lib/site-data";
import Marquee from "@/components/Marquee";
import HeroTitle from "@/components/HeroTitle";

export default function ExpertisePage({ expertise }: { expertise: Expertise }) {
  return (
    <>
      <section className="bg-ink-900 px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <HeroTitle
            title={expertise.heroTitle}
            marks={expertise.heroMarks}
            className="font-display text-[32px] font-normal uppercase leading-[36px] text-white md:text-[46px] md:leading-[51px]"
          />
          {expertise.heroSubtitle && (
            <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-lg text-white/70">
              {expertise.heroSubtitle}
            </p>
          )}
        </div>
      </section>

      <Marquee
        text={expertise.banner}
        duration={60}
        className="bg-ink-900 py-8 text-4xl text-pink md:text-6xl"
      />

      <section className="bg-ink-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {expertise.sections.map((s) => (
              <div key={s.title} className="border-t border-white/10 pt-6">
                <h3 className="font-display text-xl uppercase text-pink">
                  {s.title}
                </h3>
                <p className="mt-3 text-white/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-24">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="font-display text-2xl uppercase md:text-4xl">
            Découvrez notre équipe
          </h2>
          {/* Mise en page calquée sur le site Squarespace : 5 pastilles max par ligne sur toute la largeur,
              puis retour à la ligne (dernière ligne centrée). Nom sur 1 ligne, rôle sur 2 lignes minimum ;
              les cartes d'une même ligne ont la même hauteur et le rôle absorbe l'écart,
              donc les CTA restent strictement alignés. */}
          <div className="mt-14 flex flex-wrap justify-center gap-y-14">
            {expertise.team.map((member) => (
              <div
                key={member.name}
                className="flex w-full flex-col items-center px-3 text-center sm:w-1/2 md:w-1/3 lg:w-1/5"
              >
                <div className="relative aspect-square w-[100px] shrink-0 overflow-hidden rounded-full bg-black/5">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="100px"
                      className="object-cover grayscale transition-all hover:grayscale-0"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-2xl text-black/20">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <p
                  className="mt-4 h-[28px] whitespace-nowrap font-display uppercase text-pink"
                  style={{ fontSize: "24px", lineHeight: "28px" }}
                >
                  {member.name}
                </p>
                <p
                  className="mt-1 min-h-[42px] max-w-[260px] flex-1 text-balance text-white"
                  style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: "21px" }}
                >
                  {member.role}
                </p>
                {member.href && (
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-full border border-pink px-7 py-3 text-[13px] uppercase text-pink transition-colors hover:bg-pink hover:text-white"
                  >
                    Découvrir
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
