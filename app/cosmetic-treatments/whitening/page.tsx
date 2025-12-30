"use client";

import Link from "next/link";

export default function Whitening() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-6">
        <Link
          href="/cosmetic-treatments"
          className="inline-block px-4 py-2 border border-blue-950 rounded-md
                     bg-slate-50 shadow-sm text-sm sm:text-base
                     hover:bg-blue-950 hover:text-white hover:cursor-grab
                     transition-all duration-200"
        >
          ← Back to Cosmetic Treatments
        </Link>
      </div>
      <section
        className="w-full flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Teeth Whitening
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Safe, effective whitening options — from custom take-home trays to
          in-office Zoom! treatment — to help you achieve a brighter, more
          confident smile.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
            Whitening Made Simple
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Having a beautiful smile may be easier than you think. Many people
            achieve the look they’ve been dreaming of with our simple bleaching
            procedures. Whitening is safe, quick, and relatively inexpensive.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            At any appointment, just let us know if you’d like to whiten your
            teeth. You can choose to lighten only your upper teeth or both upper
            and lower teeth, depending on how much you show when you talk and
            smile.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            What Are the Details of Teeth Whitening?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              In just a day or two, your custom bleaching trays (splints) can be
              ready for you to pick up. We provide a special bleaching agent
              that you place into the clear trays. With only a few hours of wear
              per day, the gel gently bubbles stains out of your enamel in a
              short time, without altering your tooth structure or existing
              dental work.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Once your teeth have reached the desired brightness, only
              occasional touch-up treatments are needed to maintain your new
              smile.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Dental bleaching can correct discoloration caused by staining,
              aging, or chemical changes to the teeth. In some severe cases,
              crowns or veneers may be the better option, but because of its low
              cost and effectiveness, bleaching is almost always worth trying
              first.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            How Is Take-Home Whitening Done?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-base sm:text-lg md:text-xl">
                Key benefits of teeth whitening:
              </p>
              <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
                <li>Corrects brown, yellow, and spotted tooth staining</li>
                <li>Works for people of almost any age</li>
                <li>
                  Provides a near-permanent solution for a dull smile, restoring
                  brightness and bringing your smile to life
                </li>
              </ul>
            </div>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              An impression is taken to create a specialized mouthguard (stent)
              that holds the bleaching gel against your teeth. The material is
              typically used each day or evening for about 3–4 hours over one to
              two weeks. At the end of this time, significant whitening usually
              occurs — in some cases, the change can be dramatic.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              For severe staining, crowns or porcelain veneers may be more
              appropriate. We’ll help you choose the option that best matches
              your goals.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Considerations for Teeth Whitening
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Over-the-counter whitening products are widely available, but they
              can sometimes irritate gums or tooth structure if not used
              properly. For your safety and the best possible results, we
              recommend products and methods supervised by our office.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Zoom! Whitening
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              If you prefer teeth that are immediately whiter, or you would
              rather whiten over a few nights while you sleep, Zoom! offers both
              in-office and take-home options.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              The Zoom! In-Office Whitening System uses proprietary technology
              to whiten your teeth an average of about eight shades in a little
              over an hour while you relax in the dental chair. The Zoom!
              Take-Home System uses a special gel to whiten your teeth several
              shades over just a few nights.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Is Zoom! Whitening Right for Me?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Tooth discoloration can be caused by aging, coffee, tea, tobacco,
              certain medications (like tetracycline), or excessive fluoride
              during tooth development. With an oral exam, Dr. Sokol can
              determine whether you are a good candidate for Zoom! whitening and
              perform a shade assessment.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Whitening under professional supervision is considered safe, and
              many dentists view it as one of the safest cosmetic dental
              procedures available. As with most whitening systems, Zoom! is not
              recommended for children under 13 or for pregnant or nursing
              women.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              With proper post-whitening care — regular brushing, flossing, and
              occasional touch-ups using Zoom! take-home gel — your teeth can
              remain noticeably lighter than before treatment.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            How Zoom! Works
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-6">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Over-the-counter strips, brush-on gels, and whitening toothpastes
              can take weeks or months to lighten your teeth just a few shades.
              Zoom! is clinically designed to provide more dramatic results in a
              much shorter time, under professional supervision.
            </p>
            <p className="font-semibold text-base sm:text-lg md:text-xl">
              Zoom! In-Office Whitening:
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              The Zoom! light-activated whitening gel contains hydrogen
              peroxide. As it breaks down, oxygen enters the enamel and dentin,
              bleaching discolorations while leaving the tooth structure
              unchanged. The specialized light helps activate the gel and
              enhance its effectiveness. The entire appointment generally takes
              a little over an hour, including preparation and a brief
              post-treatment fluoride application.
            </p>
            <p className="font-semibold text-base sm:text-lg md:text-xl">
              Zoom! Take-Home Whitening:
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Zoom! take-home gel is worn in custom trays for 4–8 hours per
              application, typically over several nights. Many patients see
              significant lightening after just a few uses. Dr. Sokol will
              advise you on how many applications are appropriate for your
              specific situation.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Some patients experience temporary sensitivity to cold during or
              after whitening; this usually resolves within a few days after
              treatment is paused or completed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
