"use client";

import { useState } from "react";
import { lookingFor } from "@/lib/site-data";

export default function LookingForAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 divide-y divide-black/10 border-t border-b border-black/10">
      {lookingFor.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.need}>
            <button
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
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
                <p className="max-w-2xl text-black/70">{item.body}</p>
                <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm">
                  {item.freelances.map((f, i) => (
                    <span key={f.name + i}>
                      <a
                        href={f.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-4 hover:opacity-70"
                      >
                        {f.name}
                      </a>
                      {i < item.freelances.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
