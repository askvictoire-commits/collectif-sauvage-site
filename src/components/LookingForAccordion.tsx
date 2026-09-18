"use client";

import { useState } from "react";
import { lookingFor } from "@/lib/site-data";

type Freelance = { name: string; href: string };

function renderBodyWithLinks(body: string, freelances: Freelance[]) {
  if (freelances.length === 0) return body;
  const sorted = [...freelances].sort((a, b) => b.name.length - a.name.length);
  const escaped = sorted.map((f) => f.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = body.split(pattern);

  return parts.map((part, i) => {
    const match = freelances.find((f) => f.name === part);
    if (!match) return part;
    return (
      <a
        key={`${match.name}-${i}`}
        href={match.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#f598ff] underline underline-offset-4 hover:opacity-70"
      >
        {part}
      </a>
    );
  });
}

export default function LookingForAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 divide-y-2 divide-white/20 border-t-2 border-b-2 border-white/20">
      {lookingFor.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.need}>
            <button
              className="flex w-full items-center justify-between gap-4 py-6 text-left text-white"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg uppercase tracking-tight md:text-2xl">
                {item.need}
              </span>
              <span
                className={`shrink-0 text-2xl transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <p className="max-w-2xl text-white/70">
                  {renderBodyWithLinks(item.body, item.freelances)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
