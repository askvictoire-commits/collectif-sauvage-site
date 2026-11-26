import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-pink text-white">
      <div className="container-ds py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-blanc.svg"
                alt="Collectif Sauvage"
                width={280}
                height={77}
                className="h-14 w-auto md:h-20"
              />
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
              {/* Page HTML statique (public/) : <a> et non <Link> pour un chargement complet */}
              <a
                href="/test-ia-masters.html"
                className="block text-sm hover:underline"
              >
                Test IA Masters
              </a>
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
            <div>
              <p className="font-display text-lg uppercase text-ink-900">
                Votre avis
              </p>
              <Link href="/avis" className="mt-2 block text-sm hover:underline">
                Laisser un avis Google
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
