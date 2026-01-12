"use client";

import Link from "next/link";

export default function Financial_Policy() {
  const highlights = [
    {
      icon: "credit-card-2-front-fill",
      title: "Accepted Payments",
      text: "American Express, Visa, MasterCard, and Discover. Personal checks may be accepted at our discretion.",
    },
    {
      icon: "receipt-cutoff",
      title: "Payment Timing",
      text: "Payment is due at the time services are rendered unless prior arrangements have been made.",
    },
    {
      icon: "shield-check",
      title: "Patient Responsibility",
      text: "You are responsible for all fees charged by the office, regardless of insurance coverage.",
    },
  ];

  const insuranceSteps = [
    {
      icon: "send-check",
      title: "Claim Submission",
      text: "We can assist with submitting insurance claims and, in most cases, submit electronically for faster processing.",
    },
    {
      icon: "hourglass-split",
      title: "Typical Response Time",
      text: "Most insurance companies respond within two to four weeks.",
    },
    {
      icon: "calculator-fill",
      title: "Remaining Balance",
      text: "Any remaining balance after benefits are applied is the patient’s responsibility. Prompt payment is appreciated.",
    },
    {
      icon: "calendar2-check-fill",
      title: "Payment Arrangements",
      text: "Monthly payment arrangements may be available when arranged prior to the procedure.",
    },
  ];

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

      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 text-center flex flex-col gap-3">
            <p className="font-bold text-4xl sm:text-5xl md:text-6xl text-blue-950">
              Financial Policy
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Clear payment guidelines to support a smooth, transparent
              experience throughout your dental care.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-md border border-blue-950/15 bg-blue-950/[0.04] px-3 py-2">
                <i className="bi bi-credit-card-2-front-fill text-blue-950" />
                <p className="text-sm sm:text-base text-slate-700">
                  Major cards accepted
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

      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-10 sm:pb-14 md:pb-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-5">
            <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
              Patient Billing
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-slate-700">
              For your convenience, we accept American Express, Visa,
              MasterCard, and Discover. Personal checks may also be accepted at
              our discretion. We are committed to delivering the finest care to
              our patients; therefore, payment is due at the time services are
              rendered unless prior arrangements have been made.
            </p>

            <div className="rounded-md border border-blue-950/15 bg-white p-4 sm:p-5 shadow-sm">
              <div className="flex gap-3">
                <i className="bi bi-info-circle-fill text-blue-950 mt-1" />
                <p className="text-sm sm:text-base md:text-lg text-slate-700">
                  If you have any questions regarding your account, please
                  contact us at{" "}
                  <Link
                    href="tel:718-745-6699"
                    className="font-semibold text-blue-950 hover:underline"
                  >
                    (718) 745-6699
                  </Link>
                  . In many cases, a brief phone call is all that is needed to
                  resolve billing concerns or misunderstandings.
                </p>
              </div>
            </div>

            <div className="rounded-md border border-blue-950/15 bg-blue-950/[0.04] p-4 sm:p-5">
              <div className="flex gap-3">
                <i className="bi bi-shield-check text-blue-950 mt-1" />
                <p className="text-sm sm:text-base md:text-lg text-slate-700">
                  <span className="font-semibold text-blue-950">
                    Please remember:
                  </span>{" "}
                  You are fully responsible for all fees charged by this office
                  regardless of your insurance coverage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="font-bold text-xl sm:text-2xl text-blue-950">
              At a Glance
            </p>

            <div className="flex flex-col gap-3">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="rounded-md border border-blue-950/10 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white">
                      <i className={`bi bi-${h.icon}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-blue-950">{h.title}</p>
                      <p className="text-sm sm:text-base text-slate-700 leading-6 sm:leading-7">
                        {h.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16 md:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
              Insurance & Payment Processing
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {insuranceSteps.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-md border border-blue-950/10 bg-white p-5 sm:p-6 shadow-sm flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white">
                    <i className={`bi bi-${s.icon} text-lg`} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-blue-950 text-base sm:text-lg">
                      {s.title}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-6 sm:leading-7">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-blue-950/15 bg-blue-950/[0.04] p-4 sm:p-5">
              <div className="flex gap-3">
                <i className="bi bi-clock-history text-blue-950 mt-1" />
                <p className="text-sm sm:text-base md:text-lg text-slate-700">
                  If your account does not reflect an insurance payment within{" "}
                  <span className="font-semibold text-blue-950">
                    two to four weeks
                  </span>
                  , please contact our office so we can help review the claim
                  status.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-md border border-blue-950/15 bg-white p-4 sm:p-5 shadow-sm">
              <div className="flex gap-3">
                <i className="bi bi-check2-circle text-blue-950 mt-1" />
                <p className="text-sm sm:text-base md:text-lg text-slate-700">
                  If you would like to explore monthly payment arrangements,
                  please discuss options with our team{" "}
                  <span className="font-semibold text-blue-950">
                    prior to the procedure
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
