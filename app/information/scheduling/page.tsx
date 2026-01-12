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

      {/* Header */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 text-center flex flex-col gap-3">
            <p className="font-bold text-4xl sm:text-5xl md:text-6xl text-blue-950">
              Scheduling
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Office hours, appointment policies, and what to expect when
              scheduling your visit with us.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-md border border-blue-950/15 bg-blue-950/[0.04] px-3 py-2">
                <i className="bi bi-clock-fill text-blue-950" />
                <p className="text-sm sm:text-base text-slate-700">
                  Mon–Fri{" "}
                  <span className="font-semibold text-blue-950">9:00–5:00</span>
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-md border border-blue-950/15 bg-white px-3 py-2 shadow-sm">
                <i className="bi bi-telephone-fill text-blue-950" />
                <Link
                  href="tel:718-745-6699"
                  className="text-sm sm:text-base font-semibold text-blue-950 hover:underline"
                >
                  (718) 745-6699
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours – reverted style */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-10 sm:pb-14 md:pb-16">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-5">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
            Office Hours
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-slate-700">
            Dr. Joel L. Sokol’s office is open Monday through Friday from{" "}
            <span className="font-semibold text-blue-950">
              9:00 AM to 5:00 PM
            </span>
            .
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-slate-700">
            As a courtesy, we do our best to call the day before to confirm
            appointments. However, this is only a courtesy.{" "}
            <span className="font-semibold text-blue-950">
              Cancellations without at least 24 hours’ notice may result in a
              fee
            </span>
            . Your appointment time is reserved specifically for you, so please
            arrive promptly.
          </p>
        </div>
      </section>

      {/* Scheduling Commitment */}
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
              Our Scheduling Commitment
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white">
                  <i className="bi bi-stopwatch" />
                </div>
                <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-slate-700">
                  We make every effort to stay on schedule and minimize your
                  waiting time. Because we provide many types of dental
                  services, certain procedures may occasionally take longer than
                  expected.
                </p>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white">
                  <i className="bi bi-exclamation-triangle" />
                </div>
                <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-slate-700">
                  Emergency cases may arise and cause unexpected delays. We
                  appreciate your patience and understanding when these
                  situations occur.
                </p>
              </div>

              <div className="rounded-md border border-blue-950/15 bg-blue-950/[0.04] p-4 sm:p-5">
                <div className="flex gap-3">
                  <i className="bi bi-shield-check text-blue-950 mt-1" />
                  <p className="text-sm sm:text-base md:text-lg text-slate-700">
                    Our goal is always to provide every patient with attentive,
                    high-quality care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Appointment */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16 md:py-20 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
              Schedule an Appointment
            </p>

            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-slate-700 max-w-3xl">
                Please call us at{" "}
                <Link
                  href="tel:718-745-6699"
                  className="font-semibold text-blue-950 hover:underline"
                >
                  (718) 745-6699
                </Link>{" "}
                with any questions or to schedule your next appointment. Our
                team will be happy to assist you.
              </p>

              <Link
                href="tel:718-745-6699"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-950 text-white px-5 py-3 shadow-sm hover:opacity-95 transition w-full md:w-auto"
              >
                <i className="bi bi-telephone-fill" />
                Call Now
              </Link>
            </div>

            <div className="mt-6 rounded-md border border-blue-950/15 bg-white p-4 sm:p-5 shadow-sm">
              <div className="flex gap-3">
                <i className="bi bi-chat-left-text-fill text-blue-950 mt-1" />
                <p className="text-sm sm:text-base md:text-lg text-slate-700">
                  If you have a dental emergency, please call our office as soon
                  as possible so we can guide you on next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
