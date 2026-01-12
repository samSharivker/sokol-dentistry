"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const MapClient = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 overflow-x-hidden">
      <section className="relative w-full">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25)_0,transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.18)_0,transparent_40%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-slate-100" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 pt-14 sm:pt-16 md:pt-20">
          <div className="mx-auto max-w-6xl pb-24 sm:pb-28 md:pb-32">
            <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-white backdrop-blur">
              <i className="bi bi-chat-left-text-fill" />
              <span className="uppercase tracking-wider text-xs sm:text-sm">
                Get in Touch
              </span>
            </div>

            <p className="mt-8 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
              Contact Us
            </p>

            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-white/85">
              We’re here to answer your questions and help schedule your next
              visit to Sokol Dentistry in Bay Ridge.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="tel:17187456699"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-blue-950 px-5 py-3 shadow-md hover:opacity-95 transition font-semibold"
              >
                <i className="bi bi-telephone-fill" />
                Call (718) 745-6699
              </Link>

              <Link
                href="mailto:info@drjoelsokol.com"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 text-white px-5 py-3 shadow-md hover:bg-white/15 transition font-semibold backdrop-blur"
              >
                <i className="bi bi-envelope-fill" />
                Email Our Office
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
                <i className="bi bi-geo-alt-fill" />
                636 74th Street, Brooklyn
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
                <i className="bi bi-universal-access-circle" />
                Handicap Accessible
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
                <i className="bi bi-clock-fill" />
                Mon–Fri · 9:00 AM–5:00 PM
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 -mt-14 sm:-mt-16 md:-mt-20 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-md border border-blue-950/10 bg-slate-50/90 backdrop-blur shadow-lg p-5 sm:p-6 md:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="rounded-md border border-blue-950/10 bg-white shadow-sm p-6">
                  <p className="font-bold text-xl sm:text-2xl text-blue-950 flex items-center gap-2">
                    <i className="bi bi-telephone-fill" />
                    Telephone
                  </p>
                  <div className="mt-3 text-slate-700">
                    <p>
                      Phone:{" "}
                      <Link
                        href="tel:17187456699"
                        className="font-semibold underline underline-offset-4"
                      >
                        (718) 745-6699
                      </Link>
                    </p>
                    <p>Fax: (718) 748-1063</p>
                  </div>
                </div>

                <div className="rounded-md border border-blue-950/10 bg-white shadow-sm p-6">
                  <p className="font-bold text-xl sm:text-2xl text-blue-950 flex items-center gap-2">
                    <i className="bi bi-envelope-fill" />
                    Email
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-7 text-slate-700">
                    Please use this for general practice inquiries only —
                    specific patient care questions must be addressed during a
                    consultation appointment.
                  </p>
                  <Link
                    href="mailto:info@drjoelsokol.com"
                    className="mt-3 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
                  >
                    info@drjoelsokol.com
                  </Link>
                </div>

                <div className="rounded-md border border-blue-950/10 bg-white shadow-sm p-6">
                  <p className="font-bold text-xl sm:text-2xl text-blue-950 flex items-center gap-2">
                    <i className="bi bi-geo-alt-fill" />
                    Mailing Address
                  </p>
                  <div className="mt-3 text-slate-700">
                    <p>636 74th Street</p>
                    <p>Brooklyn, NY 11209</p>
                    <p className="mt-3 font-semibold text-blue-950 flex items-center gap-2">
                      <i className="bi bi-universal-access-circle" />
                      Handicap Accessible
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-md border border-blue-950/10 bg-white shadow-sm p-6 h-full">
                  <p className="font-bold text-xl sm:text-2xl text-blue-950 flex items-center gap-2">
                    <i className="bi bi-map-fill" />
                    Find Us
                  </p>

                  <div className="mt-4 w-full h-72 sm:h-80 md:h-96 rounded-md overflow-hidden border border-blue-950/10">
                    <MapClient />
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-md border border-blue-950/10 bg-slate-50 p-4">
                      <p className="font-semibold text-blue-950 flex items-center gap-2">
                        <i className="bi bi-train-front-fill" />
                        Transit
                      </p>
                      <p className="mt-1 text-sm sm:text-base text-slate-700 leading-6">
                        Closest subway stop is{" "}
                        <strong>77th Street on the R line</strong>.
                      </p>
                    </div>

                    <div className="rounded-md border border-blue-950/10 bg-slate-50 p-4">
                      <p className="font-semibold text-blue-950 flex items-center gap-2">
                        <i className="bi bi-car-front-fill" />
                        Parking
                      </p>
                      <p className="mt-1 text-sm sm:text-base text-slate-700 leading-6">
                        Driveway parking is available. Please note that
                        assistants may need to temporarily move vehicles to
                        allow blocked-in cars to exit.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-md border border-blue-950/10 bg-blue-950/[0.04] p-4">
                    <div className="flex gap-3">
                      <i className="bi bi-info-circle-fill text-blue-950 mt-1" />
                      <p className="text-sm sm:text-base text-slate-700">
                        For appointment changes, please call with at least 24
                        hours’ notice when possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
