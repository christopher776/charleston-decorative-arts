const STEPS = [
  "Luxury consultation",
  "Designer collaboration",
  "Historic documentation",
  "Moisture analysis",
  "Wall preparation",
  "Laser layout",
  "Museum standards",
  "Installation guarantee",
];

export function TheDifference() {
  return (
    <section className="bg-[#3d2b1f] px-6 py-24 text-[#f3ead9]">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a959]">
          The Charleston Decorative Arts Difference
        </p>
        <h2 className="mb-14 font-serif text-3xl md:text-4xl">
          A Process Built on Rigor, Not Guesswork
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a959] font-serif text-sm text-[#c9a959]">
                {i + 1}
              </div>
              <p className="text-xs leading-snug text-[#e8dcc4]">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
