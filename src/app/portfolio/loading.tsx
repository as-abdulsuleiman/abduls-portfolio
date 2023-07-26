/** @format */

import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto sm:max-w-lg xl:max-w-x px-0 xl:px-2rem h-screen">
      <div className="">
        <div className="h-full flex flex-col">
          <div className="mb-[100px] md:mb-[160px]">
            <Skeleton className="h-7 w-[93px]" />
            <div className="mt-[40px]">
              <Skeleton className="h-[38px] w-full max-w-[260px]" />
            </div>
            <div className="text-3xl text-[#D8D3CB] text-center pt-[70px] flex items-center justify-center">
              <span className="text-[#32DD89]">Loading</span>{" "}
              <span className="animate-ping">....</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
