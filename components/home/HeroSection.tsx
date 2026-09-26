"use client";

import { useRef } from "react";
import { gsap, mq } from "@/lib/gsap-presets";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/Button";
import HeroSplineScene from "@/components/home/HeroSplineScene";

export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (mq.isReduced()) return;

      const tl = gsap.timeline({ defaults: { ease: "design" } });
      tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.34, delay: 0.1 })
        .from(".hero-line > span", {
          yPercent: 110,
          opacity: 0,
          duration: 0.34,
          stagger: 0.06,
        }, "-=0.2")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.34 }, "-=0.2")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.34, stagger: 0.06 }, "-=0.2")
        .from(".hero-meta > *", { y: 12, opacity: 0, duration: 0.34, stagger: 0.06 }, "-=0.2")
        .from(".hero-image", { y: 24, opacity: 0, duration: 0.34 }, "-=0.2");

      gsap.to(".hero-image", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-title-shift", {
        xPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative min-h-[100dvh] overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-4 pt-12 pb-24 sm:px-6 lg:pt-20 lg:pb-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <div className="hero-eyebrow flex items-center gap-3">
              <p className="label-mark">DEVSTACKED</p>
              <span className="flex items-center gap-2 text-label text-ash">
                <span aria-hidden className="status-dot h-1.5 w-1.5 rounded-full bg-lime" />
                Available for new projects
              </span>
            </div>

            <h1 className="hero-title-shift text-display-xl mt-8 text-bone">
              <span className="hero-line block overflow-hidden">
                <span className="inline-block">Websites That Work</span>
              </span>
              <span className="hero-line block overflow-hidden">
                <span className="inline-block text-bone/90">
                  as Hard as <span className="text-lime">You Do</span>
                </span>
              </span>
            </h1>

            <p className="hero-sub text-body mt-8 max-w-[65ch] text-ash">
              We build fast, modern, and SEO-optimized websites that help your
              business get found — by search engines and AI alike.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/project" className="hero-cta">
                Start a project
              </Button>
              <Button href="/services" variant="secondary" className="hero-cta">
                See our work
                <svg
                  aria-hidden
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Button>
            </div>

            <div className="hero-meta mt-16 grid max-w-md grid-cols-2 gap-6 border-t border-rule pt-6 sm:grid-cols-4">
              <div>
                <p className="text-hero-stat text-bone">20+</p>
                <p className="text-small mt-1 text-ash">Projects Goal for Year One</p>
              </div>
              <div>
                <p className="text-hero-stat text-bone">98<span className="text-lime">%</span></p>
                <p className="text-small mt-1 text-ash">Client Satisfaction Target</p>
              </div>
              <div>
                <p className="text-hero-stat text-bone">10+</p>
                <p className="text-small mt-1 text-ash">Technologies We Work With</p>
              </div>
              <div>
                <p className="text-hero-stat text-bone">24<span className="text-ash">/7</span></p>
                <p className="text-small mt-1 text-ash">Support Available</p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <HeroSplineScene />
          </div>
        </div>
      </div>  
      </section>
    );
  } 
    