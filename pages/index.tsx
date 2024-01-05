import Link from 'next/link';
import Layout from './layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-3 p-8">
        <div className="mb-5">
          <h2 id="about" className="text-3xl font-bold mb-2">
            About
          </h2>
          <p className="text-xl">
            Genimtools is a set of performance-critical tools for manipulating genomic data written in Rust. To enable
            ease of use, we have written WASM bindings for the tools and created a web interface.
          </p>
          <p className="text-xl mt-3">
            <Link className="text-blue-600 underline" href="https://github.com/databio/genimtools">
              🦀 Genimtools
            </Link>{' '}
            is a project by{' '}
            <Link className="text-blue-600 underline" href="https://databio.org">
              Databio
            </Link>
            .
          </p>
        </div>
        <div className="mb-5">
          <h2 className="text-3xl font-bold mb-2">Tools</h2>
          <p className="mb-2 text-xl">The following tools are implemented in this interface:</p>
          <ul className="list-disc list-inside text-xl">
            <li>
              <Link className="text-blue-600 underline" href="/tokenization">
                🪙 Tokenizers
              </Link>
            </li>
            <li>
              <Link className="text-blue-600 underline" href="/">
                🪐 Universe creation (<i>coming soon</i>)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
