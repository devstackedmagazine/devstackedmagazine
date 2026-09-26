"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, mq } from "@/lib/gsap-presets";

const steps = [
  {
    index: "01",
    title: "Discovery",
    body: "Goals, audience, brand, content, constraints. We come out of it with a brief and a clear shape for the project.",
  },
  {
    index: "02",
    title: "Architecture & Design",
    body: "Information design, type, motion, and visuals are sketched against real content. Screens, not mood boards.",
  },
  {
    index: "03",
    title: "Build & Iterate",
    body: "We build in the open, on a real URL, on a real stack. Feedback rounds are short and the work is always reachable.",
  },
  {
    index: "04",
    title: "Ship & Handover",
    body: "Lighthouse, accessibility, search, analytics, ownership. A site your team can run, not a black box.",
  },
];

export default function PinnedJourney() {
  const root = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track || mq.isReduced()) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const pinEl = root.current?.querySelector<HTMLElement>(".journey-pin");
        if (!pinEl) return;

        ScrollTrigger.create({
          trigger: track,
          start: "top top+=80",
          end: "bottom bottom",
          pin: pinEl,
          pinSpacing: false,
          pinReparent: true,
          anticipatePin: 1,
        });

        const cards = gsap.utils.toArray<HTMLElement>(".journey-item");
        cards.forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 70%",
            end: "bottom 30%",
            onEnter: () =>
              gsap.to(card, { scale: 1.04, opacity: 1, duration: 0.14, ease: "design", overwrite: "auto" }),
            onLeave: () =>
              gsap.to(card, { scale: 0.92, opacity: 0.45, duration: 0.14, ease: "design", overwrite: "auto" }),
            onEnterBack: () =>
              gsap.to(card, { scale: 1.04, opacity: 1, duration: 0.14, ease: "design", overwrite: "auto" }),
            onLeaveBack: () =>
              gsap.to(card, { scale: 0.92, opacity: 0.45, duration: 0.14, ease: "design", overwrite: "auto" }),
          });

          gsap.set(card, { scale: 0.92, opacity: 0.45 });
        });

        ScrollTrigger.refresh();
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLElement>(".journey-item").forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 30,
            duration: 0.34,
            ease: "design",
            scrollTrigger: { trigger: item, start: "top 85%" },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="journey-pin flex flex-col justify-center lg:col-span-5">
            <p className="label-mark">Process</p>
            <h2 className="text-display-l mt-6 text-bone">
              The way we <br />
              <span className="text-lime">actually work.</span>
            </h2>
            <p className="text-body mt-6 max-w-[65ch] text-ash">
              Four steps. No mystery process, no twelve-week discovery phase. The
              brief is the brief and the build is the build.
            </p>
            <div className="mt-10 hidden items-center gap-3 lg:flex">
              <span className="h-px w-12 bg-rule" />
              <span className="text-label text-ash">Steps 01–04</span>
            </div>
          </div>

          <div ref={trackRef} className="flex flex-col gap-px bg-rule lg:col-span-7">
            {steps.map((s) => (
              <article
                key={s.index}
                className="journey-item bg-shelf p-8 will-change-transform"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-display-l leading-none text-lime">{s.index}</span>
                  <span className="text-label text-ash">Step</span>
                </div>
                <h3 className="text-heading mt-6 text-bone">{s.title}</h3>
                <p className="text-body mt-4 text-ash">{s.body}</p>
                <div className="mt-8 h-px w-12 bg-rule" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
