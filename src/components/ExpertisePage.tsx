import Image from "next/image";
import type { Expertise } from "@/lib/site-data";
import Marquee from "@/components/Marquee";

export default function ExpertisePage({ expertise }: { expertise: Expertise }) {
  return (
    <>
      <section className="bg-ink-900 px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl uppercase leading-tight tracking-tight md:text-6xl">
            {expertise.heroTitle}
          </h1>
          {expertise.heroSubtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
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
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl uppercase md:text-4xl">
            Découvrez notre équipe
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-10">
            {expertise.team.map((member) => (
              <div key={member.name} className="w-32 text-center sm:w-36">
                <div className="relative mx-auto aspect-square w-28 overflow-hidden rounded-full bg-black/5 md:w-32">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="128px"
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
                <p className="mt-4 font-display uppercase text-pink" style={{ fontSize: "19px", lineHeight: "22px" }}>
                  {member.name}
                </p>
                <p className="mt-1 text-white" style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: "21px" }}>{member.role}</p>
                {member.href && (
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-full border border-pink px-5 py-2 text-xs font-medium uppercase text-pink hover:bg-pink hover:text-white"
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
