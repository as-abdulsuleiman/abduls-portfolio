/** @format */

import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-0 xl:px-2rem w-full md:max-w-lg xl:max-w-xl pb-3">
      <div className="flex items-center">
        <Skeleton className="w-[200px] h-[43px]" />
        <Skeleton className="w-[100px] h-[43px] ml-auto" />
      </div>
      <Skeleton className="w-[100%] h-[22px] mt-[25px]" />
      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 sm:grid-cols-1 mt-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div key={index} className="aspect-[4/3] ">
                <Skeleton className="w-full h-full rounded-xl" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
