"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { propertyImages } from "@/lib/data";
import { PropertyCard } from "@/components/property-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PropertyShowcase() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="hunian" className="py-16 md:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading matching Figma "Our Popular Residences" (NO BADGE!) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#221C18]">
            Pilihan Hunian
          </h2>
          <p className="text-sm sm:text-base text-[#6E645C] leading-relaxed">
            Temukan pilihan hunian yang sesuai dengan kebutuhan keluarga Anda.
          </p>
        </div>

        {/* 6 Units Swiper Slider matching Figma */}
        <div className="mt-12">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
          >
            {propertyImages.units.map((unit) => (
              <SwiperSlide key={unit.id} className="h-auto">
                <PropertyCard
                  id={unit.id}
                  name={unit.name}
                  typeTag={unit.typeTag}
                  image={unit.image}
                  badge={unit.badge}
                  bedrooms={unit.bedrooms}
                  bathrooms={unit.bathrooms}
                  buildingArea={unit.buildingArea}
                  landArea={unit.landArea}
                  priceEstimate={unit.priceEstimate}
                  description={unit.description}
                  detailsNote={unit.detailsNote}
                  ctaText={unit.ctaText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Circular Navigation Buttons Centered Below Cards matching Figma */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Hunian Sebelumnya"
            className="w-10 h-10 rounded-full bg-[#221C18] hover:bg-[#382E28] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Hunian Selanjutnya"
            className="w-10 h-10 rounded-full bg-[#221C18] hover:bg-[#382E28] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
