"use client";

import Link from "next/link";

export default function Veneers() {
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
          Porcelain Veneers
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          A beautiful, natural-looking solution for enhancing your smile with
          thin, custom-crafted ceramic shells bonded to the front of your teeth.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
            What are porcelain veneers?
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Porcelain veneers are thin shells of ceramic that bond directly to
            the front surfaces of the teeth. They are an ideal choice for
            improving your smile and have become increasingly popular due to
            their simplicity and versatility.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Placing custom veneers requires a high degree of technical skill and
            cosmetic detail. We place veneers routinely and design each case
            individually to match and enhance the natural characteristics of
            each patient’s smile.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Will they look like normal teeth?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              When bonded to the teeth, ultra-thin porcelain veneers are
              virtually undetectable and highly resistant to stains from coffee,
              tea, and even cigarette smoke.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              For strength, durability, and lifelike appearance, their
              resemblance to healthy, natural tooth enamel is unsurpassed by
              other restorative options.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            How durable are porcelain veneers?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              With proper care, porcelain veneers can brighten and enhance your
              smile for well over a decade. We ensure veneers are crafted from
              high-quality porcelains and bonded using advanced, proven dental
              materials.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Avoid using veneers as tools for opening or cutting objects to
              prolong their lifespan. In the event of accidental damage, it is
              usually possible to replace only the affected veneer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
