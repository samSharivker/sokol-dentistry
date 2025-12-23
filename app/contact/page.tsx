"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const MapClient = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-4 p-6 min-h-screen">
      <p className="font-bold text-4xl sm:text-6xl lg:text-8xl">
        Contact Us
      </p>

      <div className="flex flex-col gap-5 text-center">
        <div className="flex flex-col p-20 shadow-lg">
          <p className="font-bold text-3xl sm:text-5xl lg:text-6xl">
            Telephone
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl pt-5">
            Phone: (718) 745-6699
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl">
            Fax: (718) 748-1063
          </p>
        </div>

        <div className="flex flex-col p-10 shadow-lg bg-slate-200">
          <p className="font-bold text-3xl sm:text-5xl lg:text-6xl">
            Email
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl pt-5">
            Please use this for general practice inquiries only – specific patient
            care questions must be addressed with your doctor during a consultation
            appointment.
          </p>
          <Link href="mailto:info@drjoelsokol.com">
            <p className="text-lg sm:text-xl lg:text-2xl underline underline-offset-4">
              info@drjoelsokol.com
            </p>
          </Link>
        </div>

        <div className="flex flex-col p-10 shadow-lg">
          <p className="font-bold text-3xl sm:text-5xl lg:text-6xl">
            Mailing Address
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl pt-2">
            636 74th Street
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl">
            Brooklyn, NY, 11209
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
            Handicap Accessible
          </p>
        </div>
      </div>

      <div className="w-full max-w-3xl h-96">
        <MapClient />
      </div>
    </div>
  );
}