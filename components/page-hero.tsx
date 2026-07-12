interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-[#e4d9c2] bg-[#fbf6ec] px-6 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl leading-tight text-[#3d2b1f] md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base text-[#5a4632] md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
