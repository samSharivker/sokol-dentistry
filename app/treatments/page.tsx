"use client"

import Link from "next/link"

export default function Treatments() {
  return (
    <div className="min-h-screen flex flex-col gap-1 items-center">
      <p>Treatments Page</p>
      <Link href="/treatments/bridges">Bridges</Link>
      <Link href="/treatments/crowns">Crowns</Link>
      <Link href="/treatments/dentures">Dentures</Link>
      <Link href="/treatments/extractions">Tooth Extractions</Link>
      <Link href="/treatments/fillings">Fillings / Restorations</Link>
      <Link href="/treatments/implants">Dental Implants</Link>
      <Link href="/treatments/root-canal">Non Surgical Root Canal</Link>
      <Link href="/treatments/sealants">Dental Sealants</Link>
    </div>
  );
}