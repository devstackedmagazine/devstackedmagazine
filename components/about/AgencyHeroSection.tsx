"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";

const facts = [
  { label: "Founded", value: "2025" },
  { label: "Based", value: "Vushtrri, Kosova — remote worldwide" },
  { label: "Practice", value: "Two full-stack developers" },
];

export default function AgencyHeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".about-eyebrow", { y: 20, opacity: 0, duration: 0.9 })
        .from(
          ".about-line > span",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            stagger: 0.06,
          },
          "-=0.6",
        )
        .from(".about-sub", { y: 20, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(
          ".about-pill-image",
          {
            scale: 0.4,
            opacity: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.6)",
          },
          "-=0.8",
        );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="sheet-grid relative overflow-hidden pt-16 pb-16 lg:pt-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="h-display text-[clamp(2.5rem,5.4vw,5.2rem)] text-ink">
              <span className="about-line block overflow-hidden">
                <span className="block">We shape digital</span>
              </span>
              <span className="about-line block overflow-hidden">
                <span className="block">products</span>
              </span>
              <span className="about-line block overflow-hidden">
                <span className="inline-block text-white/55">
                  that work for a living.
                </span>
              </span>
            </h1>

            <p className="about-fade mt-8 max-w-xl text-base leading-7 text-ink-dim sm:text-lg">
              Two developers, one drawing board. We take products from first
              sketch to launch and stay responsible for how they run after.
            </p>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="about-sub border-t border-white/10 pt-6">
              <p className="font-mono-meta text-white/40">Founded</p>
              <p className="mt-2 font-display text-3xl text-white">2025</p>
            </div>
            <div className="about-sub border-t border-white/10 pt-6">
              <p className="font-mono-meta text-white/40">Based</p>
              <p className="mt-2 font-display text-2xl text-white leading-tight">
                In Kosovo <br />{" "}
                <span className="text-white/50">Remote Worldwide</span>
              </p>
            </div>
            <div className="about-sub border-t border-white/10 pt-6">
              <p className="font-mono-meta text-white/40">Practice</p>
              <p className="mt-2 font-display text-2xl text-white leading-tight">
                Two full-stack <br />{" "}
                <span className="text-white/50">developers</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
