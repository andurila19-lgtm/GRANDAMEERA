import React from "react";
import Link from "next/link";
import { BRAND_INFO, NAV_LINKS } from "@/lib/data";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#DFCFC2] border-t border-[#D5C4B4] text-[#221C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-16 md:pb-12 pb-24">
        
        {/* ==================================================== */}
        {/* MOBILE VIEW: Minimalist & Compact (no full-page bulk) */}
        {/* ==================================================== */}
        <div className="md:hidden flex flex-col items-center text-center space-y-4">
          {/* Brand Logo & Subtitle */}
          <Link href="#beranda" className="flex flex-col items-center">
            <span className="font-extrabold text-xl tracking-tight text-[#221C18]">
              {BRAND_INFO.name}
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#6C635B]">
              {BRAND_INFO.subtitle}
            </span>
          </Link>

          {/* Compact Quick Nav */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs font-medium text-[#5C534B]">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#221C18] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#faq"
              className="hover:text-[#221C18] transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-0.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBDBCF] border border-[#D5C4B4] text-[11px] font-medium text-[#221C18] hover:bg-[#FAF7F2] transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href={BRAND_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBDBCF] border border-[#D5C4B4] text-[11px] font-medium text-[#221C18] hover:bg-[#FAF7F2] transition-colors"
            >
              <MapPin className="w-3 h-3 text-[#221C18]" />
              <span>Maps</span>
            </a>
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBDBCF] border border-[#D5C4B4] text-[11px] font-medium text-[#221C18] hover:bg-[#FAF7F2] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#221C18]" />
              <span>Telepon</span>
            </a>
          </div>

          {/* Divider & Copyright */}
          <div className="w-full pt-3 border-t border-[#D5C4B4]/70 flex flex-col items-center gap-0.5 text-[10px] text-[#6C635B]">
            <p>{BRAND_INFO.copyright}</p>
            <p>Ahsana Property Madiun • Jawa Timur</p>
          </div>
        </div>

        {/* ==================================================== */}
        {/* DESKTOP VIEW: Full 5 Columns Matching Figma           */}
        {/* ==================================================== */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-1 space-y-4">
              <Link href="#beranda" className="flex flex-col text-left">
                <span className="font-extrabold text-xl tracking-tight text-[#221C18]">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#6C635B]">
                  {BRAND_INFO.subtitle}
                </span>
              </Link>

              <p className="text-xs text-[#5C534B] leading-relaxed max-w-xs">
                Kawasan hunian keluarga dengan konsep perumahan syariah di Madiun yang dirancang untuk kenyamanan keluarga.
              </p>
            </div>

            {/* Column 2: About */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#221C18]">
                Tentang
              </h4>
              <ul className="space-y-2 text-xs">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#5C534B] hover:text-[#221C18] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#221C18]">
                Bantuan
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="#faq"
                    className="text-[#5C534B] hover:text-[#221C18] transition-colors"
                  >
                    Tanya Jawab (FAQ)
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppUrl("Halo Kak, saya ingin bertanya dengan tim Marketing.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5C534B] hover:text-[#221C18] transition-colors"
                  >
                    Hubungi Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#hunian"
                    className="text-[#5C534B] hover:text-[#221C18] transition-colors"
                  >
                    Pilihan Tipe Unit
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Find Us */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#221C18]">
                Lokasi Kami
              </h4>
              <ul className="space-y-2 text-xs text-[#5C534B]">
                <li>Madiun, Jawa Timur</li>
                <li>
                  <a
                    href={BRAND_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#221C18] font-semibold hover:underline"
                  >
                    Buka di Google Maps
                  </a>
                </li>
                <li className="pt-1 text-[#6C635B]">
                  Pengembang: {BRAND_INFO.developer}
                </li>
              </ul>
            </div>

            {/* Column 5: Social / Kontak */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#221C18]">
                Kontak Resmi
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#5C534B] hover:text-[#221C18]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#221C18]" />
                    <span>WA: {BRAND_INFO.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="inline-flex items-center gap-2 text-[#5C534B] hover:text-[#221C18]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#221C18]" />
                    <span>Telp: {BRAND_INFO.phoneDisplay}</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Desktop Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-[#D5C4B4] flex items-center justify-between gap-4 text-xs text-[#6C635B]">
            <p>{BRAND_INFO.copyright}</p>
            <p>Grand Ameera • Perumahan Syariah Madiun</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
