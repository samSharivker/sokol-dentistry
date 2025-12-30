"use client";

import Link from "next/link";

export default function Infection_Control() {
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
          Infection Control
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Rigorous, modern infection control protocols to protect you, our team,
          and our community at every visit.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Infection controls and universal precautions protect clients and
            staff alike. Everyone benefits from rigorous infection control —
            you, your dentist, and the entire dental team. The cornerstone of a
            safe dental practice is trust, and we want you to feel comfortable
            discussing any aspect of our infection control procedures with us.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Standards We Follow
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Dr. Sokol and our entire team follow procedures recommended by
              several federal agencies, including:
            </p>
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              <li>Occupational Safety &amp; Health Administration (OSHA)</li>
              <li>Environmental Protection Agency (EPA)</li>
              <li>Centers for Disease Control and Prevention (CDC)</li>
            </ul>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 mt-2">
              Our infection control measures include:
            </p>
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              <li>Disinfectant hand soap</li>
              <li>Gloves and face masks</li>
              <li>Chemical disinfection of countertops and surfaces</li>
              <li>Sterilization of all equipment before and after every use</li>
              <li>Use of disposable materials whenever appropriate</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Going Above and Beyond
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="italic text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              “At my office I have gone above and beyond OSHA requirements to
              protect my patients and my staff. I installed an ultraviolet water
              sterilization system to ensure that only treated water is emitted
              from my equipment during all dental procedures. A separate UV
              system was installed to treat the air we breathe throughout the
              office to significantly eliminate airborne pathogens.”
              <span className="not-italic"> – Dr. Sokol</span>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            How We Clean and Sterilize Instruments
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              After each patient, instruments are carefully cleaned prior to
              sterilization in our state-of-the-art Sci-Can chemical instrument
              washer. This step removes all debris from the instruments and
              makes them safer for our staff to handle during the sterilization
              process.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              We then sterilize all reusable equipment, including dental hand
              pieces, using a digital autoclave — a device that kills bacteria
              and viruses with precisely measured steam, heat, and pressure.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Informed Patients Are Protected Patients
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              The best defense against disease is information. The more you
              know, the better equipped you are to make wise decisions about
              your health care. The more you understand our daily procedures and
              policies, the more comfortable and confident you can feel in our
              care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
