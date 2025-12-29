"use client";

import Link from "next/link";

export default function Extractions() {
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
          Extractions
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Gentle, careful treatment focused on protecting your comfort and your
          long-term oral health.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            You and Dr. Sokol may determine that you need a tooth extraction for
            any number of reasons. Some teeth are extracted because they are
            severely decayed; others may have advanced periodontal disease, or
            have broken in a way that cannot be repaired. Other teeth may need
            removal because they are poorly positioned in the mouth (such as
            impacted teeth), or in preparation for orthodontic treatment.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            The removal of a single tooth can lead to problems related to your
            chewing ability, your jaw joint, and shifting teeth, which can have
            a major impact on your dental health.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            To help avoid these complications, in most cases Dr. Sokol will
            discuss alternatives to extraction as well as replacement options
            for the extracted tooth.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            The Extraction Process
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              At the time of extraction, the doctor will numb your tooth,
              jawbone, and the gums surrounding the area with a local
              anesthetic.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              During the extraction process you may feel pressure as the tooth
              is gently rocked to widen the socket for removal — this is normal.
              The anesthetic prevents pain, although the nerves that sense
              pressure are not fully numbed.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              If you feel pain at any time during the procedure, please let us
              know immediately.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Sectioning a Tooth
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Some teeth require sectioning. This is a common technique used
              when a tooth is firmly anchored in its socket or when the root is
              curved and the socket cannot expand enough for removal. The doctor
              gently divides the tooth into sections and removes each piece
              individually.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            After Tooth Extraction
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              After tooth extraction, a blood clot must form to stop bleeding
              and begin healing. Bite on a gauze pad for 30–45 minutes
              immediately following your appointment. If bleeding continues,
              replace the gauze and bite firmly for another 30 minutes.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Once the clot forms, do not disturb or dislodge it. Avoid vigorous
              rinsing, straws, smoking, alcohol, or brushing the teeth next to
              the site for 72 hours. Limit strenuous activity for 24 hours as it
              may increase bleeding.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Some swelling and discomfort is normal. Use an ice pack to reduce
              swelling and take pain medication as directed. Swelling typically
              subsides after 48 hours.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Continue antibiotics as prescribed, even if symptoms improve. Eat
              soft, nutritious foods and drink plenty of fluids. Resume normal
              brushing and flossing after 24 hours to support healing.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              If you experience heavy bleeding, severe pain, continued swelling
              after 2–3 days, or a reaction to medication, contact our office
              immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
