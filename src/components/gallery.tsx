"use client";

import React, { useState } from "react";
import Image from "next/image";
import { propertyImages } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { X, ZoomIn } from "lucide-react";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    category: string;
  }>(null);

  const categories = ["Semua", "Desain Hunian", "Lingkungan", "Interior"];

  const filteredImages =
    activeCategory === "Semua"
      ? propertyImages.gallery
      : propertyImages.gallery.filter((img) => img.category === activeCategory);

  return (
    <section id="galeri" className="py-16 md:py-24 bg-[#F5EFE6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <SectionHeading
          title="Galeri Visual & Konsep Kawasan"
          description="Eksplorasi konsep arsitektur modern tropis, kenyamanan tata ruang, dan suasana kawasan Grand Ameera."
        />

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#221C18] text-white shadow-xs"
                  : "bg-[#FAF7F2] text-[#635A52] hover:bg-[#EBDBCF] hover:text-[#221C18] border border-[#E0D5C9]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Image Grid with 100% immediate visibility */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                setSelectedImage({
                  src: item.src,
                  title: item.title,
                  category: item.category,
                })
              }
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#FAF7F2] border border-[#E8DFD5] shadow-xs cursor-pointer card-hover-elevate transition-luxury"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              />

              {/* Gradient overlay on hover without scale */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#221C18]/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#EBDBCF]">
                  {item.category}
                </span>
                <div className="flex items-center justify-between text-white mt-1">
                  <h4 className="text-base font-bold">{item.title}</h4>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Small category tag when not hovering */}
              <div className="absolute top-3 left-3 group-hover:opacity-0 transition-opacity px-2.5 py-1 rounded-full bg-[#221C18]/70 backdrop-blur-xs text-white text-[11px] font-medium">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Note / Disclaimer below gallery */}
        <p className="mt-8 text-center text-xs text-[#8A7E73]">
          *Visual foto merupakan representasi dan ilustrasi konseptual arsitektur hunian. Hubungi Marketing untuk rincian realisasi fisik di lokasi.
        </p>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#221C18]/85 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD5]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Tutup Pratinjau Gambar"
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#221C18]/80 text-white hover:bg-[#221C18] transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-black/5">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain sm:object-cover"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-5 flex items-center justify-between border-t border-[#E8DFD5] bg-[#FAF7F2]">
              <div>
                <span className="text-xs font-semibold text-[#8A7E73] uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-bold text-[#221C18] mt-0.5">
                  {selectedImage.title}
                </h3>
              </div>
              <div className="text-xs text-[#736961]">
                Grand Ameera Madiun
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
