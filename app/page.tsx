"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section
        className="flex flex-col justify-center items-center text-center gap-5
                    px-4 py-12 sm:px-6 md:px-10 lg:px-20"
      >
        <p
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                      max-w-4xl leading-20 text-blue-950"
        >
          Transforming Dentistry
        </p>
        <p className="text-base sm:text-lg md:text-xl">
          Proudly serving Bay Ridge since 1988!
        </p>
        <Link href="/">
          <button
            className="shadow-lg px-4 py-2 border-blue-950 border rounded-md text-center
                            hover:bg-blue-950 hover:text-slate-100 hover:cursor-grab bg-slate-50"
          >
            Learn More
          </button>
        </Link>
        <Image
          src="/img/thedoctors.png"
          alt="home"
          width={1100}
          height={600}
          className="rounded-md w-full max-w-5xl h-auto"
        />
      </section>
      <section className="flex flex-col-reverse lg:flex-row py-44 px-12 gap-5 bg-slate-200 justify-between w-full items-center">
        <div>
          <Image
            src="/img/office.png"
            alt="home"
            width={500}
            height={400}
            className="rounded-md"
          />
        </div>

        <div className="max-w-3xl flex flex-col gap-5 items-start ml-auto p-5">
          <p className="font-bold lg:text-8xl md:text-6xl text-2xl text-blue-950">
            Expertise
          </p>
          <main>
            <p className="lg:text-xl leading-7">
              Sokol Dentistry has been bringing dentistry to Bay Ridge since
              1988. The Sokols practice a full scope of general and cosmetic
              dentistry with expertise ranging from porcelain veneers to dental
              implants, crowns and bridges. The Sokols can now correct a wide
              variety of so-called permanent cosmetic dental problems, and can
              literally redesign your smile.
            </p>
          </main>
          <Link href="/treatments">
            <button className="shadow-lg p-2 border-blue-950 border rounded-md text-center hover:bg-blue-950 hover:text-slate-100 hover:cursor-grab bg-slate-50">
              Explore Treatments
            </button>
          </Link>
        </div>
      </section>
      <section
        className="flex flex-col items-center 
                    px-6 sm:px-10 md:px-20 
                    py-16 sm:py-24 md:py-40 
                    justify-center gap-10"
      >
        <div>
          <p className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-blue-950">
            Testimonials
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 md:gap-10 w-full md:w-5xl">
          <div className="text-center max-w-2xl p-4 sm:p-5 mx-auto">
            <span className="text-blue-950">
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>
            </span>
            <p className="leading-5">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.&quot;
            </p>
            <p className="font-bold">John Doe</p>
          </div>

          <div className="text-center max-w-2xl p-4 sm:p-5 mx-auto">
            <span className="text-blue-950">
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>
            </span>
            <p className="leading-5">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.&quot;
            </p>
            <p className="font-bold">John Doe</p>
          </div>

          <div className="text-center max-w-2xl p-4 sm:p-5 mx-auto">
            <span className="text-blue-950">
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>{" "}
              <i className="bi bi-star-fill"></i>
            </span>
            <p className="leading-5">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.&quot;
            </p>
            <p className="font-bold">John Doe</p>
          </div>
        </div>
      </section>
      <section className="bg-slate-200 flex flex-col p-20 items-center justify-center gap-16">
        <div>
          <p className="font-bold text-blue-950 text-8xl">Process</p>
        </div>

        <div className="flex flex-col lg:flex-row max-w-7xl gap-10 justify-center">
          <div className="text-center flex flex-col gap-3">
            <p className="text-3xl font-bold">Consultation</p>
            <p className="leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3">
            <p className="text-3xl font-bold">Treatment Plan</p>
            <p className="leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3">
            <p className="text-3xl font-bold">Procedure</p>
            <p className="leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <hr className="border border-black w-1/2" />

        <div className="flex flex-col lg:flex-row max-w-7xl gap-10 justify-center">
          <div className="text-center flex flex-col gap-3">
            <p className="text-3xl font-bold">Post OP Care</p>
            <p className="leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3">
            <p className="text-3xl font-bold">Follow Up</p>
            <p className="leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3">
            <p className="text-3xl font-bold">Long Term Care</p>
            <p className="leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
