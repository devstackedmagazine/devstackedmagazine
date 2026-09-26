"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/public/logos/devstacked-horizontally.svg";
import Button from "@/components/ui/Button";

const services = [
  "UI/UX Design",
  "Web Development",
  "Mobile App Development",
  "Consulting",
];

const company = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/devstackedmagazine/" },
  { label: "TikTok", href: "https://www.tiktok.com/@devstackedmagazine" },
  { label: "Discord", href: "#" },
];

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.06 },
  }),
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-rule pt-32 pb-12">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <motion.p variants={variants} custom={0} className="text-label text-ash">
              Get in touch
            </motion.p>
            <motion.h2
              variants={variants}
              custom={1}
              className="text-display-l mt-6 text-bone"
            >
              Have a project <br className="hidden sm:block" />
              in mind? <span className="text-lime">Let&apos;s build it.</span>
            </motion.h2>
            <motion.div variants={variants} custom={2} className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact">Start a project</Button>
              <Button href="mailto:devstackedmagazine@gmail.com" variant="secondary">
                devstackedmagazine@gmail.com
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-10 lg:col-span-5"
          >
            <motion.div variants={variants} custom={0}>
              <p className="text-label text-ash mb-5">Services</p>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s} className="text-body text-bone/80 transition-colors hover:text-bone">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={variants} custom={1}>
              <p className="text-label text-ash mb-5">Company</p>
              <ul className="flex flex-col gap-3">
                {company.map((c) => (
                  <li key={c.label}>
                    <Link href={c.href} className="text-body text-bone/80 transition-colors hover:text-bone">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-rule pt-10 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={Logo} alt="DevStacked" className="h-9 w-auto" />
            <p className="text-small mt-4 max-w-sm leading-7 text-ash">
              DevStacked Magazine. Modern websites, product experiences, and tech writing for teams that want their work to actually be found.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            className="flex flex-col gap-2"
          >
            <p className="text-label text-ash">Follow</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-small text-ash transition-colors hover:text-lime"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-small mt-10 flex flex-col gap-2 text-ash sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DevStacked Magazine. All rights reserved.</p>
          <p className="text-label">St. Charles, MO. Remote worldwide.</p>
        </div>
      </div>

      <div
        aria-hidden
        className="text-display-xl pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 leading-none whitespace-nowrap text-bone/[0.03] select-none"
        style={{ fontSize: "clamp(8rem,28vw,24rem)" }}
      >
        DEVSTACKED
      </div>
    </footer>
  );
}
