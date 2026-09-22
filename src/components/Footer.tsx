import Link from "next/link";
import { contact } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-pink text-white">
      <div className="container-ds py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <Link
              href="/"
              className="font-display block text-3xl uppercase leading-tight tracking-tight md:text-5xl"
            >
              Collectif Sauvage
            </Link>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-display text-lg uppercase text-ink-900">
                Nos offres
              </p>
              <Link
                href="/lp-createur-de-contenu"
                className="mt-2 block text-sm hover:underline"
              >
                Pack création de contenu
              </Link>
              <Link
                href="/lp-lancement-de-marque"
                className="block text-sm hover:underline"
              >
                Pack lancement de marque
              </Link>
            </div>
            <div>
              <p className="font-display text-lg uppercase text-ink-900">
                Localisation
              </p>
              <p className="mt-2 max-w-[16ch] text-sm">{contact.address}</p>
            </div>
            <div>
              <p className="font-display text-lg uppercase text-ink-900">
                Contact
              </p>
              <a href={`mailto:${contact.email}`} className="mt-2 block text-sm hover:underline">
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="block text-sm hover:underline"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
