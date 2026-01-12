"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Sokol Dentistry
            </Link>
          </div>

          <div className="hidden lg:flex space-x-8 text-white">
            <Link href="/" className="nav-link hover:font-bold">
              Home
            </Link>
            <Link href="/information" className="nav-link hover:font-bold">
              Information
            </Link>
            <Link href="/treatments" className="nav-link hover:font-bold">
              Treatments
            </Link>
            <Link
              href="/cosmetic-treatments"
              className="nav-link hover:font-bold"
            >
              Cosmetic Treatments
            </Link>
            <Link href="/dental-health" className="nav-link hover:font-bold">
              Dental Health
            </Link>
            <Link href="/meet" className="nav-link hover:font-bold">
              Meet Us
            </Link>
            <Link href="/contact" className="nav-link hover:font-bold">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 transition"
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              {open ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-blue-950">
          <div className="space-y-2 px-4 py-4 text-white">
            <Link href="/" className="nav-link block hover:font-bold">
              Home
            </Link>
            <Link
              href="/information"
              className="nav-link block hover:font-bold"
            >
              Information
            </Link>
            <Link href="/treatments" className="nav-link block hover:font-bold">
              Treatments
            </Link>
            <Link
              href="/cosmetic-treatments"
              className="nav-link block hover:font-bold"
            >
              Cosmetic Treatments
            </Link>
            <Link
              href="/dental-health"
              className="nav-link block hover:font-bold"
            >
              Dental Health
            </Link>
            <Link href="/meet" className="nav-link block hover:font-bold">
              Meet Us
            </Link>
            <Link href="/contact" className="nav-link block hover:font-bold">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
