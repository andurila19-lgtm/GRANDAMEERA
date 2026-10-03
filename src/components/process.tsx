"use client";

import React from "react";
import { CONSULTATION_STEPS } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function Process() {
  return (
    <section className="py-16 md:py-24 bg-[#F5EFE6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Alur Konsultasi & Kepemilikan"
          description="Tahapan sederhana dan transparan untuk mewujudkan hunian impian keluarga Anda di Grand Ameera."
        />

        {/* 4-Step Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONSULTATION_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative p-6 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD5] flex flex-col justify-between space-y-6 card-hover-elevate transition-luxury group"
            >
              <div className="space-y-4">
                {/* Big Step Number matching Figma editorial style */}
                <div className="text-3xl sm:text-4xl font-extrabold text-[#D5C4B4] group-hover:text-[#221C18] transition-colors">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-[#221C18]">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6C635B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator arrow for desktop */}
              {index < CONSULTATION_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#EBDBCF] text-[#221C18] flex items-center justify-center text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <WhatsAppButton
            variant="primary"
            size="lg"
            message="Halo Kak, saya ingin mulai konsultasi langkah pertama untuk hunian di Grand Ameera."
            id="process-start-cta"
          >
            Mulai Konsultasi Langkah 01
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
}
