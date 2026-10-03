"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Building2, ShieldCheck, ChevronDown } from "lucide-react";
import { propertyImages } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  const [selectedLocation, setSelectedLocation] = useState("Madiun, Jawa Timur");
  const [selectedType, setSelectedType] = useState("Semua Tipe");
  const [selectedScheme, setSelectedScheme] = useState("Murni Syariah");

  const handleSearchClick = () => {
    const message = `Halo Kak, saya ingin konsultasi hunian ${selectedType} (${selectedScheme}) di Grand Ameera ${selectedLocation}. Mohon informasi ketersediaan unit.`;
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="beranda" className="relative pt-4 pb-8 sm:pt-8 sm:pb-12 md:pt-10 md:pb-16 overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & CTA (Centered on mobile, left on desktop) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 lg:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Responsive H1 Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#221C18] leading-tight sm:leading-[1.12]">
              Temukan Hunian Nyaman
              <br className="hidden sm:inline" />{" "}
              untuk Keluarga Anda
            </h1>

            {/* Supporting Text */}
            <p className="text-xs sm:text-sm lg:text-base text-[#6B6159] leading-relaxed max-w-md mx-auto lg:mx-0">
              Grand Ameera menghadirkan konsep hunian syariah di Madiun untuk keluarga yang menginginkan tempat tinggal yang nyaman dan bernilai.
            </p>

            {/* Primary Action Button */}
            <div className="pt-0.5 sm:pt-1 flex justify-center lg:justify-start w-full">
              <a
                href="#hunian"
                className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-6 py-2.5 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#221C18] text-white hover:bg-[#382E28] transition-colors shadow-xs"
              >
                Temukan Hunian
              </a>
            </div>
          </div>

          {/* Right Column: Hero Villa Visual */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#E8DFD5] bg-[#F5EFE6]">
                <Image
                  src={propertyImages.hero}
                  alt="Konsep Hunian Grand Ameera Madiun"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Floating Filter Search Bar */}
        <div className="mt-5 sm:mt-8 lg:mt-10 max-w-5xl mx-auto">
          <div className="p-2.5 sm:p-3.5 lg:p-4 rounded-2xl sm:rounded-3xl bg-[#EAD8C7] border border-[#DFCDBF] shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 items-center">
              
              {/* Field 1: Location */}
              <div className="bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-[#E4D8CD] flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-2.5 overflow-hidden">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7A7067] shrink-0" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-[11px] text-[#8A7E73] font-medium leading-none mb-0.5 sm:mb-1">Lokasi</span>
                    <span className="text-xs sm:text-sm font-bold text-[#221C18] truncate leading-none">
                      {selectedLocation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Field 2: Type with Chevron */}
              <div className="bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-[#E4D8CD] flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-2.5 w-full">
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7A7067] shrink-0" />
                  <div className="flex flex-col text-left w-full">
                    <span className="text-[10px] sm:text-[11px] text-[#8A7E73] font-medium leading-none mb-0.5 sm:mb-1">Tipe</span>
                    <div className="relative flex items-center w-full">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="text-xs sm:text-sm font-bold text-[#221C18] bg-transparent outline-none cursor-pointer w-full appearance-none pr-5 leading-none"
                      >
                        <option value="Semua Tipe">Semua Tipe</option>
                        <option value="Tipe 1-Lantai">Tipe 1-Lantai</option>
                        <option value="Tipe 2-Lantai">Tipe 2-Lantai</option>
                        <option value="Tipe Fleksibel">Tipe Fleksibel</option>
                      </select>
                      <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#7A7067] absolute right-0 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Field 3: Price / Scheme with Chevron */}
              <div className="bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-[#E4D8CD] flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-2.5 w-full">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7A7067] shrink-0" />
                  <div className="flex flex-col text-left w-full">
                    <span className="text-[10px] sm:text-[11px] text-[#8A7E73] font-medium leading-none mb-0.5 sm:mb-1">Skema Pembelian</span>
                    <div className="relative flex items-center w-full">
                      <select
                        value={selectedScheme}
                        onChange={(e) => setSelectedScheme(e.target.value)}
                        className="text-xs sm:text-sm font-bold text-[#221C18] bg-transparent outline-none cursor-pointer w-full appearance-none pr-5 leading-none"
                      >
                        <option value="Murni Syariah">Murni Syariah</option>
                        <option value="Tanpa Riba / Denda">Tanpa Riba / Denda</option>
                        <option value="Akad Jelas Ahsana">Akad Jelas Ahsana</option>
                      </select>
                      <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#7A7067] absolute right-0 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: Cari Hunian */}
              <div>
                <button
                  type="button"
                  onClick={handleSearchClick}
                  className="w-full py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-[#221C18] text-white font-bold text-xs sm:text-sm hover:bg-[#382E28] transition-colors shadow-xs cursor-pointer text-center"
                >
                  Cari Hunian
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
