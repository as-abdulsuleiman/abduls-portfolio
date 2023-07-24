/** @format */

import "@/styles/globals.css";
import "react-multi-carousel/lib/styles.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Provider from "@/provider";
import SideBar from "@/components/sidebar";
import Tabs from "@/components/tabs";
import ScrollProvider from "@/scroll-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
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
  description: "Abdul's portfolio",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  keywords: [...keywords],
  abstract: "Abdul's portfolio",
  manifest: "/static/favicon/manifest.json",
  archives: [...archivesItems],
  category: "technology",
  metadataBase: new URL("https://acme.com"),
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
    description: "Abdul's portfolio",
    title: "Abdul Suleiman | Software Developer",
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
        "min-h-screen antialiased scroll-py-9 lg:scroll-py-16 snap-y",
        inter.className
      )}
    >
      <body
        suppressHydrationWarning={true}
        className="min-h-screen antialiased w-full overflow-x-hidden overflow-y-scroll bg-primary-black"
      >
        <ScrollProvider>
          <div className="relative container max-w-7xl mx-auto h-full px-[22px] md:px-[2rem] py-[2rem]">
            <div className="flex flex-col w-full lg:flex-row">
              <div className="mx-auto lg:ml-0 w-full hidden lg:flex lg:w-[350px] relative lg:fixed z-40 flex-col border-[#717070] px-6 py-7 rounded-xl border-[0.1px] drop-shadow-md shadow-lg">
                <SideBar />
              </div>
              <main className="lg:ml-[350px] xl:ml-[300px] lg:max-w-2xl xl:max-w-3xl h-full w-full ">
                <Provider>
                  <div className="flex flex-col w-full ">
                    <div className="flex flex-col ml-auto mr-[35px] sm:mr-[15px] md:mr-[35px] z-[1000]">
                      <Navbar />
                    </div>
                    <div className="hidden md:flex flex-col ml-auto mr-[20px] sm:mr-[15px] md:mr-[38px] z-50">
                      <div className="top-[280px] fixed z-50 bg-[#262626] md:bg-transparent border-[#717070] border-[0.1px] rounded-3xl drop-shadow-md shadow-lg">
                        <Tabs />
                      </div>
                    </div>
                    <div className="pt-8">{children}</div>
                  </div>
                </Provider>
              </main>
            </div>
          </div>
        </ScrollProvider>
        <Toaster />
      </body>
    </html>
  );
}
