interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <div>
      <span className="inline-block text-xs uppercase tracking-[3px] text-purple-dark font-bold bg-purple-pale px-4 py-1.5 rounded-full mb-4">
        {tag}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-text-dark leading-tight mb-5 -tracking-wide">
        {title}
      </h2>
      {description && (
        <p className="text-base text-text-mid leading-relaxed max-w-[640px] mb-12">
          {description}
        </p>
      )}
    </div>
  );
}
