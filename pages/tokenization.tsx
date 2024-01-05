import { count_regions } from 'genimtools';
import { useState } from 'react';

import Layout from './layout';
import Link from 'next/link';

export default function Tokenization() {
  const [inputBed, setInputBed] = useState<string | undefined>(undefined);
  const [universeFile, setUniverseFile] = useState<string | undefined>(undefined);
  return (
    <Layout title="Tokenization">
      <div className="px-2 mt-3">
        <Link className="font-bold hover:underline" href="/">
          Home
        </Link>
      </div>
      <div className="flex flex-col w-full py-8 px-2 gap-2">
        <div className="flex flex-col md:w-1/2">
          <label className="font-bold">
            1. Select universe
            {universeFile && <span>(Total regions: {count_regions(universeFile)})</span>}
          </label>
          <input
            type="file"
            className="border-2 border-black rounded-md p-2 bg-white"
            onChange={(e) => {
              if (!e.target.files) return;
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (e) => {
                const text = e.target?.result;
                setUniverseFile(text?.toString());
              };
              reader.readAsText(file);
            }}
          />
        </div>
        <div className="flex flex-col md:w-1/2">
          <label className="font-bold">
            2. Select bedfile
            {inputBed && <span>(Total regions: {count_regions(inputBed)})</span>}
          </label>
          <input
            type="file"
            className="border-2 border-black rounded-md p-2 bg-white"
            onChange={(e) => {
              if (!e.target.files) return;
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (e) => {
                const text = e.target?.result;
                setInputBed(text?.toString());
              };
              reader.readAsText(file);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold">3. Results</label>
          <div className="border-2 border-black p-2 rounded-md bg-white">
            <pre>{inputBed && universeFile ? 'Running' : 'No results yet'}</pre>
          </div>
        </div>
      </div>
    </Layout>
  );
}
