import Image from "next/image";
import type { SchumacherProduct } from "@/lib/schumacher-products";

export function SchumacherProductImage({ product, priority = false }: { product: SchumacherProduct; priority?: boolean }) {
  if (product.image) {
    return <Image src={product.image} alt={`${product.name} by Schumacher`} fill priority={priority} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />;
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#e9dfcd] to-[#c9baa1] p-8 text-center" role="img" aria-label={`${product.name} by Schumacher — official photography forthcoming`}>
      <span className="font-serif text-2xl text-[#3d2b1f]">{product.name}</span>
      <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6f5941]">Official Schumacher photography forthcoming</span>
    </div>
  );
}
