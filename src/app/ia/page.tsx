import type { Metadata } from "next";
import ExpertisePage from "@/components/ExpertisePage";
import { iaExpertise } from "@/lib/site-data";

// Page accessible par URL directe uniquement : non indexée, absente de la nav, du footer et de l'accueil.
export const metadata: Metadata = {
  title: `${iaExpertise.title} — Collectif Sauvage`,
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function Page() {
  return <ExpertisePage expertise={iaExpertise} />;
}
