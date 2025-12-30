"use client";

import Link from "next/link";

export default function Scheduling() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-6">
        <Link
          href="/information"
          className="inline-block px-4 py-2 border border-blue-950 rounded-md
                     bg-slate-50 shadow-sm text-sm sm:text-base
                     hover:bg-blue-950 hover:text-white hover:cursor-grab
                     transition-all duration-200"
        >
          ← Back to Information
        </Link>
      </div>
      <section
        className="w-full flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Scheduling
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Office hours, appointment policies, and what to expect when scheduling
          your visit with us.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-6">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
            Office Hours
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Dr. Joel L. Sokol’s office is open Monday through Friday from{" "}
            <span className="font-semibold">9:00 AM to 5:00 PM</span>.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            As a courtesy to our patients, we do our best to call the day before
            to confirm appointments. However, this is only a courtesy —{" "}
            <span className="font-semibold">
              cancellations without at least 24 hours’ notice may result in a
              fee
            </span>
            . Your appointment time is reserved specifically for you, so please
            arrive promptly.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Our Scheduling Commitment
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              We make every effort to stay on schedule and minimize your waiting
              time. However, because Dr. Sokol provides many types of dental
              services, certain procedures may occasionally take longer than
              expected.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Emergency cases may also arise and cause unexpected delays. We
              appreciate your patience and understanding when these situations
              occur, as our goal is always to provide every patient with the
              highest standard of care.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Schedule an Appointment
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Please call us at{" "}
              <Link href="tel:718-745-6699" className="font-semibold">
                (718) 745-6699
              </Link>{" "}
              with any questions or to schedule your next appointment. Our team
              will be happy to assist you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
