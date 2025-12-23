"use client"

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="dark-blue-gradient text-white text-shadow-2xs flex flex-col items-center justify-center gap-3 py-4 px-4 sm:px-8">
      <nav
        className="
          flex flex-col items-center gap-1 text-center text-sm
          sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-1
        "
      >
        <Link href="/" className="hover:underline">Home</Link>
        <span className="hidden sm:inline">|</span>

        <Link href="/information" className="hover:underline">Information</Link>
        <span className="hidden sm:inline">|</span>

        <Link href="/treatments" className="hover:underline">Treatments</Link>
        <span className="hidden sm:inline">|</span>

        <Link href="/cosmetic-treatments" className="hover:underline">Cosmetic Treatments</Link>
        <span className="hidden sm:inline">|</span>

        <Link href="/dental-health" className="hover:underline">Dental Health</Link>
        <span className="hidden sm:inline">|</span>

        <Link href="/meet" className="hover:underline">Meet Us</Link>
        <span className="hidden sm:inline">|</span>

        <Link href="/contact" className="hover:underline">Contact Us</Link>
        <span className="hidden sm:inline">|</span>

        <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
      </nav>

      <div
        className="
          flex flex-col items-center text-center text-xs sm:text-sm
          sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2
        "
      >
        <p className="wrap-break-words">
          <Link href="https://maps.app.goo.gl/Wdxh4zkUZZTqabpbA">636 74th Street Brooklyn, NY 11209</Link>
        </p>
        <span className="hidden sm:inline">|</span>
        <p className="whitespace-nowrap">(718) 745-6699</p>
      </div>

      <div className="text-xs sm:text-sm">
        <a
          href="https://samuelsharivker.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Designed by SJS © 2025
        </a>
      </div>
    </footer>
  );
}