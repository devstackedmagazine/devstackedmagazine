import Navigation from "../layout/Navigation";
import Logo from "@/public/logos/devstacked-horizontally.svg";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-28 text-white">
      <Link href="/">
        <Image src={Logo} alt="Logo" className="w-60 mt-3" />
      </Link>
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <div className="flex items-center gap-6">
        <Button className="!hidden sm:!block white-space-nowrap">
          Get In Touch
        </Button>
        <Navigation className="lg:hidden" />
      </div>
    </header>
  );
}
