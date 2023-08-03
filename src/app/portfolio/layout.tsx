/** @format */

import Provider from "@/provider";
import SideBar from "@/components/sidebar";
import Tabs from "@/components/tabs";
import ScrollProvider from "@/scroll-provider";
import Navbar from "@/components/navbar";
import {
  openGraphImage,
  keywords,
  appleIcons,
  iconShortcut,
  archiveItems,
} from "../shared-metadata";

export const metadata = {
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
    images: [`/card-bg.png`],
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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL}`),
  alternates: {
    canonical: "/",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollProvider>
      <div className="relative container max-w-7xl mx-auto h-full px-[22px] md:px-[2rem] py-[2rem] scroll-py-9 sm:scroll-py-16 snap-y  ">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="mx-auto lg:ml-0 w-full hidden lg:flex lg:w-[350px] relative lg:fixed z-40 flex-col border-[#717070] px-6 py-7 rounded-xl border-[0.1px] drop-shadow-md shadow-lg ">
            <SideBar />
          </div>
          <main className="lg:ml-[300px] xl:ml-[300px] lg:max-w-2xl xl:max-w-3xl h-full w-full">
            <Provider>
              <div className="flex flex-col w-full ">
                <div className="flex flex-col ml-auto mr-[35px] sm:mr-[15px] md:mr-[35px] z-[1000]">
                  <Navbar />
                </div>
                <div className="hidden md:flex flex-col ml-auto mr-[20px] sm:mr-[15px] md:mr-[38px] z-50">
                  <div className="top-[280px] fixed z-50  border-[#717070] border-[0.1px] rounded-3xl drop-shadow-md shadow-lg">
                    <Tabs />
                  </div>
                </div>
                <div className="mt-0 md:mt-8">{children}</div>
              </div>
            </Provider>
          </main>
        </div>
      </div>
    </ScrollProvider>
  );
}
