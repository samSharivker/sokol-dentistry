"use client";

export default function Root_Canal() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
      <section
        className="w-full flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Non-Surgical Root Canal
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          A comfortable, tooth-saving treatment designed to relieve pain and
          preserve your natural smile.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            A non-surgical root canal (endodontic treatment) is recommended when
            the nerve inside a tooth becomes inflamed or infected. This can be
            caused by deep decay, repeated dental procedures on the tooth,
            cracks, chips, or trauma.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            In the past, severely damaged or infected teeth were often
            extracted. Today, root canal therapy allows many of these teeth to
            be saved, helping you maintain your natural bite, chewing function,
            and smile.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Preserving your natural tooth can also help protect the surrounding
            teeth and jaw, preventing shifting and bite changes that may occur
            after an extraction.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            What is a Non-Surgical Root Canal?
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              A non-surgical root canal is a procedure in which the inflamed or
              infected pulp (nerve tissue) is carefully removed from inside the
              tooth. The inside of the root canals is then cleaned, shaped, and
              filled with a biocompatible material to seal and protect the tooth
              from further infection.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              The procedure is usually performed under local anesthesia so the
              area is numbed and you remain comfortable throughout the visit.
              Many patients find that a root canal feels similar to having a
              routine filling.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            What to Expect During Treatment
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              During your root canal appointment, Dr. Sokol will:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              <li>
                Numb the tooth and surrounding area with local anesthetic.
              </li>
              <li>
                Create a small opening in the tooth to access the inflamed or
                infected pulp.
              </li>
              <li>
                Clean and shape the inside of the root canals using delicate
                instruments.
              </li>
              <li>
                Fill and seal the canals with a biocompatible material to help
                prevent reinfection.
              </li>
              <li>
                Place a temporary or permanent filling; in many cases, a crown
                will later be recommended to protect the tooth.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            After Your Root Canal
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              It is common to feel mild tenderness or sensitivity in the area
              for a short period after treatment. This can often be managed with
              over-the-counter pain relievers if recommended by your doctor.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              You may be advised to chew on the opposite side until a final
              restoration, such as a crown, is placed. This helps protect the
              tooth while it is healing and before it is fully strengthened.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Maintaining good oral hygiene — brushing, flossing, and regular
              checkups — is essential to help ensure the long-term success of
              your root canal treatment.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              If you experience significant pain, swelling, or any symptoms that
              concern you after treatment, please contact our office so we can
              evaluate and assist you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
