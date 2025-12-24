"use client";

import Image from "next/image";

export default function Meet() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="px-6 py-12 md:px-20 md:py-20">
        <p className="text-5xl font-bold md:text-9xl">Meet Us</p>
      </div>

      <section className="w-full bg-slate-200 px-6 py-12 md:px-20 md:py-20 shadow-lg">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3 md:max-w-xl">
            <p className="text-3xl font-bold md:text-5xl">Dr Joel L. Sokol, D.M.D.</p>
            <p className="leading-8 text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
              pellentesque sem placerat. In id cursus mi pretium tellus duis convallis...
            </p>
            <p>
              <i className="bi bi-mortarboard-fill"></i> ’77 Hofstra University
            </p>
            <p>
              <i className="bi bi-emoji-smile-fill"></i> ’82 Washington University School of Dental
              Medicine
            </p>
            <p>
              <i className="bi bi-award-fill"></i> American Dental Association, 2nd District Dental
              Society, Alpha Omega Dental Fraternity
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-sm md:w-[420px] lg:w-[520px]">
            <div className="relative aspect-[6/7] w-full">
              <Image
                src="/meetdrjoel.png"
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

      <section className="w-full px-6 py-12 md:px-20 md:py-20 shadow-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3 md:max-w-xl">
            <p className="text-3xl font-bold md:text-5xl">Dr Jacob L. Sokol, D.D.S.</p>
            <p className="leading-8 text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
              pellentesque sem placerat. In id cursus mi pretium tellus duis convallis...
            </p>
            <p>
              <i className="bi bi-mortarboard-fill"></i> ’77 SUNY Farmingdale
            </p>
            <p>
              <i className="bi bi-emoji-smile-fill"></i> ’77 NYU College of Dentistry
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-sm md:w-[420px] lg:w-[520px]">
            <div className="relative aspect-[6/7] w-full">
              <Image
                src="/meetdrjacob.png"
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
