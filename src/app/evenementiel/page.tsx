import type { Metadata } from "next";
import ExpertisePage from "@/components/ExpertisePage";
import { eventExpertise } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `${eventExpertise.title} — Collectif Sauvage`,
};

export default function Page() {
  return <ExpertisePage expertise={eventExpertise} />;
}
