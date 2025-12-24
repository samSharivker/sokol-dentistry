"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section
        className="
          flex flex-col lg:flex-row
          items-center justify-center
          gap-10
          px-6 sm:px-10 lg:px-20
          min-h-[85vh]
          shadow-xl
        "
      >
        <div
          className="
            flex flex-col
            max-w-2xl
            gap-6
            text-slate-800
            text-center lg:text-left
            mt-8 lg:mt-0
          "
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-medium leading-tight">
            General Dentistry
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl leading-relaxed">
            The best thing you can wear is a smile! Call our office today for all
            your dental needs. Proudly serving Bay Ridge since 1982!
          </p>
        </div>

        <div className="w-full sm:max-w-[420px] lg:max-w-[520px] mb-10 lg:mb-0">
          <Image
            src="https://placehold.co/500x400/png"
            alt="home page"
            width={500}
            height={400}
            className="w-full h-auto rounded-sm drop-shadow-sm dark-blue-gradient p-1"
            priority
          />
        </div>
      </section>

      <section
        className="
          flex flex-col
          items-center justify-center
          gap-6
          px-6 sm:px-10 lg:px-20
          py-16 lg:py-24
          bg-slate-200
          text-slate-800
          text-center
          shadow-lg
        "
      >
        <h2 className="font-bold text-4xl sm:text-6xl lg:text-8xl">
          Expertise
        </h2>

        <p className="text-base sm:text-xl lg:text-2xl max-w-4xl leading-12">
          Sokol Dentistry has been bringing dentistry to Bay Ridge since 1982.
          The Sokols practice a full scope of general and cosmetic dentistry with
          expertise ranging from porcelain veneers to dental implants, crowns and
          bridges. The Sokols can now correct a wide variety of so-called permanent
          cosmetic dental problems, and can literally redesign your smile.
        </p>

        <div className="w-full max-w-2xl">
          <Image
            src="/thedoctors.jpg"
            alt="home page"
            width={400}
            height={300}
            className="w-full h-auto rounded-sm drop-shadow-sm p-1 dark-blue-gradient"
          />
        </div>
      </section>
    </div>
  );
}