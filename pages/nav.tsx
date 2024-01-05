import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className="p-4 border-b-2 border-black shadow-sm">
      <div className="flex flex-row items-center">
        <Link href="/">
          <h1 className="text-4xl font-extrabold mb-3">🧬🕸️ Genimtools</h1>
        </Link>
      </div>
    </nav>
  );
};
