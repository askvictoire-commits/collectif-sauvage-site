"use client";

import { useRef } from "react";
import Image from "next/image";
import { projects } from "@/lib/site-data";

export default function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[4vw] pb-2 scrollbar-hide"
      >
        {projects.map((p) => (
          <div
            key={p.name}
            className="group shrink-0 w-[240px] snap-start cursor-pointer sm:w-[260px]"
          >
            {/* Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="260px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Text */}
            <div className="pt-4">
              <h3 className="font-display text-sm font-bold uppercase leading-tight text-white sm:text-base">
                {p.name}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                {p.tags}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-center gap-3">
        <button
          onClick={() => scroll(-1)}
          aria-label="Précédent"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f598ff] text-xl text-[#171d3a] transition-opacity hover:opacity-80"
        >
          ←
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Suivant"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f598ff] text-xl text-[#171d3a] transition-opacity hover:opacity-80"
        >
          →
        </button>
      </div>
    </div>
  );
}
