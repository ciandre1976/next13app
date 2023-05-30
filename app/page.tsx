import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-gray-700  flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-2xl text-white">Next 13 test</h1>
        <ul className="text-xl text-white font-serif font-bold flex m-3">
          <li>
            <Link className="m-4 hover:text-amber-500" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="m-4  hover:text-amber-500" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="m-4  hover:text-amber-500" href="/about/team">
              TeamInFo
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
