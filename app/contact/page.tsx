"use client"

import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <p>Contact Page</p>
      <div className="w-full max-w-3xl h-96">
        <MapClient />
      </div>
    </div>
  );
}
