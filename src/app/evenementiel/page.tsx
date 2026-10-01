import type { Metadata } from "next";
import ExpertisePage from "@/components/ExpertisePage";
import { eventExpertise } from "@/lib/site-data";

// Page accessible par URL directe uniquement : non indexée, absente de la nav, du footer et de l'accueil.
export const metadata: Metadata = {
  title: `${eventExpertise.title} — Collectif Sauvage`,
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function Page() {
  return <ExpertisePage expertise={eventExpertise} />;
}
