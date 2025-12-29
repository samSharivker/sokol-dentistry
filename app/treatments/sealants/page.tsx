"use client";

export default function Sealants() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
      <section
        className="w-full flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Dental Sealants
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          A fast, effective preventive treatment that helps protect teeth from
          decay in hard-to-reach grooves and chewing surfaces.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-24">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Highly effective in preventing decay on the biting surfaces of your
            chewing teeth, dental sealants are a tooth-colored acrylic coating
            that is gently painted onto the surface of the tooth. This coating
            “seals” deep grooves, creating a protective barrier that shields the
            enamel from plaque and acids.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Sealants protect the depressions and grooves of the teeth from food
            particles and plaque that brushing and flossing may not always
            reach.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            The procedure is quick and comfortable — sealants typically take
            only a few minutes per tooth and hold up very well under normal
            chewing. They can last for several years before a reapplication is
            needed.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Both children and adults can benefit from sealants as an added layer
            of protection against tooth decay.
          </p>
        </div>
      </section>
    </div>
  );
}
