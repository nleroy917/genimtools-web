import Head from 'next/head';
import { Fragment } from 'react';
import Nav from './nav';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  footer?: boolean;
  nav?: boolean;
};

export default function Layout({ children, title, description, footer = true, nav = true }: Props) {
  return (
    <Fragment>
      <Head>
        <title>{title || 'Genimtools web'}</title>
        <meta
          name="description"
          content={
            description ||
            'Performance-critical genomic interval analysis and preprocessors written in rust, target to the browser with WASM.'
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {nav && <Nav />}
      <div className="bg-slate-100">
        <main className="flex flex-col min-h-[calc(100vh-170px)] max-w-7xl mx-auto w-full">{children}</main>
      </div>
      {footer && <Footer />}
      {!footer && <div className="h-24 bg-slate-100"></div>}
    </Fragment>
  );
}
