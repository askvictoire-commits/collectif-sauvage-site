export default function Marquee({
  text,
  className = "",
  repeat = 8,
}: {
  text: string;
  className?: string;
  repeat?: number;
}) {
  const items = Array.from({ length: repeat });
  const group = (
    <div className="flex shrink-0 items-center">
      {items.map((_, i) => (
        <span key={i} className="font-display mx-4 inline-block uppercase">
          {text}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="animate-marquee flex w-max">
        {group}
        {group}
      </div>
    </div>
  );
}
