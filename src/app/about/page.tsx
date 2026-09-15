import Image from "next/image";
import { team } from "@/lib/site-data";
import Marquee from "@/components/Marquee";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Freelances — Collectif Sauvage" };

export default function About() {
  return (
    <>
      <Marquee
        text="Plusieurs styles, un seul esprit."
        className="border-b border-black/10 py-8 text-4xl md:text-6xl"
      />

      <section className="border-b border-black/10 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {team.map((member) => (
              <a
                key={member.name}
                href={member.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-black/5">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover grayscale transition-all group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-3xl text-black/20">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <p className="mt-3 font-medium">{member.name}</p>
                <p className="text-sm text-black/60">{member.role}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl uppercase md:text-4xl">
            How to be Sauvage
          </h2>
          <div className="mt-6 space-y-4 text-lg text-white/70">
            <p>
              Nous sommes Freelances, indépendants, mais ne nous voyons pas
              comme seuls et isolés.
            </p>
            <p>
              Notre réseau est une force, une faune, un écosystème qui agrège
              toutes sortes de compétences, qui se soutient et se renforce
              mutuellement.
            </p>
            <p>
              Nous croyons en l&apos;échange et en l&apos;ouverture, car nous
              sommes convaincus que les opportunités naissent de la
              rencontre.
            </p>
            <p>
              Aujourd&apos;hui, plus que jamais, notre instinct nous rappelle
              combien il nous tient à cœur de partager, transmettre et
              avancer ensemble.
            </p>
          </div>
          <a
            href="mailto:hello@collectifsauvage.fr"
            className="mt-8 inline-block bg-white px-6 py-3 text-sm font-medium uppercase text-black hover:opacity-80"
          >
            Nous rejoindre
          </a>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl uppercase md:text-4xl">
            Nous contacter
          </h2>
          <p className="mt-4 text-black/70">
            Vous avez envie de travailler avec nous ? Remplissez le
            formulaire et nous vous contacterons rapidement.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
