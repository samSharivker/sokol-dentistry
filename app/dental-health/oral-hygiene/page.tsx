"use client";

import Link from "next/link";

export default function Oral_Hygiene() {
  const brushSteps = [
    {
      title: "Choose the right brush",
      icon: "brush",
      text: "Use a soft to medium toothbrush. Replace it every 3–4 months, or sooner if bristles fray.",
    },
    {
      title: "Angle at 45°",
      icon: "compass",
      text: "Position the bristles at a 45-degree angle where the gums and teeth meet.",
    },
    {
      title: "Gentle circular strokes",
      icon: "arrow-repeat",
      text: "Move in small, gentle circles on the outside surfaces. Light pressure is key—no scrubbing.",
    },
    {
      title: "Clean inner surfaces",
      icon: "layout-text-window-reverse",
      text: "Repeat on the inside of the back teeth. For front teeth, hold the brush vertically and use gentle up-and-down strokes.",
    },
    {
      title: "Brush the chewing surfaces",
      icon: "grid-3x3-gap",
      text: "Use short, gentle strokes on the biting surfaces to reach grooves and pits.",
    },
    {
      title: "Don’t forget the gums + rinse",
      icon: "droplet",
      text: "Gently brush the surrounding gum tissue, then rinse well to remove loosened plaque.",
    },
  ];

  const flossSteps = [
    {
      title: "Start with enough floss",
      icon: "scissors",
      text: "Use about 18 inches of waxed floss. Wrap most around one middle finger and the rest around the other.",
    },
    {
      title: "Guide—don’t snap",
      icon: "hand-index-thumb",
      text: "Hold tightly and slide between teeth with a back-and-forth motion. Avoid forcing or snapping.",
    },
    {
      title: "Make a C-shape",
      icon: "bezier",
      text: "Curve the floss into a C-shape against one tooth at the gumline.",
    },
    {
      title: "Clean under the gumline",
      icon: "chevron-double-down",
      text: "Slide gently into the space between gum and tooth until you feel light resistance.",
    },
    {
      title: "Up-and-down on both sides",
      icon: "arrows-vertical",
      text: "Move up and down along one tooth, then repeat on the adjacent tooth before moving on.",
    },
    {
      title: "Finish all teeth + rinse",
      icon: "droplet-half",
      text: "Don’t forget the back side of the last tooth (upper and lower). Rinse to remove plaque and food particles.",
    },
  ];

  const productCards = [
    {
      title: "Toothbrushes",
      icon: "brush",
      bullets: [
        "Soft bristles are best for most patients.",
        "Electric brushes are safe and effective for many people.",
        "Replace brush heads regularly (about every 3–4 months).",
      ],
    },
    {
      title: "Interdental Cleaning",
      icon: "intersect",
      bullets: [
        "Floss cleans where brushes can’t reach between teeth.",
        "Interproximal brushes can help, but technique matters.",
        "If you’re unsure what size/type to use, ask your dentist.",
      ],
    },
    {
      title: "Oral Irrigators",
      icon: "droplet",
      bullets: [
        "Water irrigators rinse thoroughly but don’t remove plaque alone.",
        "Use as an add-on—not a replacement—for brushing and flossing.",
      ],
    },
    {
      title: "Fluoride + Rinses",
      icon: "shield-check",
      bullets: [
        "Fluoride toothpastes and rinses can reduce decay when used consistently.",
        "Not recommended for children under six unless directed.",
        "ADA-approved anti-plaque rinses may help early gum disease when combined with brushing/flossing.",
      ],
    },
    {
      title: "Tartar Control Toothpaste",
      icon: "layers",
      bullets: [
        "Can reduce tartar above the gumline.",
        "Gum disease starts below the gumline, so it’s not proven to reduce early gum disease on its own.",
      ],
    },
    {
      title: "Gum Massagers + Specialty Tools",
      icon: "hand-thumbs-up",
      bullets: [
        "Some brushes include gum-massaging tips.",
        "Specialty tools can be helpful, but improper use may irritate gums.",
        "Discuss technique with your provider if you’re adding new tools.",
      ],
    },
  ];

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
          Oral Hygiene
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Daily brushing, flossing, and professional care work together to keep
          your teeth, gums, and smile healthy for life.
        </p>
      </section>

      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
            Why is oral hygiene so important?
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Adults over 35 lose more teeth to gum diseases (periodontal disease)
            than from cavities. Three out of four adults are affected at some
            time in their life. The best way to prevent cavities and periodontal
            disease is by good tooth brushing and flossing techniques, performed
            daily.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Periodontal disease and decay are both caused by bacterial plaque.
            Plaque is a colorless film which sticks to your teeth at the
            gumline, and it is constantly forming. By thorough daily brushing
            and flossing you can remove these germs and help prevent periodontal
            disease.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
              How to Brush
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl">
              A simple routine done correctly makes a big difference. Use gentle
              pressure and focus on the gumline.
            </p>
          </div>

          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-6">
            <div className="rounded-md border border-blue-950/10 bg-blue-950/[0.04] p-4 sm:p-5 flex gap-3">
              <i className="bi bi-telephone-fill text-blue-950 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-slate-700">
                If you have pain while brushing or questions about technique,
                please call the office at{" "}
                <span className="font-semibold">(718) 745-6699</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {brushSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-md border border-blue-950/10 bg-white p-5 sm:p-6 shadow-sm flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white">
                    <i className={`bi bi-${step.icon} text-lg`} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-blue-950 text-base sm:text-lg">
                      {step.title}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-6 sm:leading-7">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-blue-950/10 bg-slate-50 p-4 sm:p-5 flex gap-3">
              <i className="bi bi-clock-fill text-blue-950 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-slate-700">
                Aim for{" "}
                <span className="font-semibold text-blue-950">2 minutes</span>{" "}
                of brushing, twice a day. Spend extra time along the gumline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
              How to Floss
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl">
              Gum disease often starts between teeth where a toothbrush can’t
              reach. Flossing removes plaque from these high-risk areas.
            </p>
          </div>

          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <div className="relative">
              <div className="absolute left-[18px] top-0 bottom-0 w-px bg-blue-950/15" />
              <ol className="flex flex-col gap-10">
                {flossSteps.map((step, i) => (
                  <li key={i} className="relative pl-14 sm:pl-16">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white shadow-sm">
                      <i className={`bi bi-${step.icon} text-lg`} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-lg sm:text-xl text-blue-950">
                        {step.title}
                      </p>
                      <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-slate-800">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 rounded-md border border-blue-950/10 bg-blue-950/[0.04] p-4 sm:p-5 flex gap-3">
              <i className="bi bi-info-circle-fill text-blue-950 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-slate-700">
                Some bleeding or soreness during the first week can be normal.
                If your gums hurt, use lighter pressure. With consistent
                flossing, gums often heal and bleeding should reduce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Caring for Sensitive Teeth
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Sometimes after dental treatment, teeth are sensitive to hot and
              cold. This should not last long, but only if the mouth is kept
              clean. If the mouth is not kept clean, the sensitivity may
              continue and become more severe. If your teeth are especially
              sensitive, consult with your doctor. They may recommend a
              medicated toothpaste or mouth rinse made especially for sensitive
              teeth.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
              Choosing Oral Hygiene Products
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl">
              The best products are the ones you’ll actually use consistently.
              Here’s a simple breakdown to help you choose confidently.
            </p>
          </div>

          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {productCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-md border border-blue-950/10 bg-white p-5 sm:p-6 shadow-sm flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white">
                    <i className={`bi bi-${card.icon} text-lg`} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-blue-950 text-base sm:text-lg">
                      {card.title}
                    </p>
                    <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg text-slate-700 leading-6 sm:leading-7">
                      {card.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-blue-950/10 bg-blue-950/[0.04] p-4 sm:p-5 flex gap-3">
              <i className="bi bi-check2-circle text-blue-950 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-slate-700">
                If you’re unsure what products fit your needs—especially with
                braces, implants, or gum concerns—ask your dental team for a
                personalized recommendation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Professional Cleaning
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Daily brushing and flossing will keep dental calculus (tartar) to
              a minimum, but a professional cleaning is still needed to remove
              buildup in places your toothbrush and floss cannot reach. Your
              regular visits to our office are an important part of your program
              to prevent gum disease and keep your teeth for a lifetime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
