"use client";

import React, { useState } from "react";
import { FAQ_DATA } from "@/lib/data";
import { ChevronDown, MessageSquare, HelpCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [inquiryText, setInquiryText] = useState("");

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const message = inquiryText.trim()
      ? `Halo Kak, saya ingin bertanya: ${inquiryText.trim()} di Grand Ameera Madiun.`
      : "Halo Kak, saya ingin konsultasi mengenai Grand Ameera Madiun.";
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading matching Figma "Do You Have Any Questions? Get Help From Us" (NO BADGE!) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#221C18] leading-tight">
            Do You Have Any Questions?
            <br />
            Get Help From Us
          </h2>

          {/* Subtitle Links matching Figma */}
          <div className="pt-2 flex items-center justify-center gap-6 text-xs sm:text-sm text-[#6C635B]">
            <a
              href={getWhatsAppUrl("Halo Kak, saya ingin tanya langsung dengan Marketing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#221C18] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#221C18]" />
              <span>Chat langsung dengan Marketing</span>
            </a>
            <span className="text-[#C2B1A3]">•</span>
            <div className="inline-flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#221C18]" />
              <span>Daftar Tanya Jawab (FAQ)</span>
            </div>
          </div>

          {/* Input Box matching Figma's exact search/submit bar */}
          <div className="pt-4 max-w-lg mx-auto">
            <form
              onSubmit={handleSubmitInquiry}
              className="p-1.5 sm:p-2 rounded-2xl bg-[#EAD8C7] border border-[#DFCDBF] flex items-center gap-2"
            >
              <input
                type="text"
                value={inquiryText}
                onChange={(e) => setInquiryText(e.target.value)}
                placeholder="Ketik pertanyaan atau nomor WhatsApp..."
                className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm text-[#221C18] placeholder-[#7A7067] outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#221C18] text-white text-xs sm:text-sm font-semibold hover:bg-[#382E28] transition-colors shrink-0 cursor-pointer"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[#EAD8C7]/50 border border-[#DFCDBF] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#221C18]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? "bg-[#221C18] text-white rotate-180" : "bg-white text-[#221C18]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-[#5C534B] leading-relaxed border-t border-[#DFCDBF]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
