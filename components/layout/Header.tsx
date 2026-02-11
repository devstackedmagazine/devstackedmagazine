import Navigation from "../layout/Navigation";
import Logo from '@/public/logos/devstacked-horizontally.svg'
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-28 text-white px-[100px]">
      <div className="">
        <Image src={Logo} alt="Logo" className="scale-150 mt-3" />
        {/* <Link href="/">Logo</Link> */}
      </div>
      <Navigation />
      <div>
        <Button>Get In Touch</Button>
      </div>
    </header>
  );
}
