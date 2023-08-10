/** @format */

import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-0 xl:px-2rem w-full md:max-w-lg xl:max-w-xl pb-3">
      <div className="flex">
        <Skeleton className="w-[100px] h-[30px]" />
      </div>
      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 sm:grid-cols-1 mt-[30px]">
        <div className="aspect-video">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>
        <Skeleton className="w-[100px] h-[40px] mt-2" />
        <Skeleton className="w-full h-[28px] mt-2" />
      </div>
      <Skeleton className="w-[100px] h-[40px] mt-5 ml-auto" />
    </div>
  );
}
