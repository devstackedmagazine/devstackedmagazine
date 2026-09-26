"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, mq } from "@/lib/gsap-presets";
import Mascot from "@/public/images/home/heroImage.png";

const features = [
  {
    title: "SEO Foundation",
    body: "Clear structure, metadata, and content hierarchy so your site is easier to discover and understand.",
    accent: "Findable",
    keyword: "Findable",
  },
  {
    title: "Conversion-Focused Design",
    body: "Pages are shaped around what visitors need to trust you, contact you, and take the next step.",
    accent: "Persuasive",
    keyword: "Persuasive",
  },
  {
    title: "Performance That Holds Up",
    body: "Fast-loading screens, lean implementation, and UX decisions that do not collapse under growth.",
    accent: "Fast",
    keyword: "Fast",
  },
  {
    title: "Fully Yours",
    body: "No lock-in, no black box handoff, and no mystery builder. You get a site your business can actually own.",
    accent: "Ownable",
    keyword: "Ownable",
  },
] as const;

const leadFeature = features[0];

export default function ServicesBento() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (mq.isReduced()) return;

      const cards = gsap.utils.toArray<HTMLElement>(".bento-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.34,
          ease: "design",
          delay: i * 0.05,
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });

      gsap.from(".bento-image img", {
        scale: 0.92,
        duration: 0.34,
        ease: "design",
        scrollTrigger: {
          trigger: ".bento-image",
          start: "top 85%",
          end: "bottom 30%",
          scrub: 0.6,
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative section-pad overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-mark">Features</p>
            <h2 className="text-display-l mt-6 text-bone">
              What every serious build <br className="hidden sm:block" />
              <span className="text-ash">should already come with.</span>
            </h2>
          </div>
          <p className="text-body text-ash lg:col-span-5 lg:max-w-md">
            These are the foundations we build into every project, so you can
            focus on what makes your business unique while still getting a site
            that can grow with you.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-px bg-rule md:grid-cols-12 md:grid-flow-dense"
          style={{ gridAutoRows: "minmax(0, 1fr)" }}
        >
          {/* Card 1: large image-led, col-span-7 row-span-2 */}
          <article className="bento-card group relative flex flex-col overflow-hidden border-t border-t-transparent bg-shelf transition-colors hover:border-t-lime md:col-span-7 md:row-span-2">
            <div className="bento-image relative aspect-[16/10] w-full overflow-hidden bg-void">
              <Image
                src={Mascot}
                alt="DevStacked mascot waving"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain p-2 transition-transform duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <span className="text-label pointer-events-none absolute left-5 top-5 text-ash">
                Plate {leadFeature.accent}
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-end p-8">
              <h3 className="text-heading text-bone">{leadFeature.title}</h3>
              <p className="text-body mt-3 max-w-md text-ash">{leadFeature.body}</p>
            </div>
          </article>

          {/* Card 2: text only, col-span-5 row-span-1 */}
          <article className="bento-card group flex flex-col justify-between border-t border-t-transparent bg-shelf p-8 transition-colors hover:border-t-lime md:col-span-5 md:row-span-1">
            <div>
              <span className="text-label text-lime">Plate {features[1].accent}</span>
              <h3 className="text-heading mt-5 text-bone">{features[1].title}</h3>
              <p className="text-body mt-3 text-ash">{features[1].body}</p>
            </div>
            <div className="mt-6 h-px w-24 origin-left scale-x-50 bg-rule transition-[transform,background-color] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-hover:bg-lime" />
          </article>

          {/* Card 3: text only, col-span-5 row-span-1 */}
          <article className="bento-card group flex flex-col justify-between border-t border-t-transparent bg-shelf p-8 transition-colors hover:border-t-lime md:col-span-5 md:row-span-1">
            <div>
              <span className="text-label text-lime">Plate {features[2].accent}</span>
              <h3 className="text-heading mt-5 text-bone">{features[2].title}</h3>
              <p className="text-body mt-3 text-ash">{features[2].body}</p>
            </div>
            <div className="mt-6 h-px w-24 origin-left scale-x-50 bg-rule transition-[transform,background-color] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-hover:bg-lime" />
          </article>
        </div>
      </div>
    </section>
  );
}
