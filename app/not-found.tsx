import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-4xl text-[#3d2b1f]">Page Not Found</h1>
      <p className="mt-4 text-sm text-[#5a4632]">
        The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 border-b border-[#8a6d1d] text-xs font-semibold uppercase tracking-widest text-[#8a6d1d]"
      >
        Return Home
      </Link>
    </div>
  );
}
