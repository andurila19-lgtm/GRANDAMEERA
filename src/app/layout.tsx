import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://grandameera.com"),
  title: "Grand Ameera | Perumahan Syariah Madiun",
  description:
    "Grand Ameera merupakan perumahan syariah di Madiun. Temukan informasi hunian dan konsultasikan kebutuhan Anda bersama Marketing Grand Ameera.",
  keywords: [
    "Grand Ameera",
    "Perumahan Syariah Madiun",
    "Rumah Syariah Madiun",
    "Ahsana Property Madiun",
    "Properti Madiun",
    "Hunian Keluarga Madiun",
    "Perumahan Tanpa Riba Madiun",
  ],
  authors: [{ name: "Ahsana Property Madiun" }],
  creator: "Ahsana Property Madiun",
  publisher: "Grand Ameera",
  openGraph: {
    title: "Grand Ameera | Perumahan Syariah Madiun",
    description:
      "Grand Ameera merupakan perumahan syariah di Madiun. Temukan informasi hunian dan konsultasikan kebutuhan Anda bersama Marketing Grand Ameera.",
    url: "https://grandameera.com",
    siteName: "Grand Ameera",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Grand Ameera Perumahan Syariah Madiun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Ameera | Perumahan Syariah Madiun",
    description:
      "Grand Ameera merupakan perumahan syariah di Madiun. Temukan informasi hunian dan konsultasikan kebutuhan Anda bersama Marketing Grand Ameera.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF7F2] text-[#221C18] font-sans antialiased selection:bg-[#EBDBCF] selection:text-[#221C18]">
        {children}
      </body>
    </html>
  );
}
