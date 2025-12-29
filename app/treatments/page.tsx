"use client";

import Link from "next/link";

export default function Treatments() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100">
      <section
        className="flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Treatments
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          Comprehensive restorative and cosmetic dental care tailored to your
          needs — explore our treatment options below.
        </p>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { href: "/treatments/bridges", label: "Dental Bridges" },
            { href: "/treatments/crowns", label: "Dental Crowns" },
            { href: "/treatments/dentures", label: "Dentures" },
            { href: "/treatments/extractions", label: "Tooth Extractions" },
            { href: "/treatments/fillings", label: "Fillings / Restorations" },
            { href: "/treatments/implants", label: "Dental Implants" },
            {
              href: "/treatments/root-canal",
              label: "Non-Surgical Root Canal",
            },
            { href: "/treatments/sealants", label: "Dental Sealants" },
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
