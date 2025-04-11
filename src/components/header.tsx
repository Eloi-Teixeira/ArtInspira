import Link from "next/link";

export default async function Header() {
  return (
    <header className="h-20 bg-white text-black px-4 shadow-md fixed top-0 w-full z-10">
      <div className="flex justify-between items-center h-full max-w-6xl mx-auto">
        <p className="text-[#5c4ff0] font-bold text-2xl">Art<span className="text-[#f26d85]">Inspira</span></p>
        <div className="flex gap-6">
          <Link href={'/'}>
          Sobre
          </Link>
          <Link href={'/'}>
          Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
