import type { Metadata } from "next";
import Marquee from "@/components/Marquee";
import RecruitmentApply from "./RecruitmentApply";
import "./recrutement.css";

export const metadata: Metadata = {
  title: "Nous rejoindre — Collectif Sauvage",
  description:
    "Le Collectif Sauvage réunit une vingtaine de freelances seniors du Pays Basque et des Landes. Profil recherché, fonctionnement du collectif et candidature.",
};

/* eslint-disable @next/next/no-img-element */
export default function NousRejoindre() {
  return (
    <div className="rec">

  {/* HERO */}
  <section className="hero">
    <img className="ast" src="/images/recrutement/asterisk.webp" alt="" />
    <div className="wrap">
      <div>
        <h1>Rejoindre<br />le <span className="hl-ellipse">collectif<img src="/images/recrutement/ellipse.webp" alt="" /></span><br /><span className="stroke-t">Sauvage&nbsp;?</span></h1>
      </div>
      <div>
        <p className="lede">Le collectif réunit des <strong>freelances seniors, déjà installé·es</strong>, qui partagent des valeurs, un réseau et parfois des clients. Pour ça, il faut pouvoir se faire confiance <strong>les yeux fermés</strong>. Lis cette page avant de nous écrire&nbsp;: elle te dira en 3 minutes si c&apos;est le bon endroit pour toi.</p>
        <div className="cta-row">
          <a className="btn" href="#profil">Le profil recherché</a>
          <a className="btn" href="#candidater">Candidater</a>
        </div>
      </div>
    </div>
  </section>

  <Marquee
    text="Seniors, autonomes, déjà installé·es."
    duration={40}
    className="py-8 text-4xl text-pink md:text-6xl"
  />

  {/* CE QUE C'EST / N'EST PAS */}
  <section>
    <div className="wrap">
      <div className="sec-head">
        <h2>Un partage de valeurs <span className="pink-t">avant</span> un partage de business</h2>
        <p>Le collectif n&apos;est pas une agence et ne fait pas de prospection. Les projets arrivent de façon organique, par le réseau de chacun. Si tu cherches des clients, on n&apos;est pas la bonne porte d&apos;entrée.</p>
      </div>
      <div className="split">
        <div className="yes">
          <h3><i>✓</i>Le collectif, c&apos;est</h3>
          <ul>
            <li><b>Un réseau de confiance</b><span>On ouvre notre carnet d&apos;adresses aux autres membres, parce qu&apos;on sait comment ils travaillent.</span></li>
            <li><b>Un passage de relais humain</b><span>Quand une partie du projet sort de ta spécialité, tu confies ton client à quelqu&apos;un dont c&apos;est le métier.</span></li>
            <li><b>Un univers commun pour tes clients</b><span>Ton client reste dans la famille Sauvage, et tu gardes de la visibilité sur son projet.</span></li>
            <li><b>Un petit groupe qui se connaît</b><span>Une vingtaine de freelances au maximum, qui travaillent et passent du temps ensemble.</span></li>
          </ul>
        </div>
        <div className="no">
          <h3><i>✕</i>Le collectif, ce n&apos;est pas</h3>
          <ul>
            <li><b>Un apporteur d&apos;affaires</b><span>On ne va pas chercher de clients pour toi. Rejoindre le collectif ne remplira pas ton agenda.</span></li>
            <li><b>Une agence qui distribue du travail</b><span>Personne ne répartit les projets. Chacun gère ses clients, ses devis et sa facturation.</span></li>
            <li><b>Une structure d&apos;accompagnement</b><span>Pas d&apos;encadrement, pas de formation, pas de mentorat pour démarrer une activité.</span></li>
            <li><b>Un annuaire national</b><span>On reste volontairement local pour pouvoir se voir, se connaître et bosser ensemble pour de vrai.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* RELAIS */}
  <section className="relay">
    <div className="wrap">
      <div className="sec-head">
        <h2>Comment ça marche <span className="stroke-t">entre nous</span></h2>
        <p>Chaque membre arrive avec son métier et ses clients. Le collectif sert à ne jamais laisser un client sans solution quand une compétence nous manque.</p>
      </div>
      <ol className="steps">
        <li><b>Tu as ton client</b><p>Tu le suis sur ton métier, avec tes process, ta relation commerciale et ta gestion de projet.</p></li>
        <li><b>Un besoin sort de ta spécialité</b><p>Un site, une stratégie social media, une identité visuelle… ce n&apos;est pas ton cœur de métier.</p></li>
        <li><b>Un·e membre prend le relais</b><p>Tu fais les présentations toi-même. Le client rencontre quelqu&apos;un en qui tu as confiance.</p></li>
        <li><b>Le client reste chez Sauvage</b><p>Il ne part pas ailleurs, tu gardes un œil sur son projet et la relation reste humaine.</p></li>
      </ol>
      <div className="quote">
                <p>Tes clients deviennent un peu les nôtres, et les nôtres un peu les tiens. C&apos;est pour ça qu&apos;on <em>recrute peu</em>, et qu&apos;on recrute solide.</p>
      </div>
    </div>
  </section>

  {/* PROFIL */}
  <section id="profil">
    <div className="wrap">
      <div className="sec-head">
        <h2>Tu es au <span className="pink-t">bon endroit</span> si…</h2>
        <p>Ces critères sont tous nécessaires. Il ne s&apos;agit pas d&apos;en cocher la majorité&nbsp;: un profil brillant qui ne coche pas l&apos;un d&apos;eux ne pourra pas rejoindre le collectif pour l&apos;instant.</p>
      </div>
      <div className="fit">
        <div className="card"><span className="tag">Expérience</span><span className="k">Tu es senior</span><p>Plusieurs années d&apos;expérience professionnelle solide dans ton métier, en freelance ou avant de l&apos;être.</p></div>
        <div className="card"><span className="tag">Clientèle</span><span className="k">Tu as déjà tes clients</span><p>Un catalogue de références et une activité qui tourne. Tu n&apos;as pas besoin de nous pour trouver du travail.</p></div>
        <div className="card"><span className="tag">Autonomie</span><span className="k">Tu as tes process</span><p>Devis, planning, suivi, facturation, relation client&nbsp;: tu gères ton métier et ta gestion de projet sans être encadré·e.</p></div>
        <div className="card"><span className="tag">Confiance</span><span className="k">On peut te confier nos clients</span><p>Tu prends soin des gens qu&apos;on te présente comme s&apos;ils étaient les tiens. Ta réputation est aussi la nôtre.</p></div>
        <div className="card"><span className="tag">Territoire</span><span className="k">Tu vis au Pays Basque ou dans les Landes</span><p>Le but est de se croiser, de travailler ensemble et de passer du temps ensemble, pas d&apos;échanger à distance.</p></div>
        <div className="card"><span className="tag">État d&apos;esprit</span><span className="k">Tu as envie de collectif</span><p>Tu viens pour le lien et les valeurs partagées. Le business qui en découle est une conséquence, pas l&apos;objectif.</p></div>
      </div>
      <div className="notfor">
        <h3>Ce n&apos;est pas pour toi si…</h3>
        <ul>
          <li><b>Tu sors d&apos;école</b> ou tu lances tout juste ton activité.</li>
          <li><b>Tu as besoin d&apos;être accompagné·e</b> pour structurer ta façon de travailler.</li>
          <li><b>Tu cherches d&apos;abord des clients</b> ou du travail «&nbsp;facile&nbsp;» qu&apos;on te transmettrait.</li>
          <li><b>Tu es installé·e loin</b> du Pays Basque et des Landes.</li>
        </ul>
      </div>
    </div>
  </section>

  {/* UN POSTE UNE PERSONNE */}
  <section className="seats">
    <div className="wrap">
      <div className="sec-head">
        <h2>Un métier, <span className="peri-t">une personne</span></h2>
        <p>On évite de recruter plusieurs profils sur le même poste. L&apos;idée est que chacun ait une charge de travail qui lui convient, sans concurrence interne ni négociation à chaque nouveau projet pour savoir qui prend quoi.</p>
      </div>
      <div className="note">
        <div><b>Les exceptions existent</b>Sur les métiers créatifs, des univers et des démarches différentes selon les secteurs ont du sens. Même chose quand les membres d&apos;un pôle sont déjà surbookés. On regarde au cas par cas.</div>
        <div><b>Une vingtaine au maximum</b>Le collectif restera petit. Si ton métier est déjà représenté, ta candidature peut être excellente et rester en attente d&apos;une place.</div>
      </div>
    </div>
  </section>

      <RecruitmentApply />
    </div>
  );
}
