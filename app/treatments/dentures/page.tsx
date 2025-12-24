"use client";

export default function Dentures() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <div className="w-full flex flex-col gap-5 px-6 py-10 md:px-20 md:py-20">
        <p className="font-bold text-3xl sm:text-4xl md:text-5xl">Dentures</p>
        <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 max-w-5xl">
          A denture or a complete denture as it is often called, is an appliance that is inserted in the mouth, replaces natural teeth and provides support for the cheeks and lips.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5 px-6 py-10 md:px-20 md:py-20 bg-slate-200">
        <p className="font-bold text-3xl sm:text-4xl md:text-5xl">Different Denture Styles</p>
        <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 max-w-5xl">A conventional denture is made after all teeth have been extracted and the tissues (gums) have healed.</p>
        <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 max-w-5xl">An immediate denture is fabricated and inserted immediately after the teeth are extracted and the tissues are allowed to heal under the denture.</p>
        <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 max-w-5xl">An upper denture has acrylic, usually flesh colored, that covers the palate (roof of the mouth).</p>
        <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 max-w-5xl">A lower denture is shaped like a horseshoe to leave room for the tongue.</p>
      </div>
      <div className="w-full flex flex-col gap-5 px-6 py-10 md:px-20 md:py-20">
        <p className="font-bold text-3xl sm:text-4xl md:text-5xl">Denture Materials and Longterm Care</p>
        <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 max-w-5xl">The teeth are made of plastic, porcelain or a combination thereof. Dentures can be fabricated to fit over endodonticly treated teeth and a complete denture can be attached to dental implants to allow for a more secure fit of the appliance.</p>
        <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 max-w-5xl">Dentures over a normal course of time will wear and need to be replaced or relined in order to keep the jaw alignment normal. The alignment will slowly change as the bone and gum ridges recede or shrink due to the extraction of the teeth. Regular dentist examinations are still important for the denture wearer so that the oral tissues can be checked for disease or change.</p>
      </div>
    </div>
  );
}