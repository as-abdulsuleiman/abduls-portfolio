/** @format */

"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="container h-screen max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center h-full w-full ">
        <div className="self-center text-center">
          <h1 className="text-2xl md:text-5xl text-[#D8D3CB]">
            Something went <span className="text-[#32DD89]">wrong</span>!
          </h1>
          <Button className="mt-5" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
