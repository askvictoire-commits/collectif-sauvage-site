import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — Collectif Sauvage" };

/*
 * Mise en page calquée sur la page Contact Squarespace :
 * colonne texte + formulaire étroite à gauche (~38 % de la largeur),
 * grand visuel portrait arrondi à droite (chat qui dépasse du bord droit),
 * textes plus petits et gros espace entre les coordonnées et le formulaire.
 */
export default function Contact() {
  return (
    <section className="bg-[#f598ff] px-6 pb-24 pt-24 md:px-[4vw] md:pt-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-start lg:gap-[12vw]">
        <div className="text-white lg:pt-6">
          <h1 className="font-display text-4xl uppercase leading-none md:text-[54px]">
            Nous contacter
          </h1>

          <div className="mt-8 space-y-3 text-[16px] leading-[1.3] text-white/90">
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

          <div className="mt-3 flex flex-col text-[16px] leading-[1.3] text-white/90">
            <a href="mailto:hello@collectifsauvage.fr" className="hover:underline">
              hello@collectifsauvage.fr
            </a>
            <a href="tel:+33677936795" className="hover:underline">
              +33 6 77 93 67 95
            </a>
          </div>

          <div className="mt-14 lg:mt-20">
            <ContactForm theme="pill" />
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] lg:aspect-[5/8]">
          <Image
            src="/images/contact-chaton.webp"
            alt="Un chat qui passe la tête dans un ciel de nuages bleus et roses."
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-[68%_top]"
          />
        </div>
      </div>
    </section>
  );
}
