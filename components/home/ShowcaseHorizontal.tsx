"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, mq, staggerDelay } from "@/lib/gsap-presets";

const projects = [
  {
    name: "Brutalist Studio",
    kind: "Editorial site",
    year: "2025",
    note: "Type-first, motion-second, image-rarely.",
  },
  {
    name: "Lumen & Co.",
    kind: "E-commerce rebuild",
    year: "2025",
    note: "Cut checkout to three steps, lifted conversion 24%.",
  },
  {
    name: "Northgate Health",
    kind: "Patient portal",
    year: "2024",
    note: "A11y-first redesign, Lighthouse 99 across the board.",
  },
  {
    name: "Atlas Notes",
    kind: "Product launch",
    year: "2024",
    note: "Static-first, edge-cached, sub-200ms TTFB worldwide.",
  },
  {
    name: "Ironclad Fitness",
    kind: "Subscription funnel",
    year: "2024",
    note: "Five landing variants, one positioning. It held up.",
  },
];

const total = String(projects.length).padStart(2, "0");

export default function ShowcaseHorizontal() {
  const root = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Entry only. No scroll-driven motion, no pinning: vertical scroll is
      // never hijacked, so a user scrolling past reaches the next section.
      if (mq.isReduced()) return;

      gsap.utils.toArray<HTMLElement>(".showcase-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 24,
          duration: 0.34,
          ease: "design",
          delay: staggerDelay(i),
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative">
      <div className="mx-auto max-w-[1400px] px-4 pt-16 pb-12 sm:px-6 md:pt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-7">
            <p className="label-mark">Selected work</p>
            <h2 className="text-display-l mt-6 text-bone">
              Quiet interfaces, <br className="hidden sm:block" />
              <span className="text-ash">measured outcomes.</span>
            </h2>
          </div>
          <p className="text-body text-ash lg:col-span-5 lg:max-w-md">
            A short, recent cross-section. The right place to see how we think about
            brand, motion, and the boring details that actually move conversion.
          </p>
        </div>
      </div>

      {/* Desktop: native horizontal scroll strip. Transform-free, keyboard
          operable, and it never captures vertical scroll. */}
      <div className="hidden pb-16 md:pb-32 lg:block">
        <div
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-label="Selected work — scroll horizontally to browse projects"
          className="overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-void"
        >
          <div className="flex w-max px-4 sm:px-6">
            <div className="flex gap-px bg-rule">
              {projects.map((p, i) => (
                <article
                  key={p.name}
                  tabIndex={0}
                  aria-label={`${p.name} — ${p.kind}, ${p.year}`}
                  className="showcase-card flex h-[60vh] w-[70vw] max-w-[820px] shrink-0 flex-col justify-between bg-shelf p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-inset"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-label text-lime">{p.kind}</span>
                    <span className="text-label text-ash">
                      {String(i + 1).padStart(2, "0")} / {total}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-display-l text-bone">{p.name}</h3>
                    <div className="mt-8 flex items-end justify-between gap-6 border-t border-rule pt-6">
                      <p className="text-body max-w-md text-ash">{p.note}</p>
                      <p className="text-label text-ash">{p.year}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Below lg the strip collapses to a vertical stack in DOM order. */}
      <div className="pb-16 md:pb-32 lg:hidden">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="flex flex-col gap-px bg-rule">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="showcase-card flex flex-col justify-between gap-8 bg-shelf p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-label text-lime">{p.kind}</span>
                  <span className="text-label text-ash">
                    {String(i + 1).padStart(2, "0")} / {total}
                  </span>
                </div>
                <div>
                  <h3 className="text-heading text-bone">{p.name}</h3>
                  <p className="text-body mt-3 text-ash">{p.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
