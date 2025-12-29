"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-950">
              Sokol Dentistry
            </Link>
          </div>
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="hover:text-blue-950 hover:font-bold">
              Home
            </Link>
            <Link
              href="/information"
              className="hover:text-blue-950 hover:font-bold"
            >
              Information
            </Link>
            <Link
              href="/treatments"
              className="hover:text-blue-950 hover:font-bold"
            >
              Treatments
            </Link>
            <Link
              href="/cosmetic-treatments"
              className="hover:text-blue-950 hover:font-bold"
            >
              Cosmetic Treatments
            </Link>
            <Link
              href="/dental-health"
              className="hover:text-blue-950 hover:font-bold"
            >
              Dental Health
            </Link>
            <Link href="/meet" className="hover:text-blue-950 hover:font-bold">
              Meet Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-950 hover:font-bold"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-950 hover:bg-gray-200"
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
        <div className="lg:hidden border-t bg-slate-100">
          <div className="space-y-2 px-4 py-4">
            <Link
              href="/"
              className="block hover:text-blue-950 hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/information"
              className="block hover:text-blue-950 hover:font-bold"
            >
              Information
            </Link>
            <Link
              href="/treatments"
              className="block hover:text-blue-950 hover:font-bold"
            >
              Treatments
            </Link>
            <Link
              href="/cosmetic-treatments"
              className="block hover:text-blue-950 hover:font-bold"
            >
              Cosmetic Treatments
            </Link>
            <Link
              href="/dental-health"
              className="block hover:text-blue-950 hover:font-bold"
            >
              Dental Health
            </Link>
            <Link
              href="/meet"
              className="block hover:text-blue-950 hover:font-bold"
            >
              Meet Us
            </Link>
            <Link
              href="/contact"
              className="block hover:text-blue-950 hover:font-bold"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
