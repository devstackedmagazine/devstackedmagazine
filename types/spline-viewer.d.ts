import type { DetailedHTMLProps, HTMLAttributes } from "react";

type SplineViewerElement = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  url?: string;
  loading?: "auto" | "lazy" | "eager";
  "loading-anim-type"?:
    | "spinner-small-dark"
    | "spinner-small-light"
    | "spinner-big-dark"
    | "spinner-big-light";
  "events-target"?: "local" | "global";
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": SplineViewerElement;
    }
  }
}

export {};
