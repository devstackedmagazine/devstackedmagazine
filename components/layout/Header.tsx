import Image from "next/image";
import Link from "next/link";
import Navigation from "../layout/Navigation";
import Logo from "@/public/logos/devstacked-horizontally.svg";

export default function Header() {
  return (
    <header className="flex h-28 items-center justify-between text-white">
      <Link href="/" aria-label="DevStacked Magazine home">
        <Image src={Logo} alt="DevStacked Magazine" className="mt-3 w-60" />
      </Link>
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <div className="flex items-center gap-6">
        <Link
          href="/contact"
          className="hidden whitespace-nowrap rounded-4xl bg-red-active px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-active-hover sm:block"
        >
          Get In Touch
        </Link>
        <Navigation className="lg:hidden" />
      </div>
    </header>
  );
}
