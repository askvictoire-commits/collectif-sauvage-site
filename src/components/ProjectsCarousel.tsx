"use client";

import { useRef } from "react";
import { projects } from "@/lib/site-data";

export default function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide"
      >
        {projects.map((p) => (
          <div
            key={p.name}
            className="flex h-64 w-72 shrink-0 snap-start flex-col justify-end bg-black p-6 text-white"
          >
            <h3 className="font-display text-xl uppercase leading-tight">
              {p.name}
            </h3>
            <p className="mt-2 text-xs text-white/60">{p.tags}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-3">
        <button
          onClick={() => scroll(-1)}
          aria-label="Précédent"
          className="h-10 w-10 border border-black/20 hover:bg-black hover:text-white"
        >
          ←
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Suivant"
          className="h-10 w-10 border border-black/20 hover:bg-black hover:text-white"
        >
          →
        </button>
      </div>
    </div>
  );
}
