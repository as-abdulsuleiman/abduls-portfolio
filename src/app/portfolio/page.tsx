/** @format */

import Portfolio from "@/components/portfolio";
import { Metadata } from "next";
import {
  openGraphImage,
  keywords,
  appleIcons,
  iconShortcut,
  archiveItems,
} from "../shared-metadata";

export const metadata: Metadata = {
  title: "Abdul Suleiman / Software Developer",
  description: "Software developer at pramie.tech",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    ...openGraphImage,
  },
  twitter: {
    card: "summary_large_image",
    site: "@Abdul__Suleiman",
    creator: "@Abdul__Suleiman",
    title: "Abdul's Portfolio",
    description: "Software developer at pramie.tech",
    images: [`${process.env.NEXT_PUBLIC_METADATABASE_URL}card-bg.png`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: [...iconShortcut],
    apple: [...appleIcons],
    other: {
      rel: "apple-icon-precomposed",
      url: "/favicon/apple-icon-precomposed.png",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  keywords: [...keywords],
  manifest: "/favicon/manifest.json",
  archives: [...archiveItems],
  category: "technology",
  // metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL}`),
  // alternates: {
  //   canonical: "/",
  // },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#262626" },
    { media: "(prefers-color-scheme: light)", color: "#262626" },
  ],
  applicationName: "Abdul's Portfolio",
  authors: [
    {
      name: "Abdul Suleiman",
      url: "https://www.linkedin.com/in/abdul-suleiman-9448021b7/",
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-0 xl:px-2rem sm:max-w-lg xl:max-w-xl pb-3 ">
      <Portfolio />
    </div>
  );
}
