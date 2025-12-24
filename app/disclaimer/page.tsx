"use client";

export default function Disclaimer() {
  return (
    <div className="flex flex-col min-h-screen items-start">
      <div className="px-6 py-10 sm:px-10 sm:py-14 lg:p-20">
        <p className="font-bold text-4xl sm:text-6xl lg:text-8xl">
          Disclaimer
        </p>
      </div>
      <div className="flex flex-col px-6 py-10 sm:px-10 sm:py-14 lg:p-20 gap-2 bg-slate-200 shadow-lg w-full">
        <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          Privacy Policy for this website
        </p>
        <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8">
          If you require any more information or have any questions about our
          privacy policy, please feel free to contact us. At
          https://www.drjoelsokol.com, the privacy of our visitors is of extreme
          importance to us. This privacy policy document outlines the types of
          personal information that is received and collected by
          https://www.drjoelsokol.com and how it is used.
        </p>
      </div>
      <div className="flex flex-col px-6 py-10 sm:px-10 sm:py-14 lg:p-20 gap-2 shadow-lg w-full">
        <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          Personal Information
        </p>
        <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8">
          By entering your full name, email address, and phone number, you are
          providing personal information that will be used by Sokol Dentistry
          for the sole purpose of returning your request to be contacted by us.
          We will only use this information to contact you in order to assist
          you in scheduling an appointment to be seen by Drs. Sokol or Sokol,
          and/or to answer any questions you may have indicated in the comments
          section. Our intention is to only use your personal information to
          return your request for contact regarding a dental appointment, and/or
          a dental related question.
        </p>
      </div>
      <div className="flex flex-col px-6 py-10 sm:px-10 sm:py-14 lg:p-20 gap-2 bg-slate-200 shadow-lg w-full">
        <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          Opt-Out Option
        </p>
        <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8">
          Please contact us if you wish to opt-out/unsubscribe from receiving any
          future communication.
        </p>
      </div>
      <div className="flex flex-col px-6 py-10 sm:px-10 sm:py-14 lg:p-20 gap-2 shadow-lg w-full">
        <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">Log Files</p>
        <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8">
          Like many other Web sites, https://www.drjoelsokol.com makes use of log
          files. The information inside the log files includes internet protocol
          ( IP ) addresses, type of browser, Internet Service Provider ( ISP ),
          date/time stamp, referring/exit pages, and number of clicks to analyze
          trends, administer the site, track user’s movement around the site,
          and gather demographic information. IP addresses, and other such
          information are not linked to any information that is personally
          identifiable.
        </p>
      </div>
      <div className="flex flex-col px-6 py-10 sm:px-10 sm:py-14 lg:p-20 gap-2 bg-slate-200 shadow-lg w-full">
        <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          Accessibility
        </p>
        <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8">
          We strive to make the Sokol Dentistry website universally accessible
          and we are continuously working to improve the accessibility of
          content on our website. If this website does not meet your needs,
          please contact us at Sokol Dentistry Phone Number(718) 745-6699 for
          assistance.
        </p>
      </div>
    </div>
  );
}