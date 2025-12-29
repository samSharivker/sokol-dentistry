"use client";

import Link from "next/link";

export default function Fillings() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-6">
        <Link
          href="/treatments"
          className="inline-block px-4 py-2 border border-blue-950 rounded-md
                     bg-slate-50 shadow-sm text-sm sm:text-base
                     hover:bg-blue-950 hover:text-white hover:cursor-grab
                     transition-all duration-200"
        >
          ← Back to Treatments
        </Link>
      </div>
      <section
        className="w-full flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Tooth Fillings & Restorations
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Advanced, natural-looking restorations designed to strengthen and
          protect your teeth while blending seamlessly with your smile.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            At Sokol Dentistry, Dr. Sokol uses the latest advancements in
            materials technology — including beautiful, space-age ceramics and
            tooth-colored resins that match your natural teeth perfectly. These
            porcelain inlays and tooth-colored restorations (onlays) create
            fillings that are not only beautiful and virtually unnoticeable, but
            also add strength to weakened teeth.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Why Choose Tooth-Colored Restorations?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Resin onlays are bonded directly to the tooth using Dr. Sokol’s
              advanced ultrabright bonding system, creating a tight and highly
              secure fit. This bonding process allows restorations to strengthen
              the remaining tooth structure instead of simply filling the space.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              These restorations are especially beneficial when a significant
              portion of the natural tooth has been lost. By keeping the tooth
              intact and reinforcing its structure, they help preserve function,
              durability, and natural appearance.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              <li>Beautiful, natural-looking appearance</li>
              <li>Strong, bonded support for weakened teeth</li>
              <li>Excellent fit and long-lasting durability</li>
              <li>Preserves more of your natural tooth structure</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
