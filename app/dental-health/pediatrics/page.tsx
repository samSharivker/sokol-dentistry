"use client";

import Link from "next/link";
import Image from "next/image";

export default function Pediatrics() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-6">
        <Link
          href="/dental-health"
          className="inline-block px-4 py-2 border border-blue-950 rounded-md
                     bg-slate-50 shadow-sm text-sm sm:text-base
                     hover:bg-blue-950 hover:text-white hover:cursor-grab
                     transition-all duration-200"
        >
          ← Back to Dental Health
        </Link>
      </div>
      <section
        className="w-full flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Children’s Dentistry
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Gentle, family-friendly dental care to help children build healthy,
          confident smiles from the very beginning.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-6">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
            Pediatric Dentistry
          </p>
          <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] rounded-md overflow-hidden shadow-sm">
            <Image
              src="https://placehold.co/1400x900/png"
              alt="The Fish Room pediatric waiting area placeholder"
              fill
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 80vw,
                     900px"
              className="object-cover"
              priority
            />
          </div>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            The “Fish Room” at Dr. Sokol’s office, designed by local artist
            Angela Perrone, offers a relaxing environment where kids can feel
            comfortable and enjoy their visit to the dentist.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Your Child’s First Visit
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              The first “regular” dental visit should be just after your child’s
              second birthday. These early visits are short and gentle so your
              child can become comfortable in the dental environment.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              You may be asked to sit in the chair and hold your child during
              the exam, or wait in the reception area so a positive relationship
              can form between your child and the dentist.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              We gently examine the teeth and gums, may take X-rays to monitor
              developing permanent teeth, clean the teeth, apply fluoride, and
              review how to care for your child’s smile at home.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Preparing Your Child for Their First Dental Visit
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Prepare your child much like you would for a first haircut or shoe
              fitting — calmly, positively, and with reassurance.
            </p>
            <p className="font-semibold text-base sm:text-lg md:text-xl">
              First-visit tips:
            </p>
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              <li>Take your child for a friendly “preview” of the office</li>
              <li>Read books about visiting the dentist</li>
              <li>Explain what will happen in simple, positive terms</li>
              <li>Share encouraging dental experiences</li>
            </ul>
            <p className="font-semibold text-base sm:text-lg md:text-xl">
              During the first visit, the dentist may:
            </p>
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              <li>Examine the mouth, teeth, and gums</li>
              <li>Evaluate habits such as thumb-sucking</li>
              <li>Check fluoride needs</li>
              <li>Teach brushing and oral care techniques</li>
              <li>Recommend a routine visit schedule</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Preventive Care & Sealants
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Our practice focuses strongly on prevention. Dental sealants —
              thin, protective coatings placed on the chewing surfaces of back
              teeth — help protect against cavities and support lifelong oral
              health.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Cavity Prevention
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Cavities are commonly linked to frequent sugary snacks and
              inconsistent brushing. Healthy habits and good hygiene greatly
              reduce risk.
            </p>
            <p className="font-semibold text-base sm:text-lg md:text-xl">
              Tips for cavity prevention:
            </p>
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              <li>Limit frequent snacking</li>
              <li>Encourage brushing, flossing, and rinsing</li>
              <li>Watch beverage choices</li>
              <li>Avoid sticky candies and snacks</li>
              <li>Serve sweets with meals</li>
              <li>Choose nutritious snacks</li>
            </ul>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Baby teeth are essential — they support chewing, speech, facial
              development, and hold space for permanent teeth. Keeping them
              healthy is key to your child’s overall development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
