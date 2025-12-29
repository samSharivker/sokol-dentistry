"use client";

import Link from "next/link";

export default function Crowns() {
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
          Dental Crowns
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Natural-looking restorations designed to strengthen, protect, and
          transform your smile.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Most dentistry looks like dentistry. Our goal is to provide
            dentistry that is undetectable. We replace existing crowns and
            fillings with restorations that look and feel like your natural
            teeth.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Where damage to a person’s teeth is extreme, and apparently beyond
            repair, we can use porcelain or porcelain “pasted on gold” crowns to
            make the smile appear “as new”. This is an extremely reliable
            technique for repairing the most severe of dental problems, even
            permanently replacing missing teeth to offer a complete smile and a
            functional bite. We are renowned for the quality of our work and the
            fantastic changes we make for people using this technology. These
            treatments are used for a long-lasting correction of major dental
            problems. It is usual for these treatments to last for 20 to 30
            years, which is as close to permanent as dental treatment can get.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            How long does it take to fit a dental crown?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Fitting a crown requires at least two visits to our office.
              Initially, we will remove decay, shape the tooth, and fit it with
              a temporary crown of either plastic or metal.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              On the subsequent visit we will remove the temporary crown, and
              then fit and adjust the final crown. Finally, we will cement the
              crown into place and you have a new beautiful looking tooth.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Key Benefits of Dental Crowns
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              <li>Replaces missing teeth</li>
              <li>Offers support to misshapen teeth or badly broken teeth</li>
              <li>Looks completely natural</li>
              <li>Fixes “smile” and functional chewing problems</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            What are the capabilities of crowns?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Crown and bridgework is a very reliable solution for major dental
              problems caused through accidents, diseases or wear and tear.
              Major problems can usually be corrected using these techniques.
              Material used in these repairs is either high-grade porcelain, or
              porcelain bonded to gold. A higher strength of the porcelain and
              gold materials is recommended to treat the most serious of dental
              problems. Where accidental damage has occurred, resulting in lost
              teeth, or where teeth have broken away through excessive wear, or
              as the result of old fillings breaking, crowns and/or bridges can
              be used as a long-term solution.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Many people have unexplained pain from filled back teeth, which is
              usually due to hairline cracks in the chewing part of the tooth.
              Placing crowns on these teeth relieves the pain and allows a
              return of full dental function for these teeth. In front teeth,
              older fillings can both weaken the teeth and cause “appearance”
              problems due to staining or chipping. Porcelain crowns and bridges
              are suitable in cases where porcelain veneers are not. In teeth
              with root canal fillings, crowns can prevent breakage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
