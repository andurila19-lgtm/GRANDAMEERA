export interface PropertyImageSet {
  hero: string;
  about: string;
  units: {
    id: string;
    name: string;
    image: string;
    badge: string;
    description: string;
    detailsNote: string;
    ctaText: string;
  }[];
  gallery: {
    id: string;
    title: string;
    category: "Desain Hunian" | "Lingkungan" | "Interior";
    src: string;
    alt: string;
  }[];
}

/**
 * Centralized property images collection.
 * Real Grand Ameera assets can be updated or replaced here at any time.
 * Note: Visuals currently serve as conceptual architectural references.
 */
export const propertyImages: PropertyImageSet = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  units: [
    {
      id: "unit-tipe-1",
      name: "Hunian Tipe 1-Lantai",
      image: "/images/unit-1.jpg",
      badge: "Unit Populer",
      description: "Desain hunian 1-lantai modern tropis dengan sirkulasi udara optimal dan pencahayaan alami untuk keluarga.",
      detailsNote: "Informasi tipe tersedia melalui Marketing",
      ctaText: "Tanya via WhatsApp",
    },
    {
      id: "unit-tipe-2",
      name: "Hunian Tipe 2-Lantai",
      image: "/images/unit-2.jpg",
      badge: "Pilihan Favorit",
      description: "Desain hunian 2-lantai elegan dengan ruang keluarga luas, balkon, dan tata ruang yang menjaga privasi.",
      detailsNote: "Informasi tipe tersedia melalui Marketing",
      ctaText: "Tanya via WhatsApp",
    },
    {
      id: "unit-tipe-custom",
      name: "Hunian Konsep Fleksibel",
      image: "/images/unit-3.jpg",
      badge: "Opsi Kustom",
      description: "Pilihan penataan ruang fleksibel yang dapat disesuaikan dengan kebutuhan dan tumbuh kembang keluarga Anda.",
      detailsNote: "Informasi tipe tersedia melalui Marketing",
      ctaText: "Tanya via WhatsApp",
    },
    {
      id: "unit-tipe-corner",
      name: "Hunian Tipe Sudut (Corner)",
      image: "/images/gallery-6.jpg",
      badge: "Unit Sudut",
      description: "Pencahayaan ganda dengan area taman samping yang luas untuk suasana rumah yang lebih sejuk dan lega.",
      detailsNote: "Informasi tipe tersedia melalui Marketing",
      ctaText: "Tanya via WhatsApp",
    },
    {
      id: "unit-tipe-tropis",
      name: "Hunian Fasad Tropis Modern",
      image: "/images/gallery-4.jpg",
      badge: "Desain Baru",
      description: "Aksen material alami dan kanopi kokoh berpadu harmonis menciptakan keteduhan tempat tinggal keluarga.",
      detailsNote: "Informasi tipe tersedia melalui Marketing",
      ctaText: "Tanya via WhatsApp",
    },
    {
      id: "unit-tipe-mezzanine",
      name: "Hunian Konsep Mezzanine",
      image: "/images/gallery-5.jpg",
      badge: "Keluarga Modern",
      description: "Optimalisasi ruang vertikal dengan ceiling tinggi, menghadirkan kesan hunian yang lapang dan bernilai tinggi.",
      detailsNote: "Informasi tipe tersedia melalui Marketing",
      ctaText: "Tanya via WhatsApp",
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
