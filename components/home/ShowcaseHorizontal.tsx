"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, mq, staggerDelay } from "@/lib/gsap-presets";

// Studio work only. Every entry here is something a visitor can open and check
// for themselves — no client names, no engagement framing, and no figure that
// would need a measurement we do not have. See DESIGN.md §7.
const projects = [
  {
    name: "This site",
    where: "devstackedmagazine.tech",
    summary:
      "The site you are reading. A six-value palette, a fixed type scale, and dividers built from grid gaps rather than borders. Motion is entry-only and drops out entirely under reduced-motion.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "GSAP"],
  },
  {
    name: "Project intake",
    where: "/project",
    summary:
      "A five-section, sixteen-question brief. Questions appear or stay hidden based on earlier answers, each section gates on its own required fields, and progress is visible throughout. Answers are not yet wired to delivery.",
    stack: ["React", "TypeScript", "Radix UI", "Framer Motion"],
  },
  {
    name: "Contact form",
    where: "/contact",
    summary:
      "Field validation, a draft kept in local storage so a half-written message survives a reload, explicit sending and error states, and a confirmation page on success. Delivery runs through Web3Forms.",
    stack: ["Next.js", "TypeScript", "Web3Forms"],
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
            <p className="label-mark">Our own work</p>
            <h2 className="text-display-l mt-6 text-bone">
              Things we built, <br className="hidden sm:block" />
              <span className="text-ash">running right now.</span>
            </h2>
          </div>
          <p className="text-body text-ash lg:col-span-5 lg:max-w-md">
            Three projects from this studio, not client work. Each one is live
            where you can open it and check what it does against what we say it
            does.
          </p>
        </div>
      </div>

      {/* Desktop: native horizontal scroll strip. Transform-free, keyboard
          operable, and it never captures vertical scroll. */}
      <div className="hidden pb-16 md:pb-32 lg:block">
        {/* The scroller itself is the page container, so the track's content is
            exactly cards + gaps: no padding inside the scrolling box means no
            dead area after the last card, and the first card lines up with the
            heading above. Snap points keep a card edge off mid-word. */}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div
            ref={trackRef}
            tabIndex={0}
            role="region"
            aria-label="Our own work — scroll horizontally to browse projects"
            className="snap-x snap-mandatory overflow-x-auto overflow-y-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          >
            <div className="flex w-max gap-px bg-rule">
              {projects.map((p, i) => (
                <article
                  key={p.name}
                  tabIndex={0}
                  aria-label={`${p.name} — ${p.where}`}
                  className="showcase-card flex min-h-[52vh] w-[52vw] max-w-[900px] shrink-0 snap-start flex-col justify-between gap-10 bg-shelf p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-inset lg:p-12"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-label text-lime">{p.where}</span>
                    <span className="text-label text-ash">
                      {String(i + 1).padStart(2, "0")} / {total}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-display-l text-bone">{p.name}</h3>
                    <p className="text-body mt-6 max-w-[65ch] text-ash">{p.summary}</p>
                    <div className="mt-8 h-px bg-rule" />
                    <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                      {p.stack.map((s) => (
                        <li key={s} className="text-label text-ash">
                          {s}
                        </li>
                      ))}
                    </ul>
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
                <div className="flex items-start justify-between gap-6">
                  <span className="text-label text-lime">{p.where}</span>
                  <span className="text-label text-ash">
                    {String(i + 1).padStart(2, "0")} / {total}
                  </span>
                </div>
                <div>
                  <h3 className="text-heading text-bone">{p.name}</h3>
                  <p className="text-body mt-3 text-ash">{p.summary}</p>
                  <div className="mt-6 h-px bg-rule" />
                  <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {p.stack.map((s) => (
                      <li key={s} className="text-label text-ash">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
