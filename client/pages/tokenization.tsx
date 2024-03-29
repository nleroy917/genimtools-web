import { count_regions, tokenize_bed_file } from 'genimtools';
import { formatWithCommas } from '@/utils';

import { Fragment, useState } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

export default function Tokenization() {
  const [inputBed, setInputBed] = useState<string | undefined>(undefined);
  const [universeFile, setUniverseFile] = useState<string | undefined>(undefined);
  const [tokens, setTokens] = useState<string | undefined>(undefined);
  const [tokenizing, setTokenizing] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [chrVisualize, setChrVisualize] = useState<string | undefined>(undefined);
  const [startVisualize, setStartVisualize] = useState<number | undefined>(undefined);
  const [endVisualize, setEndVisualize] = useState<number | undefined>(undefined);

  const runTokenization = () => {
    if (!inputBed || !universeFile) alert('Please select a bedfile and universe file');
    if (!inputBed) alert('Please select a bedfile');
    if (!universeFile) alert('Please select a universe file');

    setTokenizing(true);
    const tokens = tokenize_bed_file(universeFile!, inputBed!);
    setTokenizing(false);
    setTokens(tokens);
  };

  return (
    <Layout title="Tokenization" footer={false}>
      <div className="px-2 mt-3 flex flex-row items-center gap-1">
        <Link className="hover:underline" href="/">
          home
        </Link>
        /<span className="font-bold"> tokenization</span>
      </div>
      <div className="flex flex-col md:w1/2 w-full py-8 px-2 gap-2 items-center">
        <div className="flex flex-col md:w-1/2">
          <label className="font-bold">
            1. Select universe
            {universeFile && <span> (Total regions: {formatWithCommas(count_regions(universeFile))})</span>}
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
        <div className="flex flex-col md:w-1/2 w-full">
          <label className="font-bold">
            2. Select bedfile
            {inputBed && <span> (Total regions: {count_regions(inputBed)})</span>}
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
        <div className="flex flex-col md:w-1/2 w-full">
          <label className="font-bold">3. Results</label>
          {!tokens ? (
            <textarea
              rows={10}
              readOnly
              className="border-2 border-black p-2 rounded-md bg-white"
              placeholder="Results will appear here"
            />
          ) : (
            <div className="border-2 border-black rounded-md bg-white py-2">
              {tokens?.split('\n').map((token, i) => (
                <div
                  onMouseEnter={() => {
                    const [chr, start, end] = token.split('\t');
                    setChrVisualize(chr);
                    setStartVisualize(parseInt(start));
                    setEndVisualize(parseInt(end));
                  }}
                  onMouseLeave={() => {
                    setStartVisualize(undefined);
                    setEndVisualize(undefined);
                  }}
                  className="px-2 cursor-pointer hover:bg-slate-100 border-y border-white hover:border-black"
                  key={i}
                >
                  {token}
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-row gap-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 disabled:opacity-70 disabled:hover:bg-blue-500"
              onClick={() => {
                setTokenizing(true);
                runTokenization();
                setTokenizing(false);
              }}
              disabled={!inputBed || !universeFile || tokenizing}
            >
              <i className="bi bi-play-fill mr-1"></i>
              {tokenizing ? 'Tokenizing...' : 'Tokenize'}
            </button>
            <button
              className="shadow-inner bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 disabled:opacity-70 disabled:hover:bg-gray-500"
              onClick={() => {
                navigator.clipboard.writeText(tokens || '');
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
              }}
              disabled={!tokens}
            >
              {copied ? (
                <Fragment>
                  <i className="bi bi-clipboard-check mr-1"></i>
                  Copied!
                </Fragment>
              ) : (
                <Fragment>
                  <i className="bi bi-clipboard mr-1"></i>
                  Copy
                </Fragment>
              )}
            </button>
          </div>
          {chrVisualize && startVisualize && endVisualize && <p className="mt-2">Coming soon!</p>}
          <pre className="mt-2">
            {chrVisualize && startVisualize && endVisualize && (
              <span>
                {chrVisualize}:{startVisualize}-{endVisualize}
              </span>
            )}
          </pre>
        </div>
      </div>
    </Layout>
  );
}
