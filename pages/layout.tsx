import Head from 'next/head';
import { Fragment } from 'react';
import Nav from './nav';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout(props: Props) {
  const title = props.title || 'Genimtools web';
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={props.description || 'Genimtools web'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="bg-slate-100">
        <main className="flex flex-col min-h-screen max-w-7xl mx-auto w-full">{props.children}</main>
      </div>
    </Fragment>
  );
}
