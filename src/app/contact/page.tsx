import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — Collectif Sauvage" };

export default function Contact() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl uppercase leading-tight md:text-6xl">
          Nous contacter
        </h1>

        <div className="mt-6 space-y-4 text-lg text-black/70">
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
          <a href="mailto:hello@collectifsauvage.fr" className="font-medium hover:underline">
            hello@collectifsauvage.fr
          </a>
          <a href="tel:+33677936795" className="hover:underline">
            +33 6 77 93 67 95
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
