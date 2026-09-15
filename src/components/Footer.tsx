import Link from "next/link";
import { contact } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#f598ff] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <Link
              href="/"
              className="font-display block text-3xl uppercase leading-tight tracking-tight md:text-5xl"
            >
              Collectif Sauvage
            </Link>
            <p className="mt-4 text-sm text-white/90">
              Conçu avec{" "}
              <a
                href="https://www.squarespace.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                Squarespace
              </a>
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-display text-lg uppercase text-[#171d3a]">
                Localisation
              </p>
              <p className="mt-2 max-w-[16ch] text-sm">{contact.address}</p>
            </div>
            <div>
              <p className="font-display text-lg uppercase text-[#171d3a]">
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
