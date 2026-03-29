"use client";

import Navigation from "../layout/Navigation";
import Logo from "@/public/logos/devstacked-horizontally.svg";
import Button from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";

export default function Header() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={variants.fadeInDown}
      className="flex justify-between items-center h-28 text-white"
    >
      <Link href="/">
        <Image src={Logo} alt="Logo" className="w-60 mt-3" />
      </Link>
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <div className="flex items-center gap-6">
        <Link href="/contact" className="!hidden sm:!block">
          <Button className="white-space-nowrap">Get In Touch</Button>
        </Link>
        <Navigation className="lg:hidden" />
      </div>
    </motion.header>
  );
}
