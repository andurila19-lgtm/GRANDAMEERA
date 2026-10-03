"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink, ShieldCheck, Compass } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function Location() {
  return (
    <section id="lokasi" className="py-16 md:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Lokasi Grand Ameera"
          description="Kawasan hunian syariah yang berlokasi di Madiun, Jawa Timur dengan kemudahan akses jalan untuk keluarga."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Location Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5EFE6] border border-[#E8DFD5] space-y-6 card-hover-elevate transition-luxury">
              
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#221C18] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6 text-[#EFE7DE]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#221C18]">
                    Grand Ameera
                  </h3>
                  <p className="text-sm font-semibold text-[#6C635B] mt-0.5">
                    Madiun, Jawa Timur
                  </p>
                  <p className="text-xs text-[#8A7E73] mt-1">
                    Dikembangkan oleh {BRAND_INFO.developer}
                  </p>
                </div>
              </div>

              {/* Informational bullet points */}
              <div className="space-y-3 pt-4 border-t border-[#E4D7CA]">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#524942]">
                  <Compass className="w-4 h-4 text-[#221C18] shrink-0" />
                  <span>Akses jalan memadai untuk mobilitas harian</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#524942]">
                  <ShieldCheck className="w-4 h-4 text-[#221C18] shrink-0" />
                  <span>Kawasan perumahan syariah tertata & asri</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#524942]">
                  <Navigation className="w-4 h-4 text-[#221C18] shrink-0" />
                  <span>Didampingi Marketing resmi saat survei lokasi</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={BRAND_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#221C18] text-white text-xs sm:text-sm font-semibold hover:bg-[#382E28] transition-colors shadow-xs"
                >
                  <span>Lihat di Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <WhatsAppButton
                  variant="secondary"
                  size="md"
                  message="Halo Kak, saya ingin meminta rute detail dan menjadwalkan survei ke lokasi Grand Ameera Madiun."
                  id="location-survey-btn"
                >
                  Jadwal Survei
                </WhatsAppButton>
              </div>

            </div>
          </div>

          {/* Right Column: Figma-styled Map Placeholder Component */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-[#EAE1D7] border border-[#DFCDBF] shadow-sm flex flex-col items-center justify-center p-6 text-center group">
              
              {/* Decorative map grid background graphic */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#221C18_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Subtle road line decorations */}
              <svg
                className="absolute inset-0 w-full h-full text-[#DFCDBF] stroke-current stroke-2 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="30%" x2="100%" y2="45%" strokeDasharray="6 6" />
                <line x1="20%" y1="0" x2="35%" y2="100%" />
                <line x1="60%" y1="0" x2="80%" y2="100%" strokeDasharray="4 4" />
                <circle cx="50%" cy="48%" r="48" fill="#F5EFE6" fillOpacity="0.8" />
              </svg>

              {/* Interactive Pin Highlight */}
              <div className="relative z-10 space-y-3">
                <div className="inline-flex p-3 rounded-full bg-[#221C18] text-white shadow-xl animate-bounce">
                  <MapPin className="w-8 h-8 text-[#EFE7DE]" />
                </div>

                <div className="bg-white/95 backdrop-blur-xs px-5 py-3 rounded-2xl shadow-md border border-[#E8DFD5] max-w-xs mx-auto">
                  <div className="text-sm font-bold text-[#221C18]">
                    Grand Ameera
                  </div>
                  <div className="text-xs text-[#6C635B]">
                    Madiun, Jawa Timur
                  </div>
                </div>

                <div>
                  <a
                    href={BRAND_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#221C18] text-white text-xs font-semibold hover:bg-[#382E28] transition-colors"
                  >
                    <span>Buka Peta Lokasi</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Note placeholder at bottom */}
              <div className="absolute bottom-3 left-4 right-4 text-[11px] text-[#8A7E73] bg-white/80 backdrop-blur-xs py-1 px-3 rounded-lg border border-[#E4D7CA]">
                *Dapat diganti dengan Google Maps Embed resmi saat koordinat presisi diterbitkan.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
