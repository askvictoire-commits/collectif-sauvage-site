import ExpertisePage from "@/components/ExpertisePage";
import { expertises } from "@/lib/site-data";

const expertise = expertises.find((e) => e.slug === "social-media")!;

export const metadata = {
  title: `${expertise.title} — Collectif Sauvage`,
};

export default function Page() {
  return <ExpertisePage expertise={expertise} />;
}
