export interface PropertyUnit {
  id: string;
  name: string;
  typeTag: string;
  image: string;
  badge: string;
  bedrooms: number;
  bathrooms: number;
  buildingArea: number;
  landArea: number;
  priceEstimate: string;
  description: string;
  detailsNote: string;
  ctaText: string;
}

export interface PropertyImageSet {
  hero: string;
  about: string;
  units: PropertyUnit[];
  gallery: {
    id: string;
    title: string;
    category: "Desain Hunian" | "Lingkungan" | "Interior";
    src: string;
    alt: string;
  }[];
}

/**
 * Centralized property images and realistic preview data for Grand Ameera.
 * Designed as a convincing sales concept preview for Ahsana Property leadership.
 */
export const propertyImages: PropertyImageSet = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  units: [
    {
      id: "unit-tipe-1",
      name: "Tipe 36/72 - Al-Fatih",
      typeTag: "1 Lantai",
      image: "/images/unit-1.jpg",
      badge: "Unit Populer",
      bedrooms: 2,
      bathrooms: 1,
      buildingArea: 36,
      landArea: 72,
      priceEstimate: "Mulai Rp 295 Jt-an*",
      description: "Desain hunian 1-lantai modern tropis dengan sirkulasi udara optimal dan pencahayaan alami untuk keluarga muda.",
      detailsNote: "2 Kamar • 1 KM • LB 36 m² / LT 72 m²",
      ctaText: "Tanya Tipe Ini",
    },
    {
      id: "unit-tipe-2",
      name: "Tipe 45/84 - Al-Kautsar",
      typeTag: "1 Lantai",
      image: "/images/unit-2.jpg",
      badge: "Pilihan Favorit",
      bedrooms: 2,
      bathrooms: 1,
      buildingArea: 45,
      landArea: 84,
      priceEstimate: "Mulai Rp 365 Jt-an*",
      description: "Tata ruang keluarga luas dengan taman belakang fleksibel yang dapat dikembangkan seiring bertumbuhnya keluarga.",
      detailsNote: "2 Kamar • 1 KM • LB 45 m² / LT 84 m²",
      ctaText: "Tanya Tipe Ini",
    },
    {
      id: "unit-tipe-3",
      name: "Tipe 60/100 - Cordoba",
      typeTag: "2 Lantai",
      image: "/images/unit-3.jpg",
      badge: "Unit 2 Lantai",
      bedrooms: 3,
      bathrooms: 2,
      buildingArea: 60,
      landArea: 100,
      priceEstimate: "Mulai Rp 495 Jt-an*",
      description: "Hunian 2-lantai elegan dengan master bedroom privat, balkon teduh, dan tata sirkulasi udara silang yang sejuk.",
      detailsNote: "3 Kamar • 2 KM • LB 60 m² / LT 100 m²",
      ctaText: "Tanya Tipe Ini",
    },
    {
      id: "unit-tipe-4",
      name: "Tipe 75/120 - Andalusia",
      typeTag: "2 Lantai",
      image: "/images/gallery-6.jpg",
      badge: "Pilihan Utama",
      bedrooms: 4,
      bathrooms: 3,
      buildingArea: 75,
      landArea: 120,
      priceEstimate: "Mulai Rp 590 Jt-an*",
      description: "Hunian keluarga besar dengan 4 kamar tidur, carport 2 mobil, serta ruang keluarga lapang di kedua lantai.",
      detailsNote: "4 Kamar • 3 KM • LB 75 m² / LT 120 m²",
      ctaText: "Tanya Tipe Ini",
    },
    {
      id: "unit-tipe-5",
      name: "Tipe 50/90 - Madani (Hook)",
      typeTag: "Unit Sudut",
      image: "/images/gallery-4.jpg",
      badge: "Kavling Sudut",
      bedrooms: 3,
      bathrooms: 2,
      buildingArea: 50,
      landArea: 90,
      priceEstimate: "Mulai Rp 425 Jt-an*",
      description: "Posisi sudut dengan taman samping asri, pencahayaan alami ganda, dan kesan rumah yang lebih lapang.",
      detailsNote: "3 Kamar • 2 KM • LB 50 m² / LT 90 m²",
      ctaText: "Tanya Tipe Ini",
    },
    {
      id: "unit-tipe-6",
      name: "Tipe 90/140 - Al-Hambra",
      typeTag: "2 Lantai Premium",
      image: "/images/gallery-5.jpg",
      badge: "Fasad Tropis",
      bedrooms: 4,
      bathrooms: 3,
      buildingArea: 90,
      landArea: 140,
      priceEstimate: "Mulai Rp 680 Jt-an*",
      description: "Optimalisasi ceiling tinggi dengan kanopi elegan dan tata ruang prestisius untuk ketenangan dan kenyamanan tinggal.",
      detailsNote: "4 Kamar • 3 KM • LB 90 m² / LT 140 m²",
      ctaText: "Tanya Tipe Ini",
    },
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Konsep Fasad Hunian Tropis",
      category: "Desain Hunian",
      src: "/images/hero.jpg",
      alt: "Konsep arsitektur modern Grand Ameera Madiun",
    },
    {
      id: "gal-2",
      title: "Teras Santai Keluarga",
      category: "Lingkungan",
      src: "/images/about.jpg",
      alt: "Suasana teras dan ruang terbuka hijau hunian keluarga",
    },
    {
      id: "gal-3",
      title: "Tata Ruang Keluarga Hangat",
      category: "Interior",
      src: "/images/gallery-1.jpg",
      alt: "Ilustrasi interior ruang keluarga yang nyaman",
    },
    {
      id: "gal-4",
      title: "Desain Dapur & Ruang Makan",
      category: "Interior",
      src: "/images/gallery-2.jpg",
      alt: "Ilustrasi ruang makan dan dapur bersih",
    },
    {
      id: "gal-5",
      title: "Halaman & Area Terbuka",
      category: "Lingkungan",
      src: "/images/gallery-3.jpg",
      alt: "Area terbuka asri untuk relaksasi keluarga",
    },
    {
      id: "gal-6",
      title: "Tampilan Fasad Satu Lantai",
      category: "Desain Hunian",
      src: "/images/unit-1.jpg",
      alt: "Konsep fasad 1-lantai minimalis modern",
    },
    {
      id: "gal-7",
      title: "Gerbang & Kawasan Asri",
      category: "Lingkungan",
      src: "/images/gallery-4.jpg",
      alt: "Konsep lingkungan kawasan asri dan tertata",
    },
    {
      id: "gal-8",
      title: "Balkon & Pencahayaan Alami",
      category: "Desain Hunian",
      src: "/images/gallery-5.jpg",
      alt: "Balkon lantai atas dengan pencahayaan alami maksimal",
    },
    {
      id: "gal-9",
      title: "Perspektif Hunian Sudut",
      category: "Desain Hunian",
      src: "/images/gallery-6.jpg",
      alt: "Perspektif modern arsitektur hunian syariah",
    },
  ],
};

export const BRAND_INFO = {
  name: "GRAND AMEERA",
  subtitle: "PERUMAHAN SYARIAH MADIUN",
  developer: "Ahsana Property Madiun",
  tagline: "Temukan Hunian Nyaman untuk Keluarga Anda",
  locationShort: "Madiun, Jawa Timur",
  locationFull: "Kawasan Grand Ameera, Madiun, Jawa Timur",
  phone: "081130890808",
  phoneDisplay: "0811-3089-0808",
  mapsUrl: "https://maps.google.com/?q=Madiun+Jawa+Timur",
  copyright: `© 2026 Grand Ameera. All rights reserved.`,
};

export const NAV_LINKS = [
  { name: "Beranda", href: "#beranda" },
  { name: "Tentang", href: "#tentang" },
  { name: "Hunian", href: "#hunian" },
  { name: "Galeri", href: "#galeri" },
  { name: "Lokasi", href: "#lokasi" },
];

export const ADVANTAGES_DATA = [
  {
    id: "syariah",
    title: "Konsep Syariah",
    description: "Transaksi murni syariah tanpa denda, tanpa sita, dan tanpa skema akad bermasalah untuk ketenteraman keluarga.",
    icon: "ShieldCheck",
  },
  {
    id: "keluarga",
    title: "Hunian Keluarga",
    description: "Desain tata ruang yang memprioritaskan privasi, kenyamanan interaksi, dan lingkungan ramah tumbuh kembang anak.",
    icon: "Home",
  },
  {
    id: "lingkungan",
    title: "Lingkungan Nyaman",
    description: "Suasana kawasan yang tenang, asri, serta harmonis mendukung kualitas hidup dan ketenangan beristirahat.",
    icon: "Trees",
  },
  {
    id: "lokasi",
    title: "Lokasi Madiun",
    description: "Berada di wilayah Madiun, Jawa Timur dengan kemudahan akses jalan dan perkembangan kawasan sekitar.",
    icon: "MapPin",
  },
  {
    id: "marketing",
    title: "Konsultasi Marketing",
    description: "Pendampingan langsung yang ramah, transparan, dan informatif dari tim Marketing Ahsana Property Madiun.",
    icon: "MessageSquareText",
  },
];

export const CONSULTATION_STEPS = [
  {
    number: "01",
    title: "Hubungi Marketing",
    description: "Sampaikan kebutuhan atau preferensi hunian idaman Anda kepada tim Marketing kami melalui WhatsApp.",
  },
  {
    number: "02",
    title: "Pilih Hunian",
    description: "Dapatkan penjelasan opsi tipe unit yang tersedia dan diskusikan rencana tata ruang keluarga Anda.",
  },
  {
    number: "03",
    title: "Dapatkan Informasi",
    description: "Terima rincian berkas, penjelasan alur syariah, serta simulasi informasi resmi langsung dari tim kami.",
  },
  {
    number: "04",
    title: "Lanjutkan Konsultasi",
    description: "Jadwalkan kunjungan atau survei lokasi langsung didampingi tim untuk memastikan pilihan terbaik.",
  },
];

export const FAQ_DATA = [
  {
    question: "Apa itu Grand Ameera?",
    answer: "Grand Ameera merupakan kawasan perumahan syariah di Madiun yang dikembangkan oleh Ahsana Property Madiun. Proyek ini dirancang untuk menghadirkan tempat tinggal yang nyaman, asri, dan menentramkan bagi keluarga muslim.",
  },
  {
    question: "Di mana lokasi Grand Ameera?",
    answer: "Grand Ameera berlokasi di Madiun, Jawa Timur. Untuk informasi mengenai petunjuk rute, titik presisi, serta jadwal survei lokasi bersama tim, silakan hubungi Marketing kami.",
  },
  {
    question: "Apa saja tipe hunian yang tersedia?",
    answer: "Grand Ameera menyediakan beberapa opsi tipe hunian keluarga. Untuk informasi terbaru mengenai tipe yang sedang dipasarkan serta ketersediaan unit, silakan hubungi Marketing Grand Ameera melalui WhatsApp.",
  },
  {
    question: "Bagaimana cara mendapatkan informasi harga?",
    answer: "Untuk informasi terbaru mengenai tipe, harga, dan ketersediaan, silakan hubungi Marketing Grand Ameera melalui WhatsApp. Tim kami akan memberikan penjelasan resmi dan transparan.",
  },
  {
    question: "Bagaimana cara menghubungi Marketing?",
    answer: "Anda dapat menghubungi Marketing Grand Ameera langsung melalui nomor WhatsApp resmi di 0811-3089-0808 atau dengan menekan tombol 'Chat Marketing' pada halaman ini.",
  },
  {
    question: "Bagaimana konsep pembelian di Grand Ameera?",
    answer: "Grand Ameera mengusung skema transaksi murni syariah tanpa perantara ribawi, tanpa denda keterlambatan, tanpa sita paksa, serta akad yang jelas dan transparan antara pembeli dan pengembang.",
  },
];
