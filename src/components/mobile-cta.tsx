"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Aksi Cepat WhatsApp Marketing"
      className="md:hidden fixed bottom-4 left-4 right-4 z-40 animate-fade-in"
    >
      <div className="bg-[#FAF7F2]/95 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-[#DFCDBF] flex items-center justify-between gap-3">
        <div className="pl-3 py-1 flex flex-col">
          <span className="text-[11px] font-bold text-[#221C18] uppercase tracking-wide">
            Grand Ameera
          </span>
          <span className="text-[10px] text-[#736961]">
            Konsultasi WhatsApp
          </span>
        </div>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp-btn"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#221C18] text-white text-xs font-bold hover:bg-[#382E28] transition-colors shadow-md"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Chat Marketing</span>
        </a>
      </div>
    </aside>
  );
}
