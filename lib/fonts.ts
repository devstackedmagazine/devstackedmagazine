import { Unbounded, Outfit, JetBrains_Mono } from "next/font/google";

export const unbounded = Unbounded({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-unbounded",
});

export const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-outfit",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});
