import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logos/devstacked-horizontally.svg";
import instagram from "@/public/icons/instagram.svg";
import tiktok from "@/public/icons/tiktok.svg";

export default function Footer() {
  return (
    <footer className="relative overflow-x-clip py-8">
      <div className="grid grid-cols-1 gap-14 text-white lg:grid-cols-7">
        <div className="flex flex-col gap-10 lg:col-span-4">
          <Link href="/" aria-label="DevStacked Magazine home">
            <Image src={logo} alt="DevStacked Magazine logo" className="w-72" />
          </Link>
          <p>
            DevStacked Magazine is a small studio focused on modern websites,
            landing pages, and digital product work that feels considered on the
            surface and solid underneath.
          </p>
          <div className="flex flex-col gap-1 md:flex-row md:gap-5">
            <a href="mailto:devstackedmagazine@gmail.com" className="hover:text-red-active">
              devstackedmagazine@gmail.com
            </a>
            <p>Remote-friendly collaboration</p>
            <p>Available for launches, redesigns, and new builds</p>
          </div>
          <div className="flex w-32 items-center justify-evenly rounded-3xl border-2 border-zinc-700 bg-background-gray px-3 py-3">
            <a
              href="https://www.instagram.com/devstackedmagazine/"
              target="_blank"
              rel="noreferrer"
              aria-label="DevStacked Magazine on Instagram"
            >
              <Image src={instagram} alt="" aria-hidden className="w-5 cursor-pointer" />
            </a>
            <a
              href="https://www.tiktok.com/@devstackedmagazine"
              target="_blank"
              rel="noreferrer"
              aria-label="DevStacked Magazine on TikTok"
            >
              <Image src={tiktok} alt="" aria-hidden className="w-5 cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-14 lg:col-span-3 md:grid-cols-2">
          <div className="col-span-1">
            <h2 className="mb-5 text-2xl font-semibold">Services</h2>
            <ul className="relative flex flex-col gap-3 text-nowrap">
              <li>Landing Page Design</li>
              <li>Website Development</li>
              <li>Frontend Buildouts</li>
              <li>Content and SEO Cleanup</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="mb-5 text-2xl font-semibold">Company</h2>
            <ul className="flex flex-col gap-3 text-nowrap">
              <li>
                <Link href="/" className="transition-colors hover:text-red-active">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-red-active">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-red-active">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
