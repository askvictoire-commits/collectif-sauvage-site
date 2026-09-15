import Link from "next/link";
import { contact } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#f598ff] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="font-display max-w-2xl text-2xl uppercase leading-tight tracking-tight md:text-4xl">
          Collectivement indépendants, indéfectiblement Sauvages !
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/30 pt-8 text-sm md:grid-cols-3">
          <div>
            <p className="uppercase tracking-wide text-white/70">Contact</p>
            <a href={`mailto:${contact.email}`} className="mt-2 block hover:underline">
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-1 block hover:underline">
              {contact.phone}
            </a>
          </div>
          <div>
            <p className="uppercase tracking-wide text-white/70">Adresse</p>
            <p className="mt-2">{contact.address}</p>
          </div>
          <div>
            <p className="uppercase tracking-wide text-white/70">Navigation</p>
            <div className="mt-2 flex flex-col gap-1">
              <Link href="/about" className="hover:underline">
                Freelances
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-12 text-xs text-white/70">
          © {new Date().getFullYear()} Collectif Sauvage
        </p>
      </div>
    </footer>
  );
}
