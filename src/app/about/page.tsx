import { expertises } from "@/lib/site-data";

export const metadata = { title: "Freelances — Collectif Sauvage" };

const team = Array.from(
  new Map(
    expertises.flatMap((e) => e.team).map((m) => [m.name, m])
  ).values()
);

export default function About() {
  return (
    <>
      <section className="border-b border-black/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl uppercase leading-tight md:text-6xl">
            Plusieurs styles, un seul esprit
          </h1>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="border border-black/10 p-5">
                <p className="font-medium">{member.name}</p>
                <p className="mt-1 text-sm text-black/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl uppercase md:text-4xl">
            Nous sommes freelances, indépendants
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Mais nous ne nous voyons pas comme seuls et isolés. Interdépendance,
            partage et création collaborative, tout en préservant l&apos;autonomie
            individuelle : c&apos;est la philosophie du collectif.
          </p>
          <a
            href="mailto:hello@collectifsauvage.fr"
            className="mt-8 inline-block bg-white px-6 py-3 text-sm font-medium uppercase text-black hover:opacity-80"
          >
            Nous rejoindre
          </a>
        </div>
      </section>
    </>
  );
}
