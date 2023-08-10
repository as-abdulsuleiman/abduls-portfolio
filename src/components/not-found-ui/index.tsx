/** @format */

"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface NotFoundProps {}

const NotFoundUi: FC<NotFoundProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="self-center text-center">
        <h1 className="text-4xl md:text-9xl text-[#32DD89]">404</h1>
        <div className={cn(`text-2xl md:text-4xl text-[#D8D3CB]`)}>
          This page could not be found.
        </div>
        <Button
          className={cn(
            "mt-4 w-[200px] bg-primary-black hover:bg-primary-black/80 hover:bg-gradient-to-tl hover:from-primary-black hover:via-zinc-400/5 ml-auto transition-opacity opacity-70 hover:opacity-100"
          )}
          onClick={() => router.push("/portfolio")}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundUi;
