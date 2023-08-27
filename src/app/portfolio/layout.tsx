/** @format */

import Provider from "@/provider";
import SideBar from "@/components/sidebar";
import ScrollProvider from "@/scroll-provider";
import Wrapper from "@/components/wrapper";

export default function PortfolioLayout({
  children,
  projectModal,
}: {
  children: React.ReactNode;
  projectModal: React.ReactNode;
}) {
  return (
    <ScrollProvider>
      <Provider>
        <div className="py-[2rem] container h-full px-[16px] md:px-[2rem] max-w-6xl mx-auto ">
          {projectModal}
          <div className="flex flex-col w-full lg:flex-row">
            <div className="mx-auto lg:ml-0 w-full hidden lg:flex lg:w-[350px] relative lg:fixed z-40 flex-col border-[#717070] border-[0.1px] px-6 py-7 rounded-xl drop-shadow-md shadow-lg">
              <SideBar />
            </div>
            <div className="ml-0 lg:ml-[300px] w-full h-full">
              <Wrapper />
              <div className="mt-0 sm:mt-8">{children}</div>
            </div>
          </div>
        </div>
      </Provider>
    </ScrollProvider>
  );
}
