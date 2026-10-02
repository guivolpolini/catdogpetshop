import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { BUSINESS_INFO } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://catdogpetshop.com.br"),
  title: {
    default: "Cat & Dog Pet Shop | Banho e Tosa em São Caetano do Sul (Santa Maria)",
    template: "%s | Cat & Dog Pet Shop",
  },
  description:
    "Banho e tosa especializado com cuidado familiar e carinho em São Caetano do Sul (Bairro Santa Maria). Produtos hipoalergênicos, toalhas esterilizadas individuais, tosa na tesoura e espaço calmo para gatos. Avaliação 4,6 no Google.",
  keywords: [
    "banho e tosa em São Caetano do Sul",
    "pet shop em São Caetano do Sul",
    "pet shop Santa Maria São Caetano",
    "banho e tosa Santa Maria",
    "tosa na tesoura São Caetano",
    "banho para gatos São Caetano do Sul",
    "Cat & Dog Pet Shop",
    "Alameda São Caetano pet shop",
  ],
  authors: [{ name: "Cat & Dog Pet Shop" }],
  creator: "Cat & Dog Pet Shop",
  publisher: "Cat & Dog Pet Shop",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Cat & Dog Pet Shop | Banho e Tosa Premium em São Caetano do Sul",
    description:
      "Seu pet cuidado como parte da família. Especialistas em banho e tosa no bairro Santa Maria, São Caetano do Sul. Avaliação 4,6 no Google.",
    url: "https://catdogpetshop.com.br",
    siteName: "Cat & Dog Pet Shop",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Cat & Dog Pet Shop - Banho e Tosa em São Caetano do Sul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat & Dog Pet Shop | Banho e Tosa em São Caetano do Sul",
    description:
      "Seu pet cuidado como parte da família na Alameda São Caetano, 2493 - Santa Maria, São Caetano do Sul.",
    images: ["https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&h=630&q=85"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://catdogpetshop.com.br",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["PetGroomingService", "LocalBusiness"],
  name: BUSINESS_INFO.name,
  description:
    "Pet shop especializado em banho e tosa com carinho, produtos hipoalergênicos e toalhas individuais seladas em São Caetano do Sul.",
  image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&h=630&q=85",
  telephone: "+55-11-97492-5931",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alameda São Caetano, 2493",
    addressLocality: "São Caetano do Sul",
    addressRegion: "SP",
    postalCode: "09560-500",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.6358,
    longitude: -46.5645,
  },
  url: "https://catdogpetshop.com.br",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "56",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:30",
      closes: "17:00",
    },
  ],
  sameAs: [BUSINESS_INFO.social.instagramUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#1F1B16] selection:bg-[#C86438]/20 selection:text-[#1F1B16]">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
