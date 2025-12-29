"use client";

import Link from "next/link";

export default function Bonding() {
  return (
    <div>
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-6">
        <Link
          href="/cosmetic-treatments"
          className="inline-block px-4 py-2 border border-blue-950 rounded-md
                     bg-slate-50 shadow-sm text-sm sm:text-base
                     hover:bg-blue-950 hover:text-white hover:cursor-grab
                     transition-all duration-200"
        >
          ← Back to Cosmetic Treatments
        </Link>
      </div>
      <p>Bonding Page</p>
    </div>
  );
}
