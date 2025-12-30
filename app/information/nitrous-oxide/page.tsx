"use client";

import Link from "next/link";

export default function Nitrous_Oxide() {
  return (
    <div>
      <Link
        href="/information"
        className="inline-block px-4 py-2 border border-blue-950 rounded-md
                     bg-slate-50 shadow-sm text-sm sm:text-base
                     hover:bg-blue-950 hover:text-white hover:cursor-grab
                     transition-all duration-200"
      >
        ← Back to Information
      </Link>
      <p>Nitrous Oxide Page</p>
    </div>
  );
}
