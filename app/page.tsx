"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const highlights = [
    {
      title: "General Dentistry",
      desc: "Cleanings, exams, fillings, crowns, bridges, and more.",
      icon: "shield-check",
      href: "/treatments",
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Whitening, bonding, and veneers for a natural-looking smile.",
      icon: "stars",
      href: "/cosmetic-treatments",
    },
    {
      title: "Dental Implants",
      desc: "Long-lasting tooth replacement with modern techniques.",
      icon: "plus-circle-fill",
      href: "/treatments/implants",
    },
    {
      title: "Patient Information",
      desc: "Insurance, scheduling, first visit details, and policies.",
      icon: "info-circle-fill",
      href: "/information",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "John Doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "John Doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const steps = [
    {
      title: "Consultation",
      icon: "chat-left-text-fill",
      desc: "We start by listening — concerns, goals, and comfort needs.",
    },
    {
      title: "Plan",
      icon: "clipboard-check-fill",
      desc: "You get clear options, timelines, and transparent next steps.",
    },
    {
      title: "Treatment",
      icon: "tools",
      desc: "Care delivered with precision, comfort, and modern techniques.",
    },
    {
      title: "Follow-Up",
      icon: "calendar2-check-fill",
      desc: "We check results, answer questions, and support healing.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 overflow-x-hidden">
      <section className="relative w-full">
        <div className="absolute inset-0">
          <Image
            src="/img/thedoctors.png"
            alt="Sokol Dentistry"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-950/55 to-slate-100" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.35)_0,transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.22)_0,transparent_45%)]" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 pt-20 sm:pt-24 md:pt-28">
          <div className="mx-auto max-w-6xl pb-36 sm:pb-44 md:pb-52">
            <p className="mt-8 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white max-w-4xl leading-tight">
              Transforming Dentistry
            </p>

            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-white/90">
              A family practice delivering modern general and cosmetic dentistry
              with comfort-first care.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-blue-950 px-6 py-3 shadow-lg hover:opacity-95 transition font-semibold w-full sm:w-auto"
              >
                <i className="bi bi-telephone-fill" />
                Schedule / Contact
              </Link>

              <Link
                href="/treatments"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 text-white px-6 py-3 shadow-lg hover:bg-white/15 transition font-semibold backdrop-blur w-full sm:w-auto"
              >
                <i className="bi bi-grid-fill" />
                Explore Treatments
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white/95 backdrop-blur">
                <i className="bi bi-shield-check" />
                Comfort-first care
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white/95 backdrop-blur">
                <i className="bi bi-stars" />
                Cosmetic expertise
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white/95 backdrop-blur">
                <i className="bi bi-people-fill" />
                Family practice
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 -mt-20 sm:-mt-24 md:-mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-md border border-blue-950/10 bg-slate-50/90 backdrop-blur shadow-xl p-5 sm:p-6 md:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {highlights.map((h) => (
                <Link
                  key={h.title}
                  href={h.href}
                  className="group rounded-md border border-blue-950/10 bg-white shadow-sm p-5 hover:shadow-md hover:border-blue-950/25 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white">
                      <i className={`bi bi-${h.icon} text-lg`} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-blue-950 text-lg">
                        {h.title}
                      </p>
                      <p className="text-sm sm:text-base text-slate-600 leading-6">
                        {h.desc}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-950">
                        Learn more
                        <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pt-14 sm:pt-16 md:pt-20 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="bg-white shadow-md rounded-md border border-blue-950/10 p-7 sm:p-8 md:p-10">
              <p className="mt-6 font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
                Comprehensive care, cosmetic results
              </p>

              <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-700 leading-7 sm:leading-8">
                Sokol Dentistry has served Bay Ridge since 1988. We practice a
                full scope of general and cosmetic dentistry — from veneers and
                whitening to crowns, bridges, and implants — with a focus on
                comfort and long-term oral health.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/cosmetic-treatments"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-950 text-white px-5 py-3 shadow-sm hover:opacity-95 transition font-semibold w-full sm:w-auto"
                >
                  <i className="bi bi-stars" />
                  Cosmetic Options
                </Link>
                <Link
                  href="/meet"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-blue-950/15 bg-slate-50 px-5 py-3 shadow-sm hover:bg-white transition text-blue-950 font-semibold w-full sm:w-auto"
                >
                  <i className="bi bi-people-fill" />
                  Meet the Doctors
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-md shadow-md border border-blue-950/10 bg-slate-50">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/img/office.png"
                  alt="Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="rounded-md border border-white/20 bg-black/35 text-white backdrop-blur px-4 py-3">
                  <p className="font-semibold">Comfortable, modern office</p>
                  <p className="text-sm text-white/85">
                    A calm environment designed for patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2">
            <p className="font-bold text-4xl sm:text-5xl md:text-6xl text-blue-950">
              What patients say
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                className="rounded-md border border-blue-950/10 bg-white shadow-sm p-6 sm:p-7 hover:shadow-md transition"
              >
                <div className="flex items-center gap-1 text-blue-950">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>

                <p className="mt-4 text-slate-700 leading-7">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white">
                    <i className="bi bi-person-fill" />
                  </div>
                  <p className="font-semibold text-blue-950">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2">
            <p className="font-bold text-4xl sm:text-5xl md:text-6xl text-blue-950">
              Simple, clear steps
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl">
              A straightforward experience — from the first visit to ongoing
              care.
            </p>
          </div>

          <div className="rounded-md border border-blue-950/10 bg-white shadow-sm p-6 sm:p-7">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-5">
              {steps.map((s, idx) => (
                <div key={s.title} className="relative">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white">
                      <i className={`bi bi-${s.icon} text-lg`} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-blue-950 text-lg">
                        {idx + 1}. {s.title}
                      </p>
                      <p className="text-slate-700 leading-6">{s.desc}</p>
                    </div>
                  </div>

                  {idx !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-[22px] right-[-10px] w-6 h-[2px] bg-blue-950/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-blue-950/10 bg-blue-950/[0.04] p-5 sm:p-6">
            <div className="flex gap-3">
              <i className="bi bi-info-circle-fill text-blue-950 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-slate-700">
                Ready to get started? Contact our office to schedule your visit
                or ask a question.
              </p>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-950 text-white px-5 py-3 shadow-sm hover:opacity-95 transition font-semibold w-full sm:w-auto"
              >
                <i className="bi bi-telephone-fill" />
                Contact Us
              </Link>
              <Link
                href="/information/first-visit"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-blue-950/15 bg-white px-5 py-3 shadow-sm hover:bg-slate-50 transition text-blue-950 font-semibold w-full sm:w-auto"
              >
                <i className="bi bi-door-open-fill" />
                First Visit Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
