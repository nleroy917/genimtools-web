import { greet } from "genimtools"

export default function Home() {

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <button
        onClick={() => alert(greet("Nathan"))}
        className="shadow-inner bg-white border-2 border-black hover:bg-gray-100 text-gray-800 font-bold py-1 px-4 rounded-md inline-flex items-center"
      >
        Click me
      </button>
    </main>
  )
}
