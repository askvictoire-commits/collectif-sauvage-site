import type { NextConfig } from "next";

/**
 * Redirections 301 des anciennes URLs Squarespace vers le nouveau site.
 * Les pages principales gardent le même chemin (/about, /contact, /strategie…)
 * et n'ont donc pas besoin de redirection.
 * Ajouter ici toute ancienne URL qui change de chemin : { source, destination, permanent: true }.
 */
const squarespaceRedirects = [
  // Entrée « Expertises » du menu (pas de page dédiée) → accueil
  { source: "/expertises", destination: "/", permanent: true },
  // Pages système / par défaut de Squarespace
  { source: "/home", destination: "/", permanent: true },
  { source: "/accueil", destination: "/", permanent: true },
  { source: "/freelances", destination: "/about", permanent: true },
  { source: "/nous-contacter", destination: "/contact", permanent: true },
  { source: "/cart", destination: "/", permanent: true },
  { source: "/search", destination: "/", permanent: true },
  { source: "/config/:path*", destination: "/", permanent: true },
  { source: "/s/:path*", destination: "/", permanent: true },
];

const nextConfig: NextConfig = {
  async redirects() {
    return squarespaceRedirects;
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
