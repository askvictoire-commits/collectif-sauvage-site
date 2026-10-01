import type { Metadata } from "next";
import ExpertisePage from "@/components/ExpertisePage";
import { iaExpertise } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `${iaExpertise.title} — Collectif Sauvage`,
};

export default function Page() {
  return <ExpertisePage expertise={iaExpertise} />;
}
