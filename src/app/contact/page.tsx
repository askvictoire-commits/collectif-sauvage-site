import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — Collectif Sauvage" };

export default function Contact() {
  return (
    <section className="bg-[#f598ff] px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div className="text-white">
          <h1 className="font-display text-3xl uppercase leading-tight md:text-6xl">
            Nous contacter
          </h1>

          <div className="mt-6 space-y-4 text-lg text-white/90">
            <p>
              Une idée derrière la tête ? Un projet qui mérite mieux qu&apos;un
              devis Excel ? On est tout ouïe.
            </p>
            <p>
              Expliquez-nous vos besoins, votre timing, votre budget (ou votre
              absence de budget, ça arrive) — on vous répond rapidement.
            </p>
            <p>
              Sauf si c&apos;est la pleine lune. Là, on est peut-être en train
              d&apos;hurler à la lune au sommet d&apos;une montagne.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-1 text-lg">
            <a
              href="mailto:hello@collectifsauvage.fr"
              className="font-medium hover:underline"
            >
              hello@collectifsauvage.fr
            </a>
            <a href="tel:+33677936795" className="hover:underline">
              +33 6 77 93 67 95
            </a>
          </div>

          <ContactForm theme="pill" />
        </div>

        <div className="relative aspect-square w-full overflow-hidden lg:sticky lg:top-24">
          <Image
            src="/images/contact-chat-nuages.webp"
            alt="Un chat semblant flotter dans le ciel avec des nuages colorés en bleu et rose en arrière-plan."
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
