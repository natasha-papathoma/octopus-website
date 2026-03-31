interface PageHeroProps {
  title: string;
  description: string;
  bgColor: string;
}

export default function PageHero({ title, description, bgColor }: PageHeroProps) {
  return (
    <div
      className="pt-[170px] pb-16 px-12 rounded-b-[48px] relative overflow-hidden"
      style={{ background: bgColor }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          {title}
        </h1>
        <p className="text-white/70 text-lg max-w-[560px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
