/** @format */

import { FC } from "react";
import Skeleton from "../skeleton";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <div className="min-h-[525px] relative md:min-h-[585px] h-full w-full container mx-auto px-0 xl:px-2rem sm:max-w-lg xl:max-w-xl pb-3 text-9xl">
      <div className="inset-0 h-full absolute flex flex-col w-full">
        <>
          <Skeleton className="h-9 w-[153px]" />
          <Skeleton className="h-[48px] mt-[30px] w-full max-w-[380px]" />
        </>
        <div className="text-xl md:text-4xl justify-center items-center text-center flex text-[#D8D3CB] h-full w-full mt-[20px]">
          <div className="self-center animate-pulse">
            <span className="text-[#32DD89]">Loading</span>
            <span className="ml-[2px]">....</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
