"use client";

import Link from "next/link";

export default function Implants() {
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
          Dental Implants
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Long-lasting, natural-looking tooth replacement designed to restore
          confidence, stability, and function.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Dental implants are designed to provide a foundation for replacement
            teeth that look, feel, and function like natural teeth. Patients who
            have lost teeth regain the ability to eat comfortably and smile with
            confidence, knowing their replacement teeth appear natural and help
            support facial structure.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            The implants are small titanium posts placed into the jawbone where
            teeth are missing. The bone bonds with the titanium, creating a
            strong, stable foundation for artificial teeth — and helping prevent
            bone deterioration that normally occurs after tooth loss.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Dental implants are changing the way people live. With them, many
            patients rediscover the comfort and confidence to eat, speak, laugh,
            and enjoy life again.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Evaluation for Dental Implants
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Dental implants act as tooth-root replacements and are surgically
              placed into the jawbone. Small posts are then attached to the
              implants and extend through the gums, providing secure anchors for
              artificial replacement teeth.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              For most patients, implant treatment occurs in two phases. First,
              the implants are placed in the jawbone and remain beneath the gums
              for three to six months while they bond with the bone. Temporary
              dentures and a soft diet are typically used during this healing
              phase while the final restoration is designed.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Once the implants have integrated with the bone, the second phase
              begins. The surgeon uncovers the implants and attaches a small
              healing collar. Impressions are then taken so posts or attachments
              can be connected to the implants, and the final replacement teeth
              are fabricated and secured in place.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              The full process typically takes six to eight months. Most
              patients experience minimal disruption to their daily routine
              during treatment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
