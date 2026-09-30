"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/site-data";

// Clé d'accès Web3Forms (compte hello@collectifsauvage.fr, formulaire « Contact site Collectif Sauvage »).
// Clé publique par conception (utilisée côté navigateur) : elle ne permet que d'envoyer vers cette adresse.
// Peut être surchargée par la variable Vercel NEXT_PUBLIC_WEB3FORMS_KEY.
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "a3566971-f219-485d-8ead-014052603c2f";

type Status = "idle" | "sending" | "sent" | "error";

function buildMailto(data: FormData) {
  const name = `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`.trim();
  const body = `${data.get("message") ?? ""}\n\n— ${name}\n${data.get("email") ?? ""}`;
  return `mailto:${contact.email}?subject=${encodeURIComponent(
    `Contact site — ${name}`,
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm({
  theme = "light",
}: {
  theme?: "light" | "pill" | "sauvage";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [mailto, setMailto] = useState<string>(`mailto:${contact.email}`);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Anti-spam : champ caché rempli uniquement par les robots
    if (data.get("botcheck")) return;
    const fallback = buildMailto(data);
    setMailto(fallback);

    if (!WEB3FORMS_KEY) {
      window.location.href = fallback;
      return;
    }

    setStatus("sending");
    const name = `${data.get("firstName")} ${data.get("lastName")}`;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nouveau message du site — ${name}`,
          from_name: "Site Collectif Sauvage",
          name,
          email: data.get("email"),
          replyto: data.get("email"),
          message: data.get("message"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success !== false) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const feedbackClass = `mt-3 text-sm ${isSauvageTone(theme)}`;

  const isPill = theme === "pill";
  const isSauvage = theme === "sauvage";
  const labelClass = isSauvage
    ? "text-sm font-medium uppercase tracking-wide text-pink"
    : isPill
      ? "text-sm font-medium text-white"
      : "text-sm font-medium";
  const noteClass = isSauvage
    ? "normal-case text-pink/60"
    : isPill
      ? "text-white/60"
      : "text-black/40";
  const inputClass = isSauvage
    ? "rounded-full border-none bg-lavender px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pink"
    : isPill
      ? "rounded-full border-none bg-white px-5 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-white"
      : "border border-black/20 bg-transparent px-3 py-2 focus:border-black focus:outline-none";
  const textareaClass = isSauvage
    ? "rounded-3xl border-none bg-lavender px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pink"
    : isPill
      ? "rounded-3xl border-none bg-white px-5 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-white"
      : "border border-black/20 bg-transparent px-3 py-2 focus:border-black focus:outline-none";
  const buttonClass = isSauvage
    ? "rounded-full border border-pink bg-transparent px-8 py-3 text-sm font-normal uppercase tracking-wide text-pink hover:bg-pink hover:text-white"
    : isPill
      ? "rounded-full bg-black px-8 py-3 text-sm font-medium uppercase text-white hover:opacity-80"
      : "bg-black px-6 py-3 text-sm font-medium uppercase text-white hover:opacity-80";

  return (
    <form
      className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
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
        <button
          type="submit"
          disabled={status === "sending"}
          className={`${buttonClass} disabled:cursor-wait disabled:opacity-60`}
        >
          {status === "sending" ? "Envoi…" : "Envoyer"}
        </button>
        <div aria-live="polite">
          {status === "sent" && (
            <p className={feedbackClass}>
              Merci, ton message est bien parti ! On revient vers toi très vite.
            </p>
          )}
          {status === "error" && (
            <p className={feedbackClass}>
              Oups, l&apos;envoi n&apos;a pas fonctionné.{" "}
              <a href={mailto} className="underline">
                Écris-nous directement à {contact.email}
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

function isSauvageTone(theme: "light" | "pill" | "sauvage") {
  return theme === "sauvage"
    ? "text-white/70"
    : theme === "pill"
      ? "text-white/80"
      : "text-black/60";
}
