import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MainPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="px-[20px] sm:px-[50px] lg:px-[100px] overflow-clip">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
