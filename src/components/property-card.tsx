"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, MapPin, Info } from "lucide-react";
import { getPropertyWhatsAppUrl } from "@/lib/whatsapp";

interface PropertyCardProps {
  id: string;
  name: string;
  image: string;
  badge?: string;
  description: string;
  detailsNote: string;
  ctaText?: string;
}

export function PropertyCard({
  name,
  image,
  description,
  detailsNote,
  ctaText = "Tanya via WhatsApp",
}: PropertyCardProps) {
  const whatsappUrl = getPropertyWhatsAppUrl(name);

  return (
    <article className="flex flex-col rounded-3xl bg-[#EAD8C7] overflow-hidden shadow-xs hover:shadow-md transition-shadow">
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
        </div>
      </div>

      {/* Card Content matching Figma */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          {/* Location & Name */}
          <div className="flex items-center gap-1.5 text-xs text-[#5C534B] font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#221C18] shrink-0" />
            <span>Madiun, Jawa Timur</span>
          </div>

          <h3 className="text-lg font-bold text-[#221C18]">
            {name}
          </h3>

          <p className="text-xs text-[#6C635B] leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Neutral Details line matching Figma room/sqft format */}
          <div className="pt-1 text-xs text-[#61574F] font-medium flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#8A7E73] shrink-0" />
            <span>{detailsNote}</span>
          </div>
        </div>

        {/* Bottom Row: Dark button on left, Price/Marketing status on right */}
        <div className="pt-3 border-t border-[#DFCDBF] flex items-center justify-between gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#221C18] text-white text-xs font-semibold hover:bg-[#382E28] transition-colors"
          >
            <span>{ctaText}</span>
          </a>

          <div className="text-right">
            <span className="text-xs font-bold text-[#221C18]">
              Hubungi Marketing
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
