"use client";

export default function Dentures() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
      <section
        className="w-full flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Dentures
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Comfortable, functional solutions designed to restore confidence,
          support facial structure, and improve everyday chewing and speech.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            A denture — or complete denture — is an appliance that is inserted
            in the mouth, replaces natural teeth, and provides support for the
            cheeks and lips.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Different Denture Styles
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              A conventional denture is made after all teeth have been extracted
              and the tissues (gums) have healed.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              An immediate denture is fabricated and inserted immediately after
              the teeth are extracted, allowing the tissues to heal under the
              denture.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              An upper denture has acrylic — usually flesh-colored — that covers
              the palate (roof of the mouth).
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              A lower denture is shaped like a horseshoe to allow room for the
              tongue.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Denture Materials & Long-Term Care
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              The teeth are made of plastic, porcelain, or a combination of
              both. Dentures can be fabricated to fit over endodontically
              treated teeth, and a complete denture can be attached to dental
              implants to provide a more secure fit.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Over time, dentures will wear and may need to be replaced or
              relined to maintain proper jaw alignment. As the bone and gum
              ridges change after tooth extraction, adjustments are essential
              for comfort and function.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Regular dental examinations remain important for denture wearers
              so the oral tissues can be monitored for changes or signs of
              disease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
