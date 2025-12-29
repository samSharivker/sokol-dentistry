"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const MapClient = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <section
        className="flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-950">
          Contact Us
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          We’re here to answer your questions and help schedule your next visit
          to Sokol Dentistry in Bay Ridge.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4">
          <Link href="tel:17187456699">
            <button className="shadow-lg px-5 py-2 border border-blue-950 rounded-md bg-slate-50 text-sm sm:text-base hover:bg-blue-950 hover:text-slate-100 hover:cursor-grab">
              Call (718) 745-6699
            </button>
          </Link>
          <Link href="mailto:info@drjoelsokol.com">
            <button className="shadow-lg px-5 py-2 border border-blue-950 rounded-md bg-slate-50 text-sm sm:text-base hover:bg-blue-950 hover:text-slate-100 hover:cursor-grab">
              Email Our Office
            </button>
          </Link>
        </div>
      </section>

      <section className="w-full bg-slate-200 py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="bg-slate-50 shadow-md rounded-md p-8 flex flex-col gap-3 text-center sm:text-left">
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
                Telephone
              </p>
              <p className="text-lg sm:text-xl">
                Phone:{" "}
                <Link
                  href="tel:17187456699"
                  className="underline underline-offset-4 hover:text-blue-900"
                >
                  (718) 745-6699
                </Link>
              </p>
              <p className="text-lg sm:text-xl">Fax: (718) 748-1063</p>
            </div>
            <div className="bg-slate-50 shadow-md rounded-md p-8 flex flex-col gap-4 text-center sm:text-left">
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
                Email
              </p>
              <p className="text-base sm:text-lg leading-7">
                Please use this for general practice inquiries only – specific
                patient care questions must be addressed with your doctor during
                a consultation appointment.
              </p>
              <Link
                href="mailto:info@drjoelsokol.com"
                className="text-lg sm:text-xl underline underline-offset-4 hover:text-blue-900"
              >
                info@drjoelsokol.com
              </Link>
            </div>
            <div className="bg-slate-50 shadow-md rounded-md p-8 flex flex-col gap-2 text-center sm:text-left">
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
                Mailing Address
              </p>
              <p className="text-lg sm:text-xl pt-2">636 74th Street</p>
              <p className="text-lg sm:text-xl">Brooklyn, NY 11209</p>
              <p className="text-lg sm:text-xl font-semibold pt-1">
                Handicap Accessible
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-50 shadow-md rounded-md p-4 h-full flex flex-col">
              <p className="font-bold text-2xl sm:text-3xl text-blue-950 mb-4 text-center lg:text-left">
                Find Us
              </p>
              <div className="w-full h-72 sm:h-80 md:h-96 rounded-md overflow-hidden">
                <MapClient />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
