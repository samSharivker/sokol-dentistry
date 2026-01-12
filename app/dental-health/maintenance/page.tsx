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
        <div className="mx-auto max-w-5xl flex flex-col gap-8">
          <div className="text-center sm:text-left">
            <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
              How Periodontal Disease Progresses
            </p>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl">
              Periodontal disease develops in stages. Early diagnosis and
              ongoing maintenance play a critical role in preserving gum health
              and bone support.
            </p>
          </div>

          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <div className="relative">
              <div className="absolute left-[18px] top-0 bottom-0 w-px bg-blue-950/15" />
              <ol className="flex flex-col gap-10">
                {[
                  {
                    title: "Gingivitis",
                    badge: "Early · Reversible",
                    icon: "shield-check",
                    text: "Plaque accumulates along the gumline, allowing bacteria to irritate the gums. This stage is marked by redness, swelling, and bleeding during brushing or flossing.",
                  },
                  {
                    title: "Early Periodontitis",
                    badge: "Pockets Form",
                    icon: "exclamation-triangle",
                    text: "As inflammation continues, gums begin separating from the teeth, creating pockets where bacteria thrive. Plaque may harden into calculus, requiring professional removal.",
                  },
                  {
                    title: "Moderate Periodontitis",
                    badge: "Bone Support Affected",
                    icon: "bounding-box",
                    text: "The infection spreads deeper, damaging gum tissue and the bone supporting the teeth. Symptoms may include gum recession, chronic bad breath, and increased sensitivity.",
                  },
                  {
                    title: "Advanced Periodontitis",
                    badge: "Risk of Tooth Loss",
                    icon: "x-octagon",
                    text: "Significant bone loss can cause teeth to loosen or shift. Without treatment, this stage may result in tooth loss and the need for advanced periodontal therapy.",
                  },
                ].map((stage, i) => (
                  <li key={i} className="relative pl-14 sm:pl-16">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white shadow-sm">
                      <i className={`bi bi-${stage.icon} text-lg`} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-lg sm:text-xl text-blue-950">
                          {stage.title}
                        </p>
                        <span className="text-xs sm:text-sm px-2 py-1 rounded-full bg-blue-950/10 text-blue-950">
                          {stage.badge}
                        </span>
                      </div>
                      <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-slate-800">
                        {stage.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 rounded-md border border-blue-950/10 bg-blue-950/[0.04] p-4 sm:p-5 flex gap-3">
              <i className="bi bi-info-circle-fill text-blue-950 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-slate-700">
                <span className="font-semibold text-blue-950">
                  Clinical insight:
                </span>{" "}
                Early intervention can often reverse gum inflammation. Once bone
                loss occurs, ongoing periodontal maintenance is essential to
                control disease progression.
              </p>
            </div>
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
