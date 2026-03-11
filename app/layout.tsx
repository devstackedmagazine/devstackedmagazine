import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevStacked Magazine | Tech Content & Web Services",
  description: "Explore funny and informative tech content. We create custom websites for individuals and businesses with quality web services and the latest tech industry insights.",
  keywords: "tech content, web services, websites, tech articles, tech news, web development",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "DevStacked Magazine | Tech Content & Web Services",
    description: "Explore funny and informative tech content. We create custom websites for individuals and businesses.",
    url: "https://devstackedmagazine.com",
    siteName: "DevStacked Magazine",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevStacked Magazine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevStacked Magazine | Tech Content & Web Services",
    description: "Explore funny and informative tech content. We create custom websites for individuals and businesses.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://devstackedmagazine.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#89121a"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${nunito.variable} antialiased`}>
        <main className="px-[20px] sm:px-[50px] lg:px-[100px] overflow-clip">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
