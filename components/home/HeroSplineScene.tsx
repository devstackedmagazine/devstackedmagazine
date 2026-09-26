"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroImage from "@/public/images/home/hero-img-robot.svg";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/xMmgyhpgvsY5F42K/scene.splinecode";

// Self-hosted copy of @splinetool/viewer (public/spline-viewer/), not a
// third-party CDN — a hero element shouldn't depend on someone else's
// uptime.
const VIEWER_SCRIPT_SRC = "/spline-viewer/spline-viewer.js";

let viewerScriptPromise: Promise<void> | null = null;

function loadViewerScript(): Promise<void> {
  if (customElements.get("spline-viewer")) return Promise.resolve();
  if (viewerScriptPromise) return viewerScriptPromise;

  viewerScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = VIEWER_SCRIPT_SRC;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error(`Failed to load ${VIEWER_SCRIPT_SRC}`));
    document.head.appendChild(script);
  });

  return viewerScriptPromise;
}

export default function HeroSplineScene() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const viewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mqList = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mqList.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mqList.addEventListener("change", onChange);
    return () => mqList.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let cancelled = false;
    let attachedEl: HTMLElement | null = null;
    const handleLoadComplete = () => setSceneLoaded(true);

    loadViewerScript()
      .then(() => {
        if (cancelled) return;
        const el = viewerRef.current;
        if (!el) return;
        attachedEl = el;
        el.addEventListener("load-complete", handleLoadComplete);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      cancelled = true;
      attachedEl?.removeEventListener("load-complete", handleLoadComplete);
    };
  }, [isDesktop]);

  const showScene = isDesktop && sceneLoaded;

  return (
    <div className="hero-image relative aspect-square w-full will-change-transform">
      <Image
        src={HeroImage}
        alt="Illustrated DevStacked robot mascot inside a circular technical frame, tagged UNIT_01 // ACTIVE"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 40vw"
        className={`object-contain transition-opacity duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showScene ? "opacity-0" : "opacity-100"
        }`}
      />

      {isDesktop && (
        <div
          className={`absolute inset-0 transition-opacity duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            sceneLoaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={!sceneLoaded}
        >
          <spline-viewer
            ref={viewerRef}
            url={SPLINE_SCENE_URL}
            loading="eager"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}

      <Button
        href="/contact"
        className="absolute bottom-[12%] left-1/2 z-10 -translate-x-1/2"
      >
        Get in touch
      </Button>
    </div>
  );
}
