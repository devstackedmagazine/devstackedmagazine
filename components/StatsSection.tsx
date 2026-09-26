"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Projects Goal for Year One" },
  { value: 98, suffix: "%", label: "Client Satisfaction Target" },
  { value: 10, suffix: "+", label: "Technologies We Work With" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative section-pad">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-rule px-4 sm:px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-3 bg-void px-6 py-8">
            <p className="text-display-xl text-bone">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <div className="h-px w-8 bg-lime" />
            <p className="text-small max-w-[24ch] text-ash">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
