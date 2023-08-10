/** @format */

"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface NotFoundProjectProps {
  path: string;
}

const NotFoundProject: FC<NotFoundProjectProps> = ({ path }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex ml-0">
        <Button
          className={cn(
            "bg-primary-black hover:bg-primary-black/80 hover:bg-gradient-to-tl hover:from-primary-black hover:via-zinc-400/5"
          )}
          onClick={() => router.push(path)}
          size="sm"
          variant="default"
        >
          Go Back
        </Button>
      </div>
      <div className="pt-[40px]">
        <h2 className="text-[#D8D3CB] text-lg lg:text-2xl font-medium">{`Sorry, this page is not available.`}</h2>
        <p className="text-[#D8D3CB] mt-1">
          The link you followed may be broken, or the page may have been
          removed.
        </p>
      </div>
    </>
  );
};

export default NotFoundProject;
