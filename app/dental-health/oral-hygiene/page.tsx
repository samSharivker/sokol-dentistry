"use client";

import Link from "next/link";

export default function Oral_Hygiene() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-6">
        <Link
          href="/dental-health"
          className="inline-block px-4 py-2 border border-blue-950 rounded-md
                     bg-slate-50 shadow-sm text-sm sm:text-base
                     hover:bg-blue-950 hover:text-white hover:cursor-grab
                     transition-all duration-200"
        >
          ← Back to Dental Health
        </Link>
      </div>
      <section
        className="w-full flex flex-col items-center text-center gap-4
                   px-4 sm:px-6 md:px-10 lg:px-20
                   py-16 sm:py-20 md:py-24"
      >
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950">
          Oral Hygiene
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl">
          Daily brushing, flossing, and professional care work together to keep
          your teeth, gums, and smile healthy for life.
        </p>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950">
            Why is oral hygiene so important?
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Adults over 35 lose more teeth to gum diseases (periodontal disease)
            than from cavities. Three out of four adults are affected at some
            time in their life. The best way to prevent cavities and periodontal
            disease is by good tooth brushing and flossing techniques, performed
            daily.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            Periodontal disease and decay are both caused by bacterial plaque.
            Plaque is a colorless film which sticks to your teeth at the
            gumline, and it is constantly forming. By thorough daily brushing
            and flossing you can remove these germs and help prevent periodontal
            disease.
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            How to Brush
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              If you have any pain while brushing or have any questions about
              how to brush properly, please be sure to call the office at{" "}
              <span className="font-semibold">(718) 745-6699</span>.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Dr. Sokol recommends using a soft to medium toothbrush. Position
              the brush at a 45-degree angle where your gums and teeth meet.
              Gently move the brush in a circular motion several times using
              small, gentle strokes on the outside surfaces of your teeth. Use
              light pressure while putting the bristles between the teeth, but
              not so much pressure that you feel discomfort.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              When you are done cleaning the outside surfaces of all your teeth,
              follow the same directions while cleaning the inside of the back
              teeth. To clean the inside surfaces of the upper and lower front
              teeth, hold the brush vertically and make several gentle
              back-and-forth strokes over each tooth. Don’t forget to gently
              brush the surrounding gum tissue.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Next, clean the biting surfaces of your teeth using short, gentle
              strokes. Change the position of the brush as often as necessary to
              reach and clean all surfaces. Try to watch yourself in the mirror
              to make sure you clean each surface. After you are done, rinse
              vigorously to remove any plaque you might have loosened while
              brushing.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            How to Floss
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Periodontal disease usually appears between the teeth where your
              toothbrush cannot reach. Flossing is a very effective way to
              remove plaque from those surfaces, but it is important to develop
              the proper technique.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Start with a piece of waxed floss about 18″ long. Lightly wrap
              most of the floss around the middle finger of one hand and the
              rest around the middle finger of the other hand. To clean the
              upper teeth, hold the floss tightly between the thumb and
              forefinger of each hand and gently insert it between the teeth
              using a back-and-forth motion. Do not force or snap the floss into
              place.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Bring the floss to the gumline, then curve it into a C-shape
              against one tooth. Slide it into the space between the gum and the
              tooth until you feel light resistance. Move the floss up and down
              on the side of one tooth, then repeat on the adjacent tooth.
              Continue around all upper teeth, turning the floss from one finger
              to the other as it becomes soiled.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              To clean between the bottom teeth, guide the floss using the
              forefingers of both hands. Don’t forget the back side of the last
              tooth on both sides, upper and lower. When finished, rinse
              vigorously with water to remove plaque and food particles.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Do not be alarmed if during the first week of flossing your gums
              bleed or are a little sore. If your gums hurt while flossing, you
              may be doing it too hard or pinching the tissue. As you floss
              daily and remove the plaque, your gums will heal and the bleeding
              should stop.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Caring for Sensitive Teeth
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Sometimes after dental treatment, teeth are sensitive to hot and
              cold. This should not last long, but only if the mouth is kept
              clean. If the mouth is not kept clean, the sensitivity may
              continue and become more severe. If your teeth are especially
              sensitive, consult with your doctor. They may recommend a
              medicated toothpaste or mouth rinse made especially for sensitive
              teeth.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Choosing Oral Hygiene Products
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              With so many products on the market, choosing between them can be
              confusing. Automatic and electronic toothbrushes are safe and
              effective for the majority of patients. Oral irrigators (water
              spraying devices) will rinse your mouth thoroughly, but they will
              not remove plaque on their own—you still need to brush and floss.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Some toothbrushes have a rubber tip on the handle, which is used
              to massage the gums after brushing. There are also tiny brushes
              (interproximal brushes) that clean between your teeth. If these
              are used improperly, you could injure the gums, so discuss proper
              use with your doctor.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Fluoride toothpastes and mouth rinses, when used with brushing and
              flossing, can reduce tooth decay significantly. These rinses are
              not recommended for children under six years of age. Tartar
              control toothpastes will reduce tartar above the gumline, but gum
              disease starts below the gumline, so they have not been proven to
              reduce early gum disease.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Anti-plaque rinses approved by the American Dental Association
              contain agents that may help bring early gum disease under
              control. Use these in conjunction with brushing and flossing for
              best results.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">
            Professional Cleaning
          </p>
          <div className="bg-slate-50 shadow-md rounded-md p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
              Daily brushing and flossing will keep dental calculus (tartar) to
              a minimum, but a professional cleaning is still needed to remove
              buildup in places your toothbrush and floss cannot reach. Your
              regular visits to our office are an important part of your program
              to prevent gum disease and keep your teeth for a lifetime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
