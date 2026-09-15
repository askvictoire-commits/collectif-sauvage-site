import Link from "next/link";
import type { Expertise } from "@/lib/site-data";

export default function ExpertisePage({ expertise }: { expertise: Expertise }) {
  return (
    <>
      <section className="border-b border-black/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-3xl uppercase leading-tight tracking-tight md:text-6xl">
            {expertise.tagline}
          </h1>
        </div>
      </section>

      <section className="border-b border-black/10 bg-black px-6 py-16 text-white">
        <p className="mx-auto max-w-4xl text-center font-display text-2xl uppercase md:text-4xl">
          {expertise.leitmotiv}
        </p>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {expertise.sections.map((s) => (
              <div key={s.title} className="border-t border-black/10 pt-6">
                <h3 className="font-display text-xl uppercase">{s.title}</h3>
                <p className="mt-3 text-black/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl uppercase md:text-4xl">
            L&apos;équipe {expertise.title.toLowerCase()}
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {expertise.team.map((member) => (
              <div key={member.name} className="border border-black/10 p-4">
                <p className="font-medium">{member.name}</p>
                <p className="mt-1 text-sm text-black/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-black px-6 py-20 text-center text-white">
        <Link
          href="/contact"
          className="inline-block bg-white px-6 py-3 text-sm font-medium uppercase text-black hover:opacity-80"
        >
          Parlons-en ensemble
        </Link>
      </section>
    </>
  );
}
