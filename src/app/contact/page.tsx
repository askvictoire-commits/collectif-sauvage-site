import { contact } from "@/lib/site-data";

export const metadata = { title: "Contact — Collectif Sauvage" };

export default function Contact() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-3xl uppercase leading-tight md:text-6xl">
          Une idée derrière la tête ?
        </h1>
        <p className="mt-6 text-lg text-black/70">
          Un projet qui mérite mieux qu&apos;un devis Excel ? Décrivez-nous vos
          besoins, vos délais et votre budget. Si on ne répond pas tout de suite,
          c&apos;est qu&apos;on est peut-être en train d&apos;hurler à la lune au
          sommet d&apos;une montagne.
        </p>

        <div className="mt-12 flex flex-col items-center gap-2 text-lg">
          <a href={`mailto:${contact.email}`} className="font-medium hover:underline">
            {contact.email}
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:underline">
            {contact.phone}
          </a>
          <p className="mt-2 text-black/60">{contact.address}</p>
        </div>
      </div>
    </section>
  );
}
