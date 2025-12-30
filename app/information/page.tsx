"use client";

import Link from "next/link";

export default function Information() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100">
      <section
        className="flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Patient Information
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          Helpful resources to prepare for your visit and learn more about our
          policies, technology, and patient care experience.
        </p>
      </section>

      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              href: "/information/advanced-technology",
              label: "Advanced Technology",
            },
            {
              href: "/information/financial-policy",
              label: "Financial Policy",
            },
            { href: "/information/first-visit", label: "First Visit" },
            {
              href: "/information/infection-control",
              label: "Infection Control",
            },
            { href: "/information/insurance", label: "Insurance" },
            { href: "/information/nitrous-oxide", label: "Nitrous Oxide" },
            { href: "/information/scheduling", label: "Scheduling" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 flex flex-col
                         justify-between gap-3 border border-transparent
                         hover:border-blue-900 hover:bg-white hover:shadow-lg
                         transition-all duration-200"
            >
              <p className="font-semibold text-xl sm:text-2xl text-blue-950">
                {label}
              </p>
              <span className="text-sm sm:text-base underline underline-offset-4 text-blue-900">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
