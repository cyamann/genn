type MapEmbedProps = {
  title: string;
  query: string;
};

export default function MapEmbed({ title, query }: MapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;

  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_26px_70px_rgba(30,24,18,0.12)]">
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[360px] w-full border-0"
      />
    </div>
  );
}
