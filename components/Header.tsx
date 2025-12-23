"use client"

export default function Header() {
  return (
    <header className="bg-blue-400 text-white text-shadow-2xs">
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col items-center text-center
          sm:flex-row sm:justify-between sm:items-center sm:text-left
          px-4 sm:px-8 lg:px-20
          py-2 sm:py-4
        "
      >
        <p className="text-lg sm:text-3xl lg:text-4xl font-semibold leading-tight">
          Sokol Dentistry
        </p>

        <div className="mt-0.5 sm:mt-0 text-[11px] sm:text-base leading-tight">
          <p><i className="bi bi-telephone-fill"></i> (718) 745-6699</p>
          <p className="text-right">Brooklyn, NY</p>
        </div>
      </div>
    </header>
  );
}
