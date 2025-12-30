"use client";

import Link from "next/link";
import Image from "next/image";

export default function First_visit() {
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
          First Visit
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          What to expect at your first appointment — and how to help us provide
          you with the safest, most efficient care.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Your initial appointment will consist of a consultation explaining
            your diagnosis and treatment options. In some cases, treatment may
            be performed the same day as the consultation. However, patients
            with complex medical histories or treatment plans may require an
            evaluation and a follow-up appointment on another day.
          </p>
          <p className="font-semibold text-base sm:text-lg md:text-xl mt-2">
            Please bring the following to your first visit:
          </p>
          <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            <li>A list of medications you are currently taking</li>
            <li>
              Dental insurance information (to help us process claims
              efficiently)
            </li>
          </ul>
          <p className="font-semibold text-base sm:text-lg md:text-xl">
            IMPORTANT:
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            A parent or guardian must accompany all patients under 18 years of
            age to the consultation visit.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Please notify our office prior to your visit if you have a medical
            condition such as diabetes, high blood pressure, artificial heart
            valves or joints, rheumatic fever, or if you are taking medications
            such as heart medications, aspirin, or anticoagulants — or if your
            physician requires you to pre-medicate with antibiotics before
            dental cleanings or surgery.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            X-Rays
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-6">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Dr. Sokol is proud to provide the safety and convenience of
              digital X-rays. Digital imaging uses up to 75% less radiation and
              images are available within seconds. These images can also be
              securely emailed to specialists or insurance companies for faster
              coordination of care.
            </p>
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] rounded-md overflow-hidden shadow-sm">
              <Image
                src="https://placehold.co/1400x800/png"
                alt="Panoramic dental X-ray placeholder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 80vw,
                       900px"
                priority
              />
            </div>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Our digital panoramic machine provides a full view of the upper
              and lower jaws, sinuses, TMJ joints, nasal structures, and teeth.
              It helps us evaluate wisdom teeth, detect cysts or tumors, and
              monitor growth and development in pediatric patients — all without
              placing film inside the mouth, making it ideal for patients with a
              strong gag reflex or dental anxiety.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              If your previous dentist has taken recent X-rays (within the past
              12 months), please request that they email (preferred) or mail
              them to our office prior to your appointment.
            </p>
          </div>
        </div>
      </section>
      <div className="pb-20" />
    </div>
  );
}
