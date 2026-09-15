"use client";

import { useState } from "react";

export default function ContactForm({
  theme = "light",
}: {
  theme?: "light" | "pill" | "sauvage";
}) {
  const [submitted, setSubmitted] = useState(false);

  const isPill = theme === "pill";
  const isSauvage = theme === "sauvage";
  const labelClass = isSauvage
    ? "text-sm font-medium uppercase tracking-wide text-[#f598ff]"
    : isPill
      ? "text-sm font-medium text-white"
      : "text-sm font-medium";
  const noteClass = isSauvage
    ? "normal-case text-[#f598ff]/60"
    : isPill
      ? "text-white/60"
      : "text-black/40";
  const inputClass = isSauvage
    ? "rounded-full border-none bg-[#8790d6] px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#f598ff]"
    : isPill
      ? "rounded-full border-none bg-white px-5 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-white"
      : "border border-black/20 bg-transparent px-3 py-2 focus:border-black focus:outline-none";
  const textareaClass = isSauvage
    ? "rounded-3xl border-none bg-[#8790d6] px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#f598ff]"
    : isPill
      ? "rounded-3xl border-none bg-white px-5 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-white"
      : "border border-black/20 bg-transparent px-3 py-2 focus:border-black focus:outline-none";
  const buttonClass = isSauvage
    ? "rounded-full border border-[#f598ff] bg-transparent px-8 py-3 text-sm font-normal uppercase tracking-wide text-[#f598ff] hover:bg-[#f598ff] hover:text-[#171d3a]"
    : isPill
      ? "rounded-full bg-black px-8 py-3 text-sm font-medium uppercase text-white hover:opacity-80"
      : "bg-black px-6 py-3 text-sm font-medium uppercase text-white hover:opacity-80";

  return (
    <form
      className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="firstName" className={labelClass}>
          Prénom <span className={noteClass}>(obligatoire)</span>
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="lastName" className={labelClass}>
          Nom de famille <span className={noteClass}>(obligatoire)</span>
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="email" className={labelClass}>
          Adresse e-mail <span className={noteClass}>(obligatoire)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message <span className={noteClass}>(obligatoire)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={textareaClass}
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className={buttonClass}>
          Envoyer
        </button>
        {submitted && (
          <p className={`mt-3 text-sm ${isSauvage ? "text-white/70" : isPill ? "text-white/80" : "text-black/60"}`}>
            Merci ! (formulaire de démonstration — le branchement à un
            service d&apos;envoi réel reste à faire)
          </p>
        )}
      </div>
    </form>
  );
}
