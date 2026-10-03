"use client";

import React from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Phone } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full CTA Card matching Figma composition */}
        <div className="relative rounded-3xl bg-[#221C18] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-xl">
          {/* Subtle warm background architectural pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs text-xs font-semibold tracking-wider uppercase text-[#EBDBCF] border border-white/10">
              <span>Layanan Konsultasi Resmi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Sudah Menemukan Hunian yang Anda Cari?
            </h2>

            <p className="text-base sm:text-lg text-[#D5C4B4] leading-relaxed max-w-xl mx-auto">
              Konsultasikan kebutuhan hunian Anda langsung bersama Marketing Grand Ameera.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton
                variant="secondary"
                size="lg"
                id="final-cta-btn"
                message="Halo Kak, saya ingin konsultasi kebutuhan hunian keluarga di Grand Ameera Madiun."
              >
                Chat Marketing
              </WhatsAppButton>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white text-base font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>

            <p className="text-xs text-[#A8988B] pt-2">
              Layanan responsif via WhatsApp: {BRAND_INFO.phoneDisplay} ({BRAND_INFO.developer})
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
