"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialItem {
  id: string;
  image: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-1",
    image: "/images/gallery-1.jpg",
    name: "Keluarga Bpk. Hendra & Ibu Maya",
    location: "Madiun",
    content:
      "Alhamdulillah, proses konsultasi dengan tim Marketing Ahsana sangat terbuka dan ramah. Skema syariah tanpa bunga dan denda membuat hati kami tenang dalam merencanakan masa depan keluarga.",
    rating: 5,
  },
  {
    id: "testi-2",
    image: "/images/gallery-2.jpg",
    name: "Bpk. Rizki Pratama",
    location: "Madiun, Jawa Timur",
    content:
      "Desain arsitektur Grand Ameera sangat memperhatikan sirkulasi udara dan privasi keluarga. Lingkungannya asri dan nyaman untuk tempat tinggal jangka panjang.",
    rating: 5,
  },
  {
    id: "testi-3",
    image: "/images/gallery-3.jpg",
    name: "Ibu Nurul Aini",
    location: "Madiun",
    content:
      "Penjelasan tahapan pemilihan unit sangat jelas dan transparan. Tidak ada biaya tersembunyi atau akad yang meragukan. Sesuai harapan keluarga kami.",
    rating: 5,
  },
  {
    id: "testi-4",
    image: "/images/gallery-4.jpg",
    name: "Keluarga Bpk. Dimas & Ibu Rina",
    location: "Madiun",
    content:
      "Lingkungan perumahan yang tenang dan tata letak kawasan yang rapi membuat anak-anak bisa bermain dengan aman. Sangat kami rekomendasikan untuk keluarga muda.",
    rating: 5,
  },
  {
    id: "testi-5",
    image: "/images/gallery-5.jpg",
    name: "Bpk. Agus Setiawan",
    location: "Madiun, Jawa Timur",
    content:
      "Pendampingan survei lokasi oleh Marketing sangat informatif. Detail konsep syariah murni dijelaskan secara lugas dan terpercaya.",
    rating: 5,
  },
  {
    id: "testi-6",
    image: "/images/gallery-6.jpg",
    name: "Ibu Wahyuni Puspita",
    location: "Madiun",
    content:
      "Pilihan desain fasad tropis modern dan tata ruangnya sangat cocok dengan kebutuhan kami yang mengutamakan kenyamanan dan ketenangan beribadah di rumah.",
    rating: 5,
  },
];

export function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading matching Figma "What People Say About Dwello" (NO BADGE!) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#221C18]">
            Kesan Keluarga Bersama Kami
          </h2>
        </div>

        {/* 6 Cards Slider matching Figma with Swipe Support */}
        <div className="mt-12">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
          >
            {TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="flex flex-col h-full rounded-3xl bg-[#EAD8C7] overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                  {/* Photo on Top matching Figma */}
                  <div className="relative aspect-[16/10] w-full p-2.5 pb-0">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#FAF7F2]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                    {/* Reviewer Row */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-[#221C18]">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-[#7A7067]">
                          {item.location}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 bg-white/70 px-2 py-1 rounded-lg text-xs font-bold text-[#221C18]">
                        <Star className="w-3.5 h-3.5 fill-[#221C18] text-[#221C18]" />
                        <span>5.0</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#5C534B] leading-relaxed italic">
                      &ldquo;{item.content}&rdquo;
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Circular Navigation Buttons Centered Below Cards matching Figma */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Sebelumnya"
            className="w-10 h-10 rounded-full bg-[#221C18] hover:bg-[#382E28] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Selanjutnya"
            className="w-10 h-10 rounded-full bg-[#221C18] hover:bg-[#382E28] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
