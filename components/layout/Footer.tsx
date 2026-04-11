"use client";

import Image from "next/image";
import logo from "@/public/logos/devstacked-horizontally.svg";
import instagram from "@/public/icons/instagram.svg";
import tiktok from "@/public/icons/tiktok.svg";
import discord from "@/public/icons/discord.svg";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

export default function Footer() {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants.staggerContainer}
      className="py-8 relative overflow-x-clip"
    >
      <div className="text-white grid grid-cols-1 lg:grid-cols-7 gap-14">
        <motion.div variants={variants.staggerContainer} className="lg:col-span-4 flex flex-col gap-10">
          <motion.div variants={variants.fadeInUp}>
            <Image src={logo} alt="Devstacked logo" className="w-72" />
          </motion.div>
          <motion.p variants={variants.fadeInUp}>
            At DevStacked, we build modern, high-performance websites for businesses ready to grow. From simple landing pages to full-stack web apps, we turn your vision into a digital product that works.
          </motion.p>
          <motion.div variants={variants.fadeInUp} className="flex flex-col md:flex-row gap-1 md:gap-5">
            <p>devstackedmagazine@gmail.com</p>
            <p>+1 (555) 123-4567</p>
            <p>5987 Mid Rivers Mall Dr., St. Charles</p>
          </motion.div>
          <motion.div variants={variants.fadeInUp} className="border-2 border-zinc-700 bg-background-gray w-40 py-3 px-3 rounded-3xl flex items-center justify-evenly">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Image
                src={instagram}
                alt="Instagram"
                className="w-5 cursor-pointer"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Image src={tiktok} alt="TikTok" className="w-5 cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Image src={discord} alt="Discord" className="w-5 cursor-pointer" />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div variants={variants.staggerContainer} className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-14">
          <motion.div variants={variants.fadeInUp} className="col-span-1">
            <h2 className="text-2xl mb-5 font-semibold">Services</h2>
            <ul className="flex flex-col gap-3 text-nowrap relative">
              <li className="hover:ms-2 transition-all cursor-pointer">
                UI/UX Design
              </li>
              <li className="hover:ms-2 transition-all cursor-pointer">
                Web Development
              </li>
              <li className="hover:ms-2 transition-all cursor-pointer">
                Mobile App Development
              </li>
              <li className="hover:ms-2 transition-all cursor-pointer">
                Consulting
              </li>
            </ul>
          </motion.div>
          <motion.div variants={variants.fadeInUp} className="col-span-1">
            <h2 className="text-2xl mb-5 font-semibold">Company</h2>
            <ul className="flex flex-col gap-3 text-nowrap">
              <li className="hover:ms-2 transition-all cursor-pointer">
                About Us
              </li>
              <li className="hover:ms-2 transition-all cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:ms-2 transition-all cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
