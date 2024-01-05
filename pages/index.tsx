import { count_regions } from 'genimtools';
import { useState } from 'react';

export default function Home() {
  const [inputBed, setInputBed] = useState<string>('');
  const [universeFile, setUniverseFile] = useState<string>('');

  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      <div className="flex flex-col">
        <label className="font-bold">1. Select universe</label>
        <input
          type="file"
          className="border-2 border-black rounded-md p-2"
          onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
              const text = e.target.result;
              setUniverseFile(text.toString());
            };
            reader.readAsText(file);
          }}
        />
      </div>
      <div>
        <label className="font-bold">2. Select bedfile</label>
        <input
          type="file"
          className="border-2 border-black rounded-md p-2"
          onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
              const text = e.target.result;
              setInputBed(text.toString());
            };
            reader.readAsText(file);
          }}
        />
      </div>
      {/* <div className="flex flex-row gap-2">
        <button
          onClick={() => runCount()}
          className="shadow-inner bg-green-400 border-2 border-black hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded-md inline-flex items-center"
        >
          Click me
        </button>
      </div> */}
      <div className="flex flex-col">
        <label className="font-bold">3. Results</label>
      </div>
    </main>
  );
}
