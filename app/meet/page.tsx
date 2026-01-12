"use client";

import Image from "next/image";

export default function Meet() {
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
              <i className="bi bi-people-fill" />
              <span className="uppercase tracking-wider text-xs sm:text-sm">
                Our Doctors
              </span>
            </div>

            <p className="mt-8 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
              Meet Us
            </p>

            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-white/85">
              A family practice proudly serving Bay Ridge for generations.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
                <i className="bi bi-award-fill" />
                Trusted care
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
                <i className="bi bi-shield-check" />
                Patient-first approach
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90 backdrop-blur">
                <i className="bi bi-geo-alt-fill" />
                Bay Ridge, Brooklyn
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 -mt-14 sm:-mt-16 md:-mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-md border border-blue-950/10 bg-slate-50/90 backdrop-blur shadow-lg p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm sm:text-base text-slate-700">
                Learn more about our doctors’ backgrounds, training, and
                clinical experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <a
                  href="#dr-joel"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-950 text-white px-4 py-2 shadow-sm hover:opacity-95 transition w-full sm:w-auto"
                >
                  <i className="bi bi-person-badge-fill" />
                  Dr. Joel
                </a>
                <a
                  href="#dr-jacob"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-950 text-white px-4 py-2 shadow-sm hover:opacity-95 transition w-full sm:w-auto"
                >
                  <i className="bi bi-person-badge" />
                  Dr. Jacob
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Joel */}
      <section
        id="dr-joel"
        className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pt-12 sm:pt-14 md:pt-16 pb-12 sm:pb-16 md:pb-20"
      >
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-md shadow-md border border-blue-950/10 bg-slate-50">
              <div className="relative aspect-[6/7] w-full">
                <Image
                  src="/img/meetdrjoel.png"
                  alt="Dr Joel L. Sokol"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="rounded-md border border-white/20 bg-black/35 text-white backdrop-blur px-4 py-3">
                  <p className="font-semibold">Dr. Joel L. Sokol, D.M.D.</p>
                  <p className="text-sm text-white/85">
                    Family dentistry · Bay Ridge
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-50 shadow-md rounded-md p-7 sm:p-8 md:p-10 border border-blue-950/10">
              <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                <div className="flex flex-col gap-2">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950">
                    Dr. Joel L. Sokol, D.M.D.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 rounded-md border border-blue-950/10 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
                      <i className="bi bi-mortarboard-fill text-blue-950" />
                      Education
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-md border border-blue-950/10 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
                      <i className="bi bi-award-fill text-blue-950" />
                      Associations
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-md border border-blue-950/10 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
                      <i className="bi bi-clipboard2-check-fill text-blue-950" />
                      Experience
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-700 text-base sm:text-lg md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis...
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4">
                <div className="rounded-md border border-blue-950/10 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-blue-950 text-lg flex items-center gap-2">
                    <i className="bi bi-mortarboard-fill" />
                    Education & Affiliations
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-slate-800">
                    <p className="flex gap-2">
                      <i className="bi bi-dot text-blue-950 mt-1" />
                      <span>Hofstra University</span>
                    </p>
                    <p className="flex gap-2">
                      <i className="bi bi-dot text-blue-950 mt-1" />
                      <span>
                        Washington University School of Dental Medicine
                      </span>
                    </p>
                    <p className="flex gap-2">
                      <i className="bi bi-dot text-blue-950 mt-1" />
                      <span>
                        American Dental Association · 2nd District Dental
                        Society · Alpha Omega Dental Fraternity
                      </span>
                    </p>
                  </div>
                </div>

                <div className="rounded-md border border-blue-950/10 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-blue-950 text-lg flex items-center gap-2">
                    <i className="bi bi-briefcase-fill" />
                    Clinical Experience
                  </p>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-slate-700 leading-7">
                    <li className="flex gap-2">
                      <i className="bi bi-check2 text-blue-950 mt-1" />
                      <span>Radiation Oncology Summer Fellowship</span>
                    </li>
                    <li className="flex gap-2">
                      <i className="bi bi-check2 text-blue-950 mt-1" />
                      <span>Dentistry for the Handicapped</span>
                    </li>
                    <li className="flex gap-2">
                      <i className="bi bi-check2 text-blue-950 mt-1" />
                      <span>Implant Dentistry Training Fellowship</span>
                    </li>
                    <li className="flex gap-2">
                      <i className="bi bi-check2 text-blue-950 mt-1" />
                      <span>Attending Dentist at Lutheran Medical Center</span>
                    </li>
                    <li className="flex gap-2">
                      <i className="bi bi-check2 text-blue-950 mt-1" />
                      <span>
                        Attending Dentist at Long Island College Hospital
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <i className="bi bi-check2 text-blue-950 mt-1" />
                      <span>Private Practice at Ronald Leventhal DDS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Jacob */}
      <section
        id="dr-jacob"
        className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 pb-24"
      >
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="lg:col-span-5 lg:order-2">
            <div className="relative overflow-hidden rounded-md shadow-md border border-blue-950/10 bg-slate-50">
              <div className="relative aspect-[6/7] w-full">
                <Image
                  src="/img/meetdrjacob.png"
                  alt="Dr Jacob L. Sokol"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="rounded-md border border-white/20 bg-black/35 text-white backdrop-blur px-4 py-3">
                  <p className="font-semibold">Dr. Jacob L. Sokol, D.D.S.</p>
                  <p className="text-sm text-white/85">
                    Family dentistry · Bay Ridge
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <div className="bg-slate-50 shadow-md rounded-md p-7 sm:p-8 md:p-10 border border-blue-950/10">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950">
                Dr. Jacob L. Sokol, D.D.S.
              </p>

              <p className="mt-6 leading-8 text-slate-700 text-base sm:text-lg md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis...
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4">
                <div className="rounded-md border border-blue-950/10 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-blue-950 text-lg flex items-center gap-2">
                    <i className="bi bi-mortarboard-fill" />
                    Education
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-slate-800">
                    <p className="flex gap-2">
                      <i className="bi bi-dot text-blue-950 mt-1" />
                      <span>SUNY Farmingdale</span>
                    </p>
                    <p className="flex gap-2">
                      <i className="bi bi-dot text-blue-950 mt-1" />
                      <span>NYU College of Dentistry</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-md border border-blue-950/10 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-blue-950 text-lg flex items-center gap-2">
                    <i className="bi bi-briefcase-fill" />
                    Clinical Experience
                  </p>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-slate-700 leading-7">
                    <li className="flex gap-2">
                      <i className="bi bi-check2 text-blue-950 mt-1" />
                      <span>South Brooklyn Health</span>
                    </li>
                    <li className="flex gap-2">
                      <i className="bi bi-check2 text-blue-950 mt-1" />
                      <span>Implant Pathway Fellow</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-md border border-blue-950/10 bg-blue-950/[0.04] p-4 sm:p-5">
                  <div className="flex gap-3">
                    <i className="bi bi-info-circle-fill text-blue-950 mt-1" />
                    <p className="text-sm sm:text-base md:text-lg text-slate-700">
                      Have questions about care options or scheduling? Our team
                      is happy to help.
                    </p>
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
