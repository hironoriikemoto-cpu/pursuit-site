export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-medium tracking-wide text-emerald-900">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold leading-snug md:text-3xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-700">
          {description}
        </p>
      )}
    </div>
  );
}
