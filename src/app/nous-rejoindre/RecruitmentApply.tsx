"use client";

import { useRef, useState, type FormEvent } from "react";
import { contact } from "@/lib/site-data";

const criteria = [
  "J'ai plusieurs années d'expérience professionnelle solide dans mon métier.",
  "J'ai déjà mes propres clients et une activité qui tourne.",
  "Je gère seul·e mes devis, mon planning, ma relation client et mes projets.",
  "Je vis et je travaille au Pays Basque ou dans les Landes.",
  "Je viens pour le collectif et ses valeurs, pas pour trouver des clients.",
  "Je prendrais soin d'un client qu'on me confie comme s'il était le mien.",
];

export default function RecruitmentApply() {
  const [checked, setChecked] = useState<boolean[]>(criteria.map(() => false));
  const [revealed, setRevealed] = useState(false);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState("");
  const revealRef = useRef<HTMLDivElement>(null);
  const addrRef = useRef<HTMLElement>(null);

  const count = checked.filter(Boolean).length;
  const allChecked = count === criteria.length;

  function toggle(i: number) {
    const next = checked.map((v, j) => (j === i ? !v : v));
    setChecked(next);
    if (next.some((v) => !v)) setRevealed(false);
  }

  function reveal() {
    if (!allChecked) return;
    setRevealed(true);
    requestAnimationFrame(() =>
      revealRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea")
    );
    const bad: Record<string, boolean> = {};
    fields.forEach((el) => {
      if (!el.checkValidity()) bad[el.name] = true;
    });
    setInvalid(bad);
    if (Object.keys(bad).length) {
      setSent(false);
      return;
    }
    const data = new FormData(form);
    const v = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Candidature Collectif Sauvage – ${v("name")} – ${v("job")}`;
    const body = `${v("message")}\n\n—\n${v("name")}\n${v("job")}\n${v("email")}`;
    setSent(true);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied("Copiée !");
    } catch {
      if (addrRef.current) {
        const r = document.createRange();
        r.selectNodeContents(addrRef.current);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(r);
      }
      setCopied("Adresse sélectionnée");
    }
  }

  const badCount = Object.keys(invalid).length;
  const fld = (name: string, extra = "") =>
    `fld${extra ? ` ${extra}` : ""}${invalid[name] ? " bad" : ""}`;

  return (
    <section className="apply" id="candidater">
      <div className="wrap apply-grid">
        <div>
          <p className="eyebrow peri-t" style={{ marginBottom: 18 }}>
            Candidater
          </p>
          <h2>
            Toujours <br />
            <span className="stroke-t">Sauvage&nbsp;?</span>
          </h2>
          <p className="intro">
            Avant de nous écrire, fais le point honnêtement. Si les six cases sont
            cochées, on a hâte de te lire.
          </p>
        </div>

        <div className="check">
          <h3>Le check avant d&apos;écrire</h3>
          <p className="sub">Coche uniquement ce qui est vrai aujourd&apos;hui.</p>
          {criteria.map((label, i) => (
            <div className="opt" key={i}>
              <input
                type="checkbox"
                id={`c${i + 1}`}
                checked={checked[i]}
                onChange={() => toggle(i)}
              />
              <label htmlFor={`c${i + 1}`}>{label}</label>
            </div>
          ))}
          <div className="progress">
            <span className="count" aria-live="polite">
              {count} / {criteria.length} cochées
              {count > 0 && !allChecked ? ` · il en manque ${criteria.length - count}` : ""}
            </span>
            <button className="btn pink" type="button" disabled={!allChecked} onClick={reveal}>
              Voir comment candidater
            </button>
          </div>

          {revealed && (
            <div className="reveal" ref={revealRef}>
              <h4>Ce qu&apos;on aimerait savoir de toi</h4>
              <ol>
                <li><b>Ton métier et ta spécialité</b>, en une phrase.</li>
                <li><b>Où tu es basé·e</b> et depuis combien de temps tu es freelance.</li>
                <li><b>Ton portfolio</b> et 2 ou 3 clients ou projets récents.</li>
                <li><b>Ce que tu apporterais au collectif</b>, plutôt que ce que tu en attends.</li>
                <li><b>Qui tu es et ce qui te donne envie</b> : parle-nous de toi, de tes projets, de ce que tu aimes faire.</li>
              </ol>
              <p className="human">
                Chaque candidature est un cas particulier. On cherche avant tout à créer
                du lien, alors écris-nous comme tu te présenterais autour d&apos;un café.
              </p>

              <form className="apply-form" noValidate onSubmit={submit}>
                <h4>Candidater via le formulaire</h4>
                <div className="f2">
                  <div className={fld("name")}>
                    <label htmlFor="fn">Prénom &amp; nom</label>
                    <input id="fn" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div className={fld("email")}>
                    <label htmlFor="em">E-mail</label>
                    <input id="em" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div className={fld("job", "full")}>
                    <label htmlFor="job">Métier &amp; spécialité</label>
                    <input id="job" name="job" type="text" required />
                  </div>
                  <div className={fld("message", "full")}>
                    <label htmlFor="msg">Parle-nous de toi</label>
                    <textarea
                      id="msg"
                      name="message"
                      rows={6}
                      placeholder="Qui tu es, ton portfolio, tes clients et projets récents, ce que tu apporterais au collectif…"
                      required
                    />
                  </div>
                </div>
                <div className="send">
                  <button className="btn pink up" type="submit">
                    Envoyer ma candidature
                  </button>
                  <span className="ferr" aria-live="polite">
                    {badCount
                      ? badCount > 1
                        ? `${badCount} champs à compléter ou corriger.`
                        : "1 champ à compléter ou corriger."
                      : ""}
                  </span>
                </div>
                {sent && (
                  <p className="fok">
                    Ta messagerie s&apos;ouvre avec ta candidature pré-remplie. Il ne te
                    reste qu&apos;à l&apos;envoyer.
                  </p>
                )}
              </form>

              <div className="or">
                <span>ou écris-nous directement</span>
              </div>
              <div className="mail">
                <code ref={addrRef}>{contact.email}</code>
                <a
                  className="btn pink"
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(
                    "Candidature Collectif Sauvage"
                  )}`}
                >
                  Ouvrir ma messagerie
                </a>
                <button className="btn pink" type="button" onClick={copy}>
                  Copier l&apos;adresse
                </button>
                <span className="copied" aria-live="polite">
                  {copied}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
