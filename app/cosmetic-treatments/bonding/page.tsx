"use client";

import Link from "next/link";

export default function Bonding() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
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
      <section
        className="w-full flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Bonding
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          A versatile cosmetic treatment used to restore chipped, cracked,
          discolored, or misaligned teeth and enhance your natural smile.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Bonding is an alternative to veneers and can be used as a
            restorative procedure for teeth that are chipped, cracked,
            discolored, or misarranged.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            How Does It Work?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              The tooth is prepared by lightly etching the surface and applying
              a bonding liquid. Once the liquid sets, a plastic resin is applied
              and sculpted into the desired shape by the dentist.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              After the material is set, the resin is trimmed, smoothed, and
              polished to achieve a natural appearance that blends with the
              surrounding teeth.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Considerations
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              The bonding procedure can often be completed in a single office
              visit and can significantly improve the appearance of a tooth.
              However, the plastic resin used is not as strong as natural tooth
              enamel and is more likely to stain, chip, or break.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Bonding typically lasts three to five years before requiring
              repair or maintenance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
