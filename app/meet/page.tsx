"use client";

import Image from "next/image";

export default function Meet() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <section
        className="flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-950">
          Meet Us
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          A family practice proudly serving Bay Ridge for generations.
        </p>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-10 md:gap-14 md:items-center">
          <div className="bg-slate-50 shadow-md rounded-md p-8 sm:p-10 flex-1 flex flex-col gap-4">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950">
              Dr. Joel L. Sokol, D.M.D.
            </p>
            <p className="leading-8 text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis...
            </p>
            <div className="mt-2 flex flex-col gap-1 text-slate-800">
              <p>
                <i className="bi bi-mortarboard-fill"></i> ’77 Hofstra
                University
              </p>
              <p>
                <i className="bi bi-emoji-smile-fill"></i> ’82 Washington
                University School of Dental Medicine
              </p>
              <p>
                <i className="bi bi-award-fill"></i> American Dental
                Association, 2nd District Dental Society, Alpha Omega Dental
                Fraternity
              </p>
            </div>
          </div>
          <div className="relative w-full md:w-[420px] lg:w-[520px] overflow-hidden rounded-md shadow-md">
            <div className="relative aspect-[6/7] w-full">
              <Image
                src="/img/meetdrjoel.png"
                alt="Dr Joel L. Sokol"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 420px, 520px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row-reverse gap-10 md:gap-14 md:items-center">
          <div className="bg-slate-50 shadow-md rounded-md p-8 sm:p-10 flex-1 flex flex-col gap-4">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950">
              Dr. Jacob L. Sokol, D.D.S.
            </p>
            <p className="leading-8 text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis...
            </p>
            <div className="mt-2 flex flex-col gap-1 text-slate-800">
              <p>
                <i className="bi bi-mortarboard-fill"></i> ’77 SUNY Farmingdale
              </p>
              <p>
                <i className="bi bi-emoji-smile-fill"></i> ’77 NYU College of
                Dentistry
              </p>
            </div>
          </div>
          <div className="relative w-full md:w-[420px] lg:w-[520px] overflow-hidden rounded-md shadow-md">
            <div className="relative aspect-[6/7] w-full">
              <Image
                src="/img/meetdrjacob.png"
                alt="Dr Jacob L. Sokol"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 420px, 520px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
