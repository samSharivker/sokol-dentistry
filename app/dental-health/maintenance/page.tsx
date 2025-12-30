"use client";

import Link from "next/link";

export default function Maintenance() {
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
          Periodontal Maintenance
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Protecting the foundation of your smile by managing gum health and
          preventing progression of periodontal disease.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Periodontal diseases are infections of the gums that gradually
            destroy the support of your natural teeth. There are various forms
            of periodontal disease, each requiring different treatment
            approaches. Dental plaque is the primary cause of gum disease in
            genetically susceptible individuals. Daily brushing and flossing
            help prevent most periodontal conditions.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Why is oral hygiene so important?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Adults over 35 lose more teeth to gum diseases (periodontal
              disease) than from cavities. Three out of four adults are affected
              at some point in their lives. The best way to prevent cavities and
              periodontal disease is through proper daily brushing and flossing.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Periodontal disease and decay are both caused by bacterial plaque,
              a colorless film that forms along the gumline. When plaque is not
              removed, it hardens into calculus (tartar), which increases the
              risk of gum infection.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Factors That Can Accelerate Gum Disease
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-3">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Although plaque is the primary cause of periodontal disease, other
              factors can worsen its progression, including:
            </p>
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              <li>Smoking</li>
              <li>Diabetes</li>
              <li>Stress</li>
              <li>Clenching or grinding teeth</li>
              <li>Certain medications</li>
              <li>Poor nutrition</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            How Periodontal Disease Progresses
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Bacteria in plaque produce toxins that irritate the gums, causing
              redness, swelling, and bleeding. Over time, the gums can separate
              from the teeth, forming pockets where more bacteria accumulate.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              As the disease advances, gum tissue and supporting bone begin to
              deteriorate. If left untreated, this damage can lead to loose
              teeth and eventual tooth loss.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Preventing Gum Disease
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              The best defense against gum disease is consistent daily brushing
              and flossing combined with regular professional examinations and
              cleanings. Even with excellent home care, periodontal disease may
              still develop — once it begins, professional treatment and ongoing
              periodontal maintenance are essential to prevent its progression.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
