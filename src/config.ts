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
  title: "Sara Carvia",
  description: "PNI y especialista en salud digestiva.",
  author: "Sara Carvia",
  siteUrl: "https://saracarvia.com",
  logo: "/src/assets/images/logo.png", // Path to logo image
  header: {
    links: [
      { href: "/#servicios", text: "Servicios" },
      { href: "/#guia-sibo", text: "Guía SIBO" },
      { href: "/#transformaciones", text: "Transformaciones" },
    ],
  },
  footer: {
    showRSS: true,
  },
  ogImage: "/src/assets/images/og-image.png", // Needs to be an absolute path /src/...
  locale: "es",
  twitter: {
    site: "@saracarvia",
  },
  umamiWebsiteId: "03279959-6edd-46e7-8b05-3b007229fb5d",
};

export const socialLinks = [
  {
    name: "YouTube",
    url: "https://youtube.com/@saracarvia",
    target: "_blank",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/saracarvia",
    target: "_blank",
  },
  {
    name: "WhatsApp",
    url: "https://wa.link/tfqerf", // Replace with your WhatsApp number
    target: "_blank",
  },
];
