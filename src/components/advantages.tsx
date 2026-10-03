"use client";

import React from "react";
import { ADVANTAGES_DATA } from "@/lib/data";
import { FeatureCard } from "@/components/feature-card";

export function Advantages() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading matching Figma "Why Choose Us" (NO BADGE!) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#221C18]">
            Keunggulan Grand Ameera
          </h2>
          <p className="text-sm sm:text-base text-[#6E645C] leading-relaxed">
            Mewujudkan pengalaman memilih hunian syariah dengan amanah, nyaman, dan menentramkan untuk keluarga.
          </p>
        </div>

        {/* 4/5 Cards matching Figma Why Choose Us */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES_DATA.slice(0, 4).map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              iconName={feature.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
