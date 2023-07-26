/** @format */

import "@/styles/globals.css";
import "react-multi-carousel/lib/styles.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import {
  openGraphImage,
  keywords,
  appleIcons,
  iconShortcut,
  archivesItems,
} from "./shared-metadata";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Abdul Suleiman | Software Developer",
  description: "Abdul's Portfolio",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: 0,
  },
  icons: {
    icon: "/static/favicon/favicon-96x96.png",
    shortcut: [...iconShortcut],
    apple: [...appleIcons],
    other: {
      rel: "apple-icon-precomposed",
      url: "/static/favicon/apple-icon-precomposed.png",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  keywords: [...keywords],
  abstract: "Abdul's Portfolio",
  manifest: "/static/favicon/manifest.json",
  archives: [...archivesItems],
  category: "technology",
  metadataBase: new URL("https://abdul-portfolio-psi.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#262626" },
    { media: "(prefers-color-scheme: light)", color: "#262626" },
  ],
  publisher: "Abdul Suleiman",
  creator: "Abdul Suleiman",
  generator: "Abdul Suleiman",
  applicationName: "Abdul Suleiman",
  authors: [
    {
      name: "Abdul Suleiman",
      url: "https://www.linkedin.com/in/abdul-suleiman-9448021b7/",
    },
  ],
  twitter: {
    card: "summary_large_image",
    site: "@Abdul__Suleiman",
    creator: "@Abdul__Suleiman",
    description: "Abdul's Portfolio",
    title: "Abdul Suleiman",
    images: ["/static/icons/portfolio-bg.png"],
  },
  openGraph: {
    ...openGraphImage,
  },
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
        "min-h-screen antialiased scroll-py-9 sm:scroll-py-16 snap-y",
        inter.className
      )}
    >
      <body
        suppressHydrationWarning={true}
        className="min-h-screen antialiased w-full overflow-x-hidden overflow-y-scroll bg-primary-black"
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
