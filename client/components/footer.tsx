import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
      <Link className="hover:underline" href="databio.org">
        <i className="bi bi-building mr-1"></i>
        databio.org
      </Link>
      <span>
        build: <span>{process.env.GITHUB_SHA?.slice(0, 7) || 'dev'}</span>
      </span>
    </footer>
  );
}
