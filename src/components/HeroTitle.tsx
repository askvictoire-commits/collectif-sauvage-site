import { Fragment, type ReactNode } from "react";

export type HeroMarkStyle = "strike" | "circle" | "underline" | "highlight";
export type HeroMark = { text: string; style: HeroMarkStyle };

/**
 * Titre de hero animé, calqué sur les accroches Squarespace des pages Expertises :
 * le titre apparaît en fondu + léger zoom, puis les mots clés se « dessinent » en rose
 * (barré, entouré, souligné ou surligné). Les retours à la ligne se font avec « \n ».
 * Animations 100 % CSS (voir globals.css, section « Hero expertises »).
 */
export default function HeroTitle({
  title,
  marks = [],
  className = "",
}: {
  title: string;
  marks?: HeroMark[];
  className?: string;
}) {
  const lines = title.split("\n");
  let markIndex = 0;

  const renderLine = (line: string) => {
    const parts: ReactNode[] = [];
    let rest = line;
    while (rest.length) {
      // premier mot-clé présent dans le reste de la ligne
      let best: { i: number; mark: HeroMark } | null = null;
      for (const mark of marks) {
        const i = rest.toLowerCase().indexOf(mark.text.toLowerCase());
        if (i !== -1 && (!best || i < best.i)) best = { i, mark };
      }
      if (!best) {
        parts.push(rest);
        break;
      }
      if (best.i > 0) parts.push(rest.slice(0, best.i));
      const word = rest.slice(best.i, best.i + best.mark.text.length);
      const delay = 0.55 + markIndex * 0.35;
      markIndex += 1;
      parts.push(
        <span
          key={`${best.mark.style}-${best.i}-${markIndex}`}
          className={`hero-mark hero-mark--${best.mark.style}`}
          style={{ ["--mark-delay" as string]: `${delay}s` }}
        >
          <span className="hero-mark__text">{word}</span>
          {best.mark.style === "circle" && (
            <svg className="hero-mark__circle" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden>
              <path
                d="M150 8 C 95 -2, 25 6, 8 42 C -4 70, 45 96, 105 94 C 165 92, 198 70, 192 44 C 187 22, 160 12, 128 10"
                pathLength={1}
              />
            </svg>
          )}
        </span>,
      );
      rest = rest.slice(best.i + best.mark.text.length);
    }
    return parts;
  };

  return (
    <h1 className={`hero-title ${className}`}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {renderLine(line)}
        </Fragment>
      ))}
    </h1>
  );
}
