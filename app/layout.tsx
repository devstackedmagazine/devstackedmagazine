import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import { cn } from "@/lib/utils";
import { unbounded, outfit, jetbrainsMono } from "@/lib/fonts";
import MotionProvider from "@/components/layout/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "DevStacked Magazine | Tech Content & Web Services",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "tech content",
    "web services",
    "website development",
    "web design",
    "tech articles",
    "web development",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: "/logos/favicon.png",
    shortcut: "/logos/favicon.png",
    apple: "/logos/favicon.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "DevStacked Magazine | Tech Content & Web Services",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "DevStacked Magazine preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevStacked Magazine | Tech Content & Web Services",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0B08",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        unbounded.variable,
        outfit.variable,
        jetbrainsMono.variable,
        "scroll-smooth",
        "antialiased"
      )}
      suppressHydrationWarning
    >
      <body className="bg-void text-bone font-sans selection:bg-lime/40 selection:text-void">
        <main className="relative w-full max-w-[100vw] overflow-x-clip">
          <MotionProvider>{children}</MotionProvider>
        </main>
      </body>
    </html>
  );
}
