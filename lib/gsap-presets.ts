import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CustomEase);
  CustomEase.create("design", "0.22, 1, 0.36, 1");
  gsap.defaults({ ease: "design", duration: 0.34 });
}

export { gsap, ScrollTrigger };

/** Single site-wide curve (DESIGN.md §6). Registered as the GSAP ease "design". */
export const ease = {
  design: "design",
  linear: "none",
} as const;

/** DESIGN.md §6: entry 340ms, exit 220ms, micro-interaction 140ms. */
export const dur = {
  entry: 0.34,
  exit: 0.22,
  micro: 0.14,
} as const;

/** 60ms per item, capped at 8 — item 9+ shares item 8's delay. */
export function staggerDelay(index: number, stepSeconds = 0.06, cap = 8) {
  return Math.min(index, cap - 1) * stepSeconds;
}

export const mq = {
  isMobile: () =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches,
  isReduced: () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
};

export function splitChars(node: HTMLElement | null) {
  if (!node) return [];
  const text = node.textContent ?? "";
  node.setAttribute("data-split", "true");
  node.textContent = "";
  return [...text].map((ch) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.style.willChange = "transform, opacity";
    span.textContent = ch === " " ? " " : ch;
    node.appendChild(span);
    return span;
  });
}
