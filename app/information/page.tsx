"use client";

import Link from "next/link";

export default function Information() {
  const items = [
    {
      href: "/information/advanced-technology",
      label: "Advanced Technology",
      icon: "cpu-fill",
      desc: "Modern tools and techniques used in our office",
    },
    {
      href: "/information/financial-policy",
      label: "Financial Policy",
      icon: "credit-card-2-front-fill",
      desc: "Billing, payment options, and policies",
    },
    {
      href: "/information/first-visit",
      label: "First Visit",
      icon: "door-open-fill",
      desc: "What to expect at your first appointment",
    },
    {
      href: "/information/infection-control",
      label: "Infection Control",
      icon: "shield-check",
      desc: "Our approach to safety and cleanliness",
    },
    {
      href: "/information/insurance",
      label: "Insurance",
      icon: "file-earmark-text-fill",
      desc: "Coverage guidance and claim submission info",
    },
    {
      href: "/information/nitrous-oxide",
      label: "Nitrous Oxide",
      icon: "wind",
      desc: "Comfort options during treatment",
    },
    {
      href: "/information/scheduling",
      label: "Scheduling",
      icon: "calendar2-week-fill",
      desc: "Hours, confirmations, and appointment policies",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
      <section className="relative w-full">
        <div className="absolute inset-0">
          <div
            className="
              h-full w-full
              bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900
            "
          />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25)_0,transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.18)_0,transparent_40%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-slate-100" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 pt-10 sm:pt-12 md:pt-14">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-white backdrop-blur">
                <i className="bi bi-folder2-open" />
                <span className="uppercase tracking-wider text-xs sm:text-sm">
                  Patient Resources
                </span>
              </div>
            </div>

            <div className="mt-8 pb-24 sm:pb-28 md:pb-32">
              <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Patient Information
              </p>
              <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-white/85">
                Helpful resources to prepare for your visit and learn more about
                our policies, technology, and patient care experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
                  <i className="bi bi-shield-check" />
                  Policies
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
                  <i className="bi bi-calendar2-week-fill" />
                  Scheduling
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
                  <i className="bi bi-cpu-fill" />
                  Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 -mt-14 sm:-mt-16 md:-mt-20 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-md border border-blue-950/10 bg-slate-50/90 backdrop-blur shadow-lg p-5 sm:p-6 md:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm sm:text-base text-slate-700">
                Browse topics below. If you have questions, our team is happy to
                help.
              </p>
              <Link
                href="tel:718-745-6699"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-950 text-white px-4 py-2 shadow-sm hover:opacity-95 transition w-full sm:w-auto"
              >
                <i className="bi bi-telephone-fill" />
                Call (718) 745-6699
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {items.map(({ href, label, icon, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-md border border-blue-950/10 bg-white shadow-sm
                             p-5 sm:p-6 flex items-start justify-between gap-4
                             hover:shadow-md hover:border-blue-950/25
                             transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white">
                      <i className={`bi bi-${icon} text-lg`} />
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-lg sm:text-xl text-blue-950">
                        {label}
                      </p>
                      <p className="text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
                        {desc}
                      </p>
                    </div>
                  </div>

                  <i className="bi bi-arrow-right text-blue-950 text-lg mt-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
