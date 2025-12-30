"use client";

import Link from "next/link";

export default function Financial_Policy() {
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
          Financial Policy
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Clear payment guidelines to ensure a smooth and stress-free financial
          experience during your dental care.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-6">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
            Patient Billing
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            For your convenience, we accept American Express, Visa, MasterCard,
            and Discover. Personal checks are also accepted at our discretion.
            We are committed to delivering the finest care to our patients;
            therefore, payment is due at the time services are rendered unless
            prior arrangements have been made.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            If you have any questions regarding your account, please contact us
            at <span className="font-semibold">(718) 745-6699</span>. In many
            cases, a brief phone call is all that is needed to resolve billing
            concerns or misunderstandings.
          </p>
          <p className="font-semibold text-base sm:text-lg md:text-xl">
            Please remember — you are fully responsible for all fees charged by
            this office regardless of your insurance coverage.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Insurance & Payment Processing
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              We can assist you with the submission of your insurance claims,
              and in most cases, we submit them electronically for faster
              processing. Most insurance companies respond within two to four
              weeks.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              If your account does not reflect an insurance payment within that
              time frame, please contact our office. Any remaining balance after
              insurance benefits have been applied is your responsibility, and
              we appreciate your prompt payment.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              If needed, monthly payment arrangements may be available —
              however, these must be made prior to the actual procedure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
