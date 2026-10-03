"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, User, MessageCircle } from "lucide-react";
import { BRAND_INFO, NAV_LINKS } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD5]"
            : "bg-[#FAF7F2] border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Brand Logo matching Figma "Dwello" text logo */}
            <Link
              href="#beranda"
              className="flex flex-col text-left focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-[#221C18]">
                {BRAND_INFO.name}
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-[#736961]">
                {BRAND_INFO.subtitle}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#574E47] hover:text-[#221C18] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Right Side: Search, User, Sign in / Chat Button matching Figma */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#hunian"
                aria-label="Cari Unit"
                className="p-2 text-[#221C18] hover:text-[#382E28] transition-colors"
              >
                <Search className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl("Halo Kak, saya ingin terhubung dengan tim Marketing.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil Marketing"
                className="p-2 text-[#221C18] hover:text-[#382E28] transition-colors"
              >
                <User className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xs font-semibold px-5 py-2.5 rounded-xl bg-[#221C18] text-white hover:bg-[#382E28] transition-colors shadow-xs"
              >
                Chat Marketing
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat WhatsApp Marketing"
                className="p-2 rounded-lg bg-[#221C18] text-white"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#221C18] hover:bg-[#EFE7DE] transition-colors focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Floating Mobile Menu & Backdrop Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Card Menu */}
          <div
            className="fixed top-20 left-4 right-4 z-50 md:hidden bg-[#FAF7F2] rounded-3xl p-5 shadow-2xl border border-[#E8DFD5] animate-fade-in flex flex-col gap-4 max-h-[calc(100vh-6rem)] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile"
          >
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-base font-semibold text-[#221C18] hover:bg-[#EFE7DE] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#A8988B] text-xs font-normal">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#E8DFD5] flex flex-col gap-2.5">
              <a
                href="#hunian"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#F5EFE6] text-[#221C18] text-sm font-semibold border border-[#E8DFD5] hover:bg-[#EBDBCF] transition-colors"
              >
                <Search className="w-4 h-4 text-[#736961]" />
                <span>Cari Tipe Hunian</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#221C18] text-white text-sm font-semibold hover:bg-[#382E28] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Marketing</span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
