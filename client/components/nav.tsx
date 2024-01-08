import Link from 'next/link';

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavItem = (props: NavItemProps) => {
  const { href, children } = props;
  return (
    <li className="px-4 py-2 text-gray-800 font-medium hover:text-gray-900 hover:underline">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default function Nav() {
  return (
    <nav className="p-4 border-b-2 border-black shadow-sm">
      <ul className="flex flex-row items-center justify-between">
        <li>
          <Link href="/">
            <h1 className="text-2xl font-extrabold">🧬🕸️ GENIMTOOLS</h1>
          </Link>
        </li>
        <li className="flex">
          <ul className="flex">
            <NavItem href="https://github.com/databio/genimtools">
              <i className="bi bi-github mr-1"></i>
              GitHub
            </NavItem>
            <NavItem href="https://databio.org">
              <i className="bi bi-building mr-1"></i>
              Databio
            </NavItem>
            <NavItem href="/tokenization">
              <i className="bi bi-currency-exchange mr-1"></i>
              Tokenizers
            </NavItem>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
