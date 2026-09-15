export default function HighlightedTitle({
  title,
  highlight,
  className = "",
  highlightClassName = "text-[#f598ff]",
}: {
  title: string;
  highlight: string;
  className?: string;
  highlightClassName?: string;
}) {
  const idx = title.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) {
    return <span className={className}>{title}</span>;
  }
  const before = title.slice(0, idx);
  const match = title.slice(idx, idx + highlight.length);
  const after = title.slice(idx + highlight.length);
  return (
    <span className={className}>
      {before}
      <span className={highlightClassName}>{match}</span>
      {after}
    </span>
  );
}
