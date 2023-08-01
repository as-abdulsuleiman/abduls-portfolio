/** @format */

import Provider from "@/provider";
import SideBar from "@/components/sidebar";
import Tabs from "@/components/tabs";
import ScrollProvider from "@/scroll-provider";
import Navbar from "@/components/navbar";

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
                  <div className="top-[280px] fixed z-50 bg-primary-black bg-gradient-to-tl from-primary-black via-zinc-400/5 to-zinc-900 border-[#717070] border-[0.1px] rounded-3xl drop-shadow-md shadow-lg">
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
