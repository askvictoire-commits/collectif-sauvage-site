"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="firstName" className="text-sm font-medium">
          Prénom <span className="text-black/40">(obligatoire)</span>
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className="border border-black/20 bg-transparent px-3 py-2 focus:border-black focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="lastName" className="text-sm font-medium">
          Nom de famille <span className="text-black/40">(obligatoire)</span>
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className="border border-black/20 bg-transparent px-3 py-2 focus:border-black focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="email" className="text-sm font-medium">
          Adresse e-mail <span className="text-black/40">(obligatoire)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-black/20 bg-transparent px-3 py-2 focus:border-black focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-black/40">(obligatoire)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="border border-black/20 bg-transparent px-3 py-2 focus:border-black focus:outline-none"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="bg-black px-6 py-3 text-sm font-medium uppercase text-white hover:opacity-80"
        >
          Envoyer
        </button>
        {submitted && (
          <p className="mt-3 text-sm text-black/60">
            Merci ! (formulaire de démonstration — le branchement à un
            service d&apos;envoi réel reste à faire)
          </p>
        )}
      </div>
    </form>
  );
}
