export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Forever Ago Wiki",
  shortName: "Forever Ago",
  logoText: "FA",
  tagline: "Complete Story Guides, Camera Mechanics & Walkthroughs",
  description: "Complete Forever Ago wiki with story guides, camera mechanics, chapter walkthroughs, characters, system requirements and release updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://foreverago.top",
  supportEmail: "support@foreverago.top",
  gameUrl: "https://store.steampowered.com/app/1215940/Forever_Ago/",
  heroVideoId: "xo21XiAPAKQ", // Forever Ago Launch Trailer
  social: {
    discord: "https://steamcommunity.com/app/1215940",
    youtube: "https://www.youtube.com/@AnnapurnaInteractive",
  },
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
};
