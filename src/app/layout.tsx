/** @format */

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import {
  openGraphImage,
  keywords,
  appleIcons,
  iconShortcut,
  archiveItems,
} from "./shared-metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL}`),
  title: "Abdul Suleiman's Portfolio",
  description: "Software Developer",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: 1,
  },
  twitter: {
    card: "summary_large_image",
    site: "@Abdul__Suleiman",
    creator: "@Abdul__Suleiman",
    title: "Abdul Suleiman's Portfolio",
    description: "Software Developer",
    images: "/opengraph-image.png",
  },
  openGraph: {
    ...openGraphImage,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: [...iconShortcut],
    apple: [...appleIcons],
    other: [
      {
        rel: "apple-icon-precomposed",
        url: "/favicon/apple-icon-precomposed.png",
      },
    ],
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
  keywords: [...keywords],
  manifest: "/favicon/manifest.json",
  referrer: "origin-when-cross-origin",
  archives: [...archiveItems],
  category: "technology",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen antialiased scroll-smooth light scroll-py-9 sm:scroll-py-16 snap-start snap-y",
        inter.className
      )}
    >
      <body
        suppressHydrationWarning={true}
        className={`min-h-screen w-full antialiased overflow-x-hidden overflow-y-scroll bg-primary-black bg-gradient-to-tl from-primary-black via-zinc-400/5 to-zinc-900 m-0 p-0`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
