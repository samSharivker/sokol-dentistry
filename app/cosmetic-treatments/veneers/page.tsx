"use client";

import Link from "next/link";

export default function Veneers() {
  return (
    <div>
      <Link
        href="/cosmetic-treatments"
        className="inline-block px-4 py-2 border border-blue-950 rounded-md
                     bg-slate-50 shadow-sm text-sm sm:text-base
                     hover:bg-blue-950 hover:text-white hover:cursor-grab
                     transition-all duration-200"
      >
        ← Back to Cosmetic Treatments
      </Link>
      <p>Veneers Page</p>
    </div>
  );
}
