import type { Metadata } from "next";
import localFont from "next/font/local";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = localFont({
  src: "../fonts/Anton-Regular.ttf",
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Collectif Sauvage — Comme une agence, mais en mieux",
  description:
    "We do tout ce dont vous avez besoin pour communiquer, activer et développer votre marque. Un collectif de freelances indépendants basé à Anglet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${anton.variable} ${epilogue.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink-900 text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
