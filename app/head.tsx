import { absoluteUrl, siteConfig } from "@/lib/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/logos/favicon.png"),
    email: siteConfig.email,
    description: siteConfig.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  },
];

export default function Head() {
  return (
    <>
      <title>{siteConfig.name} | Tech Content & Web Services</title>
      <meta name="description" content={siteConfig.description} />
      <meta
        name="keywords"
        content="tech content, web services, websites, tech articles, tech news, web development"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteConfig.url} />
      <link rel="icon" href="/logos/favicon.png" />
      <link rel="apple-touch-icon" href="/logos/favicon.png" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={`${siteConfig.name} | Tech Content & Web Services`} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:image" content={absoluteUrl(siteConfig.ogImage)} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${siteConfig.name} | Tech Content & Web Services`}
      />
      <meta name="twitter:description" content={siteConfig.description} />
      <meta name="twitter:image" content={absoluteUrl(siteConfig.ogImage)} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
