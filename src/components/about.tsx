"use client";

import React from "react";
import Image from "next/image";
import { propertyImages } from "@/lib/data";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function About() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image matching Figma */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-[#E8DFD5] bg-[#F5EFE6]">
                <Image
                  src={propertyImages.about}
                  alt="Kawasan Hunian Grand Ameera"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Title, Copy, Stats matching Figma */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#221C18] leading-tight">
              Kenali Grand Ameera
            </h2>

            <p className="text-base text-[#665D55] leading-relaxed max-w-lg mx-auto lg:mx-0">
              Grand Ameera merupakan kawasan hunian dengan konsep perumahan syariah di Madiun yang dirancang untuk menjadi tempat tinggal yang nyaman bagi keluarga.
            </p>

            {/* Stats row matching Figma 8K+ / 6K+ / 2K+ */}
            <div className="grid grid-cols-3 gap-6 pt-4 w-full">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#221C18]">100%</div>
                <div className="text-xs sm:text-sm text-[#736961] font-medium mt-1">Murni Syariah</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#221C18]">Asri</div>
                <div className="text-xs sm:text-sm text-[#736961] font-medium mt-1">Hunian Nyaman</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#221C18]">Madiun</div>
                <div className="text-xs sm:text-sm text-[#736961] font-medium mt-1">Jawa Timur</div>
              </div>
            </div>

            {/* CTA matching prompt: "Kenali Lebih Lanjut" */}
            <div className="pt-2 flex justify-center lg:justify-start w-full">
              <WhatsAppButton
                variant="primary"
                size="md"
                message="Halo Kak, saya ingin kenali lebih lanjut mengenai kawasan perumahan syariah Grand Ameera Madiun."
                id="about-cta"
              >
                Kenali Lebih Lanjut
              </WhatsAppButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
