export const siteConfig = {
  name: "DevStacked Magazine",
  shortName: "DevStacked",
  url: "https://devstackedmagazine.com",
  description:
    "DevStacked Magazine designs and develops fast, modern websites for brands, founders, and growing businesses, while publishing practical tech insights from real build work.",
  ogImage: "/images/home/quickit.png",
  email: "devstackedmagazine@gmail.com",
};

export const defaultKeywords = [
  "web design agency",
  "web development studio",
  "business website development",
  "landing page design",
  "frontend development",
  "technical seo",
  "tech magazine",
  "digital product design",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
