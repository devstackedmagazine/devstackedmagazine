import { absoluteUrl, siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Home | {siteConfig.name}</title>
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href={absoluteUrl("/")} />
    </>
  );
}
