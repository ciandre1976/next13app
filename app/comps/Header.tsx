import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-blue-800 text-blue-100 p-1 ">
      <header className="text-xl flex">
        <Link
          className="p-5 text-bold text-2xl border-spacing-3 text-orange-400 "
          href="/"
        >
          sasas Team
        </Link>
        <Link className="p-5" href="/">
          Home
        </Link>
        <Link className="p-5" href="/about/">
          About
        </Link>
        <Link className="p-5" href="/about/team">
          Our Team
        </Link>
        <Link className="p-5 text-orange-700" href="/code/repos">
          Code
        </Link>
      </header>
    </div>
  );
}
