import Image from "next/image";
import { IMG } from "@/lib/images";

const PROJECTS = [
  { name: "The Battery", image: IMG.battery },
  { name: "South of Broad", image: IMG.southOfBroad },
  { name: "Kiawah Island", image: IMG.kiawah },
  { name: "Historic Churches", image: IMG.church },
];

export function FeaturedProjects() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d1d]">
            Featured Projects
          </p>
          <h2 className="font-serif text-3xl text-[#3d2b1f] md:text-4xl">
            Battery · South of Broad · Kiawah Island · Seabrook Island · Daniel Island · Mount Pleasant
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <div key={p.name} className="group relative h-72 overflow-hidden">
              <Image
                src={p.image}
                alt={`${p.name} luxury interior project by Charleston Decorative Arts`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d13]/70 to-transparent" />
              <p className="absolute bottom-4 left-4 font-serif text-lg text-[#fbf6ec]">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
