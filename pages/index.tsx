import { count_regions } from 'genimtools';
import { useState } from 'react';

export default function Home() {
  const [inputBed, setInputBed] = useState<string>('');
  const [universe, setUniverse] = useState<string>('tiles1000.hg38.bed');
  const runCount = () => {
    const totalRegions = count_regions(inputBed);
    alert('Total regions: ' + totalRegions);
  };
  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      <div className="flex flex-col">
        <label className="font-bold">1. Select universe</label>
        <select
          className="border-2 border-black rounded-md p-2 bg-white"
          value={universe}
          onChange={(e) => setUniverse(e.target.value)}
        >
          <option value="tiles1000.hg38.bed">tiles1000.hg38.bed</option>
          <option value="tiles1000.hg19.bed">tiles1000.hg19.bed</option>
          <option value="tiles1000.mm10.bed">tiles1000.mm10.bed</option>
        </select>
      </div>
      <div>
        <label className="font-bold">2. Paste bedfile</label>
        <textarea
          placeholder="Paste your bed file here"
          className="w-full h-96 border-2 border-black rounded-md p-2"
          value={inputBed}
          onChange={(e) => setInputBed(e.target.value)}
        />
      </div>
      <div className="flex flex-row">
        <button
          onClick={() => runCount()}
          className="shadow-inner bg-green-400 border-2 border-black hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded-md inline-flex items-center"
        >
          Click me
        </button>
      </div>
    </main>
  );
}
