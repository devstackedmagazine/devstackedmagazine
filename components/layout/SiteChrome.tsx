"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = pathname === "/project" || pathname.startsWith("/project/");

  if (hideChrome) {
    return children;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
