"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`hidden items-center gap-8 lg:flex ${className}`}>
        {navItems.map((item) => {
          const isActive = isActiveLink(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-md font-light transition-colors ${
                isActive
                  ? "nav-link-active text-red-active"
                  : "text-gray-300 hover:text-red-active"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center lg:hidden">
        <button
          onClick={toggleMenu}
          className="z-50 text-white focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/95 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => {
          const isActive = isActiveLink(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-light ${
                isActive ? "text-red-active" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
