"use client";

import Link from "next/link";

export default function Nitrous_Oxide() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-6">
        <Link
          href="/information"
          className="inline-block px-4 py-2 border border-blue-950 rounded-md
                     bg-slate-50 shadow-sm text-sm sm:text-base
                     hover:bg-blue-950 hover:text-white hover:cursor-grab
                     transition-all duration-200"
        >
          ← Back to Information
        </Link>
      </div>
      <section
        className="w-full flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Nitrous Oxide (Laughing Gas)
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          A safe, gentle sedation option that helps anxious patients feel calm
          and comfortable during dental treatment.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Nitrous oxide — invented by a dentist — is a sweet-smelling,
            non-irritating, colorless gas that patients breathe through a
            comfortable nasal mask.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            It has been one of the primary forms of sedation in both dental
            offices and hospital operating rooms for more than 100 years.
            Nitrous oxide is safe: patients receive approximately 50–70% nitrous
            oxide with no less than 30% oxygen at all times.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Patients remain awake, able to breathe on their own, and remain in
            full control of bodily functions. Some patients may experience mild
            amnesia or briefly fall asleep, remembering little of the procedure.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Advantages of Nitrous Oxide
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              <li>
                Sedation depth can be adjusted instantly during treatment.
              </li>
              <li>No lingering “hangover” effect after the appointment.</li>
              <li>
                Safe inhalation sedation with no lasting effects on the heart or
                lungs.
              </li>
              <li>Highly effective at reducing gag reflex sensitivity.</li>
              <li>
                Works rapidly — reaches the brain in about 20 seconds, with
                relaxation and pain-reducing effects developing within minutes.
              </li>
            </ul>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              When combined with local anesthesia, nitrous oxide provides a calm
              and pleasant experience for anxious patients. In some situations,
              consultation with a physician may be recommended if medical
              contraindications exist.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Intravenous Sedation
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Dr. Sokol has worked extensively with medical and dental
              anesthesiologists in both hospital and office settings. When
              necessary, we can arrange for an anesthesiologist to be on-site to
              provide IV sedation for extremely anxious patients.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              To ensure maximum comfort and privacy, the office is closed during
              these procedures, creating a calm and fully focused treatment
              environment for the patient.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
