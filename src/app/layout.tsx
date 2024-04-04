/** @format */

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  openGraphImage,
  keywords,
  appleIcons,
  iconShortcut,
  archiveItems,
} from "./shared-metadata";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
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
    images: "/twitter-image.png",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_WEBSITE_URL,
  },
  openGraph: {
    ...openGraphImage,
  },
  verification: {
    google: "Ywi2ejkvQoRCA4J4GJgijwSbZZHfAsyswY1-CE6bSj8",
    other: {
      me: ["a.s.abdulsuleiman@gmail.com"],
    },
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
      url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
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
        "snap-mandatory antialiased scroll-py-9 sm:scroll-py-16 snap-start snap-y min-h-screen bg-primary-black bg-gradient-to-bl from-primary-black via-primary-black/5 to-primary-black",
        inter?.className
      )}
    >
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen w-full antialiased overflow-x-hidden bg-primary-black bg-gradient-to-bl from-primary-black via-primary-black/5 to-primary-black ",
          inter?.className
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          {children}
          <SpeedInsights />
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
