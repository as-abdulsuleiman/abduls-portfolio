/** @format */

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container h-screen max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center h-full w-full ">
        <div className="self-center text-center">
          <h1 className="text-4xl md:text-6xl text-[#32DD89]">404</h1>
          <h2 className="text-3xl md:text-3xl text-[#D8D3CB]">
            Page not found!
          </h2>
          <p className="text-2xl md:text-3xl text-[#D8D3CB] py-2">{`The page you were looking for doesn't exist or was removed.`}</p>
          <Link
            className={cn("rounded-full  text-[#D8D3CB] mt-6 text-2xl")}
            href="/portfolio"
          >
            Return to <span className="text-[#32DD89]">home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
