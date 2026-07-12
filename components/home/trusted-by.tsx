const GROUPS = [
  "Luxury Interior Designers",
  "Historic Preservation Organizations",
  "Architects",
  "Luxury Homeowners",
  "Museums",
  "Luxury Builders",
];

export function TrustedBy() {
  return (
    <section className="border-b border-[#e4d9c2] bg-[#fbf6ec] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
          Trusted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {GROUPS.map((g) => (
            <span
              key={g}
              className="font-serif text-lg text-[#5a4632]/70"
            >
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
