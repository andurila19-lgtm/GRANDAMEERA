"use client";

import React from "react";
import Image from "next/image";
import { Bed, Bath, Maximize2, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export interface PropertyCardProps {
  id: string;
  name: string;
  typeTag?: string;
  image: string;
  badge?: string;
  bedrooms?: number;
  bathrooms?: number;
  buildingArea?: number;
  landArea?: number;
  priceEstimate?: string;
  description: string;
  detailsNote?: string;
  ctaText?: string;
}

export function PropertyCard({
  name,
  typeTag,
  image,
  badge,
  bedrooms = 2,
  bathrooms = 1,
  buildingArea = 36,
  landArea = 72,
  priceEstimate = "Mulai Rp 295 Jt-an*",
  description,
  ctaText = "Tanya Tipe Ini",
}: PropertyCardProps) {
  const whatsappMessage = `Halo Kak, saya tertarik dengan contoh hunian ${name} di Grand Ameera Madiun. Mohon informasi ketersediaan unit dan skema syariahnya.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <article className="flex flex-col h-full rounded-3xl bg-[#EAD8C7] overflow-hidden shadow-xs hover:shadow-md transition-shadow">
      {/* Property Visual */}
      <div className="relative aspect-[4/3] w-full p-2.5 pb-0">
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#FAF7F2]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            className="object-cover"
          />

          {/* Badge */}
          {badge && (
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-[#221C18]/85 backdrop-blur-xs text-white text-[10px] font-bold tracking-wide uppercase">
              {badge}
            </div>
          )}

          {typeTag && (
            <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-xs text-[#221C18] text-[10px] font-bold">
              {typeTag}
            </div>
          )}
        </div>
      </div>

      {/* Card Content matching Figma */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-3.5">
        <div className="space-y-2">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-[#5C534B] font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#221C18] shrink-0" />
            <span>Madiun, Jawa Timur</span>
          </div>

          {/* Unit Name */}
          <h3 className="text-base sm:text-lg font-bold text-[#221C18] leading-snug">
            {name}
          </h3>

          {/* Description */}
          <p className="text-xs text-[#6C635B] leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Realistic Property Specs with Icons matching Figma */}
          <div className="pt-2 border-t border-[#DFCDBF] grid grid-cols-3 gap-2 text-[#4A423B]">
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <Bed className="w-3.5 h-3.5 text-[#221C18] shrink-0" />
              <span>{bedrooms} KT</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <Bath className="w-3.5 h-3.5 text-[#221C18] shrink-0" />
              <span>{bathrooms} KM</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <Maximize2 className="w-3.5 h-3.5 text-[#221C18] shrink-0" />
              <span className="truncate">{buildingArea}/{landArea} m²</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Dark button on left, Price/Marketing status on right */}
        <div className="pt-3 border-t border-[#DFCDBF] flex items-center justify-between gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#221C18] text-white text-xs font-bold hover:bg-[#382E28] transition-colors shrink-0"
          >
            <span>{ctaText}</span>
          </a>

          <div className="text-right">
            <div className="text-xs sm:text-sm font-extrabold text-[#221C18] leading-tight">
              {priceEstimate}
            </div>
            <div className="text-[9px] text-[#7A6F66]">
              Estimasi Konsep
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
