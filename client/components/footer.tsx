import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full h-24 border-t max-w-7xl mx-auto px-2">
      <Link className="hover:underline" href="https://github.com/databio/genimtools-web">
        <i className="bi bi-github mr-1"></i>
        GitHub
      </Link>
      <Link className="hover:underline" href="databio.org">
        <i className="bi bi-building mr-1"></i>
        databio.org
      </Link>
    </footer>
  );
}
