type SiteConfig = {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  logo?: string;
  header: {
    links: { href: string; text: string }[];
  };
  footer: {
    showRSS: boolean;
  };
  ogImage: string;
  locale: string;
  twitter: {
    site: string;
  };
  googleSiteVerificationId?: string;
  umamiWebsiteId?: string;
};

// Main site configuration, this will be used as the default metadata for the site
export const SITE: SiteConfig = {
  title: "Astro Project",
  description: "Astro Project",
  author: "Astro",
  siteUrl: "https://astro.build",
  logo: "/src/assets/images/logo.png", // Path to logo image
  header: {
    links: [
      { href: "/blog/", text: "Blog" },
      { href: "/about/", text: "About" },
    ],
  },
  footer: {
    showRSS: true,
  },
  ogImage: "/src/assets/images/og-image.png", // Needs to be an absolute path /src/...
  locale: "es",
  twitter: {
    site: "@astrobuild",
  },
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/astrobuild",
    target: "_blank",
    // rel: 'noopener',
    icon: "tabler:brand-github",
  },
  {
    name: "X",
    url: "https://x.com/astrobuild",
    target: "_blank",
    // rel: 'noopener',
    icon: "tabler:brand-x",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/astrobuild",
    target: "_blank",
    // rel: 'noopener',
    icon: "tabler:brand-linkedin",
  },
];
