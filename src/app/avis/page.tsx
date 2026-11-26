import type { Metadata } from "next";
import AvisContent from "./AvisContent";

export const metadata: Metadata = {
  title: "Votre avis · Collectif Sauvage",
  robots: { index: false, follow: false },
};

export default function AvisPage() {
  return <AvisContent />;
}
